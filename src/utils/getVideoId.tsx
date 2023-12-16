type IGetVideoId = (url: string) => string

export const getVideoId: IGetVideoId = url => {
  const urlParams = new URLSearchParams(new URL(url).search)
  return urlParams.get('v') as string
}
