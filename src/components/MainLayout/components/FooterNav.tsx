import { navMock } from '@/api/mock'
import { MainLink } from '@/components/Ui/MainLink'
import Link from 'next/link'
import { FC } from 'react'

export const FooterNav: FC = () => {
  return (
    <ul className="flex w-full flex-1 justify-between mobile:flex-col mobile:items-center mobile:flex-initial mobile:gap-7">
      {navMock.map(item => (
        <li
          key={item.title}
          className="px-2 last:pr-0 first:pl-0  block text-[20px] font-bold mobile:p-0"
        >
          <MainLink item={item} />
          <ul className="flex flex-col mt-6 gap-2.5 mobile:hidden">
            {item.children.map(children => (
              <li
                className="block text-[20px] text-base font-normal"
                key={children.title}
              >
                <MainLink item={children} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
