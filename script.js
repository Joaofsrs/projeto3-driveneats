let valorPrato, valorBebida, valorSobremesa, valorTotal;
let nomePrato, nomeBebida, nomeSobremesa;
let linkMensagem;
let nome, endereco;

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

function Removeclicado(classeRecebida){
    const verifica = document.querySelector(`${classeRecebida} .clicado`);

    if(verifica !== null){
        verifica.classList.remove("clicado");
    }
}

function PratoClicado(clique){
    Removeclicado(".pratos")

    clique.classList.add("clicado");

    valorPrato = Number(clique.querySelector(".valor").innerHTML.replace(',', '.')).toFixed(2);
    nomePrato = clique.querySelector("h3").innerHTML;

    validacao();
}

function BebidaClicada(clique){
    Removeclicado(".bebidas")

    clique.classList.add("clicado");

    valorBebida = Number(clique.querySelector(".valor").innerHTML.replace(',', '.')).toFixed(2);
    nomeBebida = clique.querySelector("h3").innerHTML;

    validacao();
}

function SobremesaClicada(clique){
    Removeclicado(".sobremesas")

    clique.classList.add("clicado");

    valorSobremesa = Number(clique.querySelector(".valor").innerHTML.replace(',', '.')).toFixed(2);
    nomeSobremesa = clique.querySelector("h3").innerHTML;

    validacao();
}

function getNomeEndereco(){
    nome = prompt("Digite seu nome:");
    endereco = prompt("Digite seu endereço:");
}

function mensagem(){
    getNomeEndereco();

    const mensagemPEnvio = `Olá, gostaria de fazer o pedido:${"\n"}- Prato: ${nomePrato}${"\n"}- Bebida: ${nomeBebida}${"\n"}- Sobremesa: ${nomeSobremesa}${"\n"}Total: R$ ${valorTotal}${"\n\n"}Nome: ${nome}${"\n"}Endereço: ${endereco}`;
    const texto = encodeURIComponent(mensagemPEnvio);

    linkMensagem = "https://wa.me/559999999999?text="+texto;
}

function mandarMensagem(){
    mensagem();

    window.open(linkMensagem);
}

function CalculaPreco(){
    valorTotal  = Number(Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)).toFixed(2);
    mandarMensagem()
}