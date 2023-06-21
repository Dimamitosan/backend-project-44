import random from '../random.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';
const arrOfOperators = ['*', '+', '-'];

const mathOp = (firstNumber, secondNumber, math) => {
  switch (math) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;

    default: throw new Error(`operation ${math} is not supported`);
  }
};

const calc = () => {
  const firstNumber = random();
  const secondNumber = random();
  const math = arrOfOperators[random(0, arrOfOperators.length - 1)];
  const rightAnswer = mathOp(firstNumber, secondNumber, math);
  const question = `Question: ${firstNumber} ${math} ${secondNumber}`;
  return [question, String(rightAnswer)];
};

export default () => {
  runEngine(calc, rules);
};
