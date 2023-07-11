import { getFeedByURLs } from '@/lib/getFeed'
import getURLsFromCookie from '@/lib/getURLsFromCookie'

import FeedItem from './FeedItem'

export default async function FeedList() {
  const feedURLs = getURLsFromCookie()
  if (feedURLs.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">No feeds added yet</h1>
        <p className="mt-2 text-gray-700">
          Add a feed by clicking the <strong>Add Feed</strong> button in the top
          right corner.
        </p>
      </div>
    )
  }

  const feeds = await getFeedByURLs(feedURLs)
  const items = feeds
    .flatMap(feed => feed.items)
    .sort((a, b) => {
      return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    })
  const featuredItems = items.slice(0, 3)
  const restItems = items.slice(3)

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
