
let clientes = [
    {
        nome: 'Alex',
        idade: 35,
        linguagens: ['javascript', 'css', 'html', 'python']
    },
    {
        nome: 'Herlon',
        idade: 7,
        linguagens: ['javascript', 'css', 'html', 'java']
    },
    {
        nome: 'Ingrid',
        idade: 33,
        linguagens: ['c', 'c++', 'c#', 'python']
    }
]

/* for (let contador = 0; contador < clientes.length; contador++){ 
    console.log(clientes[contador].nome)
}


*/

let htmlClientes = ''


for (let cliente of clientes) {

   let listaLinguagens = ''

   for( let linguagem of cliente.linguagens) {
       listaLinguagens += `<li>${linguagem}</li>`
   }


   htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
   `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes