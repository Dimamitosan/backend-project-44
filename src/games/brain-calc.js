#!/usr/bin/env node
import random from '../random.js'
import runEngine from '../index.js';


const calc = () => {
    const firstNumber = random();
    const secondNumber = random();
    const math = ['*', '+', '-'][random(0,2)];
    const question = `Question: ${firstNumber}  ${math}  ${secondNumber}`;
    const rightAnswer = String(eval(`${firstNumber} ${math} ${secondNumber}`)) 
    return [question,rightAnswer];
}

export default () =>{
    runEngine(calc, 'What is the result of the expression?')
}