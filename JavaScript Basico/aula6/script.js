/*

string
number
boolean
array
object
undefined
null

*/


// string
let nome = 'alex'
console.log(nome)

//string - concatenada
let sobrenome = 'amancio'
// console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

// number
let idade = 36
console.log(idade + 10)

// number - float
let porcent = 10.2
console.log(porcent + '%')

//number - boolean (true or false)

let maiorIdade =  true
console.log(maiorIdade)

let menorIdade = false
console.log(menorIdade)

// array
let habilidades = ['JavaScript', 'php', 'CSS']
console.log(habilidades)

console.log(habilidades.length)
console.log(habilidades[1])


// object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'Silva',
    idade: 25,
    habilidades: ['JavaScript', 'php', 'CSS']
}

console.log(pessoa.habilidades)
console.log(pessoa.idade)

// JSON (JAVASCRIPT OBJECT NOTATION)