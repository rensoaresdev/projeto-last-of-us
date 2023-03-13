/*
Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.
Passo 1 - dar um jeito de pegar os elementos HTML dos botões;

Passo 2 - dar um jeito de identificar o clique do usuário no botão;

Passo 3 - desmarcar o botão selecionado anterior;

Passo 4 - marcar o botão clicado como se estivesse selecionado;

Passo 5 - esconder a imagem de fundo anterior;

Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado;

*/
//Passo 1 - dar um jeito de pegar os elementos HTML dos botões;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - dar um jeito de identificar o clique do usuário no botão;
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoselecionado();
        
        selecionarBotaoCarrossel(botao);
        
        esconderImagemAtivaDeFundo();
       
        mostrarImagemDeFundo(indice);
    })
})

 //Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado;
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

//Passo 4 - marcar o botão clicado como se estivesse selecionado;
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

//Passo 5 - esconder a imagem ativa de fundo anterior;
function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

//Passo 3 - desmarcar o botão selecionado anterior;
function desativarBotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

