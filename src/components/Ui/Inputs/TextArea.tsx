import { ChangeEvent, FC } from 'react'
import { InputProps } from './Input'
import { FormikHandlers } from 'formik'

interface TextAreaProps extends Omit<InputProps, 'onChangeHandler'> {
  onChangeHandler:
    | FormikHandlers['handleChange']
    | ((e: ChangeEvent<HTMLTextAreaElement>) => Promise<void>)
}

const TextArea: FC<TextAreaProps> = ({
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
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={sx}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={values[name]}
      />
      <span className="block absolute -bottom-3 left-0 text-sm text-red-500">
        {touched && touched[name] && errors && errors[name]}
      </span>
    </div>
  )
}

export default TextArea
