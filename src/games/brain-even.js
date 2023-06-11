#!/usr/bin/env node
import random from '../../random.js';

export default () => {
  const number = random();
  const question = `Question: ${number}`;
  let rightAnswer;
  number % 2 === 0 ? rightAnswer = 'no' : rightAnswer = 'yes';
  return [question, rightAnswer];
};
