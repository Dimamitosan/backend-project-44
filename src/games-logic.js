import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const culc = {
  start: 'What is the result of the expression?',
  question_qwe() {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const math = ['*', '+', '-'][Math.floor(Math.random() * 3)];
    console.log(`Question: ${firstNumber} `, math, ` ${secondNumber}`);
    let rightAnswer;
    if (math === '*') {
      rightAnswer = String(firstNumber * secondNumber);
    } else if (math === '-') {
      rightAnswer = String(firstNumber - secondNumber);
    } else if (math === '+') {
      rightAnswer = String(firstNumber + secondNumber);
    }
    return rightAnswer;
  },
};

const even = {
  start: 'Answer "yes" if the number is even, otherwise answer "no".',
  question_qwe() {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    if (number % 2 === 0) {
      return 'no';
    }
    return 'yes';
  },
};

export default (n) => {
  if (n === 'culc') {
    n = culc;
  } else if (n === 'even'){
    n = even;
  }
  const name = askName();
  let count = 0;
  console.log(n.start);
  while (count < 3) {
    const rightAnswer1 = n.question_qwe();
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer1 === yourAnswer) {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer1}'`);
      console.log(`Let's try again ${name}`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
