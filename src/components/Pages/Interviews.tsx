'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { InterviewsLine } from '../Lines/InterviewsLine'
import { IInterviewsData, getInterviewData } from '@/utils/getInterviewsData'
import { FilterVideo } from '../Filters/FilterVideo'
import { IFilterData } from '@/api/fetch/getFilterData'
import { IMeta } from '@/types'
import { Locale } from '@/i18n-config'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props {
  data: { data: IInterviewsData[]; source: string }
  filterData: IFilterData
  meta: IMeta
  locale: Locale
  seoData: ISeoData
}

export const Interviews: FC<Props> = ({
  data,
  filterData,
  meta,
  locale,
  seoData,
}) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {seoData.seoTitle}
        </h2>
      }
    >
      <div className="notMobile:w-[80%]">
        <p className="text-sm text-gray-500 pb-6 mb-4">
          {seoData.seoDescription}
        </p>
        <FilterVideo
          locale={locale}
          filterData={filterData}
          data={data}
          formartDataCallback={getInterviewData}
          pagination={meta.pagination}
          seoData={seoData}
          fetchLinkTitle={seoData.moreVideoButtonText}
          loadingTitle={seoData.moreVideoLoadingText}
          nothingWasFoundText={seoData.nothingWasFoundText}
        >
          <InterviewsLine locale={locale} />
        </FilterVideo>
      </div>
    </Wrapper>
  )
}
