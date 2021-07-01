
let opcoes

for (let contador = 2021; contador >= 1900; contador--) {
opcoes = opcoes + `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes


let lista = ''

let clientes = ['thiago','alex','herlon','ingrid']

for(let contador = 0; contador <= clientes.length - 1; contador++){
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista