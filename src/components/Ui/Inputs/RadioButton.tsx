'use client'
import React, { FC } from 'react'

interface Props {
  name: string
  label: string
  values?: { [name: string]: string }
  hendelClick: (e: any) => void
}

export const RadioButton: FC<Props> = ({
  name,
  values,
  label,
  hendelClick,
}) => {
  return (
    <div className="inline-flex items-center text-firstInner text-[14px]">
      <label
        className="relative flex items-center rounded-full cursor-pointer"
        htmlFor={label}
      >
        <input
          name={name}
          defaultChecked={label === values?.theme}
          id={label}
          value={label}
          onClick={hendelClick}
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-first checked:before:bg-first"
        />
        <span className="absolute  transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        className="mt-px font-light text-firstInner cursor-pointer select-none ml-4"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  )
}
