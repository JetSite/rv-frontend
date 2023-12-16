import { API } from '@/api'
import { Activity } from '@/components/Pages/Activity'
import { getActivityData } from '@/utils/getActivityData'
import { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/activities?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props {
  params: { slug: string }
}

const ActivityPage: FC<Props> = async ({ params }) => {
  const fetchActivityPageData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/activities?filters[slug][$eq]%3D=${params.slug}&populate[subcategoriesOfActivities][populate][0]=objectOfActivity&populate[subcategoriesOfActivities][populate][1]=subcategory_groups`,
      {
        cache: 'no-cache',
      },
    )
    const data = await resData.json()

    return data
  }
  const data = await fetchActivityPageData()

  return <Activity data={getActivityData(data.data[0])} locale="ru" />
}

export default ActivityPage
