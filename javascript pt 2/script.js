const calculate = (fnum, snum, operation) => {
  let result;
  switch (operation) {
    case "+":
      result = fnum + snum;
      break;

    case "-":
      result = fnum - snum;
      break;

    case "/":
      result = fnum / snum;
      break;

    case "*":
      result = fnum * snum;
      break;

    default:
      break;
  }
  return result
};
console.log(calculate(4,2,"/"))