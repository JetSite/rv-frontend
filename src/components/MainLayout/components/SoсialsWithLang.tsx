'use client'
import { socialsMock } from '@/api/mock'
import { langConfig } from '@/config'
import Link from 'next/link'
import { FC, useState } from 'react'

interface ISoсialsWithLang {
  subKey?: string
  footer?: boolean
  className?: string
}

export const SoсialsWithLang: FC<ISoсialsWithLang> = ({
  className = 'flex gap-5 items-center mobile:hidden',
  subKey = 'header',
  footer,
}) => {
  const [select, setSelect] = useState('ru')

  return (
    <div className={className}>
      <ul className={footer ? 'flex gap-5 mb-2.5' : 'flex gap-5 '}>
        {socialsMock.map(item => (
          <li key={item.icon}>
            <Link href={item.slug}>
              <img src={`images/${item.icon}.svg`} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={footer ? 'order-1' : ''}>
        <img
          className="block"
          height={45}
          width={45}
          src="images/glasses.svg"
        />
      </div>
      <ul className="flex">
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
  )
}
