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

      if (newIndex >= questions.length) {
        // Trigger confetti celebration
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        })
        alert(`Congrate! Your final score is: ${score}`)
        console.log('Final Score:', score)

        return prevIndex
      }

      return newIndex
    })
  }

  // Render a message if the quiz is finished
  if (currentQuestion >= questions.length) {
    return (
      <div className="text-center mt-8 text-2xl">
        Quiz completed! Your final score is: {score}
      </div>
    )
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">
        <div className="font-lilita lg:text-3xl bg-slate-100 p-8 text-center rounded-lg lg:ml-4 lg:col-span-1">
          <p>Your score: </p>
          <div className="lg:text-5xl text-2xl text-red-600">{score}</div>
        </div>
        <div className="col-span-1 lg:col-span-4 bg-slate-100 lg:text-2xl text-center">
          <div className="pb-8 pt-8">{questionObj.question}</div>
          <div className="flex justify-center">
            <div className="lg:w-[80%]">
              <Answers answer={questionObj} score={score} setScore={setScore} />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:col-start-6 lg:col-span font-lilita lg:mr-4 mb-8 lg:mb-0 ">
          <button
            className="bg-black text-white lg:text-3xl p-8 rounded-lg hover:bg-blue-500 "
            onClick={handleNextQuestion}
          >
            <div>Next Question</div>

            <div className="text-6xl">→</div>
          </button>
        </div>
      </div>
    </>
  )
}
