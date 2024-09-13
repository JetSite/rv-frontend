import { API } from '@/api'
import { Contacts } from '@/components/Pages/Contacts'
import { INextPage } from '@/types'
import { IContactData, getContactsData } from '@/utils/getContactsData'
import { ISeoData, getSeoData } from '@/utils/parsedData/getSeoData'
import { notFound, redirect } from 'next/navigation'
import React, { FC } from 'react'

const ContactsPage: FC<INextPage> = async ({ params }) => {
  const fetchData = async (): Promise<{
    data: IContactData | null
    seoData: ISeoData | null
  }> => {
    try {
      const res = await fetch(
        `${API.baseUrl}/contact?[populate][Contacts][populate]=*&locale=${params.lang}`,
        { cache: 'no-cache' },
      )
      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Контакты`,
      )
      const seoData = await seoRes.json()

      return {
        data: getContactsData(data.data),
        seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null }
    }
  }

  const { data, seoData } = await fetchData()
  if (!data || !seoData) return redirect('/error-page')

  return <Contacts seoData={seoData} data={data} />
}

export default ContactsPage
