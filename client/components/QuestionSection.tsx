import { useState } from 'react'
import { Question } from '../../models/questions'
import { Answers } from './Answers'
import confetti from 'canvas-confetti'

interface Props {
  questions: Question[]
}

export default function QuestionSection({ questions }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionObj = questions[currentQuestion]

  // const handleNextQuestion = () => {
  //   setCurrentQuestion((currentQuestion + 1) % questions.length)
  // }
  const handleNextQuestion = () => {
    setCurrentQuestion((prevIndex) => {
      const newIndex = prevIndex + 1

      // Check if the new index is 10 and trigger the celebration
      if (newIndex === 10) {
        // Trigger confetti celebration
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        })
      }

      // Return the new index
      return newIndex
    })
  }

  return (
    <>
      <div className="container-question">
        <div className="question-box">{questionObj.question}</div>
      </div>
      <div>
        <div className="container-question-button">
          <button className="next-q-button" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>

        <Answers
          answer={questionObj}
          setCurrentQuestion={setCurrentQuestion}
          handle={undefined}
        />
      </div>
    </>
  )
}
