const people = [
    {
        numberChild : 3,
        salary : 1440
    },
    {
        numberChild : 1,
        salary : 1240
    },
    {
        numberChild : 4,
        salary : 2040
    },
    {
        numberChild : 3,
        salary : 1250
    },
    {
        numberChild : 0,
        salary : -2000
    }
]
function findAvareeAndHighestSalary(information){
    let avaregeSalary = 0
    let avaregeChildreen = 0 
    let highstSalary = 0 
 for (let i = 0; i <= information.lenght; i++){
     const salary = information[i].salary
     const childreen = information[i].numberChild
     
     if(salary > highstSalary) highstSalary = salary
     
     if(salary < 0){
         console.log(`Média de salário R$${(avaregeSalary / i + 1).toFixed(0)}`)
         console.log(`Média de filhos R$${(avaregeChildreen / i + 1).toFixed(0)}`)
         console.log(`Maior salário R$${(avaregeSalary / i).toFixed(0)}`)
         break
     }else{
         avaregeSalary = avaregeSalary + salary;
         avaregeChildreen += childreen
     }
 }
}