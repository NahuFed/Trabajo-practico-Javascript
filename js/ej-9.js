let frase = prompt ("ingrese una frase")
let vocales = ''


for(let i = 0; i < frase.length; i ++ ){
    if(frase.charAt(i) === 'a'| frase.charAt(i) === 'e' | frase.charAt(i) === 'o' | frase.charAt(i) === 'u'){
        vocales += frase.charAt(i)        
    }
}
document.write('las vocales son ', vocales)