import { API } from '@/api'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { FC } from 'react'

interface Props {}

const NotFound: FC<Props> = async ({}) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h3 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
          Что то пошло не так...
        </h3>
      }
    >
      <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
        Ссылка не действительна.
      </p>
    </Wrapper>
  )
}

export default NotFound
