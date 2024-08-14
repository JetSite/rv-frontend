import { cloneDeep } from 'lodash'
import { MainLink } from '@/components/Ui/MainLink'
import { IHeaderNavSettings, INavItem } from '@/types/layout'
import { FC } from 'react'
import { IColorShema, MainNavDropdown } from './MainNavDropdown'

interface Props {
  data: INavItem[]
  settings?: IHeaderNavSettings
}

export const MainNav: FC<Props> = ({ data, settings }) => {
  const colorShema: IColorShema | null = settings
    ? {
        hover: settings.linkColorHover.trim(),
        default: settings.linkColor.trim(),
        active: settings.linkColorActive.trim(),
      }
    : null

  return (
    <ul className="flex w-full flex-1 justify-between notDesktop:hidden font-medium desktopOnly:text-sm text-h gap-3 desktopLarge:text-xl desktopLarge:gap-4">
      {data.map(item =>
        item.children.length ? (
          <li key={item.id} className="main-nav">
            <MainNavDropdown
              colorShema={colorShema}
              item={item}
              data={item.children}
            />
          </li>
        ) : (
          <li key={item.id} className="main-nav">
            <MainLink item={item} colorShema={colorShema} />
          </li>
        ),
      )}
    </ul>
  )
}
