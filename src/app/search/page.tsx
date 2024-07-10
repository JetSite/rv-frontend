import { API } from '@/api'
import { Search } from '@/components/Pages/Search'
import { INextPage } from '@/types'
import { FC } from 'react'

interface Props extends INextPage {}
const SearchPage: FC<Props> = async ({ searchParams }) => {
  // const fetchPageData = async () => {
  //   const resData = await fetch(
  //     `${API.baseUrl}/priorities?filters[slug][$eq]=${params.slug}&populate=*`,
  //     {
  //       cache: 'default',
  //     },
  //   )
  //   const data = await resData.json()
  //   return { data }
  // }
  const data: any[] = []
  return <Search data={data} />
}

export default SearchPage
