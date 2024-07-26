import { useState } from 'react'

interface Options {
  element: string
  answer: boolean
  onSelect: (selectedAnswer: string) => void
}

export default function AnswerButton(props: Options) {
  const { element, answer, onSelect } = props

  const [bgColor, setBgColor] = useState('#8FCED5')
  const [activeBtn, setActiveBtn] = useState('select')

  function handleClick() {
    if (answer) {
      setBgColor('#02ed9f')
      setActiveBtn('selected')
      // console.log('Correct Answer Selected')
    } else {
      setBgColor('#ff2e51')
      setActiveBtn('selected')
      // console.log('Incorrect Answer Selected')

      setTimeout(() => {
        setBgColor('#8FCED5')
        setActiveBtn('select')
      }, 500)
    }
  }
  function handleCombinedClick() {
    handleClick()
    onSelect(element)
  }
  return (
    <div className="">
      <button
        className="p-4 lg:w-80  w-56 rounded-xl shadow-xl"
        style={{ background: bgColor }}
        onClick={handleCombinedClick}
        disabled={activeBtn === 'selected'}
      >
        {element}
      </button>
    </div>
  )
}
