'use client'
import { ILink } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface MainLinkProps {
  item: ILink
}

export const MainLink: FC<MainLinkProps> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      className={`whitespace-nowrap relative w-max before:content-[ ] before:absolute hover:before:w-full before:h-0.5 before:bg-h before:left-0 before:-bottom-2 ${
        pathname === item.slug ? 'before:w-full' : 'over:before:w-full'
      }
      `}
      href={item.slug}
    >
      {item.title}
    </Link>
  )
}
