import getFeedByURL from '@/lib/getFeedByURL'

import FeedItem from './FeedItem'

export default async function FeedList() {
  const feed = await getFeedByURL('https://www.smashingmagazine.com/feed/')
  const featuredItems = feed.items.slice(0, 3)
  const restItems = feed.items.slice(3, Math.min(feed.items.length, 10))
  return (
    <ul
      className="mx-auto grid max-w-6xl grid-cols-1
                gap-6 
                px-4 py-12 
                sm:grid-cols-2 sm:px-6 sm:py-16 
                lg:grid-cols-3 lg:px-8 lg:py-20"
    >
      {featuredItems.map(function featuredItems(item) {
        return (
          <li key={item.guid}>
            <FeedItem item={item} highlighted />
          </li>
        )
      })}
      {restItems.map(function restItems(item) {
        return (
          <li key={item.guid}>
            <FeedItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}
