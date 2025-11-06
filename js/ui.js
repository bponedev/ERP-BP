/**
 * ui.js
 * Responsável por interações da interface:
 * - Mostrar/ocultar sidebar em telas pequenas
 * - Exibir fade de scroll
 * - Melhorar UX responsiva
 */

document.addEventListener("DOMContentLoaded", () => {
  // Fade inferior (indicador de scroll)
  const fadeIndicator = document.createElement("div");
  fadeIndicator.className = "scroll-indicator";
  document.body.appendChild(fadeIndicator);

  const updateFade = () => {
    if (window.scrollY < 20) fadeIndicator.classList.add("visible");
    else fadeIndicator.classList.remove("visible");
  };

  updateFade();
  window.addEventListener("scroll", updateFade);

  // Toggle sidebar (mobile)
  const sidebar = document.querySelector(".erpbp-sidebar");
  if (sidebar) {
    const toggle = document.createElement("button");
    toggle.textContent = "☰";
    toggle.className = "sidebar-toggle";
    document.body.appendChild(toggle);
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});
