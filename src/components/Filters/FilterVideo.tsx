'use client'
import { FC } from 'react'
import { RadioButton } from '../Ui/Inputs/RadioButton'

interface Props {}

export const FilterVideo: FC<Props> = () => {
  return (
    <div className="mb-16 flex flex-col gap-6">
      <form onSubmit={() => {}} className="text-first flex gap-6">
        <input
          className="w-[240px] bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4"
          name="name"
          placeholder="Проект"
          id="name"
          type="text"
        />
        <input
          className="w-[100px] bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4"
          name="tel"
          placeholder="Год"
          id="tel"
          type="text"
        />
        <input
          className="w-[152px] bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4"
          name="name"
          placeholder="Источник"
          id="name"
          type="text"
        />

        <div className="w-[170px] flex items-center flex-col">
          <button
            type="submit"
            disabled={!true}
            className="w-full h-full max-w-[475px] text-[14px] leading-none text-white bg-first py-2 disabled:bg-opacity-60"
          >
            ПОИСК
          </button>
        </div>
      </form>
      <div className="flex gap-6 text-[14px]">
        <p className="text-first opacity-60">Спикер:</p>
        <ul className=" flex flex-row justify-between gap-14">
          {['Рубен Варданян', 'Партнёры', 'Все'].map((name, i) => (
            <li key={i}>
              <RadioButton hendelClick={() => {}} name={'theme'} label={name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
