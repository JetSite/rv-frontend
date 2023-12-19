'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Input from '../Ui/Inputs/Input'
import TextArea from '../Ui/Inputs/TextArea'
import { ITheme, langButtons } from '@/config'
import { ILocale } from '@/types'
import { RadioButton } from '../Ui/Inputs/RadioButton'
import { API } from '@/api'
import Loader from '../Ui/Loader'

const FormSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Required'),
  tel: Yup.number().typeError('Only number').min(7).required('Required'),
  theme: Yup.number().min(1).max(2).required('Required'),
  msg: Yup.string().min(8).required('Required'),
})

export const ContactForm = ({
  placeholders,
  locale,
}: {
  placeholders: { name: string; tel: string; msg: string; theme: ITheme[] }
  locale: ILocale
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const initialValues = {
    name: '',
    tel: '',
    theme: placeholders.theme[0].title,
    msg: '',
  }
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    validateOnMount: false,
    onSubmit: data => {
      setLoading(true)
      const raw = JSON.stringify({
        data: {
          userName: data.name,
          phoneNumber: data.tel,
          message: data.msg,
          requestCategory: data.theme.toString(),
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
    <form onSubmit={handleSubmit} className="text-first flex flex-col gap-6">
      <Input
        sx="w-full bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4"
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
        sx="w-full bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4"
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
              hendelClick={() => setFieldValue('theme', name.value)}
              name={'theme'}
              label={name.title}
              values={values}
            />
          </li>
        ))}
      </ul>
      <TextArea
        sx="w-full bg-first bg-opacity-5 text-[14px] placeholder:opacity-60 px-7 py-4 min-h-[173px]"
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
          className="w-full max-w-[475px] text-[24px] font-medium text-white bg-first py-2 disabled:bg-opacity-60"
        >
          {loading ? (
            <Loader className="mx-auto" />
          ) : (
            langButtons.sendButton[locale]
          )}
        </button>
        <p className="text-[10px] text-first mt-3 text-center">
          Отправляя запрос, вы автоматически соглашаетесь на обработку ваших
          персональных данных.
        </p>
      </div>
    </form>
  )
}
