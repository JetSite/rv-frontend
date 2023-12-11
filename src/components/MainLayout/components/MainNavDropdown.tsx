'use client'
import { Dropdown } from '@/components/Ui/Dropdowns/DropdownOnHover'
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
  const showLine: boolean = pathname.split('/').pop() === item.slug
  const { slug } = item
  return (
    <Dropdown
      setShow={setShow}
      show={show}
      button={
        <Link
          href={'/' + item.slug}
          className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-2 ${
            show || showLine ? 'before:w-full' : 'hover:before:w-full'
          }
        `}
        >
          {item.title}
        </Link>
      }
    >
      <ul className="bg-white shadow-xl px-2 py-1 rounded-b-lg min-w-[98px]">
        {data.map(item => {
          return (
            <li key={slug + '/' + item.id} className="p-2 text-start">
              <MainLink slug={'/' + slug} item={item} />
            </li>
          )
        })}
      </ul>
    </Dropdown>
  )
}