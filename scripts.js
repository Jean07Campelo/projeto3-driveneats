
function selecionarPrato (prato) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    prato.classList.add("selecionado");
}

function selecionarBebida (bebida) {
    /*BUSCA ITEM SELECIONADO*/
    const itemSelecionado = document.querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    /*ADICIONA CLASSE SELECIONADO NO ELEMENTO CLICADO*/
    bebida.classList.add("selecionado");
}
