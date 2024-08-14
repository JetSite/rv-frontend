import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IBooksData } from '@/utils/getBooksData'

interface Props {
  data: IBooksData[]
}

export const Books: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          Книги
        </h2>
      }
    >
      <div className="">
        <p className="text-sm desktopOnly:text-xs text-gray-500 pb-6 mb-4 w-[80%]">
          Мы всегда старались расширять цивилизованное пространство вокруг себя
          – повышать не только собственный уровень образования, но и делиться
          знаниями с другими. При поддержке «Тройки Диалог», бизнес-школы
          СКОЛКОВО и нескольких благотворительных фондов были переведены на
          русский язык и изданы в России лучшие зарубежные издания о фондовом
          рынке, классика мировой бизнес-литературы, новинки художественной
          литературы, книги по истории, экономике, социологии, обществознанию и
          многие другие. В Армении вышли издания, посвященные истории и культуре
          страны, армянскому языку и геноциду в Западной Армении.
        </p>
        <ul>
          {data.map(category => (
            <li key={category.id}>
              <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-8 desktopOnly:mb-6">
                {category.title}
              </p>
              <ul className="flex flex-wrap justify-between gap-14 desktopOnly:gap-10 tablet:gap-4 mobile:flex-col mobile:items-center mb-8 desktopOnly:mb-6">
                {category.books.map(book => (
                  <li
                    key={book.id}
                    className="w-[300px] desktopOnly:w-[220px] mb-8 desktopOnly:mb-6 last:mr-auto hover:bg-gray-100 hover:shadow-xl hover:bg-opacity-60 p-2"
                  >
                    <img
                      width={250}
                      height={334}
                      className="mx-auto mb-8 desktopOnly:mb-6 block h-[334px] desktopOnly:h-[260px]"
                      src={book.img}
                    />
                    <p className="text-h text-sm desktopOnly:text-xs font-medium whitespace-nowrap truncate overflow-hidden">
                      {book.title}
                    </p>
                    <p className="text-sm desktopOnly:text-xs max-h-4 truncate overflow-hidden">
                      {book.author}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}
