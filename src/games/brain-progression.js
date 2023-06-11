#!/usr/bin/env node
import random from '../../random.js';

export default () => {
  const progression = [];
  const number = random();
  const endOfProgression = random(1, 5);
  for (let i = random(); progression.length < endOfProgression + 5;) {
    progression.push(i);
    i += number;
  }
  const possition = random(1, progression.length);
  const rightAnswer = String(progression[possition]);
  progression[possition] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};
