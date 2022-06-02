function verificaPalindromo(text){

    for(let i = 0; i<(text.length)/2; i++){
        if(text[i] === text[text.length-1-i]){
            return `A palavra ${text} é um palíndromo`;
        } else 
        return `A palavra ${text} não é um palíndromo`;
    }
}

let texto = "ana";

console.log(verificaPalindromo(texto));