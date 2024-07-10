import classNames from '@/utils/classNames'
import { FormikHandlers, FormikErrors, FormikTouched } from 'formik'
import React, { ChangeEvent, FC, KeyboardEvent } from 'react'

export interface InputProps {
  count?: number
  label?: string
  labelInline?: boolean
  id: string
  name: string
  placeholder?: string
  onChangeHandler:
    | FormikHandlers['handleChange']
    | ((e: ChangeEvent<HTMLInputElement>) => Promise<void>)
  onBlurHandler?: FormikHandlers['handleBlur']
  values: { [name: string]: string }
  errors?: FormikErrors<{ [name: string]: string }>
  touched?: FormikTouched<{ [name: string]: boolean }>
  type?: string
  sx?: string
  autoFocus?: boolean
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  type,
  id,
  name,
  sx,
  onChangeHandler,
  onBlurHandler,
  labelInline,
  values,
  placeholder,
  label,
  touched,
  errors,
  onPressEnter,
}) => {
  return (
    <div
      className={classNames(
        'w-full relative',
        labelInline ? 'flex items-center' : '',
      )}
    >
      {label ? (
        <label
          htmlFor={id}
          className={classNames(
            'flex text-sm font-medium text-gray-700 relative',
            labelInline ? 'bg-h text-white py-1 px-2' : '',
          )}
        >
          {label}
        </label>
      ) : null}
      <input
        onKeyDown={e => onPressEnter && e.key === 'Enter' && onPressEnter(e)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={sx}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={values[name]}
      />
      {touched && errors ? (
        <span className="block absolute -bottom-5 left-0 text-sm text-red-500">
          {touched[name] && errors[name]}
        </span>
      ) : null}
    </div>
  )
}

export default Input
