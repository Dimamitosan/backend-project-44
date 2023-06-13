#!/usr/bin/env node

import random from '../random.js';
import runEngine from '../src/index.js';

const gcd = () => {
  let firstNumber = random();
  let secondNumber = random();
  const question = `Question: ${firstNumber} ${secondNumber}`;
  while (secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  const rightAnswer = String(firstNumber);
  return [question, rightAnswer];
};

export default ()=>{
  runEngine(gcd,'Find the greatest common divisor of given numbers.')
}