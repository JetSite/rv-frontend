'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { NewsCard } from '../Cards/NewsCard'
import classNames from '@/utils/classNames'
import { NewsPriorityCard } from '../Cards/NewsPriorityCard'
import { EventCard } from '../Cards/EventCard'
import { langUIConfig } from '@/config'
import { SearchComponent } from '../SearchComponent'
import { IPrepereSearchData } from '@/utils/parsedData/getSearchData'
import { Locale } from '@/i18n-config'

interface Props {
  data: IPrepereSearchData
  searchWord: string
  locale: Locale
}

const mockLocale = {
  by_request: {
    ru: 'По запросу',
    en: 'By request',
    'hy-AM': 'Հարցման արդյունքում',
  },
  found: {
    ru: 'найдено',
    en: 'found',
    'hy-AM': 'գտնված է',
  },
  pieces: {
    ru: 'шт.',
    en: 'pcs.',
    'hy-AM': 'հատ.',
  },
  news: {
    ru: 'Новости:',
    en: 'News:',
    'hy-AM': 'Լուրեր:',
  },
  events: {
    ru: 'События:',
    en: 'Events:',
    'hy-AM': 'Միջոցառումներ:',
  },
  interviews: {
    ru: 'Интервью:',
    en: 'Interviews:',
    'hy-AM': 'Հարցազրույցներ:',
  },
  activities: {
    ru: 'Деятельность:',
    en: 'Activities:',
    'hy-AM': 'Գործունեություն:',
  },
}

export const Search: FC<Props> = ({ data, searchWord, locale }) => {
  const { news, activities, interviews, events, countItems } = data

  return (
    <>
      <Wrapper sx="mobile:px-7 tablet:px-8">
        <div className="w-1/2 my-4">
          <SearchComponent locale={locale} />
        </div>
      </Wrapper>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl notDesktop:text-2xl mobile:mt-5 max-w-[80%]">
            {mockLocale.by_request[locale]}{' '}
            <span className="font-bold">{searchWord}</span>{' '}
            {mockLocale.found[locale]} <span>{countItems}</span>{' '}
            {mockLocale.pieces[locale]}
          </h2>
        }
      >
        {news.length ? (
          <section className="mb-6">
            <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-4 desktopOnly:mb-6">
              {mockLocale.news[locale]}
            </p>
            <ul
              className={classNames(
                'grid grid-cols-4 gap-5 mb-10 notDesktop:flex notDesktop:flex-wrap tablet:gap-0 tablet:justify-between tablet:px-8',
              )}
            >
              {news.map((item, i) => {
                return (
                  i < 20 && (
                    <li
                      value={i}
                      className={classNames(
                        ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 mb-5 ',
                        item.important
                          ? `${
                              true ? '' : 'desktop:row-span-2'
                            } tablet:w-full  desktop:col-span-2`
                          : 'tablet:w-[25%] tablet:min-w-[254px]',
                      )}
                      key={item.id + i.toString()}
                    >
                      {item.important ? (
                        <NewsPriorityCard
                          locale={locale}
                          link={'/news/all/' + item.slug}
                          item={item}
                        />
                      ) : (
                        <NewsCard
                          locale={locale}
                          link={'/news/all/' + item.slug}
                          showText
                          item={item}
                        />
                      )}
                    </li>
                  )
                )
              })}
            </ul>
          </section>
        ) : null}
        {events.length ? (
          <section className="mb-6">
            <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-4 desktopOnly:mb-6">
              {mockLocale.events[locale]}
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-wrap overflow-hidden tablet:px-8">
              {events.map((item, i) => (
                <li
                  className={classNames(
                    'desktop:mb-4 notMobile:max-h-[212px] notMobile:overflow-hidden ',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/events/all/' + item.slug}
                    item={item}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {interviews.length ? (
          <section className="mb-6">
            <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-4 desktopOnly:mb-6">
              {mockLocale.interviews[locale]}
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-wrap overflow-hidden tablet:px-8">
              {interviews.map((item, i) => (
                <li
                  className={classNames(
                    'desktop:mb-4 notMobile:max-h-[212px] notMobile:overflow-hidden ',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/media/interviews/' + item.slug}
                    item={item}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {activities.length ? (
          <section className="mb-6">
            <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-4 desktopOnly:mb-6">
              {mockLocale.activities[locale]}
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-col overflow-hidden tablet:px-8">
              {activities.map((e, i) => (
                <li key={e.id}>
                  <p className="flex gap-1 text-sm font-medium text-first mb-1">
                    <span>{e.startDate.split('-')[0]}</span>
                    {e.endDate || e.untilNow ? <span>-</span> : null}
                    {e.untilNow ? (
                      <span>{langUIConfig.now[locale]}</span>
                    ) : (
                      <span>{e.endDate?.split('-')[0]}</span>
                    )}
                  </p>
                  <p className="text-sm ">{e.name || e.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Wrapper>
    </>
  )
}
