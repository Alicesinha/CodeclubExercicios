/*let novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("Alice", 22),
    novoAluno("Matheus", 21),
    novoAluno("Victor", 21),
    novoAluno("Pablo", 21)
]
let alunos5Anos = (aluno) =>{
    aluno.idade += 5
    return aluno
}
console.log(alunos.map(alunos5Anos))
*/

let pessoaA = {nome: 'Alice', idade: 22};
let pessoaB = {...pessoaA}
pessoaB.idade = 12;
console.log(pessoaB)