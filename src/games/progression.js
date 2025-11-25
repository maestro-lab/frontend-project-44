import runGame from '../index.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const progressionLength = 10
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const hiddenIndex = Math.floor(Math.random() * progressionLength)

  const progression = generateProgression(start, step, progressionLength)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

const playProgressionGame = () => {
  const description = 'What number is missing in the progression?'
  runGame(description, generateRound)
}

export default playProgressionGame
