'use client'

import {
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react'
import XIcon from '../Icons/XIcon'
import classNames from '@/utils/classNames'
import { IFilters } from '@/components/Filters/FilterVideo'

interface IAutocomtleteProps {
  items: string[]
  handleSelect: (value: string) => void
  placeholder?: string
  name?: string
  className?: string
  type?: HTMLInputTypeAttribute
  setFilters: Dispatch<SetStateAction<IFilters>>
}

const Autocomplete: FC<IAutocomtleteProps> = ({
  items,
  handleSelect,
  name,
  placeholder,
  className,
  type = 'text',
  setFilters,
}) => {
  const [searchItems, setSearchItems] = useState<string[]>(items)
  const [show, setShow] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <>
      <div className={classNames('relative', show ? 'z-50' : 'z-10')}>
        {value.length > 0 && (
          <button
            onClick={() => {
              setSearchItems(items)
              setFilters(prev => ({ ...prev, [name as string]: null }))
              setValue('')
            }}
            className={classNames('absolute right-2 top-5 z-30')}
          >
            <XIcon className="block w-4 h-4" />
          </button>
        )}
        <input
          autoComplete="off"
          className={className}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          onFocus={() => {
            if (!searchItems.find(e => e === value)) setShow(true)
          }}
          type={type}
          onChange={e => {
            setValue(e.target.value)
            if (!searchItems.find(el => el === e.target.value)) setShow(true)

            if (e.target.value.length >= 2) {
              setSearchItems(
                items.filter(words =>
                  words
                    .toLocaleLowerCase()
                    .includes(e.target.value.toLocaleLowerCase()),
                ),
              )
            } else {
              setSearchItems(items)
            }
          }}
        />
        {show && (
          <ul
            id="specificButton"
            className="absolute bg-white w-full max-h-[200px] overflow-auto border border-gray-200 z-30 top-14 rounded-b-md"
          >
            <></>
            {searchItems.map(title => (
              <li
                onClick={() => {
                  setValue(title)
                  handleSelect(title)
                  setShow(false)
                }}
                key={title}
                className="truncate px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <span className="">{title}</span>
              </li>
            ))}
            {!searchItems.length && (
              <span className="block px-4 py-2">Ничего не найдено</span>
            )}
          </ul>
        )}
      </div>
      {show && (
        <button
          onClick={() => setShow(false)}
          className={classNames(
            'absolute top-0 bottom-0 left-0 right-0 cursor-default',
            show ? 'z-20' : '',
          )}
        />
      )}
    </>
  )
}

export default Autocomplete
