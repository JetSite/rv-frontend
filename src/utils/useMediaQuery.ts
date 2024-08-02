'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface IScreenSize {
  mobile: boolean
  desktopOnly: boolean
  desktopLarge: boolean
  desktop: boolean
  tablet: boolean
  notMobile: boolean
  notDesktop: boolean
}

export type IUseScreenSize = () => IScreenSize

//       desktopLarge: { min: '1580px' },
//       desktop: { min: '1280px' },
//       tablet: { min: '834px', max: '1279px' },
//       mobile: { max: '833px' },
//       notMobile: { min: '834px' },
//       notDesktop: { max: '1279px' },
//       desktopOnly: { min: '1280px', max: '1579px' },

export const useScreenSize: IUseScreenSize = () => {
  const isDesktopLarge = useMediaQuery({ minWidth: 1580 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1279 })
  const isMobile = useMediaQuery({ maxWidth: 833 })
  const isNotMobile = useMediaQuery({ minWidth: 834 })
  const isNotDesktop = useMediaQuery({ maxWidth: 1279 })
  const isDesktopOnly = useMediaQuery({ minWidth: 1279, maxWidth: 1579 })

  const [mobile, setMobile] = useState<boolean>(false)
  const [desktopOnly, setDesktopOnly] = useState<boolean>(false)
  const [desktopLarge, setDesktopLarge] = useState<boolean>(false)
  const [desktop, setDesktop] = useState<boolean>(false)
  const [tablet, setTablet] = useState<boolean>(false)
  const [notMobile, setNotMobile] = useState<boolean>(false)
  const [notDesktop, setNotDesktop] = useState<boolean>(false)

  useEffect(() => {
    setDesktopOnly(isDesktopOnly)
    setMobile(isMobile)
    setDesktopLarge(isDesktopLarge)
    setDesktop(isDesktop)
    setTablet(isTablet)
    setNotMobile(isNotMobile)
    setNotDesktop(isNotDesktop)
  }, [
    isDesktopLarge,
    isDesktop,
    isTablet,
    isNotMobile,
    isNotDesktop,
    isDesktopOnly,
    isMobile,
  ])
  return {
    mobile,
    desktopOnly,
    desktopLarge,
    desktop,
    tablet,
    notMobile,
    notDesktop,
  }
}
