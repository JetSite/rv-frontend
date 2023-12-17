import defineHtml from '@/utils/defineHtml'
import { FC } from 'react'
import Markdown from 'react-markdown'

interface Props {
  content: string
  sx?: string
}

export const Content: FC<Props> = ({ content, sx }) => {
  if (defineHtml(content)) {
    return <div dangerouslySetInnerHTML={{ __html: content }} className={sx} />
  } else {
    return (
      <div className={sx}>
        <Markdown>{content}</Markdown>
      </div>
    )
  }
}
