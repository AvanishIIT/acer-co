const projects = [
  {
    slug: "venba-nagar",
    type: "residential",
    name: "Venba Nagar",
    location: "Krishnapuram Perambalur",
    image:"assets/venbanagar/7.JPG" ,
    description: "Premium villa plots close to schools, and fast-developing residential neighbourhoods in Perambalur.",
    fullDescription: "Venba nagar is planned for refined Panchayat living with generous road widths, green pockets, and easy access to employment hubs. The community balances investment potential with calm, family-friendly surroundings.",
    amenities: ["Grand entry arch", "33 ft roads", "Parks", "Underground drainage", "Rainwater harvesting", "CCTV provision"],
    sizes: ["1000 sq.ft", "1350 sq.ft", "1800 sq.ft", "2200 sq.ft"],
    approval: "Corporation limit plots with layout approval and verified encumbrance records.",
    rate: "₹650 / sq.ft",
    total: "Plots from ₹5 lakhs",
    emi: "EMI options from ₹39,700/month with partner banks",
    map: "https://maps.google.com/maps?q=11.3823929,78.8170853&z=15&output=embed",
    gallery: [
		"assets/venbanagar/5.jpeg",
        "assets/venbanagar/1.jpeg",
		"assets/venbanagar/2.jpeg",
		"assets/venbanagar/3.jpeg",
		"assets/venbanagar/4.jpeg",
		"assets/venbanagar/6.JPG",
		"assets/venbanagar/7.JPG"
    ],
    plots: [
      ["01", "1498.3 sq.ft", "Available"],
      ["02", "1374.4 sq.ft", "Reserved "],
      ["03", "1409 sq.ft",   "Reserved "],
      ["04", "1446 sq.ft",   "Available"],
      ["05", "1481 sq.ft",   "Available"],
      ["06", "1518 sq.ft",   "Available"],
      ["07", "1555.8 sq.ft", "Available"],
      ["08", "1592.9 sq.ft", "Available"],
      ["09", "1618.1 sq.ft", "Available"],
      ["10", "2220.6 sq.ft", "Reserved "],
      ["11", "1347 sq.ft",   "Available"],
      ["12", "1347 sq.ft",   "Available"],
      ["13", "1347 sq.ft",   "Available"],
      ["14", "1340 sq.ft",   "Available"],
      ["15", "1340 sq.ft",   "Available"],
      ["16", "1347 sq.ft",   "Available"],
      ["17", "2010 sq.ft",   "Reserved "],
      ["18", "3048.4 sq.ft", "Reserved "],
      ["19", "1800 sq.ft",   "Reserved "],
      ["20", "1800 sq.ft",   "Available"],
      ["21", "1792.5 sq.ft", "Available"],
      ["22", "1792.5 sq.ft", "Available"],
      ["23", "1800 sq.ft",   "Available"],
      ["24", "1800 sq.ft",   "Available"],
      ["25", "1800 sq.ft",   "Available"],
      ["26", "1620 sq.ft",   "Reserved "],
      ["27", "1494 sq.ft",   "Reserved "],
      ["28", "1504 sq.ft",   "Reserved "],
      ["29", "1639.2 sq.ft", "Reserved "],
      ["30", "1457 sq.ft",   "Available"],
      ["31", "1178.5 sq.ft", "Available"],
      ["32", "1178.5 sq.ft", "Available"],
      ["33", "1459.3 sq.ft", "Available"],
      ["34", "1459.3 sq.ft", "Available"],
      ["35", "1178.5 sq.ft", "Available"],
      ["36", "1178.5 sq.ft", "Available"],
      ["37", "1266 sq.ft",   "Available"],
      ["38", "1426.7 sq.ft", "Reserved "],
      ["39", "1310.8 sq.ft", "Reserved "],
      ["40", "2394 sq.ft",   "Available"],
      ["41", "1486 sq.ft",   "Available"], 
      ["42", "1492.5 sq.ft", "Available"],
      ["43", "1486 sq.ft",   "Available"],
      ["44", "1482 sq.ft",   "Available"],
      ["45", "1667 sq.ft",   "Available"],
      ["46", "1712.5 sq.ft", "Available"],
      ["47", "1764 sq.ft",   "Reserved "],
      ["48", "1796.5 sq.ft", "Reserved "],
      ["49", "1849 sq.ft",   "Available"],
      ["50", "1830 sq.ft",   "Available"]
    ]
  },
 
  {
    slug: "industrial-land",
    type: "industrial",
    name: "Industrial Shed",
    location: "Pollachi–Palladam State Highway",
    image:"assets/venbanagar/7.JPG" ,
    description: "5 Acre Industrial Property for Sale in Mettuvavi | 55,000 Sq Ft Industrial Shed Near Pollachi–Palladam State Highway.",
    fullDescription: "Discover a premium 5-acre industrial property in Mettuvavi, strategically located near the Pollachi–Palladam State Highway. The property features a 55,000 sq. ft. industrial shed, 100 HP power connection, and a reliable water source, making it ideal for manufacturing units, warehouses, logistics hubs, engineering industries, textile units, and commercial operations. With excellent road connectivity and ready-to-use infrastructure, this industrial facility offers outstanding investment potential and business growth opportunities in the rapidly developing Pollachi region.",
    amenities: ["Grand entry arch", "33 ft roads", "Parks", "Underground drainage", "Rainwater harvesting", "CCTV provision"],
    sizes: ["55000 sq.ft"],
    approval: "Corporation limit plots with layout approval and verified encumbrance records.",
    rate: "Contact For Further Details",
    total: "Contact For Further Details",
    emi: "EMI is NOT available",
    map: "https://maps.google.com/maps?q=11.3823929,78.8170853&z=15&output=embed",
    gallery: [
		"assets/venbanagar/5.jpeg"
        
    ],
    plots: [
      ["Industrial Shed", "55,000 sq.ft", "Available"],
      
    ]

}

];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function wireNavigation() {
  const header = qs("[data-header]");
  const toggle = qs("[data-menu-toggle]");
  const nav = qs("[data-nav]");

  const syncHeader = () => {
  const isScrolled = window.scrollY > 12;

  header?.classList.toggle("scrolled", isScrolled);

  const logo = document.querySelector("#siteLogo");

  if (!logo) return;

  if (isScrolled) {
    logo.setAttribute("src", "assets/logo.svg");
  } else {
    logo.setAttribute("src", "assets/logo.png");
  }
};

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    document.body.classList.toggle("menu-open", nav?.classList.contains("open"));
  });

  qsa(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

function wireReveal() {
  const items = qsa(".reveal, .reveal-left, .reveal-right");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
}

function renderProjectCards() {
  const list = qs("[data-project-list]");
  if (!list) return;

  list.innerHTML = projects.map((project) => `
    <article class="project-card reveal" data-tilt  data-type="${project.type}">
      <img src="${project.image}" alt="${project.name} project at ${project.location}" loading="lazy">
      <div class="project-card-content">
        <p class="project-meta">${project.location}</p>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a class="btn primary" href="project.html?project=${project.slug}">Know More</a>
      </div>
    </article>
  `).join("");
   wireFilters(); 
}

function setMeta(selector, attr, value) {
  const node = qs(selector);
  if (node) node.setAttribute(attr, value);
}

function renderProjectPage() {
  if (!qs("[data-project-page]")) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || projects[0].slug;
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const pageUrl = `https://acreandco.example.com/project.html?project=${project.slug}`;

  document.title = `${project.name} ${project.location} | Acre & Co`;
  const titleNode = qs("[data-meta-title]");
  if (titleNode) titleNode.textContent = document.title;
  setMeta("[data-meta-description]", "content", `${project.name} by Acre & Co: amenities, plot sizes, approval details, pricing, availability, gallery, map, and inquiry form.`);
  setMeta("[data-canonical]", "href", pageUrl);
  setMeta("[data-og-title]", "content", `${project.name} | Acre & Co`);
  setMeta("[data-og-description]", "content", project.description);
  setMeta("[data-og-image]", "content", project.image);
  setMeta("[data-twitter-title]", "content", `${project.name} | Acre & Co`);
  setMeta("[data-twitter-description]", "content", project.description);
  setMeta("[data-twitter-image]", "content", project.image);

  qs("[data-project-hero]").src = project.image;
  qs("[data-project-hero]").alt = `${project.name} in ${project.location}`;
  qs("[data-project-name]").textContent = project.name;
  qs("[data-project-description]").textContent = project.fullDescription;
  qs("[data-project-rate]").textContent = project.rate || "";
  qs("[data-project-total]").textContent = project.total || "";
  qs("[data-project-emi]").textContent = project.emi || "";

  // show location only for residential and commercial
  const locationEl = qs("[data-project-location]");
  if (locationEl) {
    if (project.type === "agri" || project.type === "industrial") {
      locationEl.style.display = "none";
    } else {
      locationEl.textContent = project.location;
    }
  }

  // show map only for residential and commercial
  const mapEl = qs("[data-project-map]");
  if (mapEl) {
    if (project.type === "agri" || project.type === "industrial") {
      mapEl.style.display = "none";
    } else {
      mapEl.src = project.map;
    }
  }

  // show amenities, sizes, approval only for residential and commercial
  const detailPanels = qs(".detail-panels");
  if (detailPanels) {
    detailPanels.style.display = 
      (project.type === "agri" || project.type === "industrial") ? "none" : "";
  }

  // show plot table only for residential and commercial
  const plotSection = qs("[data-plot-table]")?.closest(".section");
  if (plotSection) {
    plotSection.style.display = 
      (project.type === "agri" || project.type === "industrial") ? "none" : "";
  }

  // show approval only for residential and commercial
  if (project.approval) {
    qs("[data-project-approval]").textContent = project.approval;
  }

  if (project.amenities) {
    qs("[data-project-amenities]").innerHTML = project.amenities.map((item) => `<li>${item}</li>`).join("");
  }
  if (project.sizes) {
    qs("[data-project-sizes]").innerHTML = project.sizes.map((item) => `<li>${item}</li>`).join("");
  }
  qs("[data-plot-table]").innerHTML = project.plots.map(([number, size, status]) => `
    <tr>
      <td>${number}</td>
      <td>${size}</td>
      <td><span class="status ${status.toLowerCase()}">${status}</span></td>
    </tr>
  `).join("");
  qs("[data-gallery]").innerHTML = project.gallery.map((image, index) => `
    <button type="button" data-gallery-item="${image}" aria-label="Open ${project.name} gallery image ${index + 1}">
      <img src="${image}" alt="${project.name} gallery image ${index + 1}" loading="lazy">
    </button>
  `).join("");
}

function wireLightbox() {
  const lightbox = qs("[data-lightbox]");
  const image = qs("[data-lightbox-image]");
  const close = qs("[data-lightbox-close]");
  if (!lightbox || !image) return;

  qsa("[data-gallery-item]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.galleryItem;
      lightbox.hidden = false;
    });
  });

  close?.addEventListener("click", () => {
    lightbox.hidden = true;
    image.removeAttribute("src");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.hidden = true;
      image.removeAttribute("src");
    }
  });
}

function wireForms() {
  qsa("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name    = form.querySelector("[name='name']")?.value || "";
      const phone   = form.querySelector("[name='phone']")?.value || "";
      const email   = form.querySelector("[name='email']")?.value || "";
      const message = form.querySelector("[name='message']")?.value || "";
      const plot    = form.querySelector("[name='plot']")?.value || "";

      const lines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        plot    ? `Interested Plot: ${plot}`  : "",
        message ? `Requirement: ${message}`   : ""
      ].filter(Boolean).join("\n");

      const text = encodeURIComponent(lines);

      const note = qs("[data-form-note]", form);
      if (note) note.textContent = "Thank you! Redirecting to WhatsApp...";

      setTimeout(() => {
        window.open(`https://wa.me/919042435869?text=${text}`, "_blank");
        form.reset();
      }, 1000);
    });
  });
}

function wireTilt() {
  const tiltItems = qsa("[data-tilt]");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  tiltItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
      item.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
      item.style.setProperty("--mx", `${(event.clientX - rect.left).toFixed(0)}px`);
      item.style.setProperty("--my", `${(event.clientY - rect.top).toFixed(0)}px`);
      item.classList.add("is-tilting");
    });

    item.addEventListener("pointerleave", () => {
      item.classList.remove("is-tilting");
      item.style.removeProperty("--rx");
      item.style.removeProperty("--ry");
    });
  });
}

function wireFilters() {
  const buttons = qsa("[data-filter]");
  const cards = qsa("[data-type]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        if (filter === "all" || card.dataset.type === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}


function wireHero3d() {
  const hero3d = qs("[data-hero-3d]");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!hero3d || !canHover) return;

  window.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    hero3d.style.setProperty("--scene-x", `${(x * 18).toFixed(2)}deg`);
    hero3d.style.setProperty("--scene-y", `${(-y * 12).toFixed(2)}deg`);
  }, { passive: true });
}

renderProjectCards();
renderProjectPage();
wireNavigation();
wireReveal();
wireLightbox();
wireForms();
wireTilt();
wireHero3d();
