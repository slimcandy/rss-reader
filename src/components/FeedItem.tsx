import Link from 'next/link'
import clsx from 'clsx'
import { FC } from 'react'

interface FeedItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: {
    title: string
    contentSnippet: string
  }
  highlighted?: boolean
}

const FeedItem: FC<FeedItemProps> = function FeedItem({
  item,
  className,
  highlighted = false,
  ...props
}) {
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
        {item.title}
      </Link>
      <p className="mt-2 text-gray-700">{item.contentSnippet}</p>
    </article>
  )
}

export default FeedItem
