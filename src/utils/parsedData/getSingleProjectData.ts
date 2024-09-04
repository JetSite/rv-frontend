import { API } from '@/api'
import { IID } from '@/types'
import { IProject } from '../getProjectsData'
import { getInterviewData } from '../getInterviewsData'
import { getAudioAndVideosData } from '../getAudioAndVideosData'
import { getMagazinesData } from '../getMagazinesData'

export type IgetSingleProjectData = (data: Array<any>) => IProject | null

export const getSingleProjectData: IgetSingleProjectData = data => {
  if (!data || !data.length) return null
  const project = data[0]

  const result: IProject = {
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
    gallery: project.attributes.gallery?.data?.map(
      (image: { id: IID; attributes: { url: string } }) =>
        ({
          id: image.id,
          img: API.imgUrl + image.attributes.url,
        }) || null,
    ),
    partners: project.attributes.partners?.data?.map(
      (partner: { id: IID; attributes: { [K: string]: string | null } }) => ({
        id: partner.id,
        slug: partner.attributes.slug,
        name: partner.attributes.partnerName,
        type: partner.attributes.partnerType,
        description: partner.attributes.shortDescription || null,
        link: partner.attributes.link,
      }),
    ),
    interview:
      project.attributes.interview && project.attributes.interview.data.length
        ? getInterviewData(project.attributes.interview?.data).data
        : null,
    audio_i_videos:
      project.attributes.audio_i_videos &&
      project.attributes.audio_i_videos?.data.length
        ? getAudioAndVideosData(project.attributes.audio_i_videos?.data).data
        : null,

    // magazines:
    //   project.attributes.magazines && project.attributes.magazines.data.lenght
    //     ? getMagazinesData(project.attributes.magazines.data)
    //     : null,
  }

  return result
}
