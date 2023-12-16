import { FC } from 'react'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'
import { IInterviewsData } from '@/utils/getInterviewsData'

interface Props {
  interviews: IInterviewsData[]
}

export const InterviewsLine: FC<Props> = ({ interviews }) => {
  return (
    <ul className="flex flex-col">
      {interviews.map(interview => {
        return (
          <li key={interview.id} className="flex w-full gap-10">
            <ul className="">
              {interview.persons.map(persone => (
                <li key={persone.id} className="pb-14 -mt-4">
                  <div className="">
                    <img
                      className="rounded-full object-cover object-center mb-4"
                      width={75}
                      height={75}
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
            <div className="bg-first bg-opacity-20 w-px relative">
              <VideoIcon className="absolute -left-[14px]" />
            </div>
            <Link
              href={'/media/interviews/' + interview.slug}
              className="w-full pb-14"
            >
              <h3 className="text-[18px] text-first mb-1.5">
                {interview.title}
              </h3>
              <p className="text-14 flex gap-1 font-medium mb-2.5">
                <Link href={interview.source}>
                  {interview.source}
                  {','}
                </Link>
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
