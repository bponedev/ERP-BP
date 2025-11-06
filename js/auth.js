/**
 * auth.js
 * Módulo responsável por login e autenticação.
 * Nesta versão, apenas simula o login e grava na sessionStorage.
 * Em versões futuras, se conecta ao backend (Node + DB).
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value.trim();
    const pass = document.getElementById("pass").value.trim();

    // Simulação de login — substitua pela chamada real ao backend
    if (user === "admin" && pass === "Previd1#") {
      sessionStorage.setItem("erpbp_user", JSON.stringify({ user }));
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
});
