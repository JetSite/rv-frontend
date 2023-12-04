'use client'
import { navMock } from '@/api/mock'
import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  data: INavItem[]
}

export const MainNav: FC<Props> = ({ data }) => {
  return (
    <ul className="flex w-full flex-1 justify-between notDesktop:hidden">
      {data.map(item => (
        <li key={item.id} className="px-2 last:pr-0 first:pl-0">
          <MainLink item={item} />
        </li>
      ))}
    </ul>
  )
}
