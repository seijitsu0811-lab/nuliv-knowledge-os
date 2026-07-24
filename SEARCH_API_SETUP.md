# Knowledge Search API：test/staging 設定

這個 API 是給喜悅大管家讀取**已核准、未過期**知識的唯一入口；網站畫面與 Notion 同步文字不是 API 的信任依據。

## 需要在 Notion 知識資料庫新增的欄位

| 欄位 | 類型 | API 接受值 |
|---|---|---|
| 審核狀態 | Select | `approved` |
| 審核角色 | Select/Text | 例如 `physician` |
| 審核日期 | Date | ISO 日期 |
| 有效期限 | Date | 未過期日期；可留空但不建議用於醫療內容 |
| 來源網址 | URL | 可追溯來源 |
| 證據等級 | Select/Text | 例如 `guideline`、`sop` |

`完成` 不等於 `approved`。沒有上述欄位的知識不會出現在 API。

## Railway test/staging variables

在 **Knowledge OS** 設定 `KNOWLEDGE_API_TOKEN`；在 **JoyHub / 喜悅大管家** 設定：

```text
KNOWLEDGE_SEARCH_URL=https://knowledge-web-test.up.railway.app/v1/knowledge/search
KNOWLEDGE_SEARCH_TOKEN=<與 Knowledge OS 相同的 secret>
```

兩者都只放 Railway Variables，不能放 Git、Notion 頁面、前端 JavaScript 或聊天。

## 驗收

1. 同步 Notion 後產生 `knowledge-index.json`。
2. 未帶 Bearer token 呼叫 search 回 `401`。
3. 帶 token 查 `BiPAP` 只回傳 `approved`、未過期且可引用的條目。
4. JoyHub 問「什麼是 BiPAP？」顯示摘要、來源、證據等級與審核資料；查不到時明確拒答。
