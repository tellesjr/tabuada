function gerarTabuada() {
    let digiteUmNumero = window.document.querySelector('#digiteUmNumero')
    let mostrarTabuada = window.document.querySelector('#mostrarTabuada')
    if(digiteUmNumero.value.length == 0) {
        alert('[ERRO] Por favor, digite um número')
    } else {
        let numero = Number(digiteUmNumero.value)
        let c = 1
        mostrarTabuada.innerHTML = ''
        while (c <= 10) {
            let itemTabuada = window.document.createElement('option')
            itemTabuada.text = `${numero} X ${c} = ${numero*c}`
            mostrarTabuada.appendChild(itemTabuada)
            
            c++
        }
    }
}   