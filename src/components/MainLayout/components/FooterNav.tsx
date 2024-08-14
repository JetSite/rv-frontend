import { MainLink } from '@/components/Ui/MainLink'
import { colorShema } from '@/config'
import { INavItem } from '@/types/layout'
import { FC } from 'react'

interface Props {
  data: INavItem[]
}

export const FooterNav: FC<Props> = ({ data }) => {
  return (
    <ul className="flex w-full flex-1 justify-between text-h  notDesktop:hidden">
      {data.map(item => {
        return (
          <li
            key={item.title}
            className="gap-4 block text-sm font-bold desktopLarge:text-xl"
          >
            <MainLink item={item} />
            <ul className="flex flex-col mt-6 gap-2.5">
              {item.children.map(children => (
                <li
                  className="block text-xxs desktopLarge:text-base font-normal"
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
