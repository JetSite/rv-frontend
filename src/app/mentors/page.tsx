import { API } from '@/api'
import { Mentors } from '@/components/Pages/Mentors'
import { getMentorsData } from '@/utils/getMentorsData'

const MentorsPage = async () => {
  const fetchMentors = async () => {
    const res = await fetch(`${API.baseUrl}/mentors?populate=*`, {
      cache: 'no-cache',
    })
    const data = await res.json()

    return data
  }
  const data = await fetchMentors()

  return <Mentors data={getMentorsData(data.data)} />
}

export default MentorsPage
