'use server'

import Parser from 'rss-parser'

interface RSSFeedItem {
  title: string
  link: string
  description: string
  pubDate: string
  guid: string
  author?: string
  category?: string[]
  comments?: string
  source?: string
  creator?: string
  content?: string
  contentSnippet?: string
  categories?: string[]
  isoDate: string
  [key: string]: any
}
interface RSSFeed {
  title: string
  description?: string
  link: string
  language: string
  lastBuildDate: string
  pubDate: string
  ttl: string
  image: {
    url: string

    title: string
    link: string
  }
  items: RSSFeedItem[]
  [key: string]: any
}

const parser = new Parser()

export async function getFeedByURL(url: string) {
  try {
    const feed = (await parser.parseURL(url)) as RSSFeed
    return feed
  } catch (error) {
    throw "Can't get feed by url: " + error + ' url: ' + url
  }
}

export async function getFeedByURLs(urls: string[]) {
  const feeds = await Promise.allSettled(urls.map(getFeedByURL))
  const fulfilledFeeds = feeds.filter(
    feed => feed.status === 'fulfilled'
  ) as PromiseFulfilledResult<RSSFeed>[]
  const rejectedFeeds = feeds.filter(
    feed => feed.status === 'rejected'
  ) as PromiseRejectedResult[]
  const fulfilledFeedsValue = fulfilledFeeds.map(feed => feed.value)
  const rejectedFeedsReason = rejectedFeeds.map(feed => feed.reason)

  console.warn('getFeedByURLs: rejectedFeedsReason:', rejectedFeedsReason)
  return fulfilledFeedsValue
}
