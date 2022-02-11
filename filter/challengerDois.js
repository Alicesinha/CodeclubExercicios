// criar novo array somente com  as empresas fundadas depois do ano de 1975 e que possuem um valor de mercado superior a 2 milhões no valor de mercado.

const companies = [
    {name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nodella", foundedOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckenberg", foundedOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976},
]

const filtredCompanies = companies.filter (newC =>{
    if(newC.foundedOn >= 1975 && newC.marketValue > 2 ) return true
    else return false
})
console.log (filtredCompanies)