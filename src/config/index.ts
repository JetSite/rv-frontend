import { number } from 'prop-types'

export interface ILangConfig {
  value: string
  alt?: string
  label: {
    [K: string]: string
  }
}
export type Lang = (typeof langConfig)[number]['value']

export const langConfig: ILangConfig[] = [
  {
    value: 'ru',
    alt: 'Russian',
    label: {
      ru: 'RU',
      en: 'EN',
      am: 'AM',
    },
  },
  {
    value: 'en',
    alt: 'English',
    label: {
      ru: 'RU',
      en: 'EN',
      am: 'AM',
    },
  },
  {
    value: 'am',
    alt: 'English',
    label: {
      ru: 'RU',
      en: 'EN',
      am: 'AM',
    },
  },
]

export interface ILangUIConfig {
  [T: string]: {
    ru: string
    en: string
    am: string
  }
}

export interface ITheme {
  value: number
  title: string
}

export interface ILangPlaceholders {
  contact: {
    ru: {
      name: string
      tel: string
      msg: string
      theme: ITheme[]
    }
    en: {
      name: string
      tel: string
      msg: string
      theme: ITheme[]
    }
    am: {
      name: string
      tel: string
      msg: string
      theme: ITheme[]
    }
  }
}

export const langUIConfig: ILangUIConfig = {
  today: { ru: 'Сегодня', en: 'Today', am: 'Այսօր' },
  tomorrow: { ru: 'Завтра', en: 'Tomorrow', am: 'Վաղը' },
  now: { ru: 'настоящее время', en: 'present time', am: 'ներկա ժամանակ' },
}

export const langPlaceholders: ILangPlaceholders = {
  contact: {
    ru: {
      name: 'Ваше имя',
      tel: 'Контактный номер телефона',
      msg: 'Сообщение',
      theme: [
        { title: 'предложить интервью', value: 1 },
        { title: 'сообщить о проблеме', value: 2 },
        { title: 'пригласить на мероприятие', value: 3 },
      ],
    },
    en: {
      name: 'Your name',
      tel: 'Сontact phone number',
      msg: 'Message',
      theme: [
        { title: 'offer an interview', value: 1 },
        { title: 'report a problem', value: 2 },
        { title: 'пригласить на мероприятие', value: 3 },
      ],
    },
    am: {
      name: 'քո անունը',
      tel: 'կոնտակտային հեռախոսահամար',
      msg: 'Հաղորդագրություն',
      theme: [
        { title: 'հարցազրույց առաջարկել', value: 1 },
        { title: 'զեկուցել խնդրի մասին', value: 2 },
        { title: 'հրավիրել միջոցառմանը', value: 3 },
      ],
    },
  },
}

export const langButtons: ILangUIConfig = {
  sendButton: { ru: 'Отправить', en: 'Send', am: 'Ուղարկել' },
}
