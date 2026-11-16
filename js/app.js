const vitrine = document.getElementById("vitrine");
const estado = document.getElementById("estado");

async function carregar(categoria) {
  estado.textContent = "Carregando...";
  try {
    const url = "api/produtos.php?categoria=" + categoria;
    const resposta = await fetch(url);
    if (!resposta.ok) { throw new Error("status " + resposta.status); }
    const produtos = await resposta.json();
    mostrar(produtos);
  } catch (erro) {
    estado.textContent = "Não foi possível carregar: " + erro.message;
  }
}

function mostrar(produtos) {
  vitrine.innerHTML = ""; estado.textContent = "";
  if (produtos.length === 0) {
    estado.textContent = "Nenhum produto nesta categoria.";
    return;
  }
  for (let i = 0; i < produtos.length; i++) {
    const p = document.createElement("p");
    p.textContent = produtos[i].nome + " - " + produtos[i].preco;
    vitrine.appendChild(p);
  }
}

carregar("");
