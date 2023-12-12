import { API } from '@/api'
import { Priority } from '@/components/Pages/Priority'
import { getDataArray } from '@/utils/getDataArray'
import { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/priorities?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props {
  params: { slug: string }
}

const PriorityPage: FC<Props> = async ({ params }) => {
  const fetchPageData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/priorities?filters[slug][$eq]=${params.slug}&populate=*`,
      {
        cache: 'no-cache',
      },
    )
    const data = await resData.json()
    return { data }
  }

  const { data } = await fetchPageData()

  return <Priority data={getDataArray(data)[0]} />
}

export default PriorityPage
