#!/usr/bin/env node
import random from '../../random.js'

export default () => {
    const firstNumber = random();
    const secondNumber = random();
    const math = ['*', '+', '-'][random(0,2)];
    const question = `Question: ${firstNumber}  ${math}  ${secondNumber}`;
    const rightAnswer = String(eval(`${firstNumber} ${math} ${secondNumber}`)) 
    return [question,rightAnswer];
}