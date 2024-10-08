import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IProjectPageData } from '@/utils/getProjectsData'
import Link from 'next/link'
import classNames from '@/utils/classNames'
import { Locale } from '@/i18n-config'

interface Props {
  data: IProjectPageData
  locale: Locale
}

export const Projects: FC<Props> = ({ data, locale }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-sm desktopOnly:text-xs text-gray-500 pb-6 mb-4 w-[80%]">
        {data.description}
      </p>
      <ul>
        {data.categories.map(category => (
          <li key={category.id}>
            {data.showCategories ? (
              <>
                <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-8 desktopOnly:mb-6">
                  {category.title}
                </p>
                <p className="text-sm desktopOnly:text-xs text-gray-500  mb-4 w-[80%]">
                  {category.text}
                </p>
              </>
            ) : null}
            <ul className="flex flex-wrap justify-between gap-14 desktopOnly:gap-10 tablet:gap-4 mobile:flex-col mobile:items-center mb-8 desktopOnly:mb-6">
              {category.projects.map(project => {
                return (
                  <li
                    key={project.id}
                    className="w-[300px] desktopOnly:w-[220px] mb-8 desktopOnly:mb-6 last:mr-auto shadow-lg hover:bg-gray-100 hover:shadow-xl hover:bg-opacity-60 p-2 cur"
                  >
                    <Link href={'projects/' + project.slug}>
                      <img
                        width={250}
                        height={334}
                        className="mx-auto mb-8 object-contain desktopOnly:mb-6 block h-[334px] desktopOnly:h-[260px]"
                        src={project.img}
                      />
                      <p className="text-h text-sm desktopOnly:text-xs font-medium whitespace-nowrap truncate overflow-hidden">
                        {project.title}
                      </p>
                      <p className="text-sm desktopOnly:text-xs max-h-4 truncate overflow-hidden">
                        {project.description}
                      </p>
                      <p className="text-sm desktopOnly:text-xs max-h-4 truncate overflow-hidden">
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
