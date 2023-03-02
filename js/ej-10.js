numero = parseFloat(prompt('ingrese un numero y le dire si divisible en 2, 3, 5 o 7'))
if (isNaN(numero) === false){
    if(numero%2 === 0 | numero%3 === 0 | numero%5 === 0 | numero%7 === 0){
        document.write('el numero SI es divisible en 2, 3, 5 o 7')
    }else{
        document.write('el numero NO es divisible en 2, 3, 5 o 7')
    }
}else{
    alert('usted no ingreso un numero')
}