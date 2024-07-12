'use client'
import { MainLink } from '@/components/Ui/MainLink'
import React, { FC, useEffect, useState } from 'react'
import { SoсialsWithLang } from './SoсialsWithLang'
import XIcon from '@/components/Ui/Icons/XIcon'
import { usePathname } from 'next/navigation'
import { IHeaderNavSettings, INavItem, ISocialsItem } from '@/types/layout'
import { IStoreData, useStoreDate } from '@/store'
import classNames from '@/utils/classNames'
import { IColorShema } from './MainNavDropdown'
import { MobileNavNotLinkButtons } from './MobileNavNotLinkButtons'

interface Props {
  data: INavItem[]
  socials: ISocialsItem[]
  settings?: IHeaderNavSettings
}

export const MobileNav: FC<Props> = ({ data, socials, settings }) => {
  const [open, setOpen] = useState<boolean>(false)

  const [showSubMenu, setShowSubMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const colorShema: IColorShema | null = settings
    ? {
        hover: settings.linkColorHover.trim(),
        default: settings.linkColor.trim(),
        active: settings.linkColorActive.trim(),
      }
    : null

  // useEffect(() => {
  //   document.body.style.zoom = '80%'
  // }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="desktop:hidden">
      <button onClick={() => setOpen(true)} className="relative h-6 z-20">
        <span className="block w-8 h-0.5 my-auto bg-first after:content-[ ] after:absolute after:w-8 after:h-0.5 after:bg-first after:bottom-0 after:left-0  before:absolute before:w-8 before:h-0.5 before:bg-first before:top-0 before:left-0 tablet:w-10 tablet:before:w-10 tablet:after:w-10" />
      </button>
      {open && (
        <>
          <button
            onClick={() => setOpen(false)}
            className="fixed bg-gray-900 opacity-30 h-full top-0 left-0 right-0 z-10 animate-fade-in-opacity"
          />
          <div className="fixed bg-white w-full right-0 z-20 py-10 px-5 top-0 flex flex-col items-center tablet:w-[524px] tablet:rounded-b-md tablet:rounded-r-none animate-fade-in">
            <button onClick={() => setOpen(false)} className="self-end">
              <XIcon />
            </button>
            <div className="flex w-full mobile:flex-col">
              <ul className="flex w-full flex-1 gap-7 mt-10 flex-wrap flex-col text-h">
                {data.map(
                  (item, i) =>
                    data.length / 2 > i && (
                      <li
                        key={item.title}
                        className="px-2 last:pr-0 mx-auto first:pl-0 block text-[20px] font-bold p-0 tablet:p-0 tablet:text-center mobile:px-0 mobile:w-[268px] text-center"
                        onMouseEnter={() => setShowSubMenu(item.id)}
                        onMouseLeave={() => setShowSubMenu(null)}
                      >
                        {item.isActive ? (
                          <MainLink item={item} colorShema={colorShema} />
                        ) : (
                          <MobileNavNotLinkButtons
                            item={item}
                            colorShema={colorShema}
                            showSubMenu={showSubMenu}
                          />
                        )}
                        {showSubMenu === item.id && (
                          <ul className="flex w-full justify-between items-center mt-4 flex-col origin-top transition-all gap-2">
                            {item.children.map(subItem => (
                              <li key={subItem.id}>
                                <MainLink
                                  sx="font-normal"
                                  item={subItem}
                                  colorShema={colorShema}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ),
                )}
              </ul>
              <ul className="flex w-full flex-1 gap-7 notMobile:mt-10 mobile:mt-7 flex-col flex-wrap text-h">
                {data.map(
                  (item, i) =>
                    data.length / 2 < i && (
                      <li
                        key={item.title}
                        className="px-2 last:pr-0 mx-auto first:pl-0 block text-[20px] font-bold p-0 tablet:p-0 tablet:text-center mobile:px-0 mobile:w-[268px] text-center"
                        onMouseEnter={() => setShowSubMenu(item.id)}
                        onMouseLeave={() => setShowSubMenu(null)}
                      >
                        {item.isActive ? (
                          <MainLink item={item} colorShema={colorShema} />
                        ) : (
                          <MobileNavNotLinkButtons
                            item={item}
                            colorShema={colorShema}
                            showSubMenu={showSubMenu}
                          />
                        )}
                        {showSubMenu === item.id && !!item.children.length && (
                          <ul className="flex w-full flex-1 justify-between items-center mt-4 flex-col origin-top transition-all gap-2">
                            {item.children.map(subItem => (
                              <li key={subItem.id}>
                                <MainLink sx="font-normal" item={subItem} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ),
                )}
              </ul>
            </div>
            <SoсialsWithLang
              data={socials}
              variant="footer"
              className="flex gap-5 items-center flex-col mt-16 text-h"
            />
          </div>
        </>
      )}
    </div>
  )
}
