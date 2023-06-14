import random from '../random.js';
import runEngine from '../index.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number ** (0.5); i++) {
    if (number % i === 0) {
      return false
    }
    return true
  }
}

const prime = () => {
  const number = random(1, 10);
  let flag = true;
  const question = `Question ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default ()=>{
 runEngine(prime, start)
}

