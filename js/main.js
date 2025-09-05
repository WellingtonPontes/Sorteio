function sorteio(NAsortea,QuantidadeTotal) {
    const NumerosSorteados = []

    while (NumerosSorteados.length<NAsortea) {
        let sortiado = Math.floor(Math.random()*QuantidadeTotal + 1)
        if(!NumerosSorteados.includes(sortiado)){
            NumerosSorteados.push(sortiado)
        }
    }
    NumerosSorteados.sort((a, b) => a - b)
    
    return MostraResultado(NumerosSorteados)
}

function MostraResultado(NumerosSorteados) {

    const resultado = document.getElementById("resultado");
    const jogo = document.getElementById("jogo")

    if(NumerosSorteados.length == 5){
        jogo.textContent = "Quina"
    }else if(NumerosSorteados.length ==15){
        jogo.textContent = "Lotofácil"
    }else if(NumerosSorteados.length == 6){
        jogo.textContent = "Mega-sena"
    }

        const resultadoTexto = NumerosSorteados.join('-');
        resultado.textContent = resultadoTexto;
    

}

