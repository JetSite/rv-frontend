'use client'
import { IContactData } from '@/utils/getContactsData'
import React, { FC } from 'react'
import Link from 'next/link'
import { ContactForm } from '../Forms/ContactForm'

interface Props {
  data: IContactData
  seoData: { [K: string]: string }
}

export const Contacts: FC<Props> = ({ data, seoData }) => {
  const { pageData, formData } = data

  const placeholders = {
    name: seoData.FormNamePlaceholder,
    tel: seoData.FormPhonePlaceholder,
    msg: seoData.FormMessagePlaceholder,
    theme: [
      { title: seoData.FormInterviewButton, value: 1 },
      { title: seoData.FormProblemButton, value: 2 },
      { title: seoData.FormEventButton, value: 3 },
    ],
  }

  return (
    <div className="max-w-content desktopLarge:max-w-[1480px] desktopOnly:max-w-[988px] mx-auto flex desktop:flex-row flex-col gap-8 mobile:px-7 tablet:px-8 tablet:w-2/3 ">
      <div className="desktop:w-1/2 ">
        <h1 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {seoData.seoTitle}
        </h1>
        <p className="text-sm desktopOnly:text-xs desktopOnly:mb-5 mb-7">
          {seoData.seoDescription}
        </p>
        <ul className="flex flex-col gap-4 desktopOnly:gap-3 desktopOnly:mb-10 mb-14">
          {pageData.importantContacts.map(contact => (
            <li key={contact.id}>
              <Link
                href={contact.link}
                className="flex gap-4 desktopOnly:gap-3 items-center relative w-fit hover:opacity-100 opacity-90"
              >
                <img className="desktopOnly:w-8" src={contact.img} />
                <span className="text-2xl desktopOnly:text-lg font-medium text-first">
                  {contact.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4 desktopOnly:gap-3 ">
          {pageData.contacts.map(contact => (
            <li key={contact.id}>
              <Link
                href={contact.link}
                className="flex gap-4 desktopOnly:gap-3 items-center relative w-fit hover:opacity-100 opacity-90"
              >
                <img className="desktopOnly:w-8" src={contact.img} />
                <span className="text-2xl desktopOnly:text-lg font-medium text-first">
                  {contact.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="desktop:w-1/2">
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {formData.title}
        </h2>
        <p className="text-sm desktopOnly:text-xs mb-7">{formData.subTitle}</p>
        <ContactForm placeholders={placeholders} localeStrings={seoData} />
      </div>
    </div>
  )
}
