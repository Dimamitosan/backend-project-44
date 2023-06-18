import random from '../random.js';
import runEngine from '../index.js';

const start = 'Find the greatest common divisor of given numbers.';


const findGcd = (firstNum, secondNum)=>{
  while (secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum
}


const gcd = () => {
  let firstNumber = random();
  let secondNumber = random();
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const rightAnswer = String(findGcd(firstNumber,secondNumber));
  return [question, rightAnswer];
};

export default ()=>{
  runEngine(gcd,start)
}