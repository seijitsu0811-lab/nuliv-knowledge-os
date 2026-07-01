import fs from "node:fs";

const notionToken = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID || "4d6710708c984ac588482c61523a955d";

if (!notionToken) {
  throw new Error("Missing NOTION_TOKEN. Add it as a GitHub Actions repository secret.");
}

function plainText(items = []) {
  return items.map((item) => item.plain_text || item.text?.content || "").join("").trim();
}

function readText(property) {
  if (!property) return "";
  if (property.type === "title") return plainText(property.title);
  if (property.type === "rich_text") return plainText(property.rich_text);
  if (property.type === "select") return property.select?.name || "";
  if (property.type === "date") return property.date?.start || "";
  return "";
}

function toRecord(page) {
  const props = page.properties || {};
  return {
    id: page.id,
    name: readText(props["名稱"]),
    moduleTitle: readText(props["主分類"]),
    category: readText(props["子分類"]),
    status: readText(props["內容狀態"]),
    priority: readText(props["學習優先順序"]),
    intro: readText(props["一句話介紹"]),
    mechanism: readText(props["核心概念"]),
    script: readText(props["第一線應用"]),
    sop: readText(props["SOP"]),
    caution: readText(props["注意事項"]),
    relation: readText(props["關聯知識"]),
    source: readText(props["最後整理來源"]),
    updatedAt: readText(props["最後更新"]),
    notionUrl: page.url
  };
}

async function notionQuery(startCursor) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify({
      page_size: 100,
      start_cursor: startCursor,
      sorts: [{ property: "主分類", direction: "ascending" }]
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Notion query failed: ${response.status} ${body}`);
  }

  return response.json();
}

const pages = [];
let cursor;

do {
  const result = await notionQuery(cursor);
  pages.push(...result.results);
  cursor = result.has_more ? result.next_cursor : undefined;
} while (cursor);

const records = pages.map(toRecord).filter((record) => record.name && record.moduleTitle);
const syncedAt = new Date().toLocaleString("zh-TW", {
  timeZone: "Asia/Taipei",
  hour12: false
});

const output = `window.NULIV_SYNCED_AT = ${JSON.stringify(syncedAt)};\n` +
  `window.NULIV_SYNC_SOURCE = ${JSON.stringify("Notion database")};\n` +
  `window.NULIV_SYNC_RECORDS = ${JSON.stringify(records, null, 2)};\n`;

fs.writeFileSync("sync-data.js", output, "utf8");
console.log(`Synced ${records.length} records from Notion.`);
