'use client'

import downloadPDF from '@/utils/downloadPDF'
import { IMagazine } from '@/utils/getMagazinesData'
import React, { FC, MouseEvent } from 'react'

export const DownloadBlock: FC<{ magazine: IMagazine }> = ({ magazine }) => {
  const handleDownload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    downloadPDF(magazine.ruLink, magazine.title)
  }
  return magazine.ruLink || magazine.enLink ? (
    <p className="text-sm desktopOnly:text-xs ml-auto w-fit">
      <span>Скачать </span>
      {magazine.ruLink ? (
        <button
          onClick={handleDownload}
          className="hover:text-gray-500 cursor-pointer"
        >
          RU версия{' '}
        </button>
      ) : null}
      {magazine.ruLink && magazine.enLink ? '/' : ''}
      {magazine.enLink ? (
        <button
          onClick={handleDownload}
          className="hover:text-gray-500 cursor-pointer"
        >
          {' '}
          EN version
        </button>
      ) : null}
    </p>
  ) : null
}
