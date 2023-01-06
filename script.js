function PratoClicado(clique){
    const verifica = document.querySelector(".pratos .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
}

function BebidaClicada(clique){
    const verifica = document.querySelector(".bebidas .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
}

function SobremesaClicada(clique){
    const verifica = document.querySelector(".sobremesas .clicado");

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }

    clique.classList.add("clicado");
}