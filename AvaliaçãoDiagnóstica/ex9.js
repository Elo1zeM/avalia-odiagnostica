console.log("5" - 2);
//Como o operador não existe para strings, a string "5" ´convertida para o número 5, e a operação é realizada (resultado = 3)

console.log("5" + 2);
//O operador de soma é ambíguo no JS, ou seja, ele soma ou junta os números. Se um dos lados é string, então o número 2 vira uma string também, sofrendo a junção das duas partes. (resultado = 52)

console.log(true + 1);
//Os booleanos são convertidos em números, então "true" vira "1" (resultado = 2)

console.log(false + 10);
//Já o "false" vira "0" (resultado = 10)