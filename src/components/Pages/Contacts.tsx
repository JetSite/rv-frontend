import { IContactData } from '@/utils/getContactsData'
import React, { FC } from 'react'
import Link from 'next/link'
import { ContactForm } from '../Forms/ContactForm'
import { langPlaceholders } from '@/config'
import { ILocale } from '@/types'

interface Props {
  data: IContactData
  locale: ILocale
}

export const Contacts: FC<Props> = ({ data, locale }) => {
  const { pageData, formData } = data

  return (
    <div className="max-w-content mx-auto flex desktop:flex-row flex-col gap-8 mobile:px-7 tablet:px-8 tablet:w-2/3">
      <div className="desktop:w-1/2 ">
        <h1 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {pageData.title}
        </h1>
        <p className="text-[14px] mb-7">{pageData.subTitle}</p>
        <ul className="flex flex-col gap-4 mb-14">
          {pageData.importantContacts.map(contact => (
            <li key={contact.id}>
              <Link
                href={contact.link}
                className="flex gap-4 items-center relative w-fit before:absolute before:h-0.5 before:content-[ ] before:bg-h before:left-0 before:-bottom-2 hover:before:w-full before:block"
              >
                <img src={contact.img} />
                <span className="text-[24px] font-medium text-first">
                  {contact.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4">
          {pageData.contacts.map(contact => (
            <li key={contact.id}>
              <Link
                href={contact.link}
                className="flex gap-4 items-center relative w-fit before:absolute before:h-0.5 before:content-[ ] before:bg-h before:left-0 before:-bottom-2 hover:before:w-full before:block"
              >
                <img src={contact.img} />
                <span className="text-[24px] font-medium text-first">
                  {contact.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="desktop:w-1/2">
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {formData.title}
        </h2>
        <p className="text-[14px] mb-7">{formData.subTitle}</p>
        <ContactForm
          locale={locale}
          placeholders={langPlaceholders.contact[locale]}
        />
      </div>
    </div>
  )
}
