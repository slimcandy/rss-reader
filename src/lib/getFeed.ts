import Parser from 'rss-parser'

const parser = new Parser()

export async function getFeedByURL(url: string) {
  return await parser.parseURL(url)
}

export async function getFeedByURLs(urls: string[]) {
  const feeds = await Promise.all(urls.map(getFeedByURL))
  return feeds
}
