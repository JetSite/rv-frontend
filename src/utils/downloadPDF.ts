type IDownloadPDF = (url: string, filename: string) => void

const downloadPDF: IDownloadPDF = async (url, filename) => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    link.click()
    window.URL.revokeObjectURL(link.href)
  } catch (error) {
    console.error('Error downloading PDF:', error)
  }
}

export default downloadPDF
