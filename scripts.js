let pratoSelecionado;
let valorPrato;
let bebidaSelecionada;
let valorBebida;
let sobremesaSelecionada;
let valorSobremesa;

let total = 0;

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

    bebidaSelecionada = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".nome-item").innerHTML;
    valorBebida = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".valor").innerHTML;
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

    sobremesaSelecionada = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".nome-item").innerHTML;
    valorSobremesa = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".valor").innerHTML;
}

//VALOR TOTAL
function valorTotal () {
    //remove R$ e espaço após
    valorPrato = valorPrato.replace("R$ ","");
    valorBebida = valorBebida.replace("R$ ","");
    valorSobremesa = valorSobremesa.replace("R$ ","");

    /*substitui virgula por ponto*/
    valorPrato = valorPrato.replace("," , ".");
    valorBebida = valorBebida.replace("," , ".");
    valorSobremesa = valorSobremesa.replace("," , ".");

    //converte para number e soma
    total = Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa);
    total.toFixed(2);

    console.log(total);
    console.log(typeof(total));
}


//MENSAGEM USUARIO
function mensagemUsuario () {
    let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
     - Prato: ${pratoSelecionado}
     - Bebida: ${bebidaSelecionada}
     - Sobremesa: ${sobremesaSelecionada}

     Total: R$ ${total}`);
     window.open(`https://wa.me/5511974212660?text=${mensagem}`);
}
