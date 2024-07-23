import { useState } from 'react'

interface Options {
  element: string
  answer: boolean
}

export default function AnswerButton(props: Options) {
  const el = props.element
  const answer = props.answer

  const [bgColor, setBgColor] = useState('#8FCED5')

  function handleClick() {
    if (answer) {
      setBgColor('#02ed9f')
      console.log('Correct Answer Selected')
    } else {
      setBgColor('#ff2e51')
      console.log('Incorrect Answer Selected')
    }
  }

  return (
    <div className="buttons-container">
      <button
        className="buttons"
        style={{ background: bgColor }}
        onClick={handleClick}
      >
        {el}
      </button>
    </div>
  )
}
