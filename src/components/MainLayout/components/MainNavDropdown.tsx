'use client'
import { DropdownOnHover } from '@/components/Ui/Dropdowns/DropdownOnHover'
import { MainLink } from '@/components/Ui/MainLink'
import { INavItem } from '@/types/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

interface Props {
  data: INavItem[]
  item: INavItem
}

export const MainNavDropdown: FC<Props> = ({ data, item }) => {
  const [show, setShow] = useState<boolean>(false)
  const pathname = usePathname()
  const showLine: boolean = pathname === item.slug
  const { slug } = item

  return (
    <DropdownOnHover
      setShow={setShow}
      show={show}
      button={
        <>
          {item.isActive ? (
            <Link
              href={item.slug || '#'}
              className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20  ${
                show || showLine ? 'before:w-full' : 'hover:before:w-full'
              }
      `}
            >
              {item.title}
            </Link>
          ) : (
            <span
              className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20
        `}
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
            <li key={slug + '/' + item.id} className="p-2 text-start">
              <MainLink item={item} />
            </li>
          )
        })}
      </ul>
    </DropdownOnHover>
  )
}
