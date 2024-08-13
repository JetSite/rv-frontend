'use client'
import { DropdownOnHover } from '@/components/Ui/Dropdowns/DropdownOnHover'
import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

export interface IColorShema {
  hover: string
  default: string
  active: string
}

interface Props {
  data: INavItem[]
  item: INavItem
  colorShema: IColorShema | null
}

export const MainNavDropdown: FC<Props> = ({ data, item, colorShema }) => {
  const [show, setShow] = useState<boolean>(false)
  const [hover, setHover] = useState(false)
  const pathname = usePathname()
  const showLine: boolean = pathname === item.slug
  const { slug } = item
  const showParentCurrentRout = item.children.find(e => e.slug === pathname)

  return (
    <DropdownOnHover
      setShow={setShow}
      show={show}
      button={
        <>
          {item.isActive && colorShema ? (
            <Link
              href={item.slug || '#'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                color: hover
                  ? colorShema?.hover
                  : showParentCurrentRout
                  ? colorShema?.active
                  : colorShema?.default,
              }}
              className={classNames(
                'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20',
                !colorShema?.hover &&
                  (show || showLine ? 'before:w-ful' : 'hover:before:w-full'),
                !colorShema?.active &&
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
                  ? colorShema?.hover
                  : showParentCurrentRout
                  ? colorShema?.active
                  : colorShema?.default,
              }}
              className={classNames(
                'whitespace-nowrap relative w-max  before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20',
                !colorShema?.active &&
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
            <li key={slug + '/' + item.id} className="main-nav p-2 text-start">
              <MainLink colorShema={colorShema} item={item} />
            </li>
          )
        })}
      </ul>
    </DropdownOnHover>
  )
}
