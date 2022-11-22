import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const random = (numberOfNumbers, b = 100) => {
  const numbers = [];
  while (numbers.length < numberOfNumbers) {
    numbers.push(Math.floor(Math.random() * b));
  }
  return numbers;
};
const culc = {
  start: 'What is the result of the expression?',
  question_qwe() {
    const [firstNumber, secondNumber] = random(2);
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

const progressionGame = {
  start: 'What number is missing in the progression?',
  question_qwe() {
    const progression = [];
    const [number] = random(1);
    const [endOfProgression] = random(1, 5);
    for (let [i] = random(1); progression.length < endOfProgression + 5;) {
      progression.push(i);
      i += number;
    }
    const possition = random(1, progression.length)[0];
    const rightAnswer = String(progression[possition]);
    progression[possition] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    return rightAnswer;
  },
};

const gcd = {
  start: 'Find the greatest common divisor of given numbers.',
  question_qwe() {
    let [firstNumber, secondNumber] = random(2);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    while (secondNumber !== 0) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }

    return String(firstNumber);
  },

};

const even = {
  start: 'Answer "yes" if the number is even, otherwise answer "no".',
  question_qwe() {
    const number = random(1);
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
  } else if (n === 'even') {
    n = even;
  } else if (n === 'gcd') {
    n = gcd;
  } else if (n === 'progression') {
    n = progressionGame;
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
