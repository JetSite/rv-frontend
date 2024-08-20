import { API } from '@/api'
import { Mentors } from '@/components/Pages/Mentors'
import { Locale } from '@/i18n-config'
import { getMentorsData } from '@/utils/getMentorsData'

const AboutPage = async ({ params }: { params: { lang: Locale } }) => {
  const fetchAbout = async () => {
    const res = await fetch(
      `${API.baseUrl}/about-me?populate=*&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchAbout()

  return <Mentors data={getMentorsData(data.data)} />
}

export default AboutPage
