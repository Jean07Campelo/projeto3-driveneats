
/*PRATO PRINCIPAL*/
function selecionarPrato (prato) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".pratos").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    prato.classList.add("selecionado");
}

/*BEBIDAS*/
function selecionarBebida (bebida) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    bebida.classList.add("selecionado");
}

/*SOBREMESA*/
function selecionarSobremesa (sobremesa) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".sobremesas").querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    sobremesa.classList.add("selecionado");
}


