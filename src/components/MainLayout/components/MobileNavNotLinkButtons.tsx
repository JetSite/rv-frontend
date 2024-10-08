import { FC, useState } from 'react'
import { IColorScheme } from './MainNavDropdown'
import classNames from '@/utils/classNames'
import { INavItem } from '@/types/layout'
import { IID } from '@/types'

interface Props {
  colorScheme: IColorScheme | null
  showSubMenu: IID | null
  item: INavItem
}

export const MobileNavNotLinkButtons: FC<Props> = ({
  colorScheme,
  showSubMenu,
  item,
}) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover
          ? colorScheme?.hover
          : colorScheme?.active || colorScheme?.default,
      }}
      className={classNames(
        'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 text-inherit',
        !colorScheme?.hover &&
          (showSubMenu === item.id ? 'before:w-full' : 'hover:before:w-full'),
      )}
    >
      {item.title}
    </span>
  )
}
