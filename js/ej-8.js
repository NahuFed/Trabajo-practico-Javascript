let numero = parseInt(prompt('ingrese un numero y le dire si es par o impar'))
if (isNaN(numero) === false){
    if(numero%2 === 0){
        document.write('el numero es par')
    }else{
        document.write('el numero es impar')
    }
} else {
alert('no ingreso un numero')
}