'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { MainLink } from '@/components/Ui/MainLink'
import { IHeaderNavSettings, INavItem } from '@/types/layout'
import { IColorScheme, MainNavDropdown } from './MainNavDropdown'
import { Locale } from '@/i18n-config'
import { DropdownOnHover } from '@/components/Ui/Dropdowns/DropdownOnHover'
import MoreIcon from '@/components/Ui/Icons/MoreIcon'
import { recalculateVisibleItems } from '@/utils/recalculateVisibleItems'

interface Props {
  data: INavItem[]
  settings?: IHeaderNavSettings
  locale: Locale // Изменение языка
}

export const MainNav: FC<Props> = ({ data, settings, locale }) => {
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
  }, [locale, data])

  return (
    <nav
      className="relative flex items-center 
     w-full max-w-[790px]
    "
    >
      <ul
        ref={navRef}
        className="flex w-full  max-w-[100%] flex-1 justify-between notDesktop:hidden font-medium desktopOnly:text-sm text-h gap-3 desktopLarge:text-xl desktopLarge:gap-4 desktopOnly:max-w-[450px]"
      >
        {data.map(item =>
          item.children.length ? (
            <li key={item.id} data-id={item.id} className="main-nav">
              <MainNavDropdown
                locale={locale}
                colorScheme={colorScheme}
                item={item}
                data={item.children}
              />
            </li>
          ) : (
            <li key={item.id} data-id={item.id} className="main-nav">
              <MainLink locale={locale} item={item} colorScheme={colorScheme} />
            </li>
          ),
        )}
      </ul>
      {hiddenItems.length > 0 ? (
        <div className="mx-3 desktopLarge:mx-4">
          <DropdownOnHover
            show={show}
            setShow={setShow}
            button={
              <button className="text-center leading-[10px] flex items-center">
                <MoreIcon />
              </button>
            }
          >
            <div className="relative">
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
        </div>
      ) : null}
    </nav>
  )
}
