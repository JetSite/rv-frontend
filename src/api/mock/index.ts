import { ActivityItem, EventItem, NewsItem, PriorityItem } from '@/types/item'

export const navMock = [
  {
    title: 'События',
    slug: '/events',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
  {
    title: 'Новости',
    slug: '/news',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
  {
    title: 'Приоритеты',
    slug: '#',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
  {
    title: 'Деятельность',
    slug: '#',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
  {
    title: 'Архив',
    slug: '#',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
  {
    title: 'Контакт',
    slug: '#',
    children: [
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
      { title: 'Профессиональная', slug: ' #' },
    ],
  },
]

export const socialsMock = [
  { icon: 'instagram', slug: '#' },
  { icon: 'instagram', slug: '#' },
  { icon: 'instagram', slug: '#' },
  { icon: 'instagram', slug: '#' },
]

export const eventMock: EventItem[] = [
  {
    title: 'Предстоящая встреча в г. Мартуни',
    slug: '#',
    time: '11:30',
    date: '10 сентября 2023 г.',
    text: 'Запланированная встреча с жителями г. Мартуни пройдет на центральной площади города. Начало мероприятия в 11:30 (часовой пояс Ереван/Степанакерт)',
  },
  {
    title: 'Предстоящая встреча в г. Мартуни',
    slug: '#',
    time: '11:30',
    date: '10 сентября 2023 г.',
    text: 'Запланированная встреча с жителями г. Мартуни пройдет на центральной площади города. Начало мероприятия в 11:30 (часовой пояс Ереван/Степанакерт)',
  },
  {
    title: 'Предстоящая встреча в г. Мартуни',
    slug: '#',
    time: '11:30',
    date: '10 сентября 2023 г.',
    text: 'Запланированная встреча с жителями г. Мартуни пройдет на центральной площади города. Начало мероприятия в 11:30 (часовой пояс Ереван/Степанакерт)',
  },
  {
    title: 'Предстоящая встреча в г. Мартуни',
    slug: '#',
    time: '11:30',
    date: '10 сентября 2023 г.',
    text: 'Запланированная встреча с жителями г. Мартуни пройдет на центральной площади города. Начало мероприятия в 11:30 (часовой пояс Ереван/Степанакерт)',
  },
]

export const newsMock: NewsItem[] = [
  {
    title: 'Хорошие новости по гуманитарному авиакоридору.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по ',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному авиакоридору.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному авиакоридору.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному авиакоридору.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по гуманитарному авиакоридору.',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
  {
    title: 'Хорошие новости по',
    date: '01 сентября 2023 г.',
    text: 'Только в Арцахе знают, как трудно было вчера родителям школьников собирать школьные портфели: ведь нет не только учебников, но и невозможно найти самые обычные канцелярские принадлежности - ручки и тетради.',
    img: 'Mock/news1.png',
    slug: '#',
  },
]

export const priorityMock: PriorityItem[] = [
  {
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
]

export const activityMock: ActivityItem[] = [
  {
    title: 'Профессиональная',
    slug: '#',
    img: 'Mock/slider2.png',
    text: 'За без малого четверть века работы мы с командой приняли участие во многих знаковых для России сделках и проектах. Мы стояли у истоков создания фондового рынка, способствуя установлению всеобщих стандартов и правил и принимая участие в его строительстве как члены экспертных советов в десятке государственных и общественных организаций.',
  },
  {
    title: 'Профессиональная',
    slug: '#',
    img: 'Mock/slider2.png',
    text: 'За без малого четверть века работы мы с командой приняли участие во многих знаковых для России сделках и проектах. Мы стояли у истоков создания фондового рынка, способствуя установлению всеобщих стандартов и правил и принимая участие в его строительстве как члены экспертных советов в десятке государственных и общественных организаций.',
  },
  {
    title: 'Профессиональная',
    slug: '#',
    img: 'Mock/slider2.png',
    text: 'За без малого четверть века работы мы с командой приняли участие во многих знаковых для России сделках и проектах. Мы стояли у истоков создания фондового рынка, способствуя установлению всеобщих стандартов и правил и принимая участие в его строительстве как члены экспертных советов в десятке государственных и общественных организаций.',
  },
  {
    title: 'Профессиональная',
    slug: '#',
    img: 'Mock/slider2.png',
    text: 'За без малого четверть века работы мы с командой приняли участие во многих знаковых для России сделках и проектах. Мы стояли у истоков создания фондового рынка, способствуя установлению всеобщих стандартов и правил и принимая участие в его строительстве как члены экспертных советов в десятке государственных и общественных организаций.',
  },
]

export const calendarEventMock = [
  '2023-11-05',
  '2023-11-10',
  '2023-11-15',
  '2023-11-27',
]