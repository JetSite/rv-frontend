import { API } from '@/api'
import { Mentors } from '@/components/Pages/Mentors'
import { getMentorsData } from '@/utils/getMentorsData'

const AboutPage = async () => {
  const fetchAbout = async () => {
    const res = await fetch(`${API.baseUrl}/about-me?populate=*`, {
      cache: 'no-cache',
    })
    const data = await res.json()

    return data
  }
  const data = await fetchAbout()

  return <Mentors data={getMentorsData(data.data)} />
}

export default AboutPage
