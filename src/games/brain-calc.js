import random from '../random.js';
import runEngine from '../index.js';

const mathOp = (firstNumber, secondNumber, math) => {
  let mathOperation;
  switch (math) {
    case '+':
      mathOperation = firstNumber + secondNumber;
      break;
    case '-':
      mathOperation = firstNumber - secondNumber;
      break;
    case '*':
      mathOperation = firstNumber * secondNumber;
      break;
    default:
  }
  return mathOperation;
};

const start = 'What is the result of the expression?';
const calc = () => {
  const firstNumber = random();
  const secondNumber = random();
  const arrOfOperators = ['*', '+', '-'];
  const math = arrOfOperators[random(0, arrOfOperators.length - 1)];
  const rightAnswer = mathOp(firstNumber, secondNumber, math);
  const question = `Question: ${firstNumber} ${math} ${secondNumber}`;
  return [question, String(rightAnswer)];
};

export default () => {
  runEngine(calc, start);
};
