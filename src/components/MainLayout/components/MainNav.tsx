'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { MainLink } from '@/components/Ui/MainLink'
import { IHeaderNavSettings, INavItem } from '@/types/layout'
import { IColorScheme, MainNavDropdown } from './MainNavDropdown'
import { Locale } from '@/i18n-config'
import { DropdownOnHover } from '@/components/Ui/Dropdowns/DropdownOnHover'
import MoreIcon from '@/components/Ui/Icons/MoreIcon'
import { recalculateVisibleItems } from '@/utils/recalculateVisibleItems'
import { IThema } from '@/utils/getTheme'

interface Props {
  data: INavItem[]
  settings?: IHeaderNavSettings
  locale: Locale // Изменение языка
  theme: IThema
}

export const MainNav: FC<Props> = ({ data, settings, locale, theme }) => {
  const navRef = useRef<HTMLUListElement>(null)
  const [show, setShow] = useState<boolean>(false)
  const [hiddenItems, setHiddenItems] = useState<INavItem[]>([])

  const colorScheme: IColorScheme | null = settings
    ? {
        hover: settings.linkColorHover.trim(),
        default: settings.linkColor.trim(),
        active: settings.linkColorActive.trim(),
        // hover: 'red',
        // default: 'blue',
        // active: 'green',
      }
    : null

  useEffect(() => {
    recalculateVisibleItems(navRef, data, setHiddenItems)

    const handleResize = () =>
      recalculateVisibleItems(navRef, data, setHiddenItems)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [locale, data, theme])

  return (
    <nav
      className="relative flex items-center 
     w-full max-w-[790px] flex-grow min-w-0
    "
    >
      <ul
        ref={navRef}
        className="flex w-full max-w-[100%] flex-1 justify-between notDesktop:hidden font-medium desktopOnly:text-sm text-h gap-3 desktopLarge:text-xl desktopLarge:gap-3"
      >
        {data.map(item =>
          item.children.length ? (
            <li key={item.id} data-id={item.id} className="main-nav shrink">
              <MainNavDropdown
                locale={locale}
                colorScheme={colorScheme}
                item={item}
                data={item.children}
              />
            </li>
          ) : (
            <li key={item.id} data-id={item.id} className="main-nav shrink">
              <MainLink locale={locale} item={item} colorScheme={colorScheme} />
            </li>
          ),
        )}
        {hiddenItems.length > 0 ? (
          <button className="shrink">
            <DropdownOnHover
              show={show}
              setShow={setShow}
              button={
                <button className="text-center leading-[10px] flex items-center">
                  <MoreIcon />
                </button>
              }
            >
              <div className="relative bg-white shadow-xl px-2 py-1 rounded-b-lg min-w-[98px]">
                <ul className="">
                  {hiddenItems.map(item =>
                    item ? (
                      <li key={item.id}>
                        {item?.children.length ? (
                          <MainNavDropdown
                            locale={locale}
                            colorScheme={colorScheme}
                            item={item}
                            data={item.children}
                          />
                        ) : (
                          <MainLink
                            locale={locale}
                            item={item}
                            colorScheme={colorScheme}
                          />
                        )}
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            </DropdownOnHover>
          </button>
        ) : null}
      </ul>
    </nav>
  )
}
