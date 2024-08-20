import { API } from '@/api'
import { Contacts } from '@/components/Pages/Contacts'
import { INextPage } from '@/types'
import { getContactsData } from '@/utils/getContactsData'
import React, { FC } from 'react'

const ContactsPage: FC<INextPage> = async ({ params }) => {
  const fetchData = async () => {
    const res = await fetch(
      `${API.baseUrl}/contact?[populate][Contacts][populate]=*&locale=${params.lang}`,
    )
    const data = await res.json()
    return data
  }

  const data = await fetchData()

  return <Contacts locale={params.lang} data={getContactsData(data.data)} />
}

export default ContactsPage
