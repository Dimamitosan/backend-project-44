import random from '../random.js'
import runEngine from '../index.js';


const start = 'What is the result of the expression?';
const calc = () => {
    const firstNumber = random();
    const secondNumber = random();
    const arrOfOperators = ['*', '+', '-'];
    const math = arrOfOperators[random(0,arrOfOperators.length)]
    let rightAnswer;
    switch (math){
        case '+': 
            rightAnswer = firstNumber + secondNumber
            break
        case '-': 
            rightAnswer = firstNumber - secondNumber
            break
        case '*': 
            rightAnswer = firstNumber * secondNumber
            break
    }
    const question = `Question: ${firstNumber} ${math} ${secondNumber}`; 
    return [question,String(rightAnswer)];
}

export default () =>{
    runEngine(calc, start)
}