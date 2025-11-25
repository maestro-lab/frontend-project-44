import runGame from '../index.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = String(findGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const playGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, generateRound);
};

export default playGcdGame;