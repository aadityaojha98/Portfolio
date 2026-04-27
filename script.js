const focusData = {
  transportation: {
    kicker: "Transportation and traffic systems",
    title: "Transportation planning, pavement systems, and multimodal analysis.",
    description:
      "Graduate transportation coursework and Caltrans-linked pavement research are paired with field execution on highway and pavement projects. That mix supports work across LOS analysis, pavement materials, drainage coordination, and transportation program delivery.",
    strengths: [
      "HCM and LOS analysis for signalized and unsignalized conditions",
      "Travel demand and corridor-level transportation planning",
      "Pavement rehabilitation, materials evaluation, and drainage coordination",
    ],
    tools: ["Synchro", "HCS", "TransCAD", "ArcGIS Pro", "AutoCAD Civil 3D", "MicroStation"],
  },
  construction: {
    kicker: "Construction delivery and QA/QC",
    title: "Field leadership on complex infrastructure work fronts.",
    description:
      "The strongest thread across the resume set is hands-on delivery: contractor coordination, inspection, quantity verification, materials testing, and day-to-day site execution across highways, underground utilities, and water infrastructure.",
    strengths: [
      "QA/QC and materials testing for concrete, pavement, and pipeline works",
      "Coordination across simultaneous active construction areas",
      "Progress verification, site documentation, and safety-focused delivery",
    ],
    tools: ["Bluebeam", "AutoCAD", "Total Station", "GPS", "Microsoft Project", "Bills of Quantities"],
  },
  water: {
    kicker: "Water and drainage systems",
    title: "Pipeline, storage, and stormwater experience built from the field up.",
    description:
      "Water infrastructure shows up repeatedly across the resume versions, from pipeline installation and storage tank delivery to hydraulic testing and urban drainage coordination.",
    strengths: [
      "Pipeline installation, testing, and backfill quality control",
      "Underground and overhead water storage structure coordination",
      "Stormwater management, culvert sizing, and drainage compliance",
    ],
    tools: ["SWMM", "HY-8", "ArcGIS Pro", "AutoCAD Civil 3D", "Pressure testing", "Topographic survey"],
  },
  geotechnical: {
    kicker: "Geotechnical and earthwork performance",
    title: "Subgrade, compaction, foundations, and terrain-informed decision making.",
    description:
      "Across site development, highway, and water infrastructure work, geotechnical judgment shapes foundation preparation, compaction control, trench stability, soil assessment, and long-term performance.",
    strengths: [
      "Subgrade stabilization and compaction control for infrastructure works",
      "Foundation preparation and soil-informed construction sequencing",
      "Survey-supported terrain interpretation for alignment and grading decisions",
    ],
    tools: ["Soil sampling", "Field density testing", "GPS", "Total Station", "ArcGIS Pro", "SAP2000"],
  },
  research: {
    kicker: "Research, analytics, and sustainability",
    title: "Civil engineering backed by data, modeling, and published work.",
    description:
      "The graduate research layer adds a strong analytical dimension: experimental design, sustainable materials evaluation, environmental review support, and machine learning models that turn engineering data into usable performance insight.",
    strengths: [
      "Experimental assessment of 15+ sustainable asphalt mix designs",
      "Machine learning models for rutting susceptibility prediction",
      "Environmental impact support under CEQA and related frameworks",
    ],
    tools: ["MATLAB", "Minitab", "Python", "LCApave", "eLCAp", "ASTM and AASHTO methods"],
  },
};

const chips = document.querySelectorAll(".focus-chip");
const kicker = document.getElementById("focus-kicker");
const title = document.getElementById("focus-title");
const description = document.getElementById("focus-description");
const strengths = document.getElementById("focus-strengths");
const tools = document.getElementById("focus-tools");

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function setFocus(key) {
  const entry = focusData[key];
  if (!entry) return;

  kicker.textContent = entry.kicker;
  title.textContent = entry.title;
  description.textContent = entry.description;
  renderList(strengths, entry.strengths);
  renderList(tools, entry.tools);

  chips.forEach((chip) => {
    const isActive = chip.dataset.focus === key;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-selected", String(isActive));
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setFocus(chip.dataset.focus));
});

const yearTarget = document.getElementById("year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
