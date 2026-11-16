const form = document.getElementById("form");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", async function (evento) {
  evento.preventDefault();
  const dados = { nome: document.getElementById("nome").value, mensagem: document.getElementById("mensagem").value };
  resposta.textContent = "Enviando...";
  try {
    const r = await fetch("api/contato.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
    const texto = await r.json();
    resposta.textContent = "Status " + r.status + ": " + JSON.stringify(texto);
  } catch (erro) {
    resposta.textContent = "Falha de rede: " + erro.message;
  }
});
