'use client'
import { FC } from 'react'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { AvatarInLine } from '../Ui/AvatarInLine'
import { MainLink } from '../Ui/MainLink'

interface Props {
  data?: IInterviewsData[]
}

export const InterviewsLine: FC<Props> = ({ data }) => {
  return data?.length ? (
    <>
      <ul className="flex flex-col">
        {data.map(interview => {
          return (
            <li
              key={interview.id}
              className="flex w-full gap-10 desktopOnly:gap-8 mobile:gap-4"
            >
              <ul className="">
                {interview.persons.map(persone => (
                  <AvatarInLine persone={persone} />
                ))}
              </ul>
              <div className="bg-first bg-opacity-20 w-px relative mobile:hidden">
                <VideoIcon className="absolute -left-[14px]" />
              </div>
              <Link
                href={'/media/interviews/' + interview.slug}
                className="w-full pb-14 desktopOnly:pb-12"
              >
                <h3 className="text-[18px] desktopOnly:text-base text-first mb-1.5">
                  {interview.title}
                </h3>
                <p className="text-14 desktopOnly:text-[12px] flex gap-1 font-medium mb-2.5">
                  <span>
                    {interview.source.title}
                    {','}
                  </span>
                  <span>{interview.date}</span>
                </p>
                <p className="text-gray-500">{interview.description}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      <p className="ml-[54px] mt-4 text-h text-[16px] font-medium">
        <MainLink disabled item={{ title: 'Больше интервью', slug: '#' }} />
      </p>
    </>
  ) : (
    <div className="w-full flex-col my-10 flex items-center">
      <p className="text-h flex font-bold text-[18px]">Ничего не найдено</p>
    </div>
  )
}
