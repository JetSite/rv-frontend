import { Dispatch, FC, SetStateAction } from 'react'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { AvatarInLine } from '../Ui/AvatarInLine'
import { MoreDataLink } from '../Ui/MoreDataLink'
import { IData, IPagination } from '@/types'

interface Props {
  data?: IInterviewsData[]
  setNewData?: Dispatch<SetStateAction<IInterviewsData[]>>
  setPaginationState?: Dispatch<SetStateAction<IPagination>>
  paginationState?: IPagination
  formartDataCallback?: (data: IData[]) => {
    data: IInterviewsData[]
    source: string
  }
  fetchLink?: string
  fetchLinkTitle?: string
}

export const InterviewsLine: FC<Props> = ({
  data,
  setNewData,
  setPaginationState,
  paginationState,
  formartDataCallback,
  fetchLink,
  fetchLinkTitle,
}) => {
  return data?.length ? (
    <>
      <ul className="flex flex-col">
        {data.map(interview => {
          return (
            <li
              key={interview.id}
              className="flex w-full gap-10 desktopOnly:gap-8 mobile:gap-4"
            >
              <ul className="mb-10">
                {interview.persons.map(persone => (
                  <AvatarInLine persone={persone} key={persone.id} />
                ))}
              </ul>
              <div className="bg-first bg-opacity-20 w-px relative mobile:hidden">
                <VideoIcon className="absolute -left-[14px]" />
              </div>
              <Link
                href={'/media/interviews/' + interview.slug}
                className="w-full pb-14 desktopOnly:pb-12"
              >
                <h3 className="text-lg desktopOnly:text-base text-first mb-1.5">
                  {interview.title}
                </h3>
                <p className="text-14 desktopOnly:text-xs flex gap-1 font-medium mb-2.5">
                  {!!interview.source && (
                    <span>
                      {interview.source.title}
                      {','}
                    </span>
                  )}
                  <span>{interview.date}</span>
                </p>
                <p className="text-gray-500">{interview.description}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      <MoreDataLink
        link={fetchLink}
        formartDataCallback={formartDataCallback}
        setNewData={setNewData}
        setPaginationState={setPaginationState}
        paginationState={paginationState}
        title={fetchLinkTitle ?? 'Больше интервью'}
      />
    </>
  ) : (
    <div className="w-full flex-col my-10 flex items-center">
      <p className="text-h flex font-bold text-lg">Ничего не найдено</p>
    </div>
  )
}
