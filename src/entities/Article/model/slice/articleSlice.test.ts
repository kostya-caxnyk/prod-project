import { articleDetailsReducer } from './articleSlice'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'

describe('article slice test', () => {
  test('should update isLoading field', () => {
    expect(
      articleDetailsReducer(
        {} as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true
    })
  })
})
