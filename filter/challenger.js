// filtrar os numeros pares e divisiveis por 5

const list =[20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const filtred = list.filter(numbers => {
    if(numbers % 2 === 0 && numbers % 5 === 0) return true

    else return false
})
console.log(filtred)