import { API } from '@/api'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { INextPage } from '@/types'
import { FC } from 'react'

interface Props extends INextPage {}

const notFoundLocale = {
  title: {
    ru: 'Что-то пошло не так...',
    en: 'Something went wrong...',
    'hy-AM': 'Ինչ-որ բան սխալ է գնացել...',
  },

  invalid_link: {
    ru: 'Ссылка не действительна.',
    en: 'The link is invalid.',
    'hy-AM': 'Հղումը անվավեր է։',
  },
}

const NotFound: FC<Props> = async ({ params }) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h3 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {notFoundLocale.title[params.lang]}
        </h3>
      }
    >
      <p className="text-h text-2xl desktopOnly:text-lg font-medium mb-8 desktopOnly:mb-6">
        {notFoundLocale.invalid_link[params.lang]}
      </p>
    </Wrapper>
  )
}

export default NotFound
