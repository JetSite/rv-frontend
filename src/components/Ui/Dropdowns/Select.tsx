import { FC, Fragment, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IComponentWithChildren, IID } from '@/types'

interface Props extends IComponentWithChildren {
  items: ISelectItem[]
  className?: string
  label?: string
  selected: ISelectItem
  handleChange: (value: ISelectItem) => void
}

export interface ISelectItem {
  id: IID
  title: string
}

const Select: FC<Props> = ({
  items,
  label,
  children,
  selected,
  handleChange,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const scrollToElement = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' })
        }
        return (
          <>
            {!!label && (
              <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
              </Listbox.Label>
            )}
            <div className={`relative ${className ?? ''}`}>
              <Listbox.Button>{children}</Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute left-[20%] z-10 mt-1 max-h-52 w-max overflow-auto rounded-xl bg-white shadow-xl py-2">
                  {items?.map(item => (
                    <Listbox.Option
                      key={item.id}
                      value={item}
                      ref={
                        item.id === (selected.id as number) - 2
                          ? ref
                          : undefined
                      }
                    >
                      <button
                        disabled={selected?.id === item.id}
                        className="relative select-none px-3 py-1 w-full text-left text-[22px] font-bold
                    bg-white text-h cursor-pointer hover:text-h hover:bg-second disabled:bg-second disabled:text-textH disabled:cursor-default"
                      >
                        {item.title}
                      </button>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )
      }}
    </Listbox>
  )
}

export default Select
