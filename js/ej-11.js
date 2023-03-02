numero = parseFloat(prompt('ingrese un numero y le dire si divisible en 2, 3, 5 o 7'))
let numerosDivisibles = ''
if (isNaN(numero) === false){
    if(numero%2 === 0 | numero%3 === 0 | numero%5 === 0 | numero%7 === 0){
        if (numero%2 === 0){
            numerosDivisibles += '<br>2'
        }
        if (numero%3 === 0){
            numerosDivisibles += '<br>3'
        }
        if (numero%5 === 0){
            numerosDivisibles += '<br>5'
        }
        if (numero%7 === 0){
            numerosDivisibles += '<br>7'
        }
        document.write(' el numero es divisible en: ', numerosDivisibles)
    }else{
        document.write('el numero NO es divisible en 2, 3, 5 o 7')
    }
}