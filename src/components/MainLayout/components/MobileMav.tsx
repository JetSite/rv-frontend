'use client'
import { MainLink } from '@/components/Ui/MainLink'
import React, { FC, useEffect, useState } from 'react'
import { SoсialsWithLang } from './SoсialsWithLang'
import XIcon from '@/components/Ui/Icons/XIcon'
import { usePathname } from 'next/navigation'
import { INavItem, ISocialsItem } from '@/types/layout'
import { IStoreData, useStoreDate } from '@/store'

interface Props {
  data: INavItem[]
  socials: ISocialsItem[]
}

export const MobileMav: FC<Props> = ({ data, socials }) => {
  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="desktop:hidden">
      <button onClick={() => setOpen(true)} className="relative h-6 z-20">
        <span className="block w-8 h-0.5 my-auto bg-first after:content-[ ] after:absolute after:w-8 after:h-0.5 after:bg-first after:bottom-0 after:left-0 before:content-[ ] before:absolute before:w-8 before:h-0.5 before:bg-first before:top-0 before:left-0 tablet:w-10 tablet:before:w-10 tablet:after:w-10" />
      </button>
      {open && (
        <>
          <button
            onClick={() => setOpen(false)}
            className="fixed bg-gray-900 opacity-30 h-full top-0 left-0 right-0 z-10"
          />
          <div className="fixed bg-white w-full right-0 z-20 py-10 px-5 top-0 flex flex-col items-center tablet:w-[524px] tablet:rounded-b-md tablet:rounded-r-none">
            <button onClick={() => setOpen(false)} className="self-end">
              <XIcon />
            </button>
            <ul className="flex w-full flex-1 justify-between justify:center items-center gap-7 mt-10 flex-row flex-wrap tablet:justify-center">
              {data.map(item => (
                <li
                  key={item.title}
                  className="px-2 last:pr-0 mx-auto first:pl-0 block text-[20px] font-bold p-0 tablet:w-1/3 tablet:p-0 tablet:text-center mobile:px-0 mobile:w-[268px] text-center"
                >
                  <MainLink item={item} />
                </li>
              ))}
            </ul>
            <SoсialsWithLang
              data={socials}
              variant="footer"
              className="flex gap-5 items-center flex-col mt-16"
            />
          </div>
        </>
      )}
    </div>
  )
}
