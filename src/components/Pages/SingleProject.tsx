'use client'
import { Locale } from '@/i18n-config'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { Content } from '../Ui/Content'
import { IProject } from '@/utils/getProjectsData'
import Link from 'next/link'
import { getValidUrl } from '@/utils/checkUrls'
import classNames from '@/utils/classNames'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props {
  data: IProject
  locale: Locale
  seoData: ISeoData
}

export const SingleProject: FC<Props> = ({ data, locale, seoData }) => {
  const validLink = getValidUrl(data.link)

  return (
    <Wrapper
      sx=" notDesktop:px-8 desktop:mb-8"
      title={
        <h1 className="text-first text-5xl desktopOnly:text-3.5xl font-bold pt-10 mb-6 block notDesktop:text-2xl mobile:px-7 mobile:pt-4">
          {data?.title}
        </h1>
      }
    >
      <div className="notDesktop:flex flex-col gap-9 min-h-[552px] ">
        {!!data.img && (
          <div className="desktop:float-left flex flex-col  desktop:mr-9  desktop:mb-4  desktopOnly:w-2/3">
            <img className="desktopOnly:h-full object-cover " src={data.img} />
            {data.link && validLink !== '#' ? (
              <p className="flex gap-1 ">
                <span>{seoData.projectLink}</span>
                <Link
                  className={classNames('text-grey-400 hover:underline')}
                  target="_blank"
                  href={validLink}
                >
                  {data.link}
                </Link>
              </p>
            ) : null}
          </div>
        )}
        {data.text ? <Content sx="content mb-5  " content={data.text} /> : null}
      </div>
    </Wrapper>
  )
}
