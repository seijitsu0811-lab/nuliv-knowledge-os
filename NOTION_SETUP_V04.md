# NuLiv Knowledge OS v0.4 Notion Setup

This document defines the Notion database fields required for NuLiv Knowledge OS.
The public site already supports these fields. Add the same fields to Notion so
future syncs can carry complete review-ready knowledge.

## Main Knowledge Database

Database name:

`NuLiv Knowledge OS｜知識庫`

Recommended Notion database URL:

`https://app.notion.com/p/4d6710708c984ac588482c61523a955d`

## Required Properties

| Property | Type | Required | Notes |
| --- | --- | --- | --- |
| 名稱 | Title | Yes | Short searchable title |
| 主分類 | Select | Yes | Must match site category labels |
| 子分類 | Select or Text | Yes | More precise grouping |
| 內容狀態 | Select | Yes | Draft/review/approved status |
| 學習優先順序 | Select | Yes | Training priority |
| 一句話介紹 | Text | Yes | One-sentence summary |
| 核心概念 | Text | Yes | Reasoning, principle, mechanism |
| 第一線應用 | Text | Yes | How staff can use it |
| SOP | Text | Optional | Required if process-related |
| 注意事項 | Text | Yes | Safety, wording, overclaim boundaries |
| 關聯知識 | Text | Optional | Related knowledge items |
| 適用對象 | Text | Yes | Who this knowledge applies to |
| 不適用/風險 | Text | Yes | Who should avoid it or needs review |
| 個案歷程 | Text | Required for case records | From first contact to follow-up |
| 互動方式 | Text | Required for case records | How trust and partnership were built |
| 使用方法 | Text | Required for case records | What NuLiv actually did |
| 介入方法 | Text | Optional | Alternative name for 使用方法 |
| 支持系統 | Text | Required for case records | Patient, family, hospital, NuLiv team |
| 改善結果 | Text | Required for case records | Before/after, subjective and objective |
| 追蹤計畫 | Text | Required for case records | Next loop and monitoring plan |
| 學習重點 | Text | Required for case records | What can become SOP, training, or sales material |
| 證據等級 | Select | Yes | Evidence classification |
| 喜悅核心符合度 | Select | Yes | Human-centered fit |
| 可用場景 | Multi-select | Yes | Where this item can be used |
| 最後整理來源 | Text | Yes | Meeting, case, boss note, paper, etc. |
| 最後更新 | Date | Optional | Used for review rhythm |

## 主分類 Options

Use exactly these labels so the website can classify records correctly:

- 喜悅核心理念
- 個案歷程
- 櫃台與門診
- 檢測服務
- 核心儀器與設備
- 療程服務與項目
- 人才培育
- 喜悅系統

## 內容狀態 Options

- 未開始
- 草稿
- 待審核
- 完成
- 需更新
- 暫停使用

## 學習優先順序 Options

- 高：必學
- 中：第二順位
- 低：備查
- 待判定

## 證據等級 Options

- 醫學文獻
- 內部案例
- 核心團隊觀點
- 內部觀察
- 待驗證

## 喜悅核心符合度 Options

- 符合
- 需修正
- 不符合
- 未判定

## 可用場景 Options

- 教育訓練
- 個管師
- 醫師/專科護理師
- 櫃台
- 業務
- 衛教
- 個案分析
- SOP
- AI問答
- 待補

## Review Rules

### Can Be Used Directly

Use directly in training or internal answers only when:

- `內容狀態` is `完成`
- `喜悅核心符合度` is `符合`
- `證據等級` is not empty
- `注意事項` is filled
- `最後整理來源` is filled

### Can Be Searched But Not Treated As Final

Keep searchable but do not treat as final answer when:

- `證據等級` is `內部觀察` or `待驗證`
- `喜悅核心符合度` is `未判定`
- `內容狀態` is `草稿` or `待審核`

### Should Not Be Used

Do not use in AI answer generation when:

- `喜悅核心符合度` is `不符合`
- `內容狀態` is `暫停使用`
- `不適用/風險` is missing for clinical or therapy content

## Suggested Views

Create these Notion views:

- `全部知識`
- `待審核`
- `可給 AI 使用`
- `缺來源`
- `喜悅核心理念`
- `個案與個管`
- `檢測 / 儀器 / 療程`
- `新人訓練`
- `業務與衛教`

## Sync Reminder

After Notion fields are updated, run GitHub Actions:

`Sync Notion Knowledge Base`

The workflow will regenerate `sync-data.js`, then GitHub Pages will update the
public site.
