//Fizz buzz
//Si un numero es igual a 3 o multiplo de 3 = FIZZ
//Si un numero es multiplo de 5 = BUZZ
//Multiplos de ambos (15,30,45) = FIZZBUZZ

for(let i = 1; i < 100; i++){
    if(i % 15 === 0){
    console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0){
    console.log(`${i} FIZZ`)
    } else if (i % 5 === 0){
    console.log(`${i} BUZZ`)
    }
}