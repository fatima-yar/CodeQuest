import { useState } from 'react'
import AnswerButton from './AnswerButton'

export default function ScoreCounter() {
  const [score, setScore] = useState(0)

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 5)
    } else {
      setScore(score - 1)
    }
  }

  return (
    <>
      <div className="score-container">
        <div>
          <h2>Score: {score}</h2>
        </div>
      </div>
    </>
  )
}
