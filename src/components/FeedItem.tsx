import Link from 'next/link'
import clsx from 'clsx'
import { FC } from 'react'

type FeedItem = {
  [key: string]: any
}
interface FeedItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: FeedItem
  highlighted?: boolean
}

const FeedItem: FC<FeedItemProps> = function FeedItem({
  item,
  className,
  highlighted = false,
  ...props
}) {
  const title = item.title.length > 0 ? item.title : item.link
  const description = item.description || item.contentSnippet || ''
  return (
    <article
      className={clsx('mb-4 rounded bg-white p-4 shadow', className)}
      {...props}
    >
      <Link
        href="article.link"
        className={clsx(
          'mt-2 block font-bold text-blue-500 hover:underline',
          highlighted && 'text-2xl',
          !highlighted && 'text-xl'
        )}
      >
        {title}
      </Link>
      <p className="mt-2 text-gray-700">{description}</p>
    </article>
  )
}

export default FeedItem
