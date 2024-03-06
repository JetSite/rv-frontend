'use client'
import { FC } from 'react'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'
import { IInterviewsData } from '@/utils/getInterviewsData'

interface Props {
  data?: IInterviewsData[]
}

export const InterviewsLine: FC<Props> = ({ data }) => {
  return (
    <ul className="flex flex-col">
      {data?.map(interview => {
        return (
          <li
            key={interview.id}
            className="flex w-full gap-10 desktopOnly:gap-8 mobile:gap-4"
          >
            <ul className="">
              {interview.persons.map(persone => (
                <li key={persone.id} className="pb-14 desktopOnly:pb-12 -mt-4">
                  <div className="">
                    <img
                      className="rounded-full object-cover object-center mb-4 desktopOnly:mb-3 desktopOnly:w-[60px] w-[75px]"
                      src={persone.avatar}
                      alt={persone.title}
                    />
                  </div>
                  <span className="block w-min text-center">
                    {persone.title}
                  </span>
                </li>
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
  )
}
