import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '../apis/apiClient.ts'
import Header from './Header.tsx'
import QuestionSection from './QuestionSection.tsx'
import Greeting from './Greeting.tsx'
import { useState } from 'react'

function Home() {
  const [isClicked, setIsClicked] = useState(false)
  const [name, setName] = useState('Anonymous')
  const {
    data: questions,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions(),
  })
  if (isError) {
    return <p>{error.message}</p> // It's better to return a JSX element here
  }
  if (isFetching) {
    return <p>...Loading</p>
  }
  if (questions) {
    console.log(questions[1])

    return (
      <div className="main">
        {!isClicked ? (
          <>
            <Greeting setName={setName} setClicked={setIsClicked} />
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-[60%] text-center mb-4 lg:text-5xl p-4 rounded-lg font-indie ">
                <h2>
                  Hello <span className="text-red-600">{name}</span>, let's
                  crush this quiz!{' '}
                </h2>
              </div>

              <div className="">
                <QuestionSection questions={questions} />
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return null // Ensure there’s a return for cases where questions is undefined
}

export default Home
