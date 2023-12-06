import {
  EventItem,
  IStandartItem,
  PriorityItem,
} from '@/types/item'

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

export const priorityMock: PriorityItem[] = [
  {
    id: '1',
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    id: '1',
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    id: '1',
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
  {
    id: '1',
    title: 'Родина',
    slug: '#',
    img: 'Mock/priority.png',
    text: 'Я всегда говорил, что Арцах – одна из опор Армянского мира не потому, что эта земля полита армянской кровью, а потому, что здесь по-прежнему жив армянский дух.',
  },
]

export const calendarEventMock = [
  '2023-11-05',
  '2023-11-10',
  '2023-11-15',
  '2023-11-27',
]
