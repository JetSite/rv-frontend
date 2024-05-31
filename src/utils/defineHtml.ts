export type IDefineHtml = (string: string) => boolean

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
  let value = true
  findWords.forEach(findWord => {
    if (string.includes(findWord)) {
      return (value = true)
    }
  })
  return value
}

export default defineHtml
