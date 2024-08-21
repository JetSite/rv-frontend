'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../Ui/Inputs/Input'
import TextArea from '../Ui/Inputs/TextArea'
import { ITheme,  } from '@/config'
import { RadioButton } from '../Ui/Inputs/RadioButton'
import { API } from '@/api'
import Loader from '../Ui/Loader'
import XIcon from '../Ui/Icons/XIcon'
import Link from 'next/link'

export const ContactForm = ({
  placeholders,
  localeStrings,
}: {
  placeholders: { name: string; tel: string; msg: string; theme: ITheme[] }
  localeStrings: { [K: string]: string }
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectTheme, setSelectTheme] = useState<ITheme>(placeholders.theme[0])
  const [showModal, setShowModal] = useState<boolean>(false)
  const initialValues = {
    name: '',
    tel: '',
    msg: '',
  }

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Имя должно быть не менее 3 символов')
      .required(localeStrings.FormRequired),
    tel: Yup.number()
      .typeError('Только цифры')
      .min(1000000, 'Телефонный номер должен содержать не менее 7 цифр')
      .required(localeStrings.FormRequired),
    msg: Yup.string()
      .min(8, localeStrings.FormMessageNotification)
      .required(localeStrings.FormRequired),
  })

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    isInitialValid: false,
    validateOnMount: false,
    onSubmit: data => {
      setLoading(true)
      resetForm()
      setSelectTheme(placeholders.theme[0])
      setShowModal(true)
      const raw = JSON.stringify({
        data: {
          userName: data.name,
          phoneNumber: data.tel,
          message: data.msg,
          requestCategory: selectTheme.title,
        },
      })
      fetchData(raw)
    },
    validationSchema: FormSchema,
  })

  const fetchData = async (data: string) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    await fetch(`${API.baseUrl}/requests`, {
      method: 'POST',
      body: data,
      headers: myHeaders,
    })
      .then(() => {
        setLoading(false)
      })
      .catch(() => setLoading(true))
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-first flex flex-col gap-6 desktopOnly:gap-4"
      >
        <Input
          sx="w-full bg-first bg-opacity-5 text-sm desktopOnly:text-xs placeholder:opacity-60 px-7 desktopOnly:px-5 desktopOnly:py-3 py-4"
          name="name"
          id="name"
          placeholder={placeholders.name as string}
          values={values}
          errors={errors}
          touched={touched}
          onChangeHandler={handleChange}
          onBlurHandler={handleBlur}
          type="text"
        />
        <Input
          sx="w-full bg-first bg-opacity-5 text-sm desktopOnly:text-xs placeholder:opacity-60 px-7 desktopOnly:px-5 desktopOnly:py-3 py-4"
          name="tel"
          id="tel"
          placeholder={placeholders.tel as string}
          values={values}
          errors={errors}
          touched={touched}
          onChangeHandler={handleChange}
          onBlurHandler={handleBlur}
          type="text"
        />
        <ul className="w-full flex desktop:flex-row flex-col justify-between">
          {placeholders.theme.map((name, i) => (
            <li key={i}>
              <RadioButton
                hendelClick={() => setSelectTheme(name)}
                name={'theme'}
                label={name.title}
                selectItem={selectTheme}
                values={values}
              />
            </li>
          ))}
        </ul>
        <TextArea
          sx="w-full bg-first bg-opacity-5 text-sm desktopOnly:text-xs  placeholder:opacity-60 px-7 desktopOnly:px-5 desktopOnly:py-3 py-4 min-h-[173px] desktopOnly:min-h-[120px]"
          name="msg"
          id="msg"
          placeholder={placeholders.msg as string}
          values={values}
          errors={errors}
          touched={touched}
          onChangeHandler={handleChange}
          onBlurHandler={handleBlur}
        />
        <div className="w-full flex items-center flex-col">
          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full max-w-[475px] text-2xl desktopOnly:text-lg font-medium text-white bg-first py-2 disabled:bg-opacity-60"
          >
            {loading ? (
              <Loader className="mx-auto" />
            ) : (
              localeStrings.FormButtonText
            )}
          </button>
          <p className="text-xxs text-first mt-3 text-center">
            {localeStrings.FormPersanalDataText}
          </p>
        </div>
      </form>
      {showModal && (
        <div className="fixed z-10 inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center">
          <div className="bg-white shadow-md p-4 w-[385px] text-center flex flex-col">
            <button
              onClick={() => setShowModal(!showModal)}
              className="self-end relative"
            >
              <XIcon />
            </button>
            <h3 className="block mb-2.5 text-first text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
              Спасибо за Ваше обращение!
            </h3>
            <p className="mb-2.5">
              Ваше обращение принято в обработку. Мы ответим Вам в ближайшее
              время.
            </p>
            <Link
              href={'/'}
              className="w-full max-w-[475px] text-2xl font-medium text-white bg-first py-2 disabled:bg-opacity-60"
            >
              Вернуться на главую
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
