/* // o map fitra com e cria um nove array com os elementos que correspondem a condição previamente setada
//EX: 
const list = [
    {name: "Rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
];
const newVipList = list.filter(VIP =>{
    return VIP.vip // o resultado desse returno será verdadeiro
})
console.log(newVipList)

 */

var student = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},
];
   
const provedList = student.filter(students => {
   
    return students.testGrade >= 7
})
console.log(provedList)
/* console.log(`The student ${name} was aproved with with the following score ${provedList.testGrade}` ); */