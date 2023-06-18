import random from '../random.js';
import runEngine from '../index.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
};

const prime = () => {
  const number = random(1, 10);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  runEngine(prime, start);
};
