/**
 * app.js
 * Controle geral do ERP-BP.
 * Responsável por inicializar a aplicação,
 * carregar módulos (UI, autenticação, etc.)
 * e gerenciar eventos globais.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("ERP-BP iniciado ✅");

  // Exemplo: carregar estado de autenticação (simulação)
  const userLogged = sessionStorage.getItem("erpbp_user");
  if (!userLogged && !location.pathname.endsWith("login.html")) {
    // Se o usuário não estiver logado, redireciona para login
    window.location.href = "login.html";
  }

  // Ativar menu lateral conforme página atual
  const current = location.pathname.split("/").pop();
  const active = document.querySelector(`.erpbp-sidebar li a[href="${current}"]`);
  if (active) active.parentElement.classList.add("active");

  // Logout (botão no topo)
  const logoutBtn = document.querySelector("#erpbp-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("erpbp_user");
      window.location.href = "login.html";
    });
  }

  console.log("Interface carregada: " + current);
});
