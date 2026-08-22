(function () {
  "use strict";

  /* ---------- Render team cards ---------- */
  function renderTeam(containerId, team) {
    const container = document.getElementById(containerId);
    if (!container) return;

    team.forEach(function (mon) {
      const card = document.createElement("article");
      card.className = "mon-card";
      card.style.setProperty("--card-type-color", "var(--type-" + mon.types[0] + ")");

      function renderTypes(types) {
        return types
          .map(function (t) {
            return '<span class="type-chip" style="background:var(--type-' + t + ')">' + t + "</span>";
          })
          .join("");
      }

      const typeChips = renderTypes(mon.types);
      const megaTypeChips = mon.mega ? renderTypes(mon.mega.types) : "";
      const moveItems = mon.moves
          .map(function (m) {
            return '<li style="background:var(--type-' + m.type + ')" title="' + m.type + '"><span class="move-name">' + m.name + "</span></li>";
          })
          .join("");

      const description = mon.description || "No description has been added yet.";
      function renderSprite(path, name, isMegaSprite) {
          const toggle = mon.mega
            ? '<button class="mega-toggle" type="button" aria-pressed="' + (isMegaSprite ? "true" : "false") + '" aria-label="' + (isMegaSprite ? "Return to " + mon.name : "Mega Evolve " + mon.name) + '" title="' + (isMegaSprite ? "Return to base form" : "Mega Evolve") + '"><span aria-hidden="true">✦</span><span class="mega-toggle-text">MEGA</span></button>'
            : "";

          return '<div class="img-slot img-slot--sprite" data-placeholder-label="Add photo/' + path + '"><img src="' + path + '" alt="' + name + '" onerror="this.closest(\'.img-slot\').classList.add(\'img-slot--empty\')">' + toggle + "</div>";
      }

      const spriteMarkup = mon.mega
          ? '<div class="sprite-flip"><div class="sprite-flip-inner"><div class="sprite-flip-face sprite-flip-face--base">' +
              renderSprite(mon.sprite || "", mon.name, false) +
            "</div>" +
            '<div class="sprite-flip-face sprite-flip-face--mega">' +
              renderSprite(mon.mega.sprite || "", mon.mega.name, true) +
            "</div></div></div>"
          : renderSprite(mon.sprite || "", mon.name, false);
      const descriptionMarkup = mon.mega
          ? '<p class="mon-description mon-description--base">' + description + '</p><p class="mon-description mon-description--mega">' + mon.mega.description + "</p>"
          : '<p class="mon-description">' + description + "</p>";

      card.classList.toggle("mon-card--has-mega", Boolean(mon.mega));
      card.innerHTML =
        '<div class="card-flip-inner" tabindex="0" role="button" aria-pressed="false" aria-label="Show description for ' + mon.name + '">' +
          '<div class="card-side card-side--front">' +
            spriteMarkup +
            '<div class="mon-head"><span class="mon-name">' + mon.name + '</span><span class="mon-level">Lv. ' + mon.level + "</span></div>" +
            '<div class="mon-types mon-types--base">' + typeChips + "</div>" +
            (mon.mega ? '<div class="mon-types mon-types--mega">' + megaTypeChips + "</div>" : "") +
            '<div class="moves-panel"><p class="card-panel-label">Moves</p><ul class="mon-moves">' + moveItems + "</ul></div>" +
            '<p class="flip-hint">↻ tap for description</p>' +
          "</div>" +
          '<div class="card-side card-side--back"><p class="card-panel-label">Description</p>' + descriptionMarkup + '<p class="flip-hint">↻ tap to return to moves</p></div>' +
        "</div>";

      container.appendChild(card);
    });
  }

  renderTeam("runAndBunGrid", typeof runAndBunTeam !== "undefined" ? runAndBunTeam : []);
  renderTeam("emeraldKaizoGrid", typeof emeraldKaizoTeam !== "undefined" ? emeraldKaizoTeam : []);
  renderTeam("radicalRedGrid", typeof radicalRedTeam !== "undefined" ? radicalRedTeam : []);

  /* ---------- Flip cards (team card <-> description) ---------- */
  function toggleDescription(el) {
    const flipped = el.classList.toggle("is-description");
    el.setAttribute("aria-pressed", flipped ? "true" : "false");
    el.setAttribute("aria-label", flipped ? "Return to card details" : "Show description");
  }

  document.addEventListener("click", function (e) {
    const megaToggle = e.target.closest(".mega-toggle");
    if (megaToggle) {
      const card = megaToggle.closest(".mon-card--has-mega");
      const isMega = card.classList.toggle("is-mega");
      card.querySelectorAll(".mega-toggle").forEach(function (button) {
        button.setAttribute("aria-pressed", isMega ? "true" : "false");
      });
      return;
    }

    const inner = e.target.closest(".card-flip-inner");
    if (inner) toggleDescription(inner);
  });

  document.addEventListener("pointerover", function (e) {
    const megaToggle = e.target.closest(".mega-toggle");
    if (megaToggle) megaToggle.closest(".mon-card--has-mega").classList.add("is-mega-ready");
  });

  document.addEventListener("pointerout", function (e) {
    const megaToggle = e.target.closest(".mega-toggle");
    if (megaToggle && !megaToggle.contains(e.relatedTarget)) {
      megaToggle.closest(".mon-card--has-mega").classList.remove("is-mega-ready");
    }
  });

  document.addEventListener("focusin", function (e) {
    const megaToggle = e.target.closest(".mega-toggle");
    if (megaToggle) megaToggle.closest(".mon-card--has-mega").classList.add("is-mega-ready");
  });

  document.addEventListener("focusout", function (e) {
    const megaToggle = e.target.closest(".mega-toggle");
    if (megaToggle) megaToggle.closest(".mon-card--has-mega").classList.remove("is-mega-ready");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (e.target.closest(".mega-toggle")) return;
    const inner = e.target.closest(".card-flip-inner");
    if (!inner) return;
    e.preventDefault();
    toggleDescription(inner);
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ---------- Count-up hero stats ---------- */
  const statEls = document.querySelectorAll(".stat-num");

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(progress * target);
      el.textContent = value + (progress === 1 ? (el.getAttribute("data-suffix") || "") : "");
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window && statEls.length) {
    const statObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    statEls.forEach(function (el) {
      statObserver.observe(el);
    });
  } else {
    statEls.forEach(animateCount);
  }
})();
