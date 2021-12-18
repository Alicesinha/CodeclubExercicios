let a = 11
let b = 12
let c = 13
let d = 11

if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0 && d % 2 === 0){
    console.log('TODOS OS NÚMEROS SÃO PARES')
}else if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
    console.log('TODOS OS NÚMEROS SÃO IMPARES')
}else{
    console.log('Há números pares e ímpares.')
}