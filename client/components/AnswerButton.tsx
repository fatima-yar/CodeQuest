import { useState } from 'react'

interface Options {
  element: string
  answer: boolean
}

export default function AnswerButton(props: Options) {
  const el = props.element
  const answer = props.answer

  const [bgColor, setBgColor] = useState('#8FCED5')
  const [activeBtn, setActiveBtn] = useState('select')

  function handleClick() {
    if (answer) {
      setBgColor('#02ed9f')
      console.log('Correct Answer Selected')
    } else {
      setBgColor('#ff2e51')
      console.log('Incorrect Answer Selected')
    }
    setTimeout(() => {
      setBgColor('#8FCED5')
      setActiveBtn('select')
    }, 1000)
  }

  return (
    <div className="buttons-container">
      <button
        className="buttons"
        style={{ background: bgColor }}
        onClick={handleClick}
        disabled={activeBtn === 'selected'}
      >
        {el}
      </button>
    </div>
  )
}
