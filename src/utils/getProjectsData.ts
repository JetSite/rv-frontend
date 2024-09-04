import { API } from '@/api'
import { IData, IID } from '@/types'
import { IInterviewsData } from './getInterviewsData'
import { IAudioAndVideosData } from './getAudioAndVideosData'
export interface IProjectPageData {
  id: IID
  slug: string
  title: string | null
  description: string | null
  showCategories: boolean
  categories: ICategory[]
}

interface ICategory {
  id: IID
  title: string | null
  text: string | null
  projects: Omit<
    IProject,
    'gallery' | 'partners' | 'interview' | 'audio_i_videos'
  >[]
}

export interface IProject {
  id: IID
  slug: string
  img: string
  title: string
  text: string
  description: string
  principles: string
  partner: string
  link: string
  galleryTitle: string
  gallery: { id: IID; img: string }[] | null
  partners: IPartner[]
  interview: IInterviewsData[] | null
  audio_i_videos: IAudioAndVideosData[] | null
}

export interface IPartner {
  id: IID
  slug: string
  name: string
  type: string
  description: string | null
  link: string | null
}

export type IgetProjectsData = (props: IData) => IProjectPageData

export const getProjectsData: IgetProjectsData = data => {
  return {
    id: data.id,
    slug: data.attributes?.slug,
    title: data.attributes?.title || null,
    description: data.attributes?.content || null,
    showCategories: data.attributes.showCategories,
    categories: data.attributes?.categories?.data?.map((item: IData) => ({
      id: item.id,
      title: item.attributes.title || null,
      text: item.attributes.content || null,
      projects: item.attributes.projects.data.map((project: IData) => ({
        id: project.id,
        slug: project.attributes.slug || '#',
        img: API.imgUrl + project.attributes.logo.data.attributes.url,
        title: project.attributes.title,
        text: project.attributes.fullDescription,
        description: project.attributes.shortDescription,
        principles: project.attributes.principles,
        partner: project.attributes.partner,
        link: project.attributes.link || '#',
        galleryTitle: project.attributes.galleryTitle,
      })),
    })),
  }
}
