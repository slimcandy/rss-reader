import Link from 'next/link'
import clsx from 'clsx'
import { FC } from 'react'

import { RSSFeedItem } from '@/lib/getFeed'
import formatDate from '@/lib/formatDate'

interface FeedItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: RSSFeedItem
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
      className={clsx(
        highlighted && 'prose-lg border-2 border-double border-amber-900',
        !highlighted && 'prose border-b-2 border-amber-200',
        'px-4 py-6',
        className
      )}
      {...props}
    >
      <header>
        {item.pubDate && (
          <small>
            <time dateTime={item.pubDate}>{formatDate(item.pubDate)}</time>
          </small>
        )}
        <Link href={item.link} rel="noopener noreferrer nofollow">
          <h2 className="mt-2">{title}</h2>
        </Link>
      </header>
      <main>
        <p className="line-clamp-6">{description}</p>
      </main>
      <footer>
        <Link href={item.link} rel="noopener noreferrer nofollow">
          <small className="badge badge-outline">
            {new URL(item.link).hostname.replace(/^www\./, '')}
          </small>
        </Link>
      </footer>
    </article>
  )
}

export default FeedItem
