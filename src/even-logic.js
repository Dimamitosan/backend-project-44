import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

const game = () => {
  const name = askName();
  let count = 0;
  while (count < 3) {
    const number = Math.floor(Math.random() * 100);
    const answer = function (num) { return num % 2 === 0 ? 'no' : 'yes'; };
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question === answer(number)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`\'${question}\' is wrong answer ;(. Correct answer was \'${answer(number)}\'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { askName, game };
