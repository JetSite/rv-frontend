import { ILink } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'

interface MainLinkProps {
  item: ILink
}

export const MainLink: FC<MainLinkProps> = ({ item }) => {
  return (
    <Link
      className="whitespace-nowrap relative w-max before:content-[ ] before:absolute hover:before:w-full before:h-0.5 before:bg-h before:left-0 before:-bottom-2"
      href={item.slug}
    >
      {item.title}
    </Link>
  )
}
