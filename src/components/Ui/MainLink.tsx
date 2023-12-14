'use client'
import { ILink } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface MainLinkProps {
  item: ILink
  slug?: string
}

export const MainLink: FC<MainLinkProps> = ({ item, slug }) => {
  const pathname = usePathname()
  const show: boolean = pathname === item.slug

  return (
    <Link
      className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-2 ${
        show ? 'before:w-full' : 'hover:before:w-full'
      }
      `}
      href={slug ? slug + '/' + item.slug : item.slug}
    >
      {item.title}
    </Link>
  )
}
