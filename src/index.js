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
  let count = 0;
  while(count <3) {
    const [question,rightAnswer] = logic() 
    console.log(question)
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === yourAnswer) {
      console.log('Correct');
      count +=1
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again ${name}`);
      count =0
    }  
    if (count ===3){
      console.log(`Congratulations, ${name}!`);
    }
  }
}