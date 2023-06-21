import random from '../random.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numSqrt = number ** (0.5);
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= numSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const prime = () => {
  const number = random(1, 10);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  runEngine(prime, rules);
};
