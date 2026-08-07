import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createStaticServer } from "../server.mjs";

let server;
let baseUrl;

before(async () => {
  server = createStaticServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise((resolve) => server.close(resolve)));

test("health endpoint is available for Railway", async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});

test("serves the Traditional Chinese knowledge site and static assets", async () => {
  const page = await fetch(`${baseUrl}/`);
  assert.equal(page.status, 200);
  assert.match(page.headers.get("content-type") ?? "", /^text\/html; charset=utf-8$/);
  assert.match(await page.text(), /NuLiv Knowledge OS/);

  const stylesheet = await fetch(`${baseUrl}/styles.css`);
  assert.equal(stylesheet.status, 200);
  assert.match(stylesheet.headers.get("content-type") ?? "", /^text\/css; charset=utf-8$/);

  const data = await fetch(`${baseUrl}/sync-data.js`);
  assert.equal(data.status, 200);
  assert.match(data.headers.get("content-type") ?? "", /^text\/javascript; charset=utf-8$/);
});

test("rejects unsupported methods and missing files", async () => {
  const write = await fetch(`${baseUrl}/`, { method: "POST" });
  assert.equal(write.status, 405);

  const missing = await fetch(`${baseUrl}/does-not-exist.txt`);
  assert.equal(missing.status, 404);
});
