import { IColorShema } from '@/components/MainLayout/components/MainNavDropdown'
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
      'hy-AM': 'AM',
    },
  },
  {
    value: 'en',
    alt: 'English',
    label: {
      ru: 'RU',
      en: 'EN',
      '': 'AM',
    },
  },
  {
    value: 'hy-AM',
    alt: 'English',
    label: {
      ru: 'RU',
      en: 'EN',
      'hy-AM': 'AM',
    },
  },
]

export interface ILangUIConfig {
  [T: string]: {
    ru: string
    en: string
    'hy-AM': string
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
    'hy-AM': {
      name: string
      tel: string
      msg: string
      theme: ITheme[]
    }
  }
}

export const langUIConfig: ILangUIConfig = {
  today: { ru: 'Сегодня', en: 'Today', 'hy-AM': 'Այսօր' },
  tomorrow: { ru: 'Завтра', en: 'Tomorrow', 'hy-AM': 'Վաղը' },
  now: { ru: 'по настоящее время', en: 'until now', 'hy-AM': 'մինչ այժմ' },
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
    'hy-AM': {
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
  sendButton: { ru: 'Отправить', en: 'Send', 'hy-AM': 'Ուղարկել' },
}

export const colorShema: IColorShema = {
  hover: 'before:bg-h',
  default: 'text-inherit',
  active: 'text-h',
}
