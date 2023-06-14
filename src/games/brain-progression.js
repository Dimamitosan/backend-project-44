import random from '../random.js';
import runEngine from '../index.js';

const start = 'What number is missing in the progression?';

const genProg = () => {
  const progression = [];
  const number = random();
  const endOfProgression = random(1, 5);
  for (let i = random(); progression.length < endOfProgression + 5;) {
    progression.push(i);
    i += number;
  }
  return progression
}

const prog = () => {
  const progression = genProg()
  const possition = random(1, progression.length);
  const rightAnswer = String(progression[possition]);
  progression[possition] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default ()=>{
  runEngine(prog,start)
}