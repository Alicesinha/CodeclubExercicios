const table = (number) => {
  if (number > 10 || number < 1) {
    console.log(
      "Desculpe, o programa so faz calculos com números menores que 10 e maiores que 1");
    return
  }
  for (let i = 1; i <= 10; i++){
    console.log( `${i} x ${number} = ${i * number}` )
  }
}
table(10)