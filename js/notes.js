/**
 * notes.js
 * Gerencia as anotações dentro da página de cliente.
 * Nesta versão, salva localmente (LocalStorage).
 * Em uma versão com backend, cada anotação seria gravada no banco.
 */

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("notes-list");
  const form = document.getElementById("note-form");
  if (!list || !form) return;

  const clientId = new URLSearchParams(location.search).get("id") || "default";

  // Função para renderizar anotações do LocalStorage
  const renderNotes = () => {
    list.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem(`erpbp_notes_${clientId}`) || "[]");
    notes.forEach((n) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${n.text}</p><small class="muted">${n.date}</small>`;
      list.appendChild(li);
    });
  };

  // Ao enviar o formulário, cria nova anotação
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("note-text").value.trim();
    if (!text) return;

    const notes = JSON.parse(localStorage.getItem(`erpbp_notes_${clientId}`) || "[]");
    notes.push({ text, date: new Date().toLocaleString("pt-BR") });
    localStorage.setItem(`erpbp_notes_${clientId}`, JSON.stringify(notes));
    form.reset();
    renderNotes();
  });

  // Inicializa
  renderNotes();
});
