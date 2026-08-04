# NuLiv Knowledge OS v0.3 Knowledge Schema

This schema defines how every knowledge item should be stored before it is used
for training, internal answers, client communication, or future AI/RAG retrieval.

## Core Principle

Every item must be checked against NuLiv's human-centered principle:

> 喜悅真正關注的是人，而非只是病理。

Knowledge should help the team understand the person, build trust, support the
medical path, and improve the closed-loop care process.

## Required Fields

| Field | Purpose | Example |
| --- | --- | --- |
| 名稱 | Short, searchable knowledge title | 熱療艙 |
| 主分類 | Main knowledge domain | 核心儀器與設備 |
| 子分類 | More specific category | 恢復設備 |
| 內容狀態 | Draft/review/approved state | 完成 |
| 學習優先順序 | Training priority | 高：必學 |
| 一句話介紹 | One-sentence purpose | 透過可控溫熱促進循環與肌肉放鬆。 |
| 核心概念 | Mechanism or reasoning | 溫熱刺激提高局部組織溫度... |
| 第一線應用 | Staff-facing usage | 熱療不是單純流汗... |
| SOP | Practical steps | 確認禁忌、量測狀態... |
| 注意事項 | Safety and overclaim boundaries | 發燒、急性發炎... |
| 關聯知識 | Related knowledge | THZ、IMRS、慢性疲勞 |
| 適用對象 | Who this helps | 睡眠差、慢性疲勞、循環恢復需求 |
| 不適用/風險 | Who should not use it or needs review | 高風險心血管狀態需先評估 |
| 證據等級 | Evidence classification | 醫學文獻 / 內部案例 / 老闆觀點 / 待驗證 |
| 喜悅核心符合度 | Whether it matches NuLiv principles | 符合 / 需修正 / 不符合 |
| 可用場景 | Where this can be used | 教育訓練、個管、業務、衛教 |
| 最後整理來源 | Source or meeting/case origin | Notion / 會議紀錄 / 文獻 |
| 最後更新 | Update timestamp | 2026-08-04 |

## Evidence Levels

- `醫學文獻`: external medical paper, guideline, or accepted medical source.
- `內部案例`: anonymized case, before/after observation, internal follow-up.
- `老闆觀點`: founder/leadership principle or strategic judgment.
- `內部觀察`: staff observation that is useful but not yet validated.
- `待驗證`: content should not be used as a final answer without review.

## Core Fit Rules

Use these labels:

- `符合`: clearly supports human-centered, trust-based, closed-loop care.
- `需修正`: potentially useful, but wording or use case may overclaim.
- `不符合`: conflicts with medical boundaries, trust, or NuLiv positioning.
- `未判定`: imported data has not been reviewed yet.

## Use Scenario Labels

Allowed values:

- `教育訓練`
- `個管師`
- `醫護`
- `櫃台`
- `業務`
- `衛教`
- `個案分析`
- `SOP`
- `AI問答`
- `待補`

## AI Readiness

An item is AI-ready only when:

1. It has a clear source.
2. Its evidence level is not empty.
3. Its core fit is `符合` or explicitly marked `需修正`.
4. It includes safety boundaries.
5. It can be traced back to a source, case, meeting, or approved principle.

Items marked `待驗證`, `不符合`, or missing source should be searchable but
must not be used as a final authoritative answer.
