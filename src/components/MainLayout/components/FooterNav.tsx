import { MainLink } from '@/components/Ui/MainLink'
import { colorScheme } from '@/config'
import { Locale } from '@/i18n-config'
import { INavItem } from '@/types/layout'
import { FC } from 'react'

interface Props {
  data: INavItem[]
  locale: Locale
}

export const FooterNav: FC<Props> = ({ data, locale }) => {
  return (
    <ul className="flex w-full flex-1 justify-between text-h gap-4 notDesktop:hidden mr-auto">
      {data.map(item => {
        return (
          <li
            key={item.title}
            className="gap-4 block text-sm font-bold desktopLarge:text-xl"
          >
            <MainLink locale={locale} item={item} />
            <ul className="flex flex-col mt-6 gap-2.5">
              {item.children.map(children => (
                <li
                  className="block text-xxs desktopLarge:text-base font-normal"
                  key={children.title}
                >
                  <MainLink locale={locale} item={children} />
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
