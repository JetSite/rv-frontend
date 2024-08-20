import { API } from '@/api'
import { Books } from '@/components/Pages/Books'
import { INextPage } from '@/types'
import { getBooksData } from '@/utils/getBooksData'
import { FC } from 'react'

const BooksPage: FC<INextPage> = async ({ params }) => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/book-categories?populate[book][populate][bookCover][fields][0]=url&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMediaItems()

  return <Books data={getBooksData(data.data)} />
}

export default BooksPage
