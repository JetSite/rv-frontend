import { API } from '@/api'
import { Projects } from '@/components/Pages/Projects'
import { INextPage } from '@/types'
import { getProjectsData } from '@/utils/getProjectsData'
import { FC } from 'react'

interface Props extends INextPage {}

const ProjectsPage: FC<Props> = async () => {
  const fetchProjects = async () => {
    const res = await fetch(
      `${API.baseUrl}/projects-page?populate[categories][populate][projects][populate][1]=logo`,
    )
    const data = await res.json()
    return data
  }
  const data = await fetchProjects()
  return <Projects data={getProjectsData(data.data)} />
}

export default ProjectsPage
