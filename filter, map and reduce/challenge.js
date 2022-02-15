// Adicionar 10% de valor de mercado para cada um dos elementos do array.
// Filtrar somente as empresas que foram fundadas antes dos anos 2000.
// Somar o valor de mercado das empresas do exercicio anterior.

const companies = [
    {name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nodella", foundedOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckenberg", foundedOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976},
];


const double = company => {
    
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}

const newArray = companies.map(double)

console.log(newArray)
// -------------------------------------------------------------------------------------------

const afterTH = companies.filter((founded) =>{
    return founded.foundedOn <= 2000
})
console.log(afterTH)

//--------------------------------------------------------------------------------------------
const sumMarket = afterTH.reduce((acc, current)=>{
    return acc + current.marketValue
},0)
console.log(sumMarket)