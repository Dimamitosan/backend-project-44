import random from '../random.js';
import runEngine from '../index.js';

const start = 'What number is missing in the progression?';

const genProg = (number,step,endOfProgression) => {
  const progression = [];
  while (progression.length < endOfProgression + 5) {
    progression.push(number);
    number += step;
  }
  return progression
}

const prog = () => {
  const progression = genProg(random(),random(),random(1,5))
  const possition = random(1, progression.length);
  const rightAnswer = String(progression[possition]);
  progression[possition] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default ()=>{
  runEngine(prog,start)
}