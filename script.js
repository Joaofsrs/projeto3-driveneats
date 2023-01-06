function validacao(){
    const valida = document.querySelectorAll(".clicado");
    const botaonaofunciona = document.querySelector(".naofunciona");
    const botaofunciona = document.querySelector('.funciona');

    if(valida.length === 3){
        botaonaofunciona.classList.add("escondeBotao");
        botaofunciona.classList.remove("escondeBotao");
        botaonaofunciona.setAttribute("disabled", "");
        botaofunciona.removeAttribute("disabled");
    }
}

function PratoClicado(clique){
    const verifica = document.querySelector(".pratos .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
    validacao();
}

function BebidaClicada(clique){
    const verifica = document.querySelector(".bebidas .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
    validacao();
}

function SobremesaClicada(clique){
    const verifica = document.querySelector(".sobremesas .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
    validacao();
}