const modules = [
  { key: "philosophy", code: "1", name: "Joy Philosophy", title: "喜悅核心理念" },
  { key: "case", code: "2", name: "Case Journey", title: "個案歷程" },
  { key: "frontdesk", code: "3", name: "Front Desk & Clinic", title: "櫃台與門診" },
  { key: "testing", code: "4", name: "Testing Service", title: "檢測服務" },
  { key: "equipment", code: "5", name: "Core Equipment", title: "核心儀器與設備" },
  { key: "therapy", code: "6", name: "Therapy Service", title: "療程服務與項目" },
  { key: "training", code: "7", name: "Training OS", title: "人才培育" },
  { key: "systems", code: "8", name: "Joy Systems", title: "喜悅系統" }
];

const NOTION_DATABASE_URL = "https://app.notion.com/p/4d6710708c984ac588482c61523a955d";

function entry(module, data) {
  return {
    id: `${module}-${data.name.replace(/\s+/g, "-")}`,
    module,
    status: "完成",
    priority: "中：第二順位",
    category: modules.find((item) => item.key === module)?.title || "未分類",
    intro: "",
    mechanism: "",
    script: "",
    sop: "",
    caution: "",
    relation: "",
    audience: "",
    risk: "",
    caseJourney: "",
    interaction: "",
    interventions: "",
    supporters: "",
    outcomes: "",
    followUp: "",
    lessons: "",
    evidence: "待驗證",
    coreFit: "未判定",
    useCases: "待補",
    source: "網站內建資料",
    ...data
  };
}

const seedRecords = [
  entry("case", {
    id: "case-journey-template",
    name: "個案歷程標準欄位",
    category: "個案知識資產",
    priority: "高：必學",
    intro: "每一個服務個案都要記錄從初次接觸、建立信任、檢測、介入、追蹤到改善結果的完整歷程。",
    mechanism: "個案不是單一病名，而是由意願、急迫性、支持系統、醫院端治療方向、喜悅端輔助方案、生活習慣與身心狀態共同形成的動態資料。",
    caseJourney: "初次接觸前蒐集資料，釐清個案最迫切想處理的問題，再確認病人端、家屬端、醫院端與喜悅端各自角色。",
    interaction: "以夥伴關係建立信任：先理解人，再理解病；先確認意願與能力，再討論可執行方案。",
    interventions: "檢測、改善計畫、營養與生活調整、睡眠支持、療程服務、遠距追蹤、before/after 數據回看。",
    supporters: "病人本人、家屬、醫院端醫療團隊、喜悅個管師、營養/療程/門診團隊。",
    outcomes: "改善項目需記錄主觀感受、客觀數據、睡眠/體力/情緒/疼痛/生活功能變化，以及未改善或反覆處。",
    followUp: "每次追蹤都要更新：目前狀態、下一步、阻礙、誰需要介入、是否需要修正方案。",
    lessons: "可沉澱成教材、業務案例、個管判斷規範、服務 SOP 與常見 QA。",
    sop: "新增個案資料時，至少填寫：個案背景、迫切需求、意願能力、支持系統、醫院端進度、喜悅端介入、互動方式、改善結果、下一步追蹤、可學習經驗。",
    caution: "個案資料必須匿名化；不能把單一案例直接當成醫療結論；未經審核前只能作為內部學習與假設生成。",
    relation: "喜悅核心理念、四端理解模型、檢測服務、療程服務、個管師教育訓練、業務案例。",
    audience: "個管師、醫師、專科護理師、團隊人員、教育訓練。",
    risk: "若缺少追蹤與 before/after，個案只會變成故事，無法變成可複用的知識。",
    evidence: "內部案例",
    coreFit: "符合",
    useCases: "個案分析、教育訓練、業務、AI問答"
  }),
  entry("case", {
    id: "case-20260806-a-lung-cancer-support",
    name: "CASE-20260806-A｜肺腺癌標靶副作用支持",
    category: "去識別化個案時間軸",
    status: "待審核",
    priority: "高：MVP測試個案",
    intro: "肺腺癌標靶治療期間，個案主要困擾為副作用造成的生活品質下降；喜悅端可從檢測、營養、生活支持與追蹤建立輔助閉環。",
    mechanism: "此個案不能只被理解為肺腺癌或標靶藥副作用，而要看見治療期間的體力、睡眠、飲食、胸悶咳嗽、工作壓力、感染擔憂與家屬支持缺口。",
    script: "我們不取代主治醫師的治療，而是協助你把治療期間的身體狀態、營養、生活品質與副作用追蹤照顧得更完整。",
    sop: "先確認兩份來源是否同一個案，再補齊泰格沙劑量、療程日期、腫瘤指標、腎功能、肝功能、尿蛋白、營養品清單、睡眠時數、外食內容、家屬支持與個案優先目標。",
    caution: "此資料為去識別化 MVP 測試個案，尚未完成人工審核；不可宣稱喜悅可治療肺腺癌、保證降低標靶藥副作用，或取代主治醫師治療。",
    relation: "癌症整合照護、喜悅閉環服務、四端理解模型、營養支持、個案知識 Skill",
    audience: "個管師、醫師、專科護理師、團隊人員、內部教育訓練",
    risk: "資料缺少關鍵醫療數據與家屬端資訊，不能直接形成正式醫療建議或對外案例。",
    caseJourney: "2026-08-06 收到兩份 PLAUD 整理後資料：病歷摘要與副作用管理諮詢。兩份應先視為同一個案的同日紀錄，代碼暫定 CASE-20260806-A，需人工確認。",
    interaction: "建立信任的切入點是先承認醫院主治療為主軸，再從副作用、生活品質、抽血數據與可執行生活行動切入，讓個案知道喜悅是在輔助支持，而非取代醫院。",
    interventions: "已討論擴充抽血檢查、營養品清單蒐集、維生素D、鋅、同半胱胺酸、CBC 細項、飲水、呼吸練習、日常走動、感染防護與後續追蹤。",
    supporters: "病人端已有初步諮詢意願；家屬端與主要照顧者資料不足，需補問。",
    outcomes: "目前尚無介入後 before/after；已建立初步支持方向，後續需以檢查與症狀追蹤確認改善。",
    followUp: "下一步補齊用藥、檢查數據、營養品清單、家屬支持、睡眠、飲食與個案最想優先改善的生活目標。",
    lessons: "可沉澱成癌症標靶治療副作用初談 SOP、營養品清單蒐集 SOP、副作用與生活品質追蹤 SOP，以及主治療與輔助支持分工教育訓練。",
    evidence: "內部案例",
    coreFit: "符合",
    useCases: "個案分析、教育訓練、SOP、AI問答",
    source: "08-06 病歷摘要與 08-06 諮詢副作用管理，已去識別化整理"
  }),
  entry("philosophy", {
    name: "喜悅人本核心理念",
    category: "核心哲學",
    priority: "高：必學",
    intro: "喜悅真正關注的是人，而非只是病理。",
    mechanism: "一個人的健康呈現來自身體數值、生活習慣、心理狀態、家庭支持、醫療進度、環境壓力與意願能力的共同作用。",
    script: "我們會先理解你現在最迫切想處理什麼、誰支持你、你願意做到哪一步，再一起安排適合的下一步。",
    sop: "每次整理新知識或個案，先回到人本核心、信任建立、四端理解與閉環服務。",
    caution: "不要只依病名或單一療法下結論，也不要把輔助支持說成主要治療。",
    relation: "四端理解、閉環服務、個案知識庫",
    audience: "所有新進員工、個管師、團隊人員、未來 AI 回答系統",
    risk: "若沒有這條核心，知識庫會變成零散資料庫，甚至把療法推銷放在理解人之前。",
    evidence: "核心團隊觀點",
    coreFit: "符合",
    useCases: "教育訓練、個管師、業務、AI問答"
  }),
  entry("philosophy", {
    name: "四端理解模型",
    category: "服務判斷",
    priority: "高：必學",
    intro: "醫院端、喜悅端、病人端、家屬端都要被完整理解。",
    mechanism: "醫院端提供治療方向；喜悅端提供輔助支持與追蹤；病人端提供身體感受與意願；家屬端提供照顧與決策支持。",
    script: "我們會一起看目前醫院治療到哪裡、喜悅可以支持什麼、你自己的感受，以及家人可以怎麼協助。",
    sop: "建立個案時，四端資訊缺一不可；不足處標記待補。",
    caution: "家屬意見不能取代病人意願；喜悅建議不能取代主治醫師治療。",
    relation: "個案模板、閉環服務",
    audience: "個案管理、初談、會議紀錄整理",
    risk: "四端資料不足時，不可直接產生個案判斷或療程建議。",
    evidence: "核心團隊觀點",
    coreFit: "符合",
    useCases: "個案分析、個管師、教育訓練、AI問答"
  }),
  entry("philosophy", {
    name: "喜悅閉環服務",
    category: "服務系統",
    priority: "高：必學",
    intro: "以夥伴關係、檢測、計畫、追蹤、再檢測與調整形成持續服務循環。",
    mechanism: "服務不是單點療程，而是依據醫院資料與喜悅判斷，建立專屬支持計畫，再用 before/after 與日常回饋修正。",
    script: "我們不是做一次服務就結束，而是陪你看每一步有沒有真正讓身體與生活變好。",
    sop: "建立關係、收集資料、加強檢查、建立計畫、遠距監測、執行、before/after、修正。",
    caution: "閉環若沒有紀錄與追蹤，就會退回個人經驗，無法成為知識庫資產。",
    relation: "個管系統、檢測服務、個案知識庫",
    audience: "個管師、醫師、專科護理師、團隊人員、服務設計",
    risk: "沒有紀錄與追蹤的服務不可直接作為成功案例或標準教材。",
    evidence: "核心團隊觀點",
    coreFit: "符合",
    useCases: "SOP、個管師、個案分析、教育訓練"
  }),
  entry("testing", {
    name: "HRV 身心聯動監測",
    category: "生理監測",
    priority: "高：必學",
    intro: "透過心率變異分析自律神經平衡與壓力恢復能力。",
    mechanism: "HRV 觀察心跳間距變化，反映交感與副交感神經調節狀態。",
    script: "它不是看心臟有沒有病，而是看身體調節壓力的能力。",
    sop: "安靜休息、配戴感測器、避免說話與移動、完成後解讀趨勢。",
    caution: "心律不整、藥物、咖啡因或睡眠不足都可能影響結果。",
    relation: "睡眠方案、慢性疲勞、個管師訓練",
    audience: "睡眠差、壓力恢復差、慢性疲勞與需追蹤自律神經狀態者",
    risk: "不可把 HRV 當成單一診斷依據。",
    evidence: "醫學文獻",
    coreFit: "符合",
    useCases: "檢測服務、個管師、衛教、AI問答"
  }),
  entry("equipment", {
    name: "熱療艙",
    category: "恢復設備",
    priority: "高：必學",
    intro: "透過可控溫熱促進循環與肌肉放鬆。",
    mechanism: "溫熱刺激提高局部組織溫度，促進血液循環與放鬆反應。",
    script: "熱療不是單純流汗，而是用可控溫度讓循環和放鬆反應啟動。",
    sop: "確認禁忌、量測狀態、補水、設定溫度與時間、觀察、緩和休息。",
    caution: "發燒、急性發炎、懷孕、高風險心血管狀態需先評估。",
    relation: "THZ、IMRS、慢性疲勞",
    audience: "循環恢復、放鬆支持、慢性疲勞與生活恢復需求者",
    risk: "高風險心血管狀態、急性發炎或不適者需醫師或專科護理師評估。",
    evidence: "內部觀察",
    coreFit: "需修正",
    useCases: "醫師/專科護理師、衛教、SOP、AI問答"
  }),
  entry("therapy", {
    name: "音療與放鬆支持",
    category: "身心支持",
    priority: "中：可測試",
    intro: "以聲音、節奏與放鬆引導協助個案降低緊繃感，作為睡眠、情緒與壓力恢復的輔助支持。",
    mechanism: "聲音刺激與呼吸節奏可協助個案進入較放鬆的身心狀態，但效果需要依個案主觀感受、睡眠品質與壓力指標追蹤。",
    script: "音療不是治療疾病，而是幫助身體和情緒先安定下來，讓後續營養、睡眠與生活調整更容易被執行。",
    sop: "先確認個案對聲音是否敏感，再設定短時間體驗；體驗前後記錄緊繃感、睡眠、情緒、呼吸與身體感受。",
    caution: "不可宣稱音療可治療糖尿病、癌症或其他疾病；若個案對聲音敏感、焦慮加劇或不適，需停止並改用其他放鬆方式。",
    relation: "睡眠支持、HRV 身心聯動監測、個案歷程、壓力恢復",
    audience: "壓力高、睡眠差、治療期間焦慮、需要建立放鬆習慣的個案",
    risk: "缺少 before/after 與個案回饋時，只能作為身心支持假設，不能成為正式療效結論。",
    evidence: "內部觀察",
    coreFit: "需修正",
    useCases: "個案分析、教育訓練、AI問答、療程前後支持"
  }),
  entry("therapy", {
    name: "癌症整合照護",
    category: "整合照護",
    priority: "高：必學",
    intro: "協助癌症病友整合營養、恢復、檢測與支持。",
    mechanism: "以主治醫療為主軸，喜悅提供營養、睡眠、情緒、恢復與生活支持。",
    script: "我們不取代主治醫師，而是協助您在治療期間把體力與恢復照顧好。",
    sop: "確認主治醫療計畫、整理檢查資料、安排支持方案、追蹤副作用。",
    caution: "不得干擾正規治療，也不得承諾療效。",
    relation: "CTC 細胞檢測、精準營養、個管師訓練",
    audience: "癌症治療中、術前術後、重大疾病照護需求者與家屬",
    risk: "所有建議必須與主治醫療方向並行，不可取代或延誤醫院治療。",
    evidence: "內部案例",
    coreFit: "符合",
    useCases: "個案分析、個管師、衛教、業務"
  }),
  entry("training", {
    name: "個管師訓練",
    category: "個管師",
    priority: "高：必學",
    intro: "訓練個管師理解客戶、判斷需求、安排路徑並持續追蹤。",
    mechanism: "個管師整合人的狀態、恐懼、資源與決策節奏。",
    script: "我會先了解您目前最困擾的狀態，再整理適合的檢測、療程與追蹤順序。",
    sop: "初談、需求判斷、方案整理、LINE 跟進、回診提醒、療程後追蹤。",
    caution: "不要越權做醫療判斷，也不要把療程說成保證。",
    relation: "需要與想要的差異、癌症整合照護、門診預約",
    audience: "個管師、新人訓練、團隊人員",
    risk: "個管師可整理與追蹤脈絡，但醫療判斷需回到醫師與醫院端。",
    evidence: "內部案例",
    coreFit: "符合",
    useCases: "教育訓練、個管師、SOP、AI問答"
  })
];

function moduleKeyFromTitle(title) {
  return modules.find((module) => module.title === title)?.key || "philosophy";
}

function normalizeSyncedRecord(item, index) {
  const module = moduleKeyFromTitle(item.moduleTitle || item["主分類"]);
  const name = item.name || item["名稱"] || `Notion 知識 ${index + 1}`;
  return entry(module, {
    id: item.id || `${module}-${name.replace(/\s+/g, "-")}`,
    name,
    status: item.status || item["內容狀態"] || "未開始",
    priority: item.priority || item["學習優先順序"] || "待判定",
    category: item.category || item["子分類"] || item.moduleTitle || item["主分類"] || moduleTitle(module),
    intro: item.intro || item["一句話介紹"] || "",
    mechanism: item.mechanism || item["核心概念"] || "",
    script: item.script || item["第一線應用"] || "",
    sop: item.sop || item["SOP"] || "",
    caution: item.caution || item["注意事項"] || "",
    relation: item.relation || item["關聯知識"] || "",
    audience: item.audience || item["適用對象"] || "",
    risk: item.risk || item["不適用/風險"] || item["不適用／風險"] || "",
    caseJourney: item.caseJourney || item["個案歷程"] || item["服務歷程"] || "",
    interaction: item.interaction || item["互動方式"] || item["信任建立"] || "",
    interventions: item.interventions || item["使用方法"] || item["介入方法"] || item["做了什麼"] || "",
    supporters: item.supporters || item["支持系統"] || item["誰支持"] || "",
    outcomes: item.outcomes || item["改善結果"] || item["獲得改善"] || "",
    followUp: item.followUp || item["追蹤計畫"] || item["下一步追蹤"] || "",
    lessons: item.lessons || item["學習重點"] || item["可沉澱規範"] || "",
    evidence: item.evidence || item["證據等級"] || "待驗證",
    coreFit: item.coreFit || item["喜悅核心符合度"] || "未判定",
    useCases: item.useCases || item["可用場景"] || "待補",
    source: item.source || item["最後整理來源"] || "Notion",
    notionUrl: item.notionUrl
  });
}

const records = [...seedRecords];
if (Array.isArray(window.NULIV_SYNC_RECORDS)) {
  const merged = new Map(records.map((record) => [record.name, record]));
  window.NULIV_SYNC_RECORDS.map(normalizeSyncedRecord).forEach((record) => merged.set(record.name, record));
  records.splice(0, records.length, ...merged.values());
}

const queue = [
  { title: "補齊喜悅核心理念正式版 v0.1", owner: "核心團隊整理", due: "優先" },
  { title: "建立個案知識庫標準模板", owner: "個管師／會議紀錄", due: "優先" },
  { title: "確認 AI 對話層供應商與預算", owner: "系統架構", due: "下一步" }
];

const state = {
  module: "philosophy",
  sourceQuery: "",
  globalQuery: "",
  selectedSources: new Set(records.map((record) => record.id)),
  messages: [
    {
      role: "assistant",
      html: `
        <p>請先選左側分類與來源，然後直接問問題。</p>
      `
    }
  ]
};

const $ = (selector) => document.querySelector(selector);

function moduleTitle(key = state.module) {
  return modules.find((module) => module.key === key)?.title || "";
}

function textOf(record) {
  return [
    record.name,
    record.category,
    record.intro,
    record.mechanism,
    record.script,
    record.sop,
    record.caution,
    record.relation,
    record.audience,
    record.risk,
    record.caseJourney,
    record.interaction,
    record.interventions,
    record.supporters,
    record.outcomes,
    record.followUp,
    record.lessons,
    record.source
  ].join(" ");
}

function recordsForModule() {
  return records.filter((record) => record.module === state.module);
}

function visibleSources() {
  const query = state.sourceQuery.trim().toLowerCase();
  return recordsForModule().filter((record) => !query || textOf(record).toLowerCase().includes(query));
}

function visibleRecords() {
  const query = state.globalQuery.trim().toLowerCase();
  if (!query) return recordsForModule();
  return records.filter((record) => textOf(record).toLowerCase().includes(query));
}

function selectedRecords() {
  const selected = records.filter((record) => state.selectedSources.has(record.id));
  return selected.length ? selected : recordsForModule();
}

function scoreRecord(record, question) {
  const terms = question
    .toLowerCase()
    .split(/[\s,，。？?、；;：:]+/)
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
  const body = textOf(record).toLowerCase();
  return terms.reduce((score, term) => score + (body.includes(term) ? 3 : 0), 0) +
    (record.priority.includes("高") ? 1 : 0);
}

function detectQuestionIntent(question) {
  const text = question.toLowerCase();
  if (/整合|交叉|分析|關聯|糖尿病|癌症|代謝|如何從|一起看|合併/.test(text)) return "integration";
  if (/補|缺|資料|欄位|下一步|追蹤|檢查|數據/.test(text)) return "missing-data";
  if (/家屬|支持|陪伴|照顧|關係|信任/.test(text)) return "support";
  if (/sop|教育|訓練|沉澱|教材|規範|流程/.test(text)) return "learning";
  if (/方法|介入|怎麼做|方案|改善|處理/.test(text)) return "intervention";
  return "general";
}

function listItems(items, fallback) {
  const filtered = items.filter(Boolean);
  return filtered.length ? filtered.map((item) => `<li>${escapeHtml(item)}</li>`).join("") : `<li>${escapeHtml(fallback)}</li>`;
}

function answerByIntent(intent, question, sources, isWeak) {
  const primaryCase = sources.find((record) => record.module === "case" && record.id !== "case-journey-template") ||
    sources.find((record) => record.module === "case") ||
    sources[0];
  const sourceIntro = sources.map((record) => `<li><strong>${escapeHtml(record.name)}</strong>：${escapeHtml(record.intro || record.mechanism || "待補摘要")}</li>`).join("");
  const citations = sources.map((record, index) => citationChip(record, index + 1)).join("");
  const weakNote = isWeak ? `<p class="answer-warning">目前已選來源中沒有明確命中「${escapeHtml(question)}」。以下先依已選來源做保守整理。</p>` : "";

  if (intent === "integration") {
    const knowledgeMap = sources.map((record) => {
      const usable = record.script || record.sop || record.interventions || record.mechanism || record.intro;
      const boundary = record.caution || record.risk || "尚未標示風險邊界，正式使用前需人工審核。";
      return `<li><strong>${escapeHtml(record.name)}</strong>：${escapeHtml(usable || "待補可應用內容")}<br><span>邊界：${escapeHtml(boundary)}</span></li>`;
    }).join("");
    return `
      ${weakNote}
      <h3>這題是在問：跨知識整合分析</h3>
      <p>回答這類問題時，不能先推療法；要先回到個案這個人，再把不同知識放進同一個閉環服務中判斷。</p>
      <h3>喜悅判斷順序</h3>
      <ol>
        <li>先確認個案最迫切想改善什麼，以及是否有意願與能力配合。</li>
        <li>再確認醫院端目前診斷、治療方向、檢查數據與下一步。</li>
        <li>接著看家屬端與生活環境是否能支持日常改變。</li>
        <li>最後才把熱療、音療、睡眠、營養、檢測或其他方法放入可追蹤計畫。</li>
      </ol>
      <h3>目前知識可怎麼整合</h3>
      <ol>${knowledgeMap}</ol>
      <h3>可形成的個案計畫草案</h3>
      <ol>
        <li>建立 baseline：症狀、睡眠、體力、情緒、飲食、檢查數據與目前治療。</li>
        <li>選 1 到 2 個最有機會讓個案有感的支持方法，先小範圍測試。</li>
        <li>設定 before/after 指標，追蹤主觀感受與客觀數據。</li>
        <li>每次回診或服務後更新個案紀錄，讓單一個案逐步沉澱成 SOP、教材與 QA。</li>
      </ol>
      <h3>不能直接下結論</h3>
      <ol>
        <li>不能說某療法可以治療疾病或取代醫院端治療。</li>
        <li>資料不足時，只能提出假設與待補資料，不能當正式建議。</li>
        <li>跨知識整合必須留下來源，並標示證據等級與審核狀態。</li>
      </ol>
      <h3>來源</h3>
      <div class="citation-row">${citations}</div>
    `;
  }

  if (intent === "missing-data") {
    const missing = [
      primaryCase.sop,
      primaryCase.followUp,
      "確認醫院端目前治療進度、下一次回診與檢查安排。",
      "補齊病人最迫切想改善的目標，以及願意配合到什麼程度。",
      "補齊家屬端或主要照顧者目前能提供的支持。"
    ];
    return `
      ${weakNote}
      <h3>這題是在問：下一步要補哪些資料</h3>
      <p>此個案目前最需要補的不是更多結論，而是讓四端資料完整，才能判斷喜悅能怎麼輔助。</p>
      <h3>優先補資料</h3>
      <ol>${listItems(missing, "目前來源未列出明確待補欄位，請先回到個案模板補齊四端資訊。")}</ol>
      <h3>為什麼要補</h3>
      <ol>
        <li>沒有醫院端治療進度，就無法判斷喜悅介入邊界。</li>
        <li>沒有病人端優先目標，就容易變成療法清單，而不是個案計畫。</li>
        <li>沒有家屬端資訊，就無法建立持續追蹤與生活支持。</li>
      </ol>
      <h3>來源線索</h3>
      <ol>${sourceIntro}</ol>
      <h3>來源</h3>
      <div class="citation-row">${citations}</div>
    `;
  }

  if (intent === "support") {
    const support = [
      primaryCase.supporters,
      "先確認誰是主要照顧者、誰能陪同回診、誰能協助飲食與日常紀錄。",
      "家屬端不要只被要求配合，而要先理解醫院端治療與喜悅端輔助支持的分工。",
      "用可觀察的症狀、體力、睡眠、飲食與檢查數據，建立家屬可參與的追蹤任務。"
    ];
    return `
      ${weakNote}
      <h3>這題是在問：家屬端如何建立支持</h3>
      <p>家屬支持的核心不是說服，而是讓家屬知道自己在閉環服務中扮演什麼角色。</p>
      <h3>可以怎麼建立</h3>
      <ol>${listItems(support, "目前來源缺少家屬端資訊，需補問主要照顧者與支持方式。")}</ol>
      <h3>個管師可追問</h3>
      <ol>
        <li>目前誰最常陪同或協助個案？</li>
        <li>家屬最擔心的是副作用、治療效果、生活照顧，還是費用與時間？</li>
        <li>家屬每天能協助記錄哪些變化？</li>
      </ol>
      <h3>來源線索</h3>
      <ol>${sourceIntro}</ol>
      <h3>來源</h3>
      <div class="citation-row">${citations}</div>
    `;
  }

  if (intent === "learning") {
    const learning = [
      primaryCase.lessons,
      "癌症標靶治療副作用初談 SOP。",
      "營養品清單蒐集與風險盤點 SOP。",
      "副作用、生活品質與 before/after 追蹤表。",
      "主治療與輔助支持分工的教育訓練案例。"
    ];
    return `
      ${weakNote}
      <h3>這題是在問：這個個案能沉澱成什麼知識</h3>
      <p>此個案的價值不只是單一案例，而是能整理成個管師可複用的初談、追蹤與教育訓練材料。</p>
      <h3>可沉澱項目</h3>
      <ol>${listItems(learning, "目前來源尚未列出可沉澱知識，需補個案歷程與介入結果。")}</ol>
      <h3>還不能正式化的原因</h3>
      <ol>
        <li>目前尚無介入後 before/after。</li>
        <li>關鍵醫療數據與家屬端資料仍不足。</li>
        <li>需人工審核後才可作為正式教材或對外案例。</li>
      </ol>
      <h3>來源線索</h3>
      <ol>${sourceIntro}</ol>
      <h3>來源</h3>
      <div class="citation-row">${citations}</div>
    `;
  }

  if (intent === "intervention") {
    const interventions = [
      primaryCase.interventions,
      primaryCase.script,
      "先承認醫院端主治療為主軸，再從副作用、生活品質、營養與日常追蹤切入。",
      "所有建議需回到可執行、可追蹤、可回驗。"
    ];
    return `
      ${weakNote}
      <h3>這題是在問：可以怎麼介入</h3>
      <p>喜悅端不取代主治療，而是協助個案把治療期間的身體狀態與生活品質照顧得更完整。</p>
      <h3>可行方向</h3>
      <ol>${listItems(interventions, "目前來源未列出明確介入方式，需先補檢測、目標與追蹤資料。")}</ol>
      <h3>注意邊界</h3>
      <ol>${listItems(sources.map((record) => record.caution), "不可把輔助支持說成主要治療或保證療效。")}</ol>
      <h3>來源線索</h3>
      <ol>${sourceIntro}</ol>
      <h3>來源</h3>
      <div class="citation-row">${citations}</div>
    `;
  }

  return `
    ${weakNote}
    <h3>依喜悅人本邏輯的初步回答</h3>
    <p>這題需要先看個案最迫切想改善什麼、醫院端治療進度、家屬端支持，以及喜悅端能提供哪些輔助支持。</p>
    <h3>來源線索</h3>
    <ol>${sourceIntro}</ol>
    <h3>建議下一步</h3>
    <ol>
      <li>先確認問題是在問補資料、支持系統、介入方法，還是教育訓練。</li>
      <li>再依個案模板補齊缺口，避免只做摘要。</li>
    </ol>
    <h3>來源</h3>
    <div class="citation-row">${citations}</div>
  `;
}

function answerQuestion(question) {
  const pool = selectedRecords();
  const ranked = pool
    .map((record) => ({ record, score: scoreRecord(record, question) }))
    .sort((a, b) => b.score - a.score);
  const chosen = ranked.filter((item) => item.score > 0).slice(0, 4).map((item) => item.record);
  const sources = chosen.length ? chosen : pool.slice(0, 4);
  const isWeak = !ranked.some((item) => item.score > 0);
  return answerByIntent(detectQuestionIntent(question), question, sources, isWeak);
}

function citationChip(record, index) {
  const label = `[${index}] ${record.name}`;
  if (record.notionUrl) {
    return `<a class="citation-chip" href="${record.notionUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
  }
  return `<span class="citation-chip">${escapeHtml(label)}</span>`;
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2000);
}

function scrollCenterTo(id) {
  const target = $(`#${id}`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCurrentContext() {
  const selectedInModule = recordsForModule().filter((record) => state.selectedSources.has(record.id)).length;
  $("#currentContextLabel").textContent = moduleTitle();
  $("#currentSourceCount").textContent = `已選 ${selectedInModule} 個來源`;
}

function readUrlState() {
  if (!window.location.hash) {
    return { module: "philosophy", section: "chatSection" };
  }
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const module = params.get("module");
  const section = params.get("section");
  return {
    module: modules.some((item) => item.key === module) ? module : state.module,
    section: section || "chatSection"
  };
}

function writeUrlState(section = "chatSection") {
  const hash = `module=${encodeURIComponent(state.module)}&section=${encodeURIComponent(section)}`;
  if (window.location.hash.replace(/^#/, "") === hash) return;
  history.pushState({ module: state.module, section }, "", `#${hash}`);
}

function applyUrlState(shouldScroll = true) {
  const urlState = readUrlState();
  state.module = urlState.module;
  state.globalQuery = "";
  $("#globalSearch").value = "";
  render();
  if (shouldScroll) window.setTimeout(() => scrollCenterTo(urlState.section), 0);
}

function renderNav() {
  $("#moduleNav").innerHTML = modules.map((module) => {
    const count = records.filter((record) => record.module === module.key).length;
    return `
      <button class="${module.key === state.module ? "active" : ""}" type="button" data-module="${module.key}">
        <span class="nav-code">${module.code}</span>
        <span><strong>${module.title}</strong><small>${module.name}</small></span>
        <em>${count}</em>
      </button>
    `;
  }).join("");
  document.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      state.module = button.dataset.module;
      state.globalQuery = "";
      $("#globalSearch").value = "";
      render();
      writeUrlState("chatSection");
      scrollCenterTo("chatSection");
      showToast(`已切換到「${moduleTitle()}」，可直接提問或查看知識條目`);
    });
  });
}

function renderSources() {
  const list = visibleSources();
  $("#sourceList").innerHTML = list.length ? list.map((record) => `
    <label class="source-item ${state.selectedSources.has(record.id) ? "is-selected" : ""}">
      <input type="checkbox" data-source="${record.id}" ${state.selectedSources.has(record.id) ? "checked" : ""} />
      <span>
        <strong>${escapeHtml(record.name)}</strong>
        <small>${escapeHtml(record.category)} · ${escapeHtml(record.priority)}</small>
      </span>
    </label>
  `).join("") : `<p class="empty">此分類沒有符合搜尋的來源。</p>`;

  document.querySelectorAll("[data-source]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.selectedSources.add(checkbox.dataset.source);
      else state.selectedSources.delete(checkbox.dataset.source);
      renderCurrentContext();
      renderSources();
      renderRecordGrid();
      renderChat();
      showToast(checkbox.checked ? "已加入回答來源" : "已移除回答來源");
    });
  });
}

function renderRecordGrid() {
  $("#moduleTitle").textContent = state.globalQuery ? `搜尋：${state.globalQuery}` : moduleTitle();
  const list = visibleRecords();
  $("#recordGrid").innerHTML = list.length ? list.map((record) => renderRecordCard(record)).join("") : `<p class="empty wide">找不到資料。請到 Notion 新增知識，或放寬搜尋條件。</p>`;
}

function renderRecordCard(record) {
  if (record.module === "case") return renderCaseRecordCard(record);
  return `
    <article class="record-card">
      <div>
        <span>${escapeHtml(record.category)}</span>
        <strong>${escapeHtml(record.name)}</strong>
      </div>
      <p>${escapeHtml(record.intro || record.mechanism || "待補一句話介紹")}</p>
      <div class="review-badges">
        <b class="${reviewClass(record.coreFit)}">${escapeHtml(record.coreFit)}</b>
        <b>${escapeHtml(record.evidence)}</b>
        <b>${escapeHtml(record.useCases)}</b>
      </div>
      <footer>
        <small>${escapeHtml(record.priority)}</small>
        <small>${escapeHtml(record.source || "來源待補")}</small>
      </footer>
    </article>
  `;
}

function renderCaseRecordCard(record) {
  const fields = [
    ["歷程", record.caseJourney],
    ["互動", record.interaction],
    ["方法", record.interventions],
    ["支持", record.supporters],
    ["改善", record.outcomes],
    ["追蹤", record.followUp],
    ["可沉澱知識", record.lessons]
  ].filter(([, value]) => value);

  return `
    <article class="record-card case-record-card">
      <div class="case-card-header">
        <div>
          <span>${escapeHtml(record.category)}</span>
          <strong>${escapeHtml(record.name)}</strong>
        </div>
        <b class="case-status">${escapeHtml(record.status)}</b>
      </div>
      <p class="case-summary">${escapeHtml(record.intro || "待補個案摘要")}</p>
      <div class="case-core">
        <strong>人本判斷</strong>
        <p>${escapeHtml(record.mechanism || "待補：此個案背後的人、意願、急迫性、支持系統與四端資訊。")}</p>
      </div>
      <div class="case-field-grid">
        ${fields.map(([label, value]) => `
          <section>
            <span>${escapeHtml(label)}</span>
            <p>${escapeHtml(value)}</p>
          </section>
        `).join("")}
      </div>
      <div class="review-badges">
        <b class="${reviewClass(record.coreFit)}">${escapeHtml(record.coreFit)}</b>
        <b>${escapeHtml(record.evidence)}</b>
        <b>${escapeHtml(record.useCases)}</b>
      </div>
      <footer>
        <small>${escapeHtml(record.priority)}</small>
        <small>${escapeHtml(record.source || "來源待補")}</small>
      </footer>
    </article>
  `;
}

function reviewClass(value) {
  if (value === "符合") return "ok";
  if (value === "需修正") return "warn";
  if (value === "不符合") return "danger";
  return "";
}

function renderChat() {
  const selectedCount = selectedRecords().length;
  $("#chatMessages").innerHTML = state.messages.map((message) => `
    <article class="message ${message.role}">
      <div>${message.html}</div>
    </article>
  `).join("");
  $("#askInput").placeholder = `根據 ${selectedCount} 個來源提問，例如：糖尿病如何從熱療與睡眠支持分析？`;
  const box = $("#chatMessages");
  box.scrollTop = box.scrollHeight;
}

function renderQueue() {
  $("#queueList").innerHTML = queue.map((item) => `
    <article>
      <strong>${item.title}</strong>
      <span>${item.owner} · ${item.due}</span>
    </article>
  `).join("");
}

function renderReviewStats() {
  const total = records.length;
  const fit = records.filter((record) => record.coreFit === "符合").length;
  const needsFix = records.filter((record) => record.coreFit === "需修正").length;
  const unreviewed = records.filter((record) => !record.coreFit || record.coreFit === "未判定").length;
  const evidenceMissing = records.filter((record) => !record.evidence || record.evidence === "待驗證").length;
  $("#reviewStats").innerHTML = `
    <article><strong>${total}</strong><span>全部知識</span></article>
    <article><strong>${fit}</strong><span>符合核心</span></article>
    <article><strong>${needsFix}</strong><span>需修正</span></article>
    <article><strong>${unreviewed}</strong><span>未判定</span></article>
    <article><strong>${evidenceMissing}</strong><span>待驗證</span></article>
  `;
}

function renderSyncStatus() {
  const text = window.NULIV_SYNCED_AT ? `同步 ${window.NULIV_SYNCED_AT}` : "內建資料";
  $("#syncStatus").textContent = text;
}

function bindEvents() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      writeUrlState(button.dataset.jump);
      scrollCenterTo(button.dataset.jump);
    });
  });
  window.addEventListener("popstate", () => applyUrlState(true));
  $("#addKnowledgeBtn").addEventListener("click", () => {
    window.open(NOTION_DATABASE_URL, "_blank", "noopener,noreferrer");
  });
  $("#selectAllSourcesBtn").addEventListener("click", () => {
    recordsForModule().forEach((record) => state.selectedSources.add(record.id));
    renderCurrentContext();
    renderSources();
    renderChat();
  });
  $("#sourceSearch").addEventListener("input", (event) => {
    state.sourceQuery = event.target.value;
    renderSources();
  });
  $("#globalSearch").addEventListener("input", (event) => {
    state.globalQuery = event.target.value;
    renderRecordGrid();
  });
  $("#askForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const question = $("#askInput").value.trim();
    if (!question) return;
    state.messages.push({ role: "user", html: `<p>${escapeHtml(question)}</p>` });
    state.messages.push({ role: "assistant", html: answerQuestion(question) });
    $("#askInput").value = "";
    renderChat();
  });
  document.querySelectorAll("[data-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent.trim();
      const prompt = `請根據目前選取的知識來源，產出「${label}」草稿。`;
      state.messages.push({ role: "user", html: `<p>${escapeHtml(prompt)}</p>` });
      state.messages.push({ role: "assistant", html: answerQuestion(prompt) });
      renderChat();
      showToast(`已用目前來源生成「${label}」草稿方向`);
    });
  });
}

function render() {
  renderSyncStatus();
  renderCurrentContext();
  renderNav();
  renderSources();
  renderRecordGrid();
  renderChat();
  renderQueue();
  renderReviewStats();
}

bindEvents();
applyUrlState(Boolean(window.location.hash));
