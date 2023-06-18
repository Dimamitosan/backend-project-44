import random from '../random.js';
import runEngine from '../index.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numSqrt = number**(0.5) 
  for (let i = 2; i <= numSqrt; i++) {
    if (number % i === 0) {
      return false
    }
    return true
  }
}

const prime = () => {
  const number = random(1, 10);
  let flag = true;
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default ()=>{
 runEngine(prime, start)
}

