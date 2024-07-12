export const urlPatternHttps = new RegExp('https://')
export const urlPatternHttp = new RegExp('http://')

export type IGetValidUrl = (link: string) => string

export const getValidUrl = (link: string) => {
  if (!link || typeof link !== 'string' || link === '#') return '#'
  const prepareLink =
    urlPatternHttps.test(link) || urlPatternHttp.test(link)
      ? link
      : 'https://' + link

  return prepareLink
}
