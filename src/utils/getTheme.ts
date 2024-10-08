'use client'
export type IThema = 'readable' | 'default'
export type IGetTheme = () => IThema | null

export const getTheme: IGetTheme = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    const initialTheme =
      savedTheme && savedTheme === 'readable' ? 'readable' : 'default'
    document.documentElement.setAttribute('data-theme', initialTheme)
    return initialTheme
  } else return null
}
