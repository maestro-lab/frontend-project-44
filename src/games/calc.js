import runGame from '../index.js';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      correctAnswer = '0';
  }

  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

const playCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, generateRound);
};

export default playCalcGame;