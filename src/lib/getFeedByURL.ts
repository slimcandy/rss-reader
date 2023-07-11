import Parser from 'rss-parser'

const parser = new Parser()
export default async function getFeedByURL(url: string) {
  return await parser.parseURL(url)
}
