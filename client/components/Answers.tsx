import AnswerButton from './AnswerButton'
import { Question } from '../../models/questions'
import { useEffect, useState } from 'react'

interface Props {
  answer: Question
}

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function Answers({ answer }: Props) {
  const correct_answer = answer['correct_answer']
  // IGNORE THIS ERROR ^
  const [score, setScore] = useState(0)
  const [shuffledArray, setShuffledArray] = useState<string[]>([])

  const handleAnswerSelection = (selectedAnswer: string) => {
    if (selectedAnswer === correct_answer) {
      console.log('Correct Answer Selected:', correct_answer)

      setScore(score + 5)
    } else {
      console.log('Incorrect Answer Selected:', selectedAnswer)
      setScore(score - 2)
    }
  }
  useEffect(() => {
    const first = correct_answer
    const second = [answer.answer1, answer.answer2, answer.answer3]
    const array = [...second, first]
    setShuffledArray(shuffleArray([...array]))
  }, [answer])

  return (
    <>
      <div className="button-container">
        <div className="score-container">
          <h1>score:{score}</h1>
        </div>
        <div className="button">
          {shuffledArray.map((el, index) => {
            return (
              <AnswerButton
                key={`${el}-${index}`}
                element={el}
                answer={el === correct_answer}
                onSelect={handleAnswerSelection}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
