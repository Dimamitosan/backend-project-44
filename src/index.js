import readlineSync from 'readline-sync';

export default (logic, start) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(start);
  const end = 3;
  for (let count = 0; count < end; count += 1) {
    const [question, rightAnswer] = logic();
    console.log(question);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== yourAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};
