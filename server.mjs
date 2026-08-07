import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const defaultRoot = fileURLToPath(new URL(".", import.meta.url));
const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

export function createStaticServer({ root = defaultRoot } = {}) {
  const staticRoot = resolve(root);

  return createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://localhost");
      if (url.pathname === "/health") {
        return send(response, 200, "application/json; charset=utf-8", JSON.stringify({ status: "ok" }));
      }
      if (!["GET", "HEAD"].includes(request.method ?? "GET")) {
        response.setHeader("allow", "GET, HEAD");
        return send(response, 405, "text/plain; charset=utf-8", "Method Not Allowed");
      }

      const decodedPath = decodeURIComponent(url.pathname);
      const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
      const filePath = resolve(staticRoot, relativePath);
      if (filePath !== staticRoot && !filePath.startsWith(`${staticRoot}${sep}`)) {
        return send(response, 400, "text/plain; charset=utf-8", "Invalid path");
      }

      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) {
        return send(response, 404, "text/plain; charset=utf-8", "Not Found");
      }

      response.writeHead(200, {
        "cache-control": extname(filePath) === ".html" ? "no-cache" : "public, max-age=300",
        "content-length": fileStat.size,
        "content-type": contentTypes.get(extname(filePath).toLowerCase()) ?? "application/octet-stream",
        "x-content-type-options": "nosniff",
      });
      if (request.method === "HEAD") return response.end();
      createReadStream(filePath).pipe(response);
    } catch (error) {
      if (error?.code === "ENOENT" || error?.code === "ENOTDIR") {
        return send(response, 404, "text/plain; charset=utf-8", "Not Found");
      }
      if (error instanceof URIError) {
        return send(response, 400, "text/plain; charset=utf-8", "Invalid path");
      }
      console.error("Static server error", error);
      return send(response, 500, "text/plain; charset=utf-8", "Internal Server Error");
    }
  });
}
function send(response, status, contentType, body) {
  response.writeHead(status, {
    "cache-control": "no-store",
    "content-type": contentType,
    "x-content-type-options": "nosniff",
  });
  response.end(body);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 3000);
  createStaticServer().listen(port, "0.0.0.0", () => {
    console.log(`NuLiv Knowledge OS listening on port ${port}`);
  });
}
