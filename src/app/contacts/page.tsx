import { API } from '@/api'
import { Contacts } from '@/components/Pages/Contacts'
import { getContactsData } from '@/utils/getContactsData'
import React from 'react'

const ContactsPage = async () => {
  const fetchData = async () => {
    const res = await fetch(
      `${API.baseUrl}/contact?[populate][Contacts][populate]=*`,
    )
    const data = await res.json()
    return data
  }

  const data = await fetchData()

  return <Contacts locale="ru" data={getContactsData(data.data)} />
}

export default ContactsPage
