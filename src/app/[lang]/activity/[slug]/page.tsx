import { API } from '@/api'
import { Activity } from '@/components/Pages/Activity'
import { Locale } from '@/i18n-config'
import { INextPage } from '@/types'
import { getActivityData } from '@/utils/getActivityData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

export async function generateStaticParams({
  params,
}: {
  params: { lang: Locale }
}) {
  const slugs = await fetch(
    `${API.baseUrl}/activities?fields=slug&locale=${params.lang}`,
  ).then(res => res.json())

  const slugsUnIncludeMedia: { slug: string }[] = []

  slugs.data.forEach((slug: { attributes: { slug: string } }) => {
    if (slug.attributes.slug !== 'media' || slug.attributes.slug !== 'media') {
      slugsUnIncludeMedia.push({
        slug: slug.attributes.slug,
      })
    }
  })
  return slugsUnIncludeMedia
}

interface Props extends INextPage {}

const ActivityPage: FC<Props> = async ({ params }) => {
  const fetchActivityPageData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/activities?filters[slug][$eq]%3D=${params.slug}&populate[subcategoriesOfActivities][populate][0]=objectOfActivity&populate[subcategoriesOfActivities][populate][1]=subcategory_groups&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await resData.json()

    return { data: getActivityData(data.data[0]) }
  }

  const { data } = await fetchActivityPageData()

  if (!data) return redirect('/error-page')

  return <Activity data={data} locale={params.lang} />
}

export default ActivityPage
