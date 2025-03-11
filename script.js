function adcElemento() {
    const h1 = document.createElement("h1");//cria elemento
    h1.textContent = "Oi, boa noite";//adiciona texto no elemento
    document.body.appendChild(h1);//anexa o elelmento ao corpo da página
}

function criarBotao() {
    const botao = document.createElement("button");//criar botão
    botao.textContent = "Novo Botão";//definir texto
    botao.classList.add("botao-estilizado"); //adicionar classe CSS
    document.body.appendChild(botao);//adicionar ao corpo da página
}

function mudarCorFundo() {
    if (document.body.classList.contains("azul")) {
     document.body.classList.replace("azul", "vermelho");
    } else {
       document.body.classList.replace("vermelho", "azul");
      }
  }