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
    source: "網站內建資料",
    ...data
  };
}

const seedRecords = [
  entry("philosophy", {
    name: "喜悅人本核心理念",
    category: "核心哲學",
    priority: "高：必學",
    intro: "喜悅真正關注的是人，而非只是病理。",
    mechanism: "一個人的健康呈現來自身體數值、生活習慣、心理狀態、家庭支持、醫療進度、環境壓力與意願能力的共同作用。",
    script: "我們會先理解你現在最迫切想處理什麼、誰支持你、你願意做到哪一步，再一起安排適合的下一步。",
    sop: "每次整理新知識或個案，先回到人本核心、信任建立、四端理解與閉環服務。",
    caution: "不要只依病名或單一療法下結論，也不要把輔助支持說成主要治療。",
    relation: "四端理解、閉環服務、個案知識庫"
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
    relation: "個案模板、閉環服務"
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
    relation: "個管系統、檢測服務、個案知識庫"
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
    name: "個管師訓練",
    category: "個管師",
    priority: "高：必學",
    intro: "訓練個管師理解客戶、判斷需求、安排路徑並持續追蹤。",
    mechanism: "個管師整合人的狀態、恐懼、資源與決策節奏。",
    script: "我會先了解您目前最困擾的狀態，再整理適合的檢測、療程與追蹤順序。",
    sop: "初談、需求判斷、方案整理、LINE 跟進、回診提醒、療程後追蹤。",
    caution: "不要越權做醫療判斷，也不要把療程說成保證。",
    relation: "需要與想要的差異、癌症整合照護、門診預約"
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
  { title: "補齊喜悅核心理念正式版 v0.1", owner: "老闆觀點整理", due: "優先" },
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
        <p>這是喜悅人本知識庫 v0.2。你可以先選左側來源，再在下方提問。</p>
        <p>目前回答會依已選來源做結構化整理與來源引用；接上 AI/RAG 後，才會進一步變成真正可追問、可推理的 NotebookLM。</p>
      `
    }
  ]
};

const $ = (selector) => document.querySelector(selector);

function moduleTitle(key = state.module) {
  return modules.find((module) => module.key === key)?.title || "";
}

function textOf(record) {
  return [record.name, record.category, record.intro, record.mechanism, record.script, record.sop, record.caution, record.relation, record.source].join(" ");
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

function answerQuestion(question) {
  const pool = selectedRecords();
  const ranked = pool
    .map((record) => ({ record, score: scoreRecord(record, question) }))
    .sort((a, b) => b.score - a.score);
  const chosen = ranked.filter((item) => item.score > 0).slice(0, 4).map((item) => item.record);
  const sources = chosen.length ? chosen : pool.slice(0, 4);
  const isWeak = !ranked.some((item) => item.score > 0);

  const concepts = sources.map((record) => `<li><strong>${escapeHtml(record.name)}</strong>：${escapeHtml(record.intro || record.mechanism || "待補核心概念")}</li>`).join("");
  const actions = sources.map((record) => record.sop || record.script).filter(Boolean).slice(0, 3).map((text) => `<li>${escapeHtml(text)}</li>`).join("");
  const cautions = sources.map((record) => record.caution).filter(Boolean).slice(0, 3).map((text) => `<li>${escapeHtml(text)}</li>`).join("");
  const citations = sources.map((record, index) => citationChip(record, index + 1)).join("");

  return `
    ${isWeak ? `<p class="answer-warning">目前已選來源中沒有明確命中「${escapeHtml(question)}」。以下先用已選知識做保守整理，並建議補資料。</p>` : ""}
    <h3>依喜悅人本邏輯的初步回答</h3>
    <p>這個問題應先回到「人」：個案最迫切想處理什麼、是否有意願與能力、誰支持他、醫院端目前治療方向為何，以及喜悅能在閉環服務中提供哪些輔助支持。</p>
    <h3>可用的知識線索</h3>
    <ol>${concepts}</ol>
    <h3>可以怎麼做</h3>
    <ol>${actions || "<li>目前來源尚未整理成 SOP，建議先補「第一線應用」與「執行步驟」。</li>"}</ol>
    <h3>注意邊界</h3>
    <ol>${cautions || "<li>資料不足時需標記待驗證，不可把內部觀察包裝成醫療結論。</li>"}</ol>
    <h3>來源</h3>
    <div class="citation-row">${citations}</div>
  `;
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
    });
  });
}

function renderSources() {
  const list = visibleSources();
  $("#sourceList").innerHTML = list.length ? list.map((record) => `
    <label class="source-item">
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
      renderRecordGrid();
      renderChat();
    });
  });
}

function renderRecordGrid() {
  $("#moduleTitle").textContent = state.globalQuery ? `搜尋：${state.globalQuery}` : moduleTitle();
  const list = visibleRecords();
  $("#recordGrid").innerHTML = list.length ? list.map((record) => `
    <article class="record-card">
      <div>
        <span>${escapeHtml(record.category)}</span>
        <strong>${escapeHtml(record.name)}</strong>
      </div>
      <p>${escapeHtml(record.intro || record.mechanism || "待補一句話介紹")}</p>
      <footer>
        <small>${escapeHtml(record.priority)}</small>
        <small>${escapeHtml(record.source || "來源待補")}</small>
      </footer>
    </article>
  `).join("") : `<p class="empty wide">找不到資料。請到 Notion 新增知識，或放寬搜尋條件。</p>`;
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

function renderSyncStatus() {
  const text = window.NULIV_SYNCED_AT ? `同步 ${window.NULIV_SYNCED_AT}` : "內建資料";
  $("#syncStatus").textContent = text;
}

function bindEvents() {
  $("#addKnowledgeBtn").addEventListener("click", () => {
    window.open(NOTION_DATABASE_URL, "_blank", "noopener,noreferrer");
  });
  $("#selectAllSourcesBtn").addEventListener("click", () => {
    recordsForModule().forEach((record) => state.selectedSources.add(record.id));
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
  renderNav();
  renderSources();
  renderRecordGrid();
  renderChat();
  renderQueue();
}

bindEvents();
render();
