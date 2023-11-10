import { navMock } from '@/api/mock'
import { MainLink } from '@/components/Ui/MainLink'
import Link from 'next/link'
import { FC } from 'react'

export const MainNav: FC = () => {
  return (
    <ul className="flex w-full flex-1 justify-between mobile:hidden">
      {navMock.map(item => (
        <li key={item.title} className="px-2 last:pr-0 first:pl-0">
          <MainLink item={item} />
        </li>
      ))}
    </ul>
  )
}
