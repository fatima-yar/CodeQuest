import { useState } from 'react'

interface Options {
  element: string
  answer: boolean
}

export default function AnswerButton(props: Options) {
  const { element, answer } = props

  const [bgColor, setBgColor] = useState('#8FCED5')
  const [activeBtn, setActiveBtn] = useState('select')

  function handleClick() {
    if (answer) {
      setBgColor('#02ed9f')
      setActiveBtn('selected')
      console.log('Correct Answer Selected')
    } else {
      setBgColor('#ff2e51')
      setActiveBtn('selected')
      console.log('Incorrect Answer Selected')

      setTimeout(() => {
        setBgColor('#8FCED5')
        setActiveBtn('select')
      }, 500)
    }
  }

  return (
    <div className="buttons-container">
      <button
        className="buttons"
        style={{ background: bgColor }}
        onClick={handleClick}
        disabled={activeBtn === 'selected'}
      >
        {element}
      </button>
    </div>
  )
}
