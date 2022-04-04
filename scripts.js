let pratoSelecionado;
let valorPrato;
let bebidaSelecionada;
let valorBebida;
let sobremesaSelecionada;
let valorSobremesa;

function tudoSelecionado () {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada !== undefined) {
        document.querySelector(".info-inferior-fechar").classList.remove("esconder");
    }
}

//PRATO PRINCIPAL
function selecionarPrato (prato) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".pratos").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
        itemSelecionado.querySelector(".icone-selecionado").classList.add("esconder");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    prato.classList.add("selecionado");
    prato.querySelector(".icone-selecionado").classList.remove("esconder");
    
    pratoSelecionado = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".nome-item").innerHTML;
    valorPrato = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".valor").innerHTML;    
}

//BEBIDAS
function selecionarBebida (bebida) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
        itemSelecionado.querySelector(".icone-selecionado").classList.add("esconder");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    bebida.classList.add("selecionado");
    bebida.querySelector(".icone-selecionado").classList.remove("esconder");

    bebidaSelecionada = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".nome-item").innerHTML;
    valorBebida = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".valor").innerHTML;
}

//SOBREMESA
function selecionarSobremesa (sobremesa) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".sobremesas").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
        itemSelecionado.querySelector(".icone-selecionado").classList.add("esconder");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    sobremesa.classList.add("selecionado");
    sobremesa.querySelector(".icone-selecionado").classList.remove("esconder");

    sobremesaSelecionada = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".nome-item").innerHTML;
    valorSobremesa = document.querySelector(".pratos").querySelector(".selecionado").querySelector(".valor").innerHTML;
}

