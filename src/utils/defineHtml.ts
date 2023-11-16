export type IDefineHtml = (string: string) => boolean

const findWords: string[] = [
  '<p>',
  '<h1>',
  '<h2>',
  '<h3>',
  '<br>',
  '<hr>',
  '<span>',
]

const defineHtml: IDefineHtml = string => {
  findWords.forEach(findWord => {
    if (string.includes(findWord)) {
      return true
    }
  })
  return false
}

export default defineHtml
