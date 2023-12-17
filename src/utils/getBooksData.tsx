import { API } from '@/api'
import { IData } from '@/types'

export interface IBooksData {
  title: string
  id: number
  slug: string
  books: IBook[]
}
export interface IBook {
  id: number
  author: string
  title: string
  img: string
}

type IGetBookData = (data: IData[]) => IBooksData[]

export const getBooksData: IGetBookData = data => {
  return data.map(category => ({
    title: category.attributes.title,
    id: category.id,
    slug: category.attributes.slug || '#',
    books: category.attributes.book.data.map((book: IData) => ({
      id: book.id,
      author: book.attributes.bookAuthor,
      title: book.attributes.bookTitle,
      img: API.imgUrl + book.attributes.bookCover.data.attributes.url,
    })),
  }))
}
