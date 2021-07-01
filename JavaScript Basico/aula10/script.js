
let inputNota1 = prompt('Digite a primeira nota: ')
let inputNota2 = prompt('Digite a segunda nota: ')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if(media >= mediaMinima) {
    document.write('Ok, passou de ano !')
} else if(media < mediaMinima) {
    document.write('Você está reprovado')
}

document.write('<br>')

if( media >= mediaMinima && media === 10) {
    document.write('Você foi muito bem')
}else if (media >= mediaMinima && media ===9) {
    document.write('Você mandou bem, vamos estudar para ganhar 10')
}