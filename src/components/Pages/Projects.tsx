'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IProjectPageData } from '@/utils/getProjectsData'
import Link from 'next/link'
import { getValidUrl } from '@/utils/checkUrls'
import classNames from '@/utils/classNames'

interface Props {
  data: IProjectPageData
}

export const Projects: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-[14px] desktopOnly:text-[12px] text-gray-500 pb-6 mb-4 w-[80%]">
        {data.description}
      </p>
      <ul>
        {data.categories.map(category => (
          <li key={category.id}>
            {data.showCategories ? (
              <>
                <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
                  {category.title}
                </p>
                <p className="text-[14px] desktopOnly:text-[12px] text-gray-500  mb-4 w-[80%]">
                  {category.text}
                </p>
              </>
            ) : null}
            <ul className="flex flex-wrap justify-between gap-14 desktopOnly:gap-10 tablet:gap-4 mobile:flex-col mobile:items-center mb-8 desktopOnly:mb-6">
              {category.projects.map(project => {
                const validLink = getValidUrl(project.link)
                return (
                  <li
                    key={project.id}
                    className="w-[300px] desktopOnly:w-[220px] mb-8 desktopOnly:mb-6 last:mr-auto shadow-lg hover:bg-gray-100 hover:shadow-xl hover:bg-opacity-60 p-2 cur"
                  >
                    <Link
                      onClick={e => {
                        validLink === '#' && e.preventDefault()
                      }}
                      target={validLink === '#' ? undefined : '_blank'}
                      className={classNames(
                        validLink === '#' ? 'cursor-default' : '',
                      )}
                      href={validLink}
                    >
                      <img
                        width={250}
                        height={334}
                        className="mx-auto mb-8 object-contain desktopOnly:mb-6 block h-[334px] desktopOnly:h-[260px]"
                        src={project.img}
                      />
                      <p className="text-h text-[14px] desktopOnly:text-[12px] font-medium whitespace-nowrap truncate overflow-hidden">
                        {project.title}
                      </p>
                      <p className="text-[14px] desktopOnly:text-[12px] max-h-4 truncate overflow-hidden">
                        {project.description}
                      </p>
                      <p className="text-[14px] desktopOnly:text-[12px] max-h-4 truncate overflow-hidden">
                        {project.text}
                      </p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
