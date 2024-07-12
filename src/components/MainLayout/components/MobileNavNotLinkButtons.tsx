import { FC, useState } from 'react'
import { IColorShema } from './MainNavDropdown'
import classNames from '@/utils/classNames'
import { INavItem } from '@/types/layout'
import { IID } from '@/types'

interface Props {
  colorShema: IColorShema | null
  showSubMenu: IID | null
  item: INavItem
}

export const MobileNavNotLinkButtons: FC<Props> = ({
  colorShema,
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
          ? colorShema?.hover
          : colorShema?.active || colorShema?.default,
      }}
      className={classNames(
        'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 text-inherit',
        !colorShema?.hover &&
          (showSubMenu === item.id ? 'before:w-full' : 'hover:before:w-full'),
      )}
    >
      {item.title}
    </span>
  )
}
