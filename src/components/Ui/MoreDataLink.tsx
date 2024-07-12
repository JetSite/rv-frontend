'use client'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { IChildren, IData, IPagination } from '@/types'
import { API } from '@/api'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { IStandartItem } from '@/types/item'

interface Props {
  title: string
  sx?: string
  setNewData?: Dispatch<SetStateAction<any[]>>
  loadingTitle?: IChildren
  paginationState?: IPagination
  setPaginationState?: Dispatch<SetStateAction<IPagination>>
  link?: string
  formartDataCallback?: (data: IData[]) => {
    data: IInterviewsData[] | IAudioAndVideosData[]
    source: string
  }
}

export const MoreDataLink: FC<Props> = ({
  title,
  link,
  sx,
  setNewData,
  paginationState,
  setPaginationState,
  formartDataCallback,
  loadingTitle = 'Загрузка...',
}) => {
  if (
    !paginationState ||
    !setPaginationState ||
    !setNewData ||
    !formartDataCallback
  )
    return null
  const [haveNewPage, setHaveNewPage] = useState<boolean>(
    paginationState.pageCount > paginationState.page,
  )
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (paginationState.pageCount === paginationState.page) {
      setHaveNewPage(false)
    }
    setHaveNewPage(paginationState.pageCount > paginationState.page)
  }, [paginationState])

  const handleClick = async () => {
    const res = await fetch(
      link + `&pagination[page]=${haveNewPage && paginationState.page + 1}`,
    )

    const dataRes = await res.json()

    setPaginationState(dataRes.meta.pagination)

    setNewData(pre => [...pre, ...formartDataCallback(dataRes.data).data])
    setLoading(false)
  }

  return haveNewPage ? (
    <div className="ml-[54px] mt-4 text-h text-[16px] font-medium">
      <button
        onClick={() => {
          handleClick()
          setLoading(true)
        }}
        className={`whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 text-inherit hover:before:w-full
    `}
      >
        <span className={sx}>{loading ? loadingTitle : title}</span>
      </button>
    </div>
  ) : null
}
