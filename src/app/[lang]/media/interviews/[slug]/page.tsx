import { API } from '@/api'
import { SingleInterview } from '@/components/Pages/SingleInterview'
import { getInterviewData } from '@/utils/getInterviewsData'
import { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/interviews?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props {
  params: { slug: string }
}

const SingleInterviewPage: FC<Props> = async ({ params }) => {
  const fetchSingleInterviewData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/interviews?filters[slug][$eq]=${params.slug}&populate[person][populate][photo][fields][0]=url`,
      {
        cache: 'default',
      },
    )
    const data = await resData.json()
    return data
  }

  const data = await fetchSingleInterviewData()

  return (
    <SingleInterview data={getInterviewData(data.data).data[0]} />
  )
}

export default SingleInterviewPage
