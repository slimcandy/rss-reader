import Link from 'next/link'
import FeedItem from './FeedItem'

export default function FeedList() {
  return (
    <ul
      className="mx-auto grid max-w-6xl grid-cols-1
                gap-6 
                px-4 py-12 
                sm:grid-cols-2 sm:px-6 sm:py-16 
                lg:grid-cols-3 lg:px-8 lg:py-20"
    >
      {[1, 2, 3].map(function richCards(item) {
        return (
          <li key={item}>
            <FeedItem
              item={{
                title: 'Content Heading',
                contentSnippet: 'article.contentSnippet'
              }}
              highlighted
            />
          </li>
        )
      })}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(function richCards(
        item
      ) {
        return (
          <li key={item}>
            <FeedItem
              item={{
                title: 'Second Content Heading',
                contentSnippet: 'Second article.contentSnippet'
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}
