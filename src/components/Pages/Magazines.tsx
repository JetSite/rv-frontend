import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IMagazinesData } from '@/utils/getMagazinesData'
import Link from 'next/link'

interface Props {
  data: IMagazinesData[]
}

export const Magazines: FC<Props> = ({ data }) => {
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
                {category.magazines.map(magazine => (
                  <li
                    key={magazine.id}
                    className="w-[300px] mb-8 last:mr-auto hover:bg-gray-100 hover:shadow-xl hover:bg-opacity-60 p-2"
                  >
                    <img
                      width={250}
                      height={334}
                      className="mx-auto block h-[334px] mb-8"
                      src={magazine.img}
                    />
                    <p className="text-h text-[14px] font-medium mb-4 whitespace-nowrap truncate overflow-hidden">
                      {magazine.title}
                    </p>
                    {magazine.ruLink || magazine.enLink ? (
                      <p className="text-[14px] ml-auto w-fit">
                        <span>Скачать </span>
                        {magazine.ruLink ? (
                          <Link target="_blank" href={magazine.ruLink}>
                            RU версия{' '}
                          </Link>
                        ) : null}
                        {magazine.ruLink && magazine.enLink ? '/' : ''}
                        {magazine.enLink ? (
                          <Link target="_blank" href={magazine.enLink}>
                            {' '}
                            EN version
                          </Link>
                        ) : null}
                      </p>
                    ) : null}
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
