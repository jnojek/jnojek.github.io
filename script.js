const agentBuilds = [
  {
    name: "Lead Qualification Agent",
    category: "Sales",
    description:
      "Enriches inbound leads, scores fit, drafts discovery notes, and prepares a next-step recommendation for sales review.",
    tools: ["CRM", "Email", "Company data"],
  },
  {
    name: "Support Triage Agent",
    category: "Support",
    description:
      "Classifies tickets, retrieves policy context, drafts replies, and escalates high-risk issues with a concise case summary.",
    tools: ["Helpdesk", "Knowledge base", "Slack"],
  },
  {
    name: "Operations Queue Agent",
    category: "Operations",
    description:
      "Monitors recurring task queues, identifies blockers, completes routine updates, and routes exceptions to the right owner.",
    tools: ["Airtable", "Asana", "Sheets"],
  },
  {
    name: "Document Research Agent",
    category: "Knowledge",
    description:
      "Searches internal documents, extracts source-backed answers, and produces structured summaries with citations.",
    tools: ["Docs", "Files", "Vector search"],
  },
  {
    name: "Operational Reporting Agent",
    category: "Operations",
    description:
      "Collects recurring operational data, checks anomalies, drafts summaries, and prepares decision-ready reporting notes.",
    tools: ["Python", "Databases", "Dashboards"],
  },
  {
    name: "Records Reconciliation Agent",
    category: "Operations",
    description:
      "Compares source lists, flags mismatches, drafts resolution notes, and reduces manual reconciliation work.",
    tools: ["Python", "Spreadsheets", "ERP data"],
  },
  {
    name: "Account Renewal Agent",
    category: "Sales",
    description:
      "Reviews account signals, summarizes risk, drafts renewal playbooks, and alerts teams before customer touchpoints.",
    tools: ["CRM", "Call notes", "Email"],
  },
];

const grid = document.querySelector("#agent-grid");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));

let activeFilter = "all";

function renderAgentBuilds() {
  const visible = agentBuilds.filter(
    (agent) => activeFilter === "all" || agent.category === activeFilter
  );

  grid.innerHTML = visible
    .map(
      (agent) => `
        <article class="agent-card">
          <div class="agent-topline">
            <span class="agent-category">${agent.category}</span>
            <span class="agent-badge">Workflow-ready</span>
          </div>
          <h3>${agent.name}</h3>
          <p>${agent.description}</p>
          <div class="agent-meta">
            ${agent.tools.map((tool) => `<span>${tool}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderAgentBuilds();
  });
});

renderAgentBuilds();
