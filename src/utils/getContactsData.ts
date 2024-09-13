import { API } from '@/api'
import { IData, IID } from '@/types'

export interface ContactItem {
  id: IID
  title: string
  link: string
  img: string
}

export interface IContactPageData {
  title: string
  subTitle: string
  importantContacts: ContactItem[]
  contacts: ContactItem[]
}

export interface IContactFormData {
  title: string
  subTitle: string
}

export interface IContactData {
  pageData: IContactPageData
  formData: IContactFormData
}

type IGetContactsData = (data: IData) => IContactData | null

export const getContactsData: IGetContactsData = data => {
  if (!data) return null
  const importantContacts: ContactItem[] = []
  const contacts: ContactItem[] = []
  data.attributes.Contacts?.forEach((e: any) => {
    if (e.important) {
      importantContacts.push({
        id: e.id,
        title: e.contactsName,
        link: e.contactsLink || '/#',
        img: API.imgUrl + (e.contactsLogo.data?.attributes.url || '/#'),
      })
    } else {
      contacts.push({
        id: e.id,
        title: e.contactsName,
        link: e.contactsLink || '/#',
        img: API.imgUrl + (e.contactsLogo.data?.attributes.url || '/#'),
      })
    }
  })
  const pageData = {
    title: data.attributes.contactsHeader,
    subTitle: data.attributes.contactsText,
    importantContacts,
    contacts,
  }
  const formData = {
    title: data.attributes.receptionHeader,
    subTitle: data.attributes.receptionText,
  }
  return { pageData, formData }
}
