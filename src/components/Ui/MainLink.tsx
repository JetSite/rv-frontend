'use client'
import { ILink } from '@/types'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useState } from 'react'
import { IColorShema } from '../MainLayout/components/MainNavDropdown'
import { colorShema as colorShemaConfig } from '@/config'

interface MainLinkProps {
  item: ILink
  slug?: string
  sx?: string
  disabled?: boolean
  colorShema?: IColorShema | null
}

export const MainLink: FC<MainLinkProps> = ({
  item,
  slug,
  sx,
  disabled = false,
  colorShema,
}) => {
  const pathname = usePathname()
  const show: boolean = pathname === item.slug
  const [hover, setHover] = useState(false)

  return disabled ? (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover
          ? colorShema?.hover
          : colorShema?.active || colorShema?.default,
      }}
      className={classNames(
        'whitespace-nowrap relative w-max before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20  opacity-[0.85]',
        !colorShema?.hover && (show ? 'before:w-full ' : 'hover:before:w-full'),
      )}
    >
      <span className={sx}>{item.title}</span>
    </p>
  ) : (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover
          ? colorShema?.hover
          : colorShema?.active || colorShema?.default,
      }}
      className={classNames(
        'whitespace-nowrap relative w-max before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20  opacity-[0.85]',
        !colorShema?.hover && (show ? 'before:w-full ' : 'hover:before:w-full'),
      )}
      href={slug ? slug + '/' + item.slug : item.slug}
    >
      <span className={sx}>{item.title}</span>
    </Link>
  )
}
