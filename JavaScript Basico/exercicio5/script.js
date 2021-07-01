




    let inputNumero = prompt('Digite um número para saber a tabuada')
    
    let tabuada = parseInt(inputNumero)
    
    for(let cont = 1; cont <=10; cont++){
      let resultado = tabuada * cont
      let msg = `${tabuada} x ${cont} = ${resultado} <br>`
      document.write(msg)
    }
    

