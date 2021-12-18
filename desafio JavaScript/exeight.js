const number = 17
if(number % 2 === 0){
    if (number % 5 ===0) console.log("O número é par e divisivel por 5")
    else console.log("O numero é par e NÃO divisivel por 5")
} else{
    for (let i = 2; i < number; i++)
    if (number % i === 0){
        console.log("Ele é impar mas não é primo")
        break
    } else {
      if(i === number - 1) console.log("Ele é um numero primo")  
    } 
}