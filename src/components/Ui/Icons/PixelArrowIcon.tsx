import { IIcon } from '@/types'
import { FC } from 'react'

const PixelArrowIcon: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="25"
      height="31"
      viewBox="0 0 25 31"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.56211 30.4902L2.28882e-05 30.4902L2.32024e-05 26.8955L3.92159 26.8955L3.92159 23.5621L7.87595 23.5621L7.87595 20.2288L12.1569 20.2288L12.1569 16.8302L16.4379 16.8302L16.4379 13.7255L12.5163 13.7255L12.5163 10.3922L8.56198 10.3922L8.56198 6.99353L4.28098 6.99353L4.28098 3.59489L2.14248e-05 3.59489L2.1739e-05 0.000119885L8.56211 0.000120633L8.56211 3.39876L12.8431 3.39876L12.8431 6.7974L17.1241 6.7974L17.1241 10.1307L21.0784 10.1307L21.0784 13.4313L25 13.4313L25 17.0261L25 17.0588L20.719 17.0588L20.719 20.4249L16.438 20.4249L16.438 23.8236L12.4837 23.8236L12.4837 27.1569L8.56211 27.1569L8.56211 30.4902Z"
        fill="white"
        fill-opacity="0.5"
      />
    </svg>
  )
}

export default PixelArrowIcon
