import { FormikHandlers, FormikErrors, FormikTouched } from 'formik'
import React, { ChangeEvent, FC } from 'react'

export interface InputProps {
  count?: number
  label?: string
  id: string
  name: string
  placeholder?: string
  onChangeHandler:
    | FormikHandlers['handleChange']
    | ((e: ChangeEvent) => Promise<void>)
  onBlurHandler?: FormikHandlers['handleBlur']
  values: { [name: string]: string }
  errors: FormikErrors<{ [name: string]: string }>
  touched: FormikTouched<{ [name: string]: boolean }>
  type?: string
  sx?: string
  autoFocus?: boolean
}

const Input: FC<InputProps> = ({
  type,
  id,
  name,
  sx,
  onChangeHandler,
  onBlurHandler,
  values,
  placeholder,
  label,
  touched,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {label ? (
        <label
          htmlFor={id}
          className="flex flex-col text-sm font-medium text-gray-700 relative "
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={sx}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={values[name]}
      />
      <span className="block absolute -bottom-5 left-0 text-sm text-red-500">
        {touched[name] && errors[name]}
      </span>
    </div>
  )
}

export default Input
