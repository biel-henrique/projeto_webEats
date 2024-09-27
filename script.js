function selecionaPrato(prato) {
    const botaoAnterior = document.querySelector(".containerPratos .selecao")

    if(botaoAnterior !== null) {
        botaoAnterior.classList.remove("selecao")
    }

    prato.classList.add("selecao")
    habilitarBotao()
    const nomePratoFinal = document.querySelector('.containerPratos .selecao .formatTituloOpcao')
    const nomePrato = nomePratoFinal.innerHTML

    const precoPratoFinal = document.querySelector('.containerPratos .selecao .preco')
    const precoPrato = precoPratoFinal.innerHTML

    const atualizaQuadro = document.querySelector('.confirmaPrato')
    atualizaQuadro.innerHTML = `${nomePrato}: ${precoPrato}`
    return precoPrato
}

function selecionaBebida(bebida) {
    const botaoAnterior = document.querySelector(".containerBebidas .selecao")

    if(botaoAnterior !== null) {
        botaoAnterior.classList.remove("selecao")
    }

    bebida.classList.add("selecao")
    habilitarBotao()
    const nomeBebidaFinal = document.querySelector('.containerBebidas .selecao .formatTituloOpcao')
    const nomeBebida = nomeBebidaFinal.innerHTML

    const precoBebidaFinal = document.querySelector('.containerBebidas .selecao .preco')
    const precoBebida = precoBebidaFinal.innerHTML

    const atualizaQuadro = document.querySelector('.confirmaBebida')
    atualizaQuadro.innerHTML = `${nomeBebida}: ${precoBebida}`
}

function selecionaSobremesas(sobremesa) {
    const botaoAnterior = document.querySelector(".containerSobremesas .selecao")

    if(botaoAnterior !== null) {
        botaoAnterior.classList.remove("selecao")
    }

    sobremesa.classList.add("selecao")
    habilitarBotao()
    const nomeSobremesaFinal = document.querySelector('.containerSobremesas .selecao .formatTituloOpcao')
    const nomeSobremesa = nomeSobremesaFinal.innerHTML

    const precoSobremesaFinal = document.querySelector('.containerSobremesas .selecao .preco')
    const precoSobremesa = precoSobremesaFinal.innerHTML

    const atualizaQuadro = document.querySelector('.confirmaSobremesa')
    atualizaQuadro.innerHTML = `${nomeSobremesa}: ${precoSobremesa}`
}

function contaTotal(precoPrato) {
    // // Preço prato
    //  const getPrecoPrato = document.querySelector(".containerPratos .selecao .preco");
    //  let precoPrato = getPrecoPrato.textContent.replace('R$ ', '')
    //  precoPrato = parseFloat(precoPrato.replace(',', '.'))
     
    //  const getPrecoBebida = document.querySelector(".containerBebidas .selecao .preco");
    //  let precoBebida = getPrecoBebida.textContent.replace('R$ ', '')
    //  precoBebida = parseFloat(precoBebida.replace(',', '.'))
     
    //  // Preço Sobremesa
    //  const getPrecoSobremesa = document.querySelector(".containerSobremesas .selecao .preco");
    //  let precoSobremesa = getPrecoSobremesa.textContent.replace('R$ ', '')
    //  precoSobremesa = parseFloat(precoSobremesa.replace(',', '.'))
     

    //  const precoTotalCompra = (precoPrato + precoBebida + precoSobremesa)
    //  return precoTotalCompra.toFixed(2)

    const atualizaQuadro = document.querySelector('.totalCompraFinal')
    

    return atualizaQuadro.innerHTML = `${precoPrato}`
    
}

function habilitarBotao() {
    const prato = document.querySelectorAll(".containerPratos .selecao");
    const bebidas = document.querySelectorAll(".containerBebidas .selecao");
    const sobremesa = document.querySelectorAll(".containerSobremesas .selecao");

    const possuiSelecaoPrato = prato.length > 0
    const possuiSelecaoBebidas = bebidas.length > 0
    const possuiSelecaoSobremesa = sobremesa.length > 0

    const botao = document.getElementsByClassName('finalizacao')[0];

    if(possuiSelecaoPrato && possuiSelecaoBebidas && possuiSelecaoSobremesa){
        botao.removeAttribute('disabled')
    }
}

// function preenchimentoDadosFinais(nomePrato) {
//     const pratoFinal = document.querySelector('.confirmaPrato')
//     pratoFinal.innerHTML = `${nomePrato}`
//     return pratoFinal
// }

function botaoFinalizar() {
    const oculto = document.querySelector('.telaFinal')
    oculto.classList.remove('oculto')

}

function cancelar() {
    const oculto = document.querySelector('.telaFinal');
    oculto.classList.add("oculto")
}








