const numbers = [12,17,5,69];

const double = numbers => numbers * 2;
const minus = numbers => numbers - 3;

const newArray = numbers.map(double).map(minus)
console.log(newArray)