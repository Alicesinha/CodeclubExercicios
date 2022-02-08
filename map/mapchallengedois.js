const student = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},
];
const newlist = student.map( student =>{
    let AprovedOrNot
    if(student.testGrade >= 7){
        AprovedOrNot = "Aproved"
    }else{
        AprovedOrNot = "Disaproved"
    }
    const newlist = {
        name: student.name,
        finalResult: AprovedOrNot,
    }
    return newlist

})
console.log(newlist)