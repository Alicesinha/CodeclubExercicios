let person = { nome: "Alice", idade:15, sexo:"Female", profissão:"Trainee", nacionalidade:"Brazilian" }

if(person.idade >= 18 && person.nacionalidade === "Brazilian"){
    console.log('Candidato aprovado')
}else{
    console.log('Infelizmente candidato nao aprovado')
}