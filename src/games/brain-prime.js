import random from '../random.js';
import runEngine from '../index.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numSqrt = number**(0.5) 
  let count = 0;
  for (let i = 1; i <= numSqrt; i++) {
    if (number % i === 0) {
      count+=2
    }
  }
  if (count ===2){
    return true
  }
  return false
}

const prime = () => {
  const number = random(1, 10);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default ()=>{
 runEngine(prime, start)
}

