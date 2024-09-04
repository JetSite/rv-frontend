import { API } from '@/api'
import { Projects } from '@/components/Pages/Projects'
import { SingleProject } from '@/components/Pages/SingleProject'
import { INextPage } from '@/types'
import { getProjectsData } from '@/utils/getProjectsData'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { getSingleProjectData } from '@/utils/parsedData/getSingleProjectData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

interface Props extends INextPage {}

const ProjectsPage: FC<Props> = async ({ params }) => {
  const fetchProjects = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/projects?filters[slug][$eq]=${params.slug}&populate[partners][populate][1]=partnerCover&populate[interview][populate][person][populate]=*&populate[logo]=*&populate[audio_i_videos][populate][persons][populate]=*&locale=${params.lang}`,
        { cache: 'no-cache' },
      )

      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Проект`,
      )

      const seoData = await seoRes.json()

      return {
        data: getSingleProjectData(data.data),
        seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null }
    }
  }
  const { data, seoData } = await fetchProjects()

  if (!data || !seoData) return redirect(`/${params.lang}/not-found/page`)

  return <SingleProject data={data} seoData={seoData} locale={params.lang} />
}

export default ProjectsPage
