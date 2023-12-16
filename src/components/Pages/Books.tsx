'use client'

import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IBooksData } from '@/utils/getBooksData'

interface Props {
  data: IBooksData[]
}

export const Books: FC<Props> = ({ data }) => {
  console.log(data)

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          Книги
        </h2>
      }
    >
      <div className="">
        <p className="text-[14px] text-gray-500 pb-6 mb-4 w-[80%]">
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
              <p className="text-h text-[24px] font-medium mb-8">
                {category.title}
              </p>
              <ul className="flex flex-wrap justify-between gap-8 mb-8 ">
                {category.books.map(book => (
                  <li
                    key={book.id}
                    className="w-[22%] mb-8 last:mr-auto hover:bg-gray-300 p-2"
                  >
                    <img
                      width={250}
                      height={334}
                      className="mx-auto mb-8"
                      src={book.img}
                    />
                    <p className="text-h text-[14px] font-medium">
                      {book.title}
                    </p>
                    <p className="text-[14px]">{book.author}</p>
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
