'use client'
import { DropdownOnHover } from '@/components/Ui/Dropdowns/DropdownOnHover'
import { MainLink } from '@/components/Ui/MainLink'
import { Locale } from '@/i18n-config'
import { INavItem } from '@/types/layout'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

export interface IColorScheme {
  hover: string
  default: string
  active: string
}

interface Props {
  data: INavItem[]
  item: INavItem
  colorScheme: IColorScheme | null
  locale: Locale
}

export const MainNavDropdown: FC<Props> = ({
  data,
  item,
  colorScheme,
  locale,
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [hover, setHover] = useState(false)
  const pathname = usePathname()
  const href = '/' + item.slug ? '/' + locale + item.slug : '#'
  const showParentCurrentRout =
    item.children.find(e => '/' + locale + e.slug === pathname) ||
    href === pathname
  const showLine: boolean = pathname === href

  return (
    <DropdownOnHover
      setShow={setShow}
      show={show}
      button={
        <>
          {item.isActive && colorScheme ? (
            <Link
              href={href}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                color: hover
                  ? colorScheme?.hover
                  : showParentCurrentRout
                  ? colorScheme?.active
                  : colorScheme?.default,
              }}
              className={classNames(
                'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 ',
                !colorScheme?.hover &&
                  (show || showLine ? 'before:w-ful' : 'hover:before:w-full'),
                !colorScheme?.active &&
                  (showParentCurrentRout ? 'opacity-100' : 'opacity-[0.85]'),
              )}
            >
              {item.title}
            </Link>
          ) : (
            <span
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                color: hover
                  ? colorScheme?.hover
                  : showParentCurrentRout
                  ? colorScheme?.active
                  : colorScheme?.default,
              }}
              className={classNames(
                'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 ',
                !colorScheme?.active &&
                  (showParentCurrentRout ? 'opacity-100' : 'opacity-[0.85]'),
              )}
            >
              {item.title}
            </span>
          )}
        </>
      }
    >
      <ul className="bg-white shadow-xl px-2 py-1 rounded-b-lg min-w-[98px]">
        {data.map(item => {
          return (
            <li
              key={item.slug + '/' + item.id}
              className="main-nav p-2 text-start"
            >
              <MainLink locale={locale} colorScheme={colorScheme} item={item} />
            </li>
          )
        })}
      </ul>
    </DropdownOnHover>
  )
}
