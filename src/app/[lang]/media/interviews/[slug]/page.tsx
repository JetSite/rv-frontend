import { API } from '@/api'
import { SingleInterview } from '@/components/Pages/SingleInterview'
import { INextPage } from '@/types'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/interviews?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props extends INextPage {}

const SingleInterviewPage: FC<Props> = async ({ params }) => {
  const fetchSingleInterviewData = async () => {
    try {
      const resData = await fetch(
        `${API.baseUrl}/interviews?filters[slug][$eq]=${params.slug}&populate[person][populate][photo][fields][0]=url&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const data = await resData.json()
      // const seoRes = await fetch(
      //   `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Событие`,
      // )

      // const seoData = await seoRes.json()

      return {
        data: getInterviewData(data.data).data[0],
        // seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return {
        data: null,
        // seoData: null,
      }
    }
  }

  const { data } = await fetchSingleInterviewData()

  if (!data) return redirect('/error-page')

  return <SingleInterview data={data} />
}

export default SingleInterviewPage
