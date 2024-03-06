import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import { FC } from 'react'
import { MainNavDropdown } from './MainNavDropdown'

interface Props {
  data: INavItem[]
}

export const MainNav: FC<Props> = ({ data }) => {
  return (
    <ul className="flex w-full flex-1 justify-between notDesktop:hidden font-medium desktopOnly:text-[13px] text-h gap-3 desktopLarge:text-[19px] desktopLarge:gap-4">
      {data.map(item =>
        item.children.length ? (
          <li key={item.id} className="">
            <MainNavDropdown item={item} data={item.children} />
          </li>
        ) : (
          <li key={item.id} className="">
            <MainLink item={item} />
          </li>
        ),
      )}
    </ul>
  )
}
