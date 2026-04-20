(function () {
  "use strict";

  function initMobileNav() {
    var burger = document.querySelector(".burger");
    var panel = document.querySelector(".nav-panel");
    if (!burger || !panel) return;

    function setOpen(open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    }

    setOpen(false);

    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    document.addEventListener("click", function (e) {
      if (!panel.classList.contains("is-open")) return;
      var t = e.target;
      if (burger.contains(t) || panel.contains(t)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
