import fs from "node:fs";

const notionToken = process.env.NOTION_TOKEN;
const knowledgeDatabaseId = process.env.NOTION_DATABASE_ID || "4d6710708c984ac588482c61523a955d";
const faqDatabaseId = process.env.NOTION_FAQ_DATABASE_ID || "ecf074541a9d4088b59b94dfde056fdd";

if (!notionToken) {
  throw new Error("Missing NOTION_TOKEN. Add it as a GitHub Actions repository secret.");
}

const K = {
  name: "\u540d\u7a31",
  moduleTitle: "\u4e3b\u5206\u985e",
  category: "\u5b50\u5206\u985e",
  status: "\u5167\u5bb9\u72c0\u614b",
  priority: "\u5b78\u7fd2\u512a\u5148\u9806\u5e8f",
  intro: "\u4e00\u53e5\u8a71\u4ecb\u7d39",
  mechanism: "\u6838\u5fc3\u6982\u5ff5",
  script: "\u7b2c\u4e00\u7dda\u61c9\u7528",
  sop: "SOP",
  caution: "\u6ce8\u610f\u4e8b\u9805",
  relation: "\u95dc\u806f\u77e5\u8b58",
  source: "\u6700\u5f8c\u6574\u7406\u4f86\u6e90",
  updatedAt: "\u6700\u5f8c\u66f4\u65b0"
};

const F = {
  question: "\u554f\u984c",
  order: "\u986f\u793a\u9806\u5e8f",
  moduleTitle: "\u5c0d\u61c9\u5206\u985e",
  answer: "\u56de\u7b54",
  source: "\u7b54\u6848\u4f9d\u64da",
  status: "\u5167\u5bb9\u72c0\u614b",
  visible: "\u662f\u5426\u986f\u793a",
  updatedAt: "\u6700\u5f8c\u66f4\u65b0"
};

function plainText(items = []) {
  return items.map((item) => item.plain_text || item.text?.content || "").join("").trim();
}

function readText(property) {
  if (!property) return "";
  if (property.type === "title") return plainText(property.title);
  if (property.type === "rich_text") return plainText(property.rich_text);
  if (property.type === "select") return property.select?.name || "";
  if (property.type === "date") return property.date?.start || "";
  if (property.type === "number") return property.number ?? "";
  if (property.type === "checkbox") return property.checkbox;
  return "";
}

function toRecord(page) {
  const props = page.properties || {};
  return {
    id: page.id,
    name: readText(props[K.name]),
    moduleTitle: readText(props[K.moduleTitle]),
    category: readText(props[K.category]),
    status: readText(props[K.status]),
    priority: readText(props[K.priority]),
    intro: readText(props[K.intro]),
    mechanism: readText(props[K.mechanism]),
    script: readText(props[K.script]),
    sop: readText(props[K.sop]),
    caution: readText(props[K.caution]),
    relation: readText(props[K.relation]),
    source: readText(props[K.source]),
    updatedAt: readText(props[K.updatedAt]),
    notionUrl: page.url
  };
}

function toFaq(page) {
  const props = page.properties || {};
  return {
    id: page.id,
    question: readText(props[F.question]),
    order: Number(readText(props[F.order]) || 999),
    moduleTitle: readText(props[F.moduleTitle]),
    answer: readText(props[F.answer]),
    source: readText(props[F.source]),
    status: readText(props[F.status]),
    visible: readText(props[F.visible]) !== false,
    updatedAt: readText(props[F.updatedAt]),
    notionUrl: page.url
  };
}

async function notionQuery(databaseId, sorts = []) {
  const pages = [];
  let cursor;

  do {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify({
        page_size: 100,
        start_cursor: cursor,
        sorts
      })
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Notion query failed for ${databaseId}: ${response.status} ${body}`);
    }

    const result = await response.json();
    pages.push(...result.results);
    cursor = result.has_more ? result.next_cursor : undefined;
  } while (cursor);

  return pages;
}

const knowledgePages = await notionQuery(knowledgeDatabaseId);
const faqPages = await notionQuery(faqDatabaseId, [{ property: F.order, direction: "ascending" }]);

const records = knowledgePages.map(toRecord).filter((record) => record.name && record.moduleTitle);
const faqs = faqPages.map(toFaq).filter((faq) => faq.question && faq.visible !== false);
const syncedAt = new Date().toLocaleString("zh-TW", {
  timeZone: "Asia/Taipei",
  hour12: false
});

const output = `window.NULIV_SYNCED_AT = ${JSON.stringify(syncedAt)};\n` +
  `window.NULIV_SYNC_SOURCE = ${JSON.stringify("Notion database")};\n` +
  `window.NULIV_SYNC_RECORDS = ${JSON.stringify(records, null, 2)};\n` +
  `window.NULIV_SYNC_FAQS = ${JSON.stringify(faqs, null, 2)};\n`;

fs.writeFileSync("sync-data.js", output, "utf8");
console.log(`Synced ${records.length} records and ${faqs.length} FAQs from Notion.`);
