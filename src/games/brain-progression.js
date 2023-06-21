import random from '../random.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const genProg = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; progression.length < length + 5; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const prog = () => {
  const progression = genProg(random(), random(), random(1, 5));
  const possition = random(1, progression.length - 1);
  const rightAnswer = String(progression[possition]);
  progression[possition] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default () => {
  runEngine(prog, rules);
};
