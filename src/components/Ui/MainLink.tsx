'use client'
import { ILink } from '@/types'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useState } from 'react'
import { IColorShema } from '../MainLayout/components/MainNavDropdown'
import { colorShema as colorShemaConfig } from '@/config'
import { Locale } from '@/i18n-config'

interface MainLinkProps {
  item: ILink
  slug?: string
  sx?: string
  disabled?: boolean
  colorShema?: IColorShema | null
  locale: Locale
}

export const MainLink: FC<MainLinkProps> = ({
  item,
  slug,
  sx,
  disabled = false,
  colorShema,
  locale,
}) => {
  const pathname = usePathname()
  const [hover, setHover] = useState(false)

  const href = slug
    ? '/' + locale + '/' + slug + '/' + item.slug
    : '/' + locale + item.slug

  const show: boolean = pathname === href

  return disabled ? (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames(
        'whitespace-nowrap relative w-max before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20  opacity-[0.85] ',
        !colorShema?.active &&
          (show ? 'before:w-full ' : 'hover:before:w-full'),
      )}
    >
      <span
        style={{
          color: hover
            ? colorShema?.hover
            : show
            ? colorShema?.active
            : colorShema?.default,
        }}
        className={sx}
      >
        {item.title}
      </span>
    </p>
  ) : (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames(
        'whitespace-nowrap relative w-max before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-[0.2rem] before:opacity-20  opacity-[0.85] ',
        !colorShema?.active &&
          (show ? 'before:w-full ' : 'hover:before:w-full'),
      )}
      href={href}
    >
      <span
        style={{
          color: hover
            ? colorShema?.hover
            : show
            ? colorShema?.active
            : colorShema?.default,
        }}
        className={sx}
      >
        {item.title}
      </span>
    </Link>
  )
}
