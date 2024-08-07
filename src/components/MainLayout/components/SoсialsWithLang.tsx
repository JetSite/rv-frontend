'use client'
import { SearchComponent } from '@/components/SearchComponent'
import { langConfig } from '@/config'
import { ISocialsItem } from '@/types/layout'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { FC, useState } from 'react'

interface ISoсialsWithLang {
  subKey?: string
  className?: string
  variant?: 'footer' | 'tablet' | 'standart'
  data: ISocialsItem[]
}

export const SoсialsWithLang: FC<ISoсialsWithLang> = ({
  className = 'flex gap-4 desktopOnly:gap-3 desktopLarge:gap-5 items-center notDesktop:hidden text-h',
  subKey = 'header',
  variant = 'standart',
  data,
}) => {
  const [select, setSelect] = useState('ru')

  return (
    <div className={classNames(className, 'text-h')}>
      {variant === 'footer' ? <SearchComponent /> : null}
      <ul
        className={
          {
            footer: 'flex gap-5 mb-2.5 desktopOnly:gap-1.5 ',
            standart: 'flex desktopOnly:gap-3 desktopLarge:gap-3',
            tablet: 'flex gap-5 h-full desktopOnly:gap-1.5 ',
          }[variant]
        }
      >
        {data?.map(item => (
          <li key={item?.id}>
            <Link
              target="_blank"
              href={item?.slug}
              className="relative block hover:opacity-100 opacity-90"
            >
              <img
                alt={item?.title}
                src={item?.img}
                className="desktopOnly:w-[26px] desktopLarge:w-10"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={
          {
            footer: 'flex items-center flex-col ',
            standart: 'flex items-center desktopOnly:gap-3 desktopLarge:gap-3',
            tablet: 'tablet:self-end',
          }[variant]
        }
      >
        <div
          className={
            {
              footer: 'flex items-center justify-center',
              standart: 'flex items-center justify-center',
              tablet: 'flex items-center justify-center',
            }[variant]
          }
        >
          <img
            className="block desktopOnly:w-[30px] opacity-40"
            height={45}
            width={45}
            alt="glasses"
            src="/images/glasses.svg"
          />
        </div>
        <ul
          className={
            { footer: 'flex -order-1 ', standart: 'flex', tablet: 'flex ' }[
              variant
            ]
          }
        >
          {langConfig.map((item, i) => (
            <li
              key={subKey + ' ' + item.value}
              className="px-2 border-r-2 border-h last:border-none first:pl-0 last:pr-0 text-[18px] desktopOnly:text-[12px] opacity-40"
            >
              <div
                className={select === item.value ? 'font-bold' : 'font-normal'}
              >
                {select && Object.values(item.label)[i]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
