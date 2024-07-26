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

      if (newIndex === questions.length) {
        // Trigger confetti celebration
        // confetti({
        //   particleCount: 200,
        //   spread: 70,
        //   origin: { y: 0.6 },
        // })
        alert(`Your final score is: ${score}`)
        console.log('Final Score:', score)
      }

      // Return the new index
      return newIndex
    })
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 grid-cols-1  gap-4">
        <div className="font-lilita lg:text-3xl bg-slate-100  p-8 text-center rounded-lg lg:ml-4 lg:col-span-1">
          <p>Your score: </p>
          {score}
        </div>
        <div className="col-span-1 lg:col-span-4 bg-slate-100 lg:text-2xl text-center p-4 ">
          <div className="pb-8 pt-8">{questionObj.question}</div>
          <div className="">
            <Answers answer={questionObj} score={score} setScore={setScore} />
          </div>
        </div>
        <div className="flex justify-center lg:col-start-6 lg:col-span font-lilita lg:mr-4 mb-8 lg:mb-0">
          {' '}
          <button
            className="bg-black text-white lg:text-3xl p-8 rounded-lg hover:bg-blue-500"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </>
  )
}
