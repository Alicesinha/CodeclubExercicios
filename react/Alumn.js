const Person = require('./Person.js')

class Alumn extends Person {
    constructor (name, age, gang){
        super(name, age) // this part make de two firsts elembents be defined from the Person and obrigated have to be like the extends
        this.gang = gang;
    }
}

module.exports = Alumn;