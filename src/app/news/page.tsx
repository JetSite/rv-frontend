import { newsMock } from '@/api/mock'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import classNames from '@/utils/classNames'

const NewsPage = () => {
  return (
    <>
      <Wrapper
        sx=""
        endLink={{ title: 'Архив новостей >', slug: 'news/archive' }}
        title={
          <h2 className="text-first text-[48px] font-bold pt-10 mb-6 block mobile:text-[24px] mobile:px-7 mobile:pt-4">
            Новости
          </h2>
        }
      >
        <ul className="grid grid-cols-4 grid-rows-7 gap-5 mb-10">
          {newsMock.map(
            (item, i) =>
              i < 16 && (
                <li
                  className={classNames(
                    ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 mb-5',
                    i === 6 || i === 15 || i < 2 ? 'row-span-2 col-span-2' : '',
                    i === 15 ? 'row-start-6 col-end-5' : '',
                  )}
                  key={item.title + i}
                >
                  {i === 6 || i === 15 || i < 2 ? (
                    <NewsPriorityCard item={item} />
                  ) : (
                    <NewsCard i={i} item={item} />
                  )}
                </li>
              ),
          )}
        </ul>
      </Wrapper>
    </>
  )
}

export default NewsPage
