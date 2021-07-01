


function entrarDados(){
    
    let inputNome = prompt('Digite seu nome')
    let inputIdade = prompt('Digite sua idade')

    let idade = parseInt(inputIdade)

    let maiorOuMenor

    if(inputNome === '' && inputIdade === ''){
        alert('Digite os dados corretamente !')
        return
    } else {
        document.write('click em entrar novamente')
    }


    if(idade >= 18) {
        maiorOuMenor = 'maior'
    }else if(idade < 18) {
        maiorOuMenor = 'menor'
    }

    let msgPersonalizada = ''

    if(inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
        msgPersonalizada = 'Você é personagem do filme the Matrix'
    }
    
    let saudacao = `Ola ${inputNome}, você é ${maiorOuMenor} de idade!`

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#msgPersonalizada').innerHTML = msgPersonalizada
}




