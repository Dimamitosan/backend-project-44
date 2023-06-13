import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default (logic,start) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(start)
  const end = 3;
  for(let count = 0;count < end;count++) {
    const [question,rightAnswer] = logic() 
    console.log(question)
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== yourAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again ${name}`);
      return
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
}