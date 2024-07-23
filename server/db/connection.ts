import knex from 'knex'
import config from './knexfile.js'
import { Question } from '../../models/questions.js'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])

//Read all
export async function getAllQuestions() {
  const questions: Question[] = await connection('questions')
  return questions
}
//Read by Id
export async function getQuestionById(id: number) {
  const question: Question = await connection('questions')
    .join('false_answers', 'false_answers.id', 'questions.id')
    .where('questions.id', id)
    .select(
      'questions.id',
      'questions.question',
      'questions.correct_answer as correctAnswer',
      'false_answers.answer1 as answer1',
      'false_answers.answer2 as answer2',
      'false_answers.answer3 as answer3',
    )

  return question
}

export default connection
