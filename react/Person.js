class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    greetings () {
        console.log("Olá, tudo bem? Meu nome é", this.name, "e eu tenho", this.age, "anos")
        
    }
}

module.exports = Person;