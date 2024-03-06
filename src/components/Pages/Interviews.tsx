'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { MainLink } from '../Ui/MainLink'
import { InterviewsLine } from '../Lines/InterviewsLine'
import { IInterviewsData, getInterviewData } from '@/utils/getInterviewsData'
import { FilterVideo } from '../Filters/FilterVideo'
import { IFilterData } from '@/api/fetch/getFilterData'

interface Props {
  data: { data: IInterviewsData[]; source: string }
  filterData: IFilterData
}

export const Interviews: FC<Props> = ({ data, filterData }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          Интервью
        </h2>
      }
    >
      <div className="notMobile:w-[80%]">
        <p className="text-[14px] text-gray-500 pb-6 mb-4">
          Интервью с Рубеном Варданяном - это возможность узнать о нем больше,
          его взглядах, мнениях и опыте. В ходе такого интервью можно узнать
          много нового и интересного о жизни и деятельности известной персоны.
          Кроме того, интервью позволяет задать вопросы, которые могут быть
          интересны широкой аудитории.
        </p>
        <FilterVideo
          filterData={filterData}
          data={data}
          formartDataCallback={getInterviewData}
        >
          <InterviewsLine />
        </FilterVideo>
        <p className="ml-[54px] mt-4">
          <MainLink item={{ title: 'Больше интервью', slug: '#' }} />
        </p>
      </div>
    </Wrapper>
  )
}
