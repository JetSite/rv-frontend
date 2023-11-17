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

export const langUIConfig: ILangUIConfig = {
  today: { ru: 'Сегодня', en: 'Today', am: 'Այսօր' },
  tomorrow: { ru: 'Завтра', en: 'Tomorrow', am: 'Վաղը' },
}
