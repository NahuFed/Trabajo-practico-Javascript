let numero1 = parseInt(prompt("escriba un numero"));
if (isNaN(numero1) === false) {
  let numero2 = parseInt(prompt("escriba otro numero"));

  if (isNaN(numero2) === false) {
    let numero3 = parseInt(prompt("ingrese un tercer numero"));
    if (isNaN(numero3) === false) {
      if (numero1 >= numero2 && numero1 >= numero3) {
        document.write("el numero mayor es ", numero1);
      } else if (numero2 >= numero1 && numero2 >= numero3) {
        document.write("el numero mayor es ", numero2);
      } else {
        document.write("el numero mayor es ", numero3);
      }
    } else {
      alert("No ingreso un numero");
    }
  } else {
    alert("No ingreso un numero");
  }
} else {
  alert("No ingreso un numero");
}
