import random from '../random.js';
import runEngine from '../index.js';

const start = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const even = () => {
  const number = random();
  const question = `Question: ${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  runEngine(even, start);
};
