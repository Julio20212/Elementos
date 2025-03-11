function criarQuadrado(cor) {
    const quadrado = document.createElement('div');
    quadrado.classList.add('quadrado', cor);
    document.getElementById('quadrados').appendChild(quadrado);
}
function criarQuadrados() {
    const azul = document.createElement('div');
    azul.classList.add('quadrado-azul');  

    const vermelho = document.createElement('div');
    vermelho.classList.add('quadrado-vermelho');  

    azul.appendChild(vermelho);
    document.getElementById('container').appendChild(azul);
}


