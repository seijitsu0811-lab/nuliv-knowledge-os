import { createServer } from "node:http";
import { timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname);
const port = Number(process.env.PORT || 3000);
const apiToken = process.env.KNOWLEDGE_API_TOKEN || "";
const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
]);

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { status: "ok", service: "knowledge-web" });
    if (req.method === "POST" && url.pathname === "/v1/knowledge/search") return searchKnowledge(req, res);
    if (req.method !== "GET" && req.method !== "HEAD") return json(res, 405, { error: "METHOD_NOT_ALLOWED" });
    return serveStatic(url.pathname, req.method === "HEAD", res);
  } catch (error) {
    return json(res, 500, { error: "KNOWLEDGE_SERVICE_ERROR" });
  }
});

async function searchKnowledge(req, res) {
  if (!apiToken) return json(res, 503, { error: "KNOWLEDGE_SEARCH_NOT_CONFIGURED" });
  if (!isAuthorized(req.headers.authorization || "")) return json(res, 401, { error: "UNAUTHORIZED" });
  const body = await readJson(req);
  if (typeof body.query !== "string" || !body.query.trim()) return json(res, 400, { error: "QUERY_REQUIRED" });
  const limit = Math.min(Math.max(Number(body.limit) || 3, 1), 5);
  const items = await loadApprovedItems();
  const terms = searchTerms(body.query);
  const ranked = items
    .map((item) => ({ item, score: score(item, terms) }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score || left.item.name.localeCompare(right.item.name, "zh-Hant"))
    .slice(0, limit)
    .map(({ item }) => publicItem(item));
  return json(res, 200, { source: "knowledge", items: ranked });
}

async function loadApprovedItems() {
  const raw = JSON.parse(await readFile(join(root, "knowledge-index.json"), "utf8"));
  const now = Date.now();
  return raw.filter((item) => item?.approvalStatus === "approved"
    && item.sourceUrl && item.reviewerRole && item.reviewedAt && item.evidenceLevel
    && (!item.expiresAt || new Date(item.expiresAt).getTime() > now));
}

function publicItem(item) {
  return {
    id: item.id,
    title: item.name,
    summary: item.intro || item.mechanism || item.sop || "",
    sourceUrl: item.sourceUrl,
    evidenceLevel: item.evidenceLevel,
    approvalStatus: item.approvalStatus,
    reviewerRole: item.reviewerRole,
    reviewedAt: item.reviewedAt,
    expiresAt: item.expiresAt || null,
  };
}

function searchTerms(query) {
  const ignored = new Set(["什麼", "是", "何謂", "介紹", "說明", "解釋", "用途", "原理", "的", "嗎", "what", "is", "define", "explain"]);
  return String(query).toLowerCase().match(/[a-z0-9][a-z0-9-]*|[\u4e00-\u9fff]{2,}/g)?.filter((term) => !ignored.has(term)) || [];
}

function score(item, terms) {
  const haystack = [item.name, item.category, item.intro, item.mechanism, item.script, item.sop, item.caution, item.relation].filter(Boolean).join(" ").toLowerCase();
  return terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
}

function isAuthorized(header) {
  const candidate = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!candidate) return false;
  const left = Buffer.from(candidate);
  const right = Buffer.from(apiToken);
  return left.length === right.length && timingSafeEqual(left, right);
}

async function serveStatic(pathname, headOnly, res) {
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const file = resolve(root, normalize(requested));
  if (!file.startsWith(`${root}${sep}`) && file !== root) return json(res, 404, { error: "NOT_FOUND" });
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": contentTypes.get(extname(file)) || "application/octet-stream", "x-content-type-options": "nosniff", "cache-control": "no-cache" });
    return res.end(headOnly ? undefined : body);
  } catch {
    return json(res, 404, { error: "NOT_FOUND" });
  }
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")); } catch (error) { reject(error); }
    });
    req.on("error", reject);
  });
}

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" });
  res.end(JSON.stringify(body));
}

server.listen(port, () => console.log(JSON.stringify({ event: "knowledge_server_started", port })));
