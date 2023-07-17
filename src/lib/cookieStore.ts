'use server'

import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'

const cookieSingleton = (function () {
  let instance: ReadonlyRequestCookies | null = null

  function createInstance() {
    const cookiesList = cookies()
    return cookiesList
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

export async function clearCookie(
  cookieName: string = 'feed-list',
  error: any = ''
) {
  const cookiesList = cookieSingleton.getInstance()
  const hasCookie = Boolean(cookiesList.get(cookieName))
  if (hasCookie) {
    cookiesList.delete(cookieName)
  }

  console.error('⚠️ ' + error)
}

export async function getURLsFromCookie(
  cookieName: string = 'feed-list'
): Promise<string[]> {
  const cookiesList = cookieSingleton.getInstance()
  const hasCookie = Boolean(cookiesList.get(cookieName))

  if (hasCookie) {
    const cookieValue = cookiesList.get(cookieName)!.value
    let feedList
    try {
      feedList = JSON.parse(cookieValue)
    } catch (error) {
      console.error('⚠️ ' + error)
    }
    if (Array.isArray(feedList)) {
      return feedList
    } else {
      console.error('⚠️ Cookie value is not an array')
      return []
    }
  } else {
    return []
  }
}

export async function setURLToCookie(
  url: string,
  cookieName: string = 'feed-list'
): Promise<boolean> {
  const cookiesList = cookieSingleton.getInstance()
  const hasCookie = Boolean(cookiesList.get(cookieName))
  let feedList: string[] = []

  if (hasCookie) {
    // append to cookie
    const cookieValue = cookiesList.get(cookieName)!.value
    let jsonValue
    try {
      jsonValue = JSON.parse(cookieValue)
    } catch (error) {
      // cannot parse cookie
      clearCookie(cookieName, error)
      return false
    }
    if (!Array.isArray(jsonValue)) {
      clearCookie(cookieName, '⚠️ feedList is not array')
      return false
    }
  }

  if (!feedList.includes(url)) {
    feedList.push(url)
  }

  cookiesList.set(cookieName, JSON.stringify(feedList))

  return true
}
