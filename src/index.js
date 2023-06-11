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
  for(let count = 0; count < 3; count ++) {
    const [question,rightAnswer] = logic() 
    console.log(question)
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === yourAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again ${name}`);
      return
    }  
  }
    console.log(`Congratulations, ${name}!`);
}