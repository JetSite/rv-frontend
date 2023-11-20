import { EventCard } from '@/components/Cards/EventCard'
import { Scrollbar } from '@/components/Ui/Scrollbar'
import { monthsConfig } from '@/config/calendar'
import { EventItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'
import { ISelectItem } from '../Ui/Dropdowns'

interface ArchiveProps {
  title: string
  subTitle: string
  itemsArchive: EventItem[]
  yearsList: ISelectItem[]
}

export const Archive: FC<ArchiveProps> = ({
  title,
  subTitle,
  itemsArchive,
  yearsList,
}) => {
  return (
    <div className="max-w-content w-full mx-auto mt-7">
      <h1 className="text-first text-[48px] mb-7 font-bold">{title}</h1>
      <p className="text-gray-700 mb-14 text-[14px] w-3/4">{subTitle}</p>
      <div className="flex archive w-full">
        <Scrollbar isShowTrack className="h-full w-[60%] mr-18">
          <ul>
            {itemsArchive.map(event => (
              <li className="w-1/2" key={event.title}>
                <EventCard item={event} />
              </li>
            ))}
            {itemsArchive.map(event => (
              <li className="w-1/2" key={event.title}>
                <EventCard item={event} />
              </li>
            ))}
            {itemsArchive.map(event => (
              <li className="w-1/2" key={event.title}>
                <EventCard item={event} />
              </li>
            ))}
            {itemsArchive.map(event => (
              <li className="w-1/2" key={event.title}>
                <EventCard item={event} />
              </li>
            ))}
            {itemsArchive.map(event => (
              <li className="w-1/2" id={'1'} key={event.title}>
                <EventCard item={event} />
              </li>
            ))}
          </ul>
        </Scrollbar>
        <Scrollbar
          isShowTrack={false}
          className="!w-[40%] h-full overflow-scroll text-first font-bold"
        >
          <ul>
            {yearsList.reverse().map(year => (
              <li key={year.id}>
                <h4 className="text-[48px]">{year.title}</h4>
                <ul className="ml-5 flex flex-col gap-2.5 mb-18">
                  {monthsConfig.map(month => (
                    <li key={month.value}>
                      <Link className="text-[30px]" href={`#${month.value}`}>
                        {month['ru']}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Scrollbar>
      </div>
    </div>
  )
}
