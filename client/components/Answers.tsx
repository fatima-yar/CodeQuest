import AnswerButton from './AnswerButton'
import { Question } from '../../models/questions'
import { useState, useEffect } from 'react'

interface Props {
  answer: Question
  setCurrentQuestion: (num: unknown) => void
  handle: unknown
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

// const answers = getQuestions()

export function Answers({ answer }: Props) {
  const correct_answer = answer['correct_answer']
  // IGNORE THIS ERROR ^

  const first = correct_answer
  console.log('Correct:', correct_answer)

  const second = [answer.answer1, answer.answer2, answer.answer3]

  const array = [...second, first]

  const shuffledArray = shuffleArray([...array])
  const [currentQuestion, setCurrentQuestionState] = useState(0)
  useEffect(() => {
    setCurrentQuestionState(currentQuestion + 1)
  }, [answer])

  return (
    <>
      <div className="button-container">
        <div className="button">
          {shuffledArray.map((el, index) => {
            return (
              <AnswerButton
                answer={el === first}
                element={el}
                key={`${currentQuestion}-${index}`}
              /> // Unique key for each question />
            )
          })}
        </div>
      </div>
    </>
  )
}
