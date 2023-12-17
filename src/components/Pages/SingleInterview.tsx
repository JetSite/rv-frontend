import { IInterviewsData } from '@/utils/getInterviewsData'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { VideoLineItem } from '../Lines/VideoLineItem'
import Markdown from 'react-markdown'
import { Content } from '../Ui/Content'

interface Props {
  data: IInterviewsData
}

export const SingleInterview: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[24px] font-medium notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <div className="w-[80%]">
        <p className="text-[14px] text-gray-500 pb-6 mb-4">
          {data.description}
        </p>
        {data.videoLink ? (
          <div className="mb-8">
            <VideoLineItem
              date={data.date}
              persons={data.persons}
              source={data.source}
              title={data.title}
              link={data.videoLink}
            />
          </div>
        ) : null}
        <Content content={data.content as string} />
      </div>
    </Wrapper>
  )
}
