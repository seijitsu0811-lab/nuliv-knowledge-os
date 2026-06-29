const modules = [
  { key: "philosophy", code: "1", name: "Joy Philosophy", title: "喜悅核心理念" },
  { key: "frontdesk", code: "2", name: "Front Desk & Clinic", title: "櫃台與門診" },
  { key: "testing", code: "3", name: "Testing Service", title: "檢測服務" },
  { key: "equipment", code: "4", name: "Core Equipment", title: "核心儀器與設備" },
  { key: "therapy", code: "5", name: "Therapy Service", title: "療程服務與項目" },
  { key: "training", code: "6", name: "Training OS", title: "人才培育" },
  { key: "systems", code: "7", name: "Joy Systems", title: "喜悅系統" }
];

const NOTION_DATABASE_URL = "https://app.notion.com/p/4d6710708c984ac588482c61523a955d";

const moduleOverview = {
  philosophy: {
    eyebrow: "Joy Philosophy",
    title: "喜悅核心理念",
    copy: "核心哲學是所有流程與服務判斷的上游。這裡先說清楚喜悅為什麼服務、如何理解一個人、如何區分需要與想要，再讓檢測、儀器、療程與系統往下承接。",
    cards: [
      { label: "健康觀", text: "健康是恢復、調節、適應與成長能力。" },
      { label: "需求模型", text: "先理解需要，再回應想要。" },
      { label: "服務哲學", text: "用同理與判斷建立長期信任。" },
      { label: "AI 原則", text: "AI 整理知識，人保留判斷與陪伴。" }
    ]
  },
  frontdesk: {
    eyebrow: "Front Desk & Clinic",
    title: "櫃台與門診",
    copy: "櫃台與門診負責第一線體驗、預約、接待、初診分流、客訴與隱私保護，讓服務從第一秒就穩定。",
    cards: [
      { label: "櫃台接待", text: "報到、等候、分流與資料確認。" },
      { label: "初診流程", text: "目的確認、預約、檢測與回診安排。" },
      { label: "客戶體驗", text: "情緒安撫、等待管理與家屬溝通。" },
      { label: "異常處理", text: "客訴、改期、資料缺漏與緊急回報。" }
    ]
  },
  testing: {
    eyebrow: "Testing Service",
    title: "檢測服務",
    copy: "檢測服務保存每項檢測的目的、限制、適用對象、採檢流程、報告解讀與客戶說明話術。",
    cards: [
      { label: "癌症風險", text: "CTC 與癌症風險追蹤線索。" },
      { label: "功能醫學", text: "營養、代謝、發炎與荷爾蒙指標。" },
      { label: "生理監測", text: "HRV、血糖、肺功能與恢復能力。" },
      { label: "報告解讀", text: "檢測需由醫師與專業團隊整合。" }
    ]
  },
  equipment: {
    eyebrow: "Core Equipment",
    title: "核心儀器與設備",
    copy: "核心儀器與設備整理每台設備的作用、適用對象、操作 SOP、安全界線與客戶說明方式。",
    cards: [
      { label: "呼吸支持", text: "BiPAP、肺功能與呼吸訓練。" },
      { label: "循環恢復", text: "熱療、THZ、IMRS 等恢復支持。" },
      { label: "能量支持", text: "QiQuant 與輔助恢復型設備。" },
      { label: "安全界線", text: "禁忌、操作前確認與異常回報。" }
    ]
  },
  therapy: {
    eyebrow: "Therapy Service",
    title: "療程服務與項目",
    copy: "療程服務保存服務目標、適合與不適合對象、搭配方案、異議處理與追蹤方式。",
    cards: [
      { label: "再生醫學", text: "PRP、胜肽與修復支持。" },
      { label: "整合照護", text: "癌症、慢性疲勞與免疫疑難。" },
      { label: "生活方案", text: "睡眠、營養、會員與長期追蹤。" },
      { label: "陪伴服務", text: "陪診、個管追蹤與療程搭配。" }
    ]
  },
  training: {
    eyebrow: "Training OS",
    title: "人才培育",
    copy: "人才培育整合原本的新人訓練內容，並拆成新人基本訓練、個管師、醫護部、個管助理四條路徑。",
    cards: [
      { label: "新人基本訓練", text: "四週學習路徑與基礎認知。" },
      { label: "個管師", text: "需求判斷、客戶路徑與追蹤。" },
      { label: "醫護部", text: "操作 SOP、安全紀錄與異常回報。" },
      { label: "個管助理", text: "資料整理、預約協作與知識維護。" }
    ]
  },
  systems: {
    eyebrow: "Joy Systems",
    title: "喜悅系統",
    copy: "喜悅系統保存門診預約、個管、廚房、環境與公共安全的規則、責任人、流程與更新紀錄。",
    cards: [
      { label: "門診預約系統", text: "預約、改期、報到與提醒。" },
      { label: "個管系統", text: "客戶狀態、任務、回訪與續約。" },
      { label: "廚房管理", text: "食材、衛生、庫存與出餐流程。" },
      { label: "環境與公共安全", text: "巡檢、消防、感染控制與設備安全。" }
    ]
  }
};

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
    ...data
  };
}

const records = [
  entry("philosophy", {
    name: "健康不是疾病的反義詞",
    category: "核心哲學",
    priority: "高：必學",
    intro: "健康是面對複雜環境時仍具有恢復、調節、適應與成長能力。",
    mechanism: "喜悅把健康視為韌性系統，而非單一檢驗值正常。",
    script: "我們不只看你有沒有病，而是看你的身體還有多少恢復與調節能力。",
    sop: "所有服務說明先回到健康韌性，再說明檢測、儀器或療程如何支持韌性。",
    caution: "不要把健康簡化成單一數字，也不要把服務說成療效保證。",
    relation: "身體韌性、心理韌性、生活韌性、生命韌性"
  }),
  entry("philosophy", {
    name: "需要與想要的差異",
    category: "理解需求模型",
    priority: "高：必學",
    intro: "客戶說出口的是想要，真正影響服務路徑的是需要。",
    mechanism: "想要常是症狀、價格或期待；需要包含風險、恐懼、家庭角色與決策能力。",
    script: "我先確認你最想解決的是不舒服、找原因，還是降低未來風險。",
    sop: "聽主訴、複述、追問背景、確認恐懼、整理需要、再提出下一步。",
    caution: "不要一聽到關鍵字就推產品，先理解人。",
    relation: "個管師訓練、客戶說明話術、初診流程"
  }),
  entry("philosophy", {
    name: "核心哲學如何帶動使用邏輯",
    category: "系統使用原則",
    priority: "高：必學",
    intro: "所有知識頁的使用邏輯都從核心哲學展開。",
    mechanism: "核心哲學回答為什麼服務；SOP 回答怎麼做；FAQ 回答現場怎麼說；更新按鈕負責讓知識跟著資料庫變動。",
    script: "先理解理念，再查資料庫；先確認需要，再選擇檢測、儀器或療程。",
    sop: "理念頁建立原則，分類頁保存流程，條目頁保存可執行內容，FAQ 定期由資料庫重新整理。",
    caution: "不要把使用邏輯放在旁邊當裝飾，它應該被寫進核心理念與每個 SOP。",
    relation: "知識更新與整理、固定十題問答"
  }),
  entry("frontdesk", {
    name: "櫃台接待 SOP",
    category: "櫃台",
    priority: "高：必學",
    intro: "從客戶抵達、報到、等待到轉交個管或醫師的標準流程。",
    mechanism: "櫃台是客戶對喜悅的第一個信任界面，重點是穩定、清楚、尊重隱私。",
    script: "您好，我先幫您確認今天的預約與資料，等一下會由個管師帶您進入下一步。",
    sop: "確認身分、核對預約、檢查資料、提醒等待時間、通知個管、記錄異常。",
    caution: "不要在公開區域大聲討論病史、價格或敏感資料。",
    relation: "門診預約系統、客訴與情緒安撫"
  }),
  entry("frontdesk", {
    name: "門診預約與初診流程",
    category: "門診",
    priority: "高：必學",
    intro: "管理初診預約、醫師時段、檢測安排與回診節點。",
    mechanism: "預約不是排時間，而是把客戶期待、醫師資源與檢測流程對齊。",
    script: "我先幫您安排適合的初診時段，並確認是否需要先準備檢測或既有報告。",
    sop: "收集基本資料、確認目的、安排時段、發送提醒、標記是否需檢測、回填系統。",
    caution: "不確定的醫療問題需轉醫師或個管。",
    relation: "櫃台接待 SOP、門診預約系統"
  }),
  entry("testing", {
    name: "CTC 細胞檢測",
    category: "癌症風險檢測",
    priority: "中：第二順位",
    intro: "循環腫瘤細胞檢測，用於早期癌症風險評估與追蹤參考。",
    mechanism: "透過抽血與細胞分選技術捕捉極少量 CTC，作為風險評估線索。",
    script: "這不是單獨診斷癌症的工具，而是多一個從血液觀察風險的角度。",
    sop: "確認目的、說明限制、安排抽血、建立追蹤紀錄、由醫師整合解讀。",
    caution: "不得用 CTC 結果直接宣告罹癌或排除癌症。",
    relation: "癌症整合照護、功能醫學檢測"
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
    relation: "睡眠方案、慢性疲勞、個管師訓練"
  }),
  entry("testing", {
    name: "瀚仕功能醫學檢測",
    category: "功能醫學",
    priority: "中：第二順位",
    intro: "功能醫學血液與營養素分析，找出代謝與營養失衡線索。",
    mechanism: "透過營養素、發炎、荷爾蒙或代謝指標建立個人化健康地圖。",
    script: "這類檢測是為了找出身體卡住的地方，不只看是否生病。",
    sop: "確認套組、採樣前提醒、回報時間、由專業人員整合說明。",
    caution: "檢測需搭配病史與生活型態，不可只看單一數字。",
    relation: "精準營養、睡眠方案、癌症整合照護"
  }),
  entry("equipment", {
    name: "BiPAP 呼吸器",
    category: "呼吸設備",
    priority: "高：必學",
    intro: "雙正壓呼吸輔助儀器，用於睡眠呼吸中止症及呼吸功能訓練。",
    mechanism: "透過吸氣正壓與呼氣正壓的壓力差，協助打開肺泡並改善通氣。",
    script: "它會配合呼吸節奏輔助你，吸氣時省力，呼氣時維持氣道不塌陷。",
    sop: "檢查面罩與管路、設定壓力、確認漏氣、觀察血氧與不適感、清潔記錄。",
    caution: "胸痛、意識不清、急性呼吸窘迫者需立即由醫師處理。",
    relation: "肺功能檢測儀、睡眠方案、醫護部訓練"
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
    relation: "THZ、IMRS、慢性疲勞"
  }),
  entry("equipment", {
    name: "THZ 太赫茲",
    category: "恢復設備",
    priority: "高：必學",
    intro: "太赫茲光波儀器，用於非侵入式能量刺激與局部循環支持。",
    mechanism: "太赫茲波段介於微波與紅外線之間，常作為恢復支持工具。",
    script: "我們會把 THZ 當成輔助恢復工具，不把它說成治病設備。",
    sop: "確認部位、設定距離與時間、避免不適部位過度刺激、記錄反應。",
    caution: "植入式電子裝置、皮膚破損或醫師判定不適合者需避免。",
    relation: "熱療艙、QiQuant、IMRS"
  }),
  entry("therapy", {
    name: "PRP 治療",
    category: "再生醫學",
    priority: "中：第二順位",
    intro: "自體血小板血漿注射療法，促進組織修復。",
    mechanism: "抽取自體血液後離心濃縮血小板，利用生長因子支持修復反應。",
    script: "PRP 使用自己的血液濃縮修復訊號，由醫師判斷是否適合。",
    sop: "醫師評估、抽血、離心、注射、術後衛教與追蹤。",
    caution: "凝血異常、感染、特定藥物使用者需由醫師評估。",
    relation: "胜肽療法、再生健康優化"
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
    relation: "CTC 細胞檢測、精準營養、個管師訓練"
  }),
  entry("training", {
    name: "新人基本訓練：四週學習路徑",
    category: "新人基本訓練",
    priority: "高：必學",
    intro: "原知識庫新人訓練內容整合到這裡，作為新人第一個月學習地圖。",
    mechanism: "第 1 週核心理念與儀器，第 2 週檢測，第 3 週療程，第 4 週整合應用。",
    script: "新人不用一次背完，先照路徑看，再把不懂的地方回到資料庫查。",
    sop: "每日指定條目、模擬說明、主管抽問、更新不清楚的頁面。",
    caution: "訓練不是閱讀量競賽，重點是能否在情境中正確使用。",
    relation: "BiPAP、CTC、HRV、PRP、客戶說明話術"
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
    relation: "需要與想要的差異、癌症整合照護、門診預約"
  }),
  entry("training", {
    name: "醫護部訓練",
    category: "醫護部",
    priority: "高：必學",
    intro: "訓練醫護部執行檢測、療程、紀錄與異常回報。",
    mechanism: "醫護部穩定度決定服務安全與醫療品質。",
    script: "每次操作前我們都會確認您的狀態，過程中若有不適請立即告訴我們。",
    sop: "操作前確認、執行流程、過程觀察、結束紀錄、異常回報。",
    caution: "未記錄等於未完成；不確定狀況需立即回報醫師。",
    relation: "BiPAP 呼吸器、熱療艙、CTC 細胞檢測"
  }),
  entry("training", {
    name: "個管助理訓練",
    category: "個管助理",
    priority: "中：第二順位",
    intro: "協助資料整理、預約、LINE 跟進與知識庫維護。",
    mechanism: "個管助理讓資訊流穩定，避免因資料缺漏造成服務斷點。",
    script: "我會協助確認您的資料與預約，並提醒下一步需要準備的內容。",
    sop: "整理資料、更新系統、提醒預約、追蹤未完成事項、回報個管師。",
    caution: "敏感資料需保密，所有承諾需由個管師或主管確認。",
    relation: "個管系統、門診預約系統"
  }),
  entry("systems", {
    name: "門診預約系統",
    category: "門診系統",
    priority: "高：必學",
    intro: "管理門診預約、醫師時段、改期、提醒與報到流程。",
    mechanism: "預約系統是門診節奏中樞，連動櫃台、個管、醫師與檢測安排。",
    script: "我們會在系統中確認您的時段、資料與當天流程，避免到現場才補資料。",
    sop: "建立預約、標記服務目的、發送提醒、報到確認、異常回報。",
    caution: "改期與取消需留下原因。",
    relation: "櫃台接待 SOP、個管系統"
  }),
  entry("systems", {
    name: "個管系統",
    category: "個管系統",
    priority: "高：必學",
    intro: "記錄客戶狀態、追蹤任務、療程節點、回訪與續約。",
    mechanism: "個管系統讓客戶旅程可視化，避免服務只存在個人記憶。",
    script: "您的狀態與下一步會記錄在系統中，團隊可接續追蹤。",
    sop: "建立客戶、記錄主訴、設定任務、追蹤回訪、更新狀態、主管檢視。",
    caution: "資料未更新會直接影響服務品質。",
    relation: "個管師訓練、門診預約系統"
  }),
  entry("systems", {
    name: "廚房管理",
    category: "營運系統",
    priority: "中：第二順位",
    intro: "管理精力湯、食材、庫存、衛生與出餐流程。",
    mechanism: "飲食服務牽涉安全、品質與一致性，需有食材追蹤與衛生標準。",
    script: "我們會依標準流程準備餐飲，確保食材、衛生與出餐時間穩定。",
    sop: "食材驗收、庫存記錄、製作流程、清潔消毒、異常回報。",
    caution: "過期、污染疑慮或標示不清不得使用。",
    relation: "環境與公共安全、精準營養"
  })
];

const queue = [
  { title: "補上門診預約系統截圖與欄位說明", owner: "櫃台與門診", due: "本週" },
  { title: "把新人四週訓練拆成每日任務", owner: "人才培育", due: "本週" },
  { title: "建立環境與公共安全巡檢表", owner: "喜悅系統", due: "下週" }
];

let state = {
  module: "philosophy",
  selectedId: records[0].id,
  query: "",
  lastUpdatedAt: null,
  updateSources: []
};

const $ = (selector) => document.querySelector(selector);

function recordsInModule() {
  const text = state.query.trim().toLowerCase();
  return records.filter((record) => {
    if (record.module !== state.module) return false;
    if (!text) return true;
    return [
      record.name,
      record.category,
      record.priority,
      record.intro,
      record.mechanism,
      record.script,
      record.sop,
      record.caution,
      record.relation
    ].join(" ").toLowerCase().includes(text);
  });
}

function currentRecord() {
  return records.find((record) => record.id === state.selectedId) || recordsInModule()[0] || records[0];
}

function moduleTitle(key = state.module) {
  return modules.find((module) => module.key === key)?.title || "";
}

function setModule(key) {
  state.module = key;
  state.selectedId = records.find((record) => record.module === key)?.id || records[0].id;
  state.query = "";
  $("#searchInput").value = "";
  render();
}

function setSelected(id) {
  state.selectedId = id;
  render();
}

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function renderNav() {
  $("#moduleNav").innerHTML = modules.map((module) => {
    const count = records.filter((record) => record.module === module.key).length;
    return `
      <button class="${module.key === state.module ? "active" : ""}" type="button" data-module="${module.key}" title="${module.title}">
        <span class="nav-code">${module.code}</span>
        <span><strong>${module.title}</strong><small>${module.name}</small></span>
        <em>${count}</em>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => setModule(button.dataset.module));
  });
}

function renderOverview() {
  const overview = moduleOverview[state.module];
  $("#overviewEyebrow").textContent = overview.eyebrow;
  $("#overviewTitle").textContent = overview.title;
  $("#overviewCopy").textContent = overview.copy;
  $("#categoryCards").innerHTML = overview.cards.map((card) => `
    <article class="category-card">
      <span>${card.label}</span>
      <p>${card.text}</p>
      <button type="button" data-create-card="${card.label}">到 Notion 新增</button>
    </article>
  `).join("");

  document.querySelectorAll("[data-create-card]").forEach((button) => {
    button.addEventListener("click", () => createDraft(button.dataset.createCard));
  });
}

function renderModuleHeader() {
  const module = modules.find((item) => item.key === state.module);
  $("#moduleName").textContent = module.name;
  $("#moduleTitle").textContent = module.title;
}

function renderTable() {
  const rows = recordsInModule();
  $("#recordTable").innerHTML = `
    <div class="table-head">
      <span>名稱</span>
      <span>一句話介紹</span>
      <span>狀態</span>
      <span>分類</span>
      <span>優先順序</span>
    </div>
    ${rows.length ? rows.map((record) => `
      <button class="db-row ${record.id === currentRecord().id ? "selected" : ""}" type="button" data-id="${record.id}">
        <span class="record-name"><i></i>${record.name}</span>
        <span>${record.intro}</span>
        <span><b class="pill done">${record.status}</b></span>
        <span><b class="pill category">${record.category}</b></span>
        <span><b class="pill priority">${record.priority}</b></span>
      </button>
    `).join("") : `<div class="empty-state">找不到符合搜尋的條目，可新增此分類知識。</div>`}
  `;

  document.querySelectorAll("[data-id]").forEach((button) => {
    button.addEventListener("click", () => setSelected(button.dataset.id));
  });
}

function renderDetail() {
  const record = currentRecord();
  $("#recordDetail").innerHTML = `
    <div class="detail-title">
      <p class="eyebrow">${record.category}</p>
      <h2>${record.name}</h2>
      <p>${record.intro}</p>
    </div>
    <div class="property-grid">
      <div><span>狀態</span><strong>${record.status}</strong></div>
      <div><span>分類</span><strong>${record.category}</strong></div>
      <div><span>優先</span><strong>${record.priority}</strong></div>
    </div>
    <div class="detail-grid">
      ${detailBlock("核心概念", record.mechanism)}
      ${detailBlock("第一線應用", record.script)}
      ${detailBlock("SOP", record.sop)}
      ${detailBlock("注意事項", record.caution)}
      ${detailBlock("關聯知識", record.relation)}
    </div>
  `;
}

function detailBlock(title, text) {
  return `
    <article class="detail-block">
      <h3>${title}</h3>
      <p>${text || "待補"}</p>
    </article>
  `;
}

function buildFaq() {
  const record = currentRecord();
  const related = records
    .filter((item) => item.module === state.module)
    .slice(0, 4)
    .map((item) => item.name)
    .join("、");

  return [
    ["這個分類的核心目的？", moduleOverview[state.module].copy],
    [`「${record.name}」解決什麼問題？`, record.intro],
    ["第一線該怎麼說？", record.script],
    ["執行時要看哪個 SOP？", record.sop],
    ["最重要的注意事項？", record.caution],
    ["目前關聯哪些知識？", record.relation || related],
    ["新人應該先學什麼？", state.module === "training" ? "先看新人基本訓練，再進個管師、醫護部、個管助理分流。" : "先看喜悅核心理念，再依角色進入此分類條目。"],
    ["個管師如何使用？", "先判斷需要與想要，再引用本分類條目安排下一步服務路徑。"],
    ["醫護部如何使用？", "先確認 SOP、禁忌與紀錄方式，再執行檢測、儀器或療程服務。"],
    ["這些答案根據哪裡？", sourceText()]
  ];
}

function sourceText() {
  const record = currentRecord();
  const sources = [
    `目前條目：${record.name}`,
    `分類：${moduleTitle()}`,
    `分類概覽：${moduleOverview[state.module].title}`,
    `同分類資料庫：${recordsInModule().map((item) => item.name).join("、")}`
  ];
  return sources.join("；");
}

function renderFaq() {
  $("#qaList").innerHTML = buildFaq().map(([question, answer], index) => `
    <article class="qa-item">
      <button class="qa-question" type="button" data-qa="${index}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${question}</strong>
      </button>
      <p class="qa-answer">${answer}</p>
    </article>
  `).join("");

  document.querySelectorAll("[data-qa]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".qa-item").classList.toggle("open");
    });
  });

  const note = state.lastUpdatedAt
    ? `已於 ${state.lastUpdatedAt} 重新讀取資料庫並整理 FAQ。根據：${state.updateSources.join("、")}`
    : `FAQ 會依目前分類與條目即時生成。按下「知識更新與整理」後，會重新讀取目前資料庫並標示來源。`;
  $("#updateNote").textContent = note;
}

function renderQueue() {
  $("#queueList").innerHTML = queue.map((item) => `
    <article>
      <strong>${item.title}</strong>
      <span>${item.owner} · ${item.due}</span>
    </article>
  `).join("");
}

function createDraft(categoryLabel) {
  const label = categoryLabel || moduleTitle();
  showToast(`請到 Notion 新增「${label}」知識`);
  window.location.assign(NOTION_DATABASE_URL);
}

function refreshKnowledge() {
  const record = currentRecord();
  state.lastUpdatedAt = new Date().toLocaleString("zh-TW", { hour12: false });
  state.updateSources = [...new Set([
    moduleTitle(),
    record.name,
    ...recordsInModule().slice(0, 3).map((item) => item.name)
  ])];
  renderFaq();
  showToast("已重新讀取資料庫並整理固定十題問答");
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    const first = recordsInModule()[0];
    if (first) state.selectedId = first.id;
    renderTable();
    renderDetail();
    renderFaq();
  });
  $("#createEntryBtn").addEventListener("click", () => createDraft());
  $("#overviewAddBtn").addEventListener("click", () => createDraft());
  $("#refreshKnowledgeBtn").addEventListener("click", refreshKnowledge);
  bindSidebarResize();
}

function bindSidebarResize() {
  const app = $("#appShell");
  const handle = $("#sidebarResize");
  let isDragging = false;

  handle.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.classList.add("resizing");
  });

  window.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    const width = Math.min(420, Math.max(190, event.clientX));
    app.style.setProperty("--sidebar-width", `${width}px`);
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.classList.remove("resizing");
  });
}

function render() {
  renderNav();
  renderOverview();
  renderModuleHeader();
  renderTable();
  renderDetail();
  renderFaq();
  renderQueue();
}

bindEvents();
render();
