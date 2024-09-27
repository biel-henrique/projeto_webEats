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
    let precoPrato = precoPratoFinal.innerHTML

    const atualizaQuadro = document.querySelector('.confirmaPrato')
    atualizaQuadro.innerHTML = `${nomePrato}: ${precoPrato}`
    return [precoPrato, nomePrato]
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

    return [precoBebida, nomeBebida]
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

    return [precoSobremesa, nomeSobremesa]
}

function contaTotal() {
    // Preço Prato

    const getPrecoPrato = document.querySelector(".containerPratos .selecao");
    let [precoPrato, nomePrato] = selecionaPrato(getPrecoPrato);
    let precoPratoCorreto = parseFloat(precoPrato.replace('R$ ', '').replace(',', '.'));
    
    // Preço Bebida

    const getPrecoBebida = document.querySelector(".containerBebidas .selecao");
    let [precoBebida, nomeBebida] = selecionaBebida(getPrecoBebida);
    let precoBebidaCorreto = parseFloat(precoBebida.replace('R$ ', '').replace(',', '.'));

     
    //  Preço Sobremesa

    const getPrecoSobremesa = document.querySelector(".containerSobremesas .selecao");
    let [precoSobremesa, nomeSobremesa] = selecionaSobremesas(getPrecoSobremesa);
    let precoSobremesaCorreto = parseFloat(precoSobremesa.replace('R$ ', '').replace(',', '.'))

    const somaTotal = (precoPratoCorreto + precoBebidaCorreto + precoSobremesaCorreto).toFixed(2)

    const atualizaQuadro = document.querySelector('.totalCompraFinal')
    atualizaQuadro.innerHTML = `Total: R$ ${somaTotal}`

    return [somaTotal, nomePrato, nomeBebida, nomeSobremesa]
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
        botao.innerHTML = "Finalizar pedido!"
    }
}

function whats() {
    let [soma, nomePrato, nomeBebida, nomeSobremesa] = contaTotal()
    
    const novoTexto = `Olá, gostaria de fazer o pedido: 
    - Prato: ${nomePrato.trim()}
    - Bebida: ${nomeBebida.trim()}
    - Sobremesa: ${nomeSobremesa.trim()}
    Total: ${soma}`;
    const numero = "5511952473534";
    const urlBase = `https://wa.me/${numero}?text=`;
    const urlCompleta = urlBase + encodeURIComponent(novoTexto);

    document.getElementById("linkWhats").href = urlCompleta;
}

function botaoFinalizar() {
    const oculto = document.querySelector('.telaFinal')
    oculto.classList.remove('oculto')



    contaTotal()
}

function cancelar() {
    const oculto = document.querySelector('.telaFinal');
    oculto.classList.add("oculto")
}








