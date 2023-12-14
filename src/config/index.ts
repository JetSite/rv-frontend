export interface ILangConfig {
  value: string
  alt?: string
  label: {
    [K: string]: string
  }
}
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

export interface ILangPlaceholders {
  contact: {
    ru: {
      name: string
      tel: string
      msg: string
      theme: string[]
    }
    en: {
      name: string
      tel: string
      msg: string
      theme: string[]
    }
    am: {
      name: string
      tel: string
      msg: string
      theme: string[]
    }
  }
}

export const langUIConfig: ILangUIConfig = {
  today: { ru: 'Сегодня', en: 'Today', am: 'Այսօր' },
  tomorrow: { ru: 'Завтра', en: 'Tomorrow', am: 'Վաղը' },
}

export const langPlaceholders: ILangPlaceholders = {
  contact: {
    ru: {
      name: 'Ваше имя',
      tel: 'Контактный номер телефона',
      msg: 'Сообщение',
      theme: [
        'предложить интервью',
        'сообщить о проблеме',
        'пригласить на мероприятие',
      ],
    },
    en: {
      name: 'Your name',
      tel: 'Сontact phone number',
      msg: 'Message',
      theme: ['offer an interview', 'report a problem', 'invite to an event'],
    },
    am: {
      name: 'քո անունը',
      tel: 'կոնտակտային հեռախոսահամար',
      msg: 'Հաղորդագրություն',
      theme: [
        'հարցազրույց առաջարկել',
        'զեկուցել խնդրի մասին',
        'հրավիրել միջոցառմանը',
      ],
    },
  },
}

export const langButtons: ILangUIConfig = {
  sendButton: { ru: 'Отправить', en: 'Send', am: 'Ուղարկել' },
}
