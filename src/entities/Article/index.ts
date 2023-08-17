export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
export { articleDetailsReducer } from './model/slice/articleSlice'
export type { Article } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById'

export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from './model/selectors/articleDetails'
