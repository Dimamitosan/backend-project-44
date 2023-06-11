#!/usr/bin/env node
import random from '../../random.js';
import engine from '../index.js';

const prime = () => {
  const number = random(1, 10);
  let flag = true;
  const question = `Question ${number}`;
  let rightAnswer;
  for (let i = 2; i <= number ** (0.5); i++) {
    if (number % i === 0) {
      flag = false;
    }
  }
  if (flag) {
    rightAnswer = 'yes';
  }
  rightAnswer = 'no';
  return [question, rightAnswer];
};

engine(prime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
