import { useState } from 'react'
import { Question } from '../../models/questions'
import { Answers } from './Answers'
import confetti from 'canvas-confetti'

interface Props {
  questions: Question[]
  onSelect: (score: number) => void
}

export default function QuestionSection(props: Props) {
  const { questions, onSelect } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [score, setScore] = useState(0)
  const questionObj = questions[currentQuestion]

  const handleNextQuestion = () => {
    setCurrentQuestion((prevIndex) => {
      const newIndex = prevIndex + 1
      console.log('New Index:', newIndex) // Debugging line
      console.log('Questions Length:', questions.length)
      if (newIndex === questions.length) {
        // Trigger confetti celebration
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        })
        alert(`Your final score is: ${score}`)
        console.log('Final Score:', score)
      }

      // Return the new index
      return newIndex
    })
  }

  return (
    <>
      <div>Your score: {score}</div>
      <div className="container-question">
        <div className="question-box">{questionObj.question}</div>
      </div>
      <div>
        <div className="container-question-button">
          <button className="next-q-button" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>

        <Answers answer={questionObj} score={score} setScore={setScore} />
      </div>
    </>
  )
}
