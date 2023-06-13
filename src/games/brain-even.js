#!/usr/bin/env node
import random from '../random.js';
import runEngine from '../index.js';

const even =() => {
  const number = random();
  const question = `Question: ${number}`;
  let rightAnswer;
  number % 2 === 0 ? rightAnswer = 'yes' : rightAnswer = 'no';
  return [question, rightAnswer];
};

export default ()=>{
  runEngine(even, 'Answer "yes" if the number is even, otherwise answer "no".')
}