'use client'
import { FC, useState } from 'react'
import Input from './Ui/Inputs/Input'
import Link from 'next/link'
import classNames from '@/utils/classNames'
import { useRouter } from 'next/navigation'

interface Props {}

export const SearchComponent: FC<Props> = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()

  return (
    <div className="flex">
      {searchValue.length > 3 ? (
        <Link
          href={{
            pathname: '/search',
            query: { search: searchValue },
          }}
          type="button"
          className="bg-h text-white py-1 px-2 text-sm font-medium block"
          onClick={() => setSearchValue('')}
        >
          Поиск
        </Link>
      ) : (
        <span className="bg-h text-white py-1 px-2 text-sm font-medium block opacity-50 cursor-default">
          Поиск
        </span>
      )}
      <Input
        onPressEnter={e => {
          router.push(`/search?search=${searchValue}`)
          setSearchValue('')
        }}
        sx={classNames(
          'border-2 border-l-0 border-h px-2 py-0.5 text-sm font-medium text-gray-700 focus-visible:outline-0 focus:outline-0 active:outline-0 w-[100%]',
          searchValue.length > 3 ? '' : 'border-h/50 focus:border-h/50',
        )}
        id="search"
        placeholder="Поиск..."
        onChangeHandler={e => {
          setSearchValue(e.target.value)
        }}
        values={{ search: searchValue }}
        name="search"
      />
    </div>
  )
}
