import { getFeedByURLs } from '@/lib/getFeed'
import { getURLsFromCookie } from '@/lib/cookieStore'

import FeedItem from './FeedItem'

export default async function FeedList() {
  const feedURLs = await getURLsFromCookie()
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
    .filter(feed => feed.items !== null && feed.items.length > 0)
    .flatMap(feed => feed.items)
    .sort((a, b) => {
      return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    })
  const featuredItems = items.slice(0, 3)
  const restItems = items.slice(3, Math.min(items.length, 25))

  return (
    <ul className="mx-auto my-2 flex max-w-screen-md flex-col gap-y-4">
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
