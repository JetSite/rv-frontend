import { API } from '@/api'
import { Mentors } from '@/components/Pages/Mentors'
import { INextPage } from '@/types'
import { getMentorsData } from '@/utils/getMentorsData'
import { FC } from 'react'

const MentorsPage: FC<INextPage> = async ({ params }) => {
  const fetchMentors = async () => {
    const res = await fetch(
      `${API.baseUrl}/mentors?populate=*&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMentors()

  return <Mentors data={getMentorsData(data.data)} />
}

export default MentorsPage
