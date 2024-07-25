import { useState } from 'react'
import QuestionSection from './QuestionSection'
import { Question } from '../../models/questions'

interface Props {
  questions: Question[]
}

export default function Quiz({ questions }: Props) {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  const handleNextQuestion = () => {
    setCurrentQuestion((prevIndex) => {
      const newIndex = prevIndex + 1
      if (newIndex === questions.length) {
        setQuizFinished(true)
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
      return newIndex
    })
  }
  const handleScoreUpdate = (scoreChange: number) => {
    setScore((prevScore) => prevScore + scoreChange)
  }
  return (
    <div>
      {!quizFinished ? (
        <QuestionSection
          questions={questions}
          currentQuestion={currentQuestion}
          onScoreUpdate={handleScoreUpdate}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div className="final-score">
          <h1>Final Score: {score}</h1>
        </div>
      )}
    </div>
  )
}
