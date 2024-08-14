'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { InterviewsLine } from '../Lines/InterviewsLine'
import { IInterviewsData, getInterviewData } from '@/utils/getInterviewsData'
import { FilterVideo } from '../Filters/FilterVideo'
import { IFilterData } from '@/api/fetch/getFilterData'
import { IMeta } from '@/types'

interface Props {
  data: { data: IInterviewsData[]; source: string }
  filterData: IFilterData
  meta: IMeta
}

export const Interviews: FC<Props> = ({ data, filterData, meta }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl font-bold notDesktop:text-2xl mobile:mt-5">
          Интервью
        </h2>
      }
    >
      <div className="notMobile:w-[80%]">
        <p className="text-sm text-gray-500 pb-6 mb-4">
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
          pagination={meta.pagination}
        >
          <InterviewsLine />
        </FilterVideo>
      </div>
    </Wrapper>
  )
}
