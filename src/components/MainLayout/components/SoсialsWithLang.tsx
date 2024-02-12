'use client'
import { socialsMock } from '@/api/mock'
import { Lang, langConfig } from '@/config'
import { ISocialsItem } from '@/types/layout'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ISoсialsWithLang {
  subKey?: string
  className?: string
  variant?: 'footer' | 'tablet' | 'standart'
  data: ISocialsItem[]
}

export const SoсialsWithLang: FC<ISoсialsWithLang> = ({
  className = 'flex gap-5 items-center notDesktop:hidden relative',
  subKey = 'header',
  variant = 'standart',
  data,
}) => {
  const [select, setSelect] = useState<Lang>('ru')
  const [open, setOpen] = useState<boolean>(false)
  const desktopOnly = useMediaQuery({ minWidth: 1280, maxWidth: 1479 })
  const [isDesktopOnly, setIsDesktopOnly] = useState<boolean>(false)
  useEffect(() => {
    setIsDesktopOnly(desktopOnly)
    setOpen(false)
  }, [desktopOnly])

  return (
    <>
      <div className={className}>
        <ul
          className={
            {
              footer: 'flex gap-5 mb-2.5',
              standart: 'flex gap-5 ',
              tablet: 'flex gap-5 h-full',
            }[variant]
          }
        >
          {data?.map(item => (
            <li key={item?.id}>
              <Link
                href={item?.slug}
                className="relative block before:absolute before:h-0.5 before:content-[ ] before:bg-h before:left-0 before:-bottom-2 hover:before:w-full before:block"
              >
                <img alt={item?.title} src={item?.img} />
              </Link>
            </li>
          ))}
        </ul>
        {desktopOnly && variant === 'standart' && (
          <button onClick={() => setOpen(!open)} className="relative h-6 z-20">
            <span className="block w-8 h-0.5 my-auto bg-first after:content-[ ] after:absolute after:w-8 after:h-0.5 after:bg-first after:bottom-0 after:left-0 before:content-[ ] before:absolute before:w-8 before:h-0.5 before:bg-first before:top-0 before:left-0 tablet:w-10 tablet:before:w-10 tablet:after:w-10" />
          </button>
        )}
        {(open || !desktopOnly || variant !== 'standart') && (
          <div
            className={
              {
                footer: 'order-1',
                standart:
                  'flex items-center gap-4 desktopOnly:absolute desktopOnly:bg-white desktopOnly:flex-col desktopOnly:right-0 desktopOnly:-bottom-28 desktopOnly:border-gray-200 desktopOnly:border desktopOnly:rounded-md desktopOnly:shadow-md z-20',
                tablet: 'tablet:self-end',
              }[variant]
            }
          >
            <div
              className={
                {
                  footer: 'flex items-center justify-center order-1',
                  standart: 'flex items-center justify-center',
                  tablet: 'flex items-center justify-center',
                }[variant]
              }
            >
              <img
                className="block"
                height={45}
                width={45}
                alt="glasses"
                src="/images/glasses.svg"
              />
            </div>
            <ul
              className={
                { footer: 'flex', standart: 'flex p-2', tablet: 'flex ' }[
                  variant
                ]
              }
            >
              {langConfig.map((item, i) => (
                <li
                  key={subKey + ' ' + item.value}
                  className="px-2 border-r-2 border-h last:border-none first:pl-0 last:pr-0 text-[18px]"
                >
                  <div
                    className={
                      select === item.value ? 'font-bold' : 'font-normal'
                    }
                  >
                    {select && Object.values(item.label)[i]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-gray-900 opacity-30"
        />
      )}
    </>
  )
}
