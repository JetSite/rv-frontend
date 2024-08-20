import { API } from '@/api'
import { Search } from '@/components/Pages/Search'
import { INextPage } from '@/types'
import { getSearchData } from '@/utils/parsedData/getSearchData'
import { FC } from 'react'

interface Props extends INextPage {}

const SearchPage: FC<Props> = async ({ searchParams }) => {
  const searchWord: string = encodeURIComponent(searchParams.search as string)
  const fetchPageData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/fuzzy-search/search?query=${searchWord}`,
      {
        cache: 'default',
      },
    )
    const data = await resData.json()
    return { data }
  }

  const data = await fetchPageData()

  return (
    <Search
      searchWord={searchParams.search as string}
      data={getSearchData(data.data)}
    />
  )
}

export default SearchPage
