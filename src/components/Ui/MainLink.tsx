'use client'
import { ILink } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface MainLinkProps {
  item: ILink
  slug?: string
  sx?: string
}

export const MainLink: FC<MainLinkProps> = ({ item, slug, sx }) => {
  const pathname = usePathname()
  const show: boolean = pathname === item.slug

  return (
    <Link
      className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20 text-inherit ${
        show ? 'before:w-full' : 'hover:before:w-full'
      }
      `}
      href={slug ? slug + '/' + item.slug : item.slug}
    >
      <span className={sx}>{item.title}</span>
    </Link>
  )
}
