export type IDefineHtml = (string: string) => boolean

const markdownPattern = /(^|\s)([*_~`]|#{1,6}\s|\d+\.\s|\[.*\]:)/

const htmlPattern = /<[^>]+>/

const findWords: string[] = [
  '</p>',
  '</h1>',
  '</h2>',
  '</h3>',
  '<br>',
  '<hr>',
  '</span>',
  '</iframe>',
]

const defineHtml: IDefineHtml = string => {
  return !markdownPattern.test(string)
}

export default defineHtml
