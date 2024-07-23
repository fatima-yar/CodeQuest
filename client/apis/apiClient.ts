import request from 'superagent'
import { Question } from '../../models/questions'

const rootUrl = '/api/v1/'

export async function getQuestions(): Promise<Question[]> {
  const response = await request.get(rootUrl + 'questions')
  return response.body
}
