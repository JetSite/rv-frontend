import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import { FC } from 'react'

interface Props {
  data: INavItem[]
}

export const FooterNav: FC<Props> = ({ data }) => {
  return (
    <ul className="flex w-full flex-1 justify-between mobile:flex-col mobile:items-center mobile:flex-initial mobile:gap-7 notDesktop:hidden">
      {data.map(item => {
        return (
          <li
            key={item.title}
            className="px-2 last:pr-0 first:pl-0  block text-[20px] font-bold mobile:p-0"
          >
            <MainLink item={item} />
            <ul className="flex flex-col mt-6 gap-2.5">
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
        )
      })}
    </ul>
  )
}
