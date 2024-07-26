import { useState } from 'react'

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

function Greeting(props: Props) {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.setName(text)
    props.setClicked(true)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-yellow-500 w-[80%] p-10 rounded-xl flex flex-col items-center mt-8">
        <p className="text-2xl pb-8"> Enter your name:</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name here..."
            value={text}
            onChange={handleChange}
            className="mb-4 rounded-md p-2 border border-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105 hover:bg-teal-600"
          >
            Lets do it!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Greeting
