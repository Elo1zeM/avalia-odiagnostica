console.log(0 || "Hello");
//O operador || retorna o primeiro valor "true" que ele encontrar, 
//Em JS o "0" é falso, enquanto o "Hello" é considerado "true", por isso será impresso "Hello"


console.log("" && "World");
//Esse operador retorna o primeiro valor falso, como uma string vazia "" é considerado falso e o "world" verdadeiro, então o operador retorna " " a string vazia

console.log(null ?? "Default Value");
//Retorna apenas o operando do lado esquerdo, então "Default Value" será retornado

console.log(undefined ?? 42);
//Já aqui o operando esquerdo é "undefined", então ele retorna "42"