'use client'
import {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { RadioButton } from '../Ui/Inputs/RadioButton'
import { ITheme } from '@/config'
import { IFilterData } from '@/api/fetch/getFilterData'
import Autocomplete from '../Ui/Inputs/Autocomplete'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { API } from '@/api'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { IData, IPagination } from '@/types'
import { Locale } from '@/i18n-config'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props {
  filterData: IFilterData
  seoData: ISeoData
  locale: Locale
  children: Array<ReactElement> | ReactElement
  data: { data: IAudioAndVideosData[] | IInterviewsData[]; source: string }
  formartDataCallback: (data: IData[]) => {
    data: IInterviewsData[] | IAudioAndVideosData[]
    source: string
  }
  pagination: IPagination
  fetchLinkTitle: string
  loadingTitle: string
  nothingWasFoundText: string
}

export interface IFilters {
  title: string | null
  source: string | null
  year: string | null
}

export const FilterVideo: FC<Props> = ({
  filterData,
  children,
  data,
  formartDataCallback,
  pagination,
  locale,
  seoData,
  fetchLinkTitle,
  loadingTitle,
  nothingWasFoundText,
}) => {
  const initialFilter = { title: null, source: null, year: null }
  const [filters, setFilters] = useState<IFilters>(initialFilter)
  const [loading, setLoading] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [paginationState, setPaginationState] =
    useState<IPagination>(pagination)
  const [fetchLink, setFetchLink] = useState<string>(
    `${API.baseUrl}/${data.source}?sort[0]=date:desc&populate[${
      data.source === 'interviews' ? 'person' : 'persons'
    }][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=2&locale=${locale}`,
  )
  const [newData, setNewData] = useState<
    IAudioAndVideosData[] | IInterviewsData[]
  >(data.data)

  const partners: ITheme[] = [
    { title: seoData.speakerRubenVardanyanButtonText, value: 3 },
    { title: seoData.speakerPartnersButtonText, value: 2 },
    { title: seoData.speakerAllButtonText, value: 1 },
  ]
  const [selectRadioItem, setSelectRadioItem] = useState<ITheme>(
    partners.find(e => e.value === 1) || partners[0],
  )

  const isMounted = useRef(false)

  const fetchNewData = async (
    filters: IFilters,
    source: string,
    selectRadioItem?: ITheme,
  ) => {
    let filtersString = ''
    if (filters.year) {
      filtersString += `&filters[date][$gte][1]=${
        filters.year
      }-01-01&filters[$and][2][date][$lte]=${Number(filters.year) + 1}-01-01`
    }
    if (filters.source) {
      filtersString += `&filters[source][title][$eq][3]=${filters.source}`
    }
    if (filters.title) {
      filtersString += `&filters[title][$eq][4]=${filters.title}`
    }
    if (selectRadioItem?.value === 3) {
      filtersString += `&filters[${
        source === 'interviews' ? 'person' : 'persons'
      }][id][$in]=1`
    } else if (selectRadioItem?.value === 2) {
      filtersString += `&filters[${
        source === 'interviews' ? 'person' : 'persons'
      }][id][$notIn]=1`
    }
    const resultLink = `${API.baseUrl}/${source}?sort[0]=date:desc&populate[${
      source === 'interviews' ? 'person' : 'persons'
    }][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=2${filtersString}&locale=${locale}`
    const res = await fetch(resultLink)

    setFetchLink(resultLink)

    const dataRes = await res.json()

    setNewData(formartDataCallback(dataRes.data).data)
    setPaginationState(dataRes.meta.pagination)
    setLoading(false)
  }

  useEffect(() => {
    if (isMounted.current) {
      fetchNewData(filters, data.source, selectRadioItem)
    } else {
      isMounted.current = true
    }
  }, [selectRadioItem])

  const handleSubmit = async () => {
    setLoading(true)
    fetchNewData(filters, data.source, selectRadioItem)
    setDisabled(true)
  }

  return (
    <>
      <div className="mb-16 flex flex-col gap-6">
        <div className="text-first flex gap-6 flex-wrap">
          <Autocomplete
            setFilters={setFilters}
            handleSelect={value => {
              setDisabled(false)
              setFilters(prev => ({ ...prev, title: value }))
            }}
            handleClear={() => {
              setDisabled(false)
            }}
            className="w-[240px] desktopOnly:w-[180px] bg-gray-100 text-sm desktopOnly:text-xs placeholder:opacity-60 px-7 desktopOnly:pl-5 desktopOnly:pr-6 py-4 desktopOnly:py-3 relative"
            placeholder={seoData.projectPlaceholder}
            name="title"
            items={filterData.titles}
          />
          <Autocomplete
            setFilters={setFilters}
            className="w-[100px] desktopOnly:w-[70px] bg-first bg-opacity-5 text-sm desktopOnly:text-xs placeholder:opacity-60 px-7 desktopOnly:pl-5 desktopOnly:pr-6 desktopOnly:py-3 py-4"
            name="year"
            placeholder={seoData.yearPlaceholder}
            handleSelect={value => {
              setDisabled(false)
              setFilters(prev => ({ ...prev, year: value }))
            }}
            handleClear={() => {
              setDisabled(false)
            }}
            items={filterData.dates}
          />

          <Autocomplete
            setFilters={setFilters}
            className="w-[152px] desktopOnly:w-[112px] bg-first bg-opacity-5 text-sm desktopOnly:text-xs placeholder:opacity-60 px-7 desktopOnly:pl-5 desktopOnly:pr-6 desktopOnly:py-3 py-4"
            name="source"
            placeholder={seoData.sourcePlaceholder}
            type="text"
            handleSelect={value => {
              setFilters(prev => ({ ...prev, source: value }))
              setDisabled(false)
            }}
            handleClear={() => {
              setDisabled(false)
            }}
            items={filterData.sources}
          />

          <div className="w-[170px] flex items-center flex-col">
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={loading || disabled}
              className="w-full h-full max-w-[475px] desktopOnly:max-w-[380px] text-sm desktopOnly:text-xs leading-none text-white bg-first py-2 disabled:bg-opacity-60 hover:bg-opacity-80"
            >
              {loading ? seoData.loadingButtonText : seoData.searchButtonText}
            </button>
          </div>
        </div>
        <div className="flex gap-6 text-sm desktopOnly:text-xs mobile:flex-col mobile:gap-2">
          <p className="text-first opacity-60">{seoData.speakerLabelText}</p>
          <ul className=" flex flex-row justify-between gap-14 desktopOnly:gap-8 mobile:flex-wrap mobile:gap-2">
            {partners.map((item, i) => (
              <li key={i}>
                <RadioButton
                  selectItem={selectRadioItem}
                  hendelClick={() => {
                    setSelectRadioItem(item)
                  }}
                  name={'theme'}
                  label={item.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {Children.map(children, child =>
        cloneElement(child, {
          data: newData,
          setNewData,
          formartDataCallback,
          fetchLink,
          setPaginationState,
          paginationState,
          fetchLinkTitle,
          loadingTitle,
          nothingWasFoundText,
        }),
      )}
    </>
  )
}
