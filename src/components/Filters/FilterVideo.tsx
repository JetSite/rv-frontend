'use client'
import {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react'
import { RadioButton } from '../Ui/Inputs/RadioButton'
import { ITheme } from '@/config'
import { IFilterData } from '@/api/fetch/getFilterData'
import Autocomplete from '../Ui/Inputs/Autocomplete'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { API } from '@/api'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { IData } from '@/types'

interface Props {
  filterData: IFilterData
  children: Array<ReactElement> | ReactElement
  data: { data: IAudioAndVideosData[] | IInterviewsData[]; source: string }
  formartDataCallback: (data: IData[]) => {
    data: IInterviewsData[] | IAudioAndVideosData[]
    source: string
  }
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
}) => {
  const initialFilter = { title: null, source: null, year: null }
  const [filters, setFilters] = useState<IFilters>(initialFilter)
  const [loading, setLoading] = useState<boolean>(false)
  const [newData, setNewData] = useState<
    IAudioAndVideosData[] | IInterviewsData[]
  >(data.data)
  const partners: ITheme[] = [
    { title: 'Рубен Варданян', value: 3 },
    { title: 'Партнёры', value: 2 },
    { title: 'Все', value: 1 },
  ]
  const [selectRadioItem, setSelectRadioItem] = useState<ITheme>(
    partners.find(e => e.value === 1) || partners[0],
  )

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
    const res = await fetch(
      `${API.baseUrl}/${source}?sort[0]=date:desc&populate[${
        source === 'interviews' ? 'person' : 'persons'
      }][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link${filtersString}`,
    )

    const dataRes = await res.json()

    setNewData(formartDataCallback(dataRes.data).data)
    setLoading(false)
  }

  useEffect(() => {
    fetchNewData(filters, data.source, selectRadioItem)
  }, [selectRadioItem])

  const handleSubmit = async () => {
    setLoading(true)
    fetchNewData(filters, data.source, selectRadioItem)
  }

  return (
    <>
      <div className="mb-16 flex flex-col gap-6">
        <div className="text-first flex gap-6">
          <Autocomplete
            setFilters={setFilters}
            handleSelect={value =>
              setFilters(prev => ({ ...prev, title: value }))
            }
            className="w-[240px] desktopOnly:w-[180px] bg-gray-100 text-[14px] desktopOnly:text-[12px] placeholder:opacity-60 px-7 desktopOnly:px-5 py-4 desktopOnly:py-3 relative"
            placeholder="Проект"
            name="title"
            items={filterData.titles}
          />
          <Autocomplete
            setFilters={setFilters}
            className="w-[100px] desktopOnly:w-[70px] bg-first bg-opacity-5 text-[14px] desktopOnly:text-[12px] placeholder:opacity-60 px-7 desktopOnly:px-5 desktopOnly:py-3 py-4"
            name="year"
            placeholder="Год"
            handleSelect={value =>
              setFilters(prev => ({ ...prev, year: value }))
            }
            items={filterData.dates}
          />

          <Autocomplete
            setFilters={setFilters}
            className="w-[152px] desktopOnly:w-[112px] bg-first bg-opacity-5 text-[14px] desktopOnly:text-[12px] placeholder:opacity-60 px-7 desktopOnly:px-5 desktopOnly:py-3 py-4"
            name="source"
            placeholder="Источник"
            type="text"
            handleSelect={value =>
              setFilters(prev => ({ ...prev, source: value }))
            }
            items={filterData.sources}
          />

          <div className="w-[170px] flex items-center flex-col">
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={
                loading ||
                !Object.keys(filters).find(
                  key => filters[key as keyof IFilters],
                )
              }
              // disabled={Object.keys(filters).some(
              //   key => !filters[key as keyof IFilters],
              // )}
              className="w-full h-full max-w-[475px] desktopOnly:max-w-[380px] text-[14px] desktopOnly:text-[12px] leading-none text-white bg-first py-2 disabled:bg-opacity-60 hover:bg-opacity-80"
            >
              {loading ? 'ЗАГРУЗКА...' : 'ПОИСК'}
            </button>
          </div>
        </div>
        <div className="flex gap-6 text-[14px] desktopOnly:text-[12px]">
          <p className="text-first opacity-60">Спикер:</p>
          <ul className=" flex flex-row justify-between gap-14 desktopOnly:gap-8">
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
      {Children.map(children, child => cloneElement(child, { data: newData }))}
    </>
  )
}
