import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import { FC } from 'react'
import { MainNavDropdown } from './MainNavDropdown'

interface Props {
  data: INavItem[]
}

export const MainNav: FC<Props> = ({ data }) => {
  return (
    <ul className="flex w-full flex-1 justify-between notDesktop:hidden">
      {data.map(item =>
        item.children.length ? (
          <li key={item.id} className="px-2 last:pr-0 first:pl-0">
            <MainNavDropdown item={item} data={item.children} />
          </li>
        ) : (
          <li key={item.id} className="px-2 last:pr-0 first:pl-0">
            <MainLink item={item} />
          </li>
        ),
      )}
    </ul>
  )
}
