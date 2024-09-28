function selecionaPrato(prato, validacao=false) {
    const botaoAnterior = document.querySelector(".containerPratos .selecao")
    
    if(botaoAnterior !== null && botaoAnterior !== prato) {
        botaoAnterior.classList.remove("selecao")
    }
    if(botaoAnterior == prato && !validacao) {
        prato.classList.remove("selecao")
    }
     else {
        prato.classList.add("selecao")
    }
    
    const nomePratoFinal = document.querySelector('.containerPratos .selecao .formatTituloOpcao')
    var precoPratoFinal = document.querySelector('.containerPratos .selecao .preco')
    const atualizaQuadro = document.querySelector('.confirmaPrato')
    
    if(nomePratoFinal !== null && precoPratoFinal !== null && atualizaQuadro !== null) {
        var nomePrato = nomePratoFinal.innerHTML
        var precoPrato = precoPratoFinal.innerHTML
        atualizaQuadro.innerHTML = `${nomePrato}: ${precoPrato}`
        
    }
    
    habilitarBotao()

    return [precoPrato, nomePrato]
}

function selecionaBebida(bebida, validacao=false) {
    const botaoAnterior = document.querySelector(".containerBebidas .selecao")

    if(botaoAnterior !== null && botaoAnterior !== bebida) {
        botaoAnterior.classList.remove("selecao")
    }
    if(botaoAnterior == bebida && !validacao) {
        botaoAnterior.classList.remove("selecao")
    }
    else {
        bebida.classList.add("selecao")
    }

    const nomeBebidaFinal = document.querySelector('.containerBebidas .selecao .formatTituloOpcao')
    const precoBebidaFinal = document.querySelector('.containerBebidas .selecao .preco')
    const atualizaQuadro = document.querySelector('.confirmaBebida')
    
    if(nomeBebidaFinal !== null && precoBebidaFinal !== null && atualizaQuadro !== null) {
        var nomeBebida = nomeBebidaFinal.innerHTML
        var precoBebida = precoBebidaFinal.innerHTML
        atualizaQuadro.innerHTML = `${nomeBebida}: ${precoBebida}`
    }
    
    habilitarBotao()

    return [precoBebida, nomeBebida]
}

function selecionaSobremesas(sobremesa, validacao=false) {
    const botaoAnterior = document.querySelector(".containerSobremesas .selecao")

    if(botaoAnterior !== null && botaoAnterior !== sobremesa) {
        botaoAnterior.classList.remove("selecao")
    }
    if(botaoAnterior == sobremesa && !validacao) {
        botaoAnterior.classList.remove("selecao")
    }
    else {
        sobremesa.classList.add("selecao")
    }

    const nomeSobremesaFinal = document.querySelector('.containerSobremesas .selecao .formatTituloOpcao')
    const precoSobremesaFinal = document.querySelector('.containerSobremesas .selecao .preco')
    const atualizaQuadro = document.querySelector('.confirmaSobremesa')
    
    if(nomeSobremesaFinal !== null && precoSobremesaFinal !== null && atualizaQuadro !== null) {
        var nomeSobremesa = nomeSobremesaFinal.innerHTML
        var precoSobremesa = precoSobremesaFinal.innerHTML
        atualizaQuadro.innerHTML = `${nomeSobremesa}: ${precoSobremesa}`
    }
    
    habilitarBotao()

    return [precoSobremesa, nomeSobremesa]
}

function contaTotal() {
    // Preço Prato

    var getPrecoPrato = document.querySelector(".containerPratos .selecao");
    var [precoPrato, nomePrato] = selecionaPrato(getPrecoPrato, true);
    var precoPratoCorreto = parseFloat(precoPrato.replace("R$", "").replace(",", "."));

    // Preço Bebida

    const getPrecoBebida = document.querySelector(".containerBebidas .selecao");
    let [precoBebida, nomeBebida] = selecionaBebida(getPrecoBebida, true);
    let precoBebidaCorreto = parseFloat(precoBebida.replace("R$", "").replace(",", "."));

     
    //  Preço Sobremesa

    const getPrecoSobremesa = document.querySelector(".containerSobremesas .selecao");
    let [precoSobremesa, nomeSobremesa] = selecionaSobremesas(getPrecoSobremesa, true);
    let precoSobremesaCorreto = parseFloat(precoSobremesa.replace("R$", "").replace(",", "."))

    var somaTotal = (precoPratoCorreto + precoBebidaCorreto + precoSobremesaCorreto).toFixed(2)

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
     else {
        botao.setAttribute('disabled', '')
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido"
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








