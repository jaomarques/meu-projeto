document.addEventListener("DOMContentLoaded", () => {
  const ContainerPrincipal = document.querySelector(".container-principal");
  const btnAdicionarCartao = document.querySelector("#btn-adicionar-cartao");

  if (ContainerPrincipal && btnAdicionarCartao) {
    btnAdicionarCartao.addEventListener("click", () => {
      const novoCartao = document.createElement("article");
      novoCartao.classList.add("cartao", "invisivel");
      novoCartao.innerHTML = `
        <h2>Novo Artigo</h2>
        <p>Este é um novo cartão adicionado dinamicamente.</p>
      `;
      
      ContainerPrincipal.appendChild(novoCartao);
      
      // força o navegador a processar a adição antes de remover a classe
      requestAnimationFrame(() => {
        novoCartao.classList.remove("invisivel");
      });
    });
  }
});