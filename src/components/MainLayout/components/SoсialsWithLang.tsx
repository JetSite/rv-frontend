'use client'
import { socialsMock } from '@/api/mock'
import { langConfig } from '@/config'
import { ISocialsItem } from '@/types/layout'
import Link from 'next/link'
import { FC, useState } from 'react'

interface ISoсialsWithLang {
  subKey?: string
  className?: string
  variant?: 'footer' | 'tablet' | 'standart'
  data: ISocialsItem[]
}

export const SoсialsWithLang: FC<ISoсialsWithLang> = ({
  className = 'flex gap-5 items-center notDesktop:hidden',
  subKey = 'header',
  variant = 'standart',
  data,
}) => {
  const [select, setSelect] = useState('ru')

  return (
    <div className={className}>
      <ul
        className={
          {
            footer: 'flex gap-5 mb-2.5',
            standart: 'flex gap-5 ',
            tablet: 'flex gap-5 h-full',
          }[variant]
        }
      >
        {data?.map(item => (
          <li key={item?.id}>
            <Link href={item?.slug}>
              <img alt={item?.title} src={item?.img} />
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={
          {
            footer: 'order-1',
            standart: 'flex items-center gap-4',
            tablet: 'tablet:self-end',
          }[variant]
        }
      >
        <div
          className={
            {
              footer: 'flex items-center justify-center order-1',
              standart: 'flex items-center justify-center',
              tablet: 'flex items-center justify-center',
            }[variant]
          }
        >
          <img
            className="block"
            height={45}
            width={45}
            alt="glasses"
            src="/images/glasses.svg"
          />
        </div>
        <ul
          className={
            { footer: 'flex', standart: 'flex', tablet: 'flex ' }[variant]
          }
        >
          {langConfig.map((item, i) => (
            <li
              key={subKey + ' ' + item.value}
              className="px-2 border-r-2 border-h last:border-none first:pl-0 last:pr-0 text-[18px]"
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
