import AnswerButton from './AnswerButton'
import { Question } from '../../models/questions'
import { useEffect, useState } from 'react'

interface Props {
  answer: Question
  setScore: (score: number) => void
  score: number
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

export function Answers({ answer, score, setScore }: Props) {
  const correct_answer = answer['correct_answer']
  // IGNORE THIS ERROR ^

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
      <div className="">
        {shuffledArray.map((el, index) => {
          return (
            <>
              <div className="p-2">
                <AnswerButton
                  key={`${el}-${index}`}
                  element={el}
                  answer={el === correct_answer}
                  onSelect={handleAnswerSelection}
                />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
