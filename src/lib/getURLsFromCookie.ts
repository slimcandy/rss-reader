import { cookies } from 'next/headers'

export default function getURLsFromCookie(
  cookieName: string = 'feed-list'
): string[] {
  const cookieStore = cookies()
  const cookieValue = cookieStore.get(cookieName)?.value
  if (typeof cookieValue === 'string') {
    const feedList = JSON.parse(cookieValue)
    if (Array.isArray(feedList)) {
      return feedList
    }
    return []
  }
  return []
}
