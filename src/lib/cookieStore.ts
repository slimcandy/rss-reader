'use server'

import { cookies } from 'next/headers'

export async function clearCookie(
  cookieName: string = 'feed-list',
  error: any = ''
) {
  console.error("Can't get cookie" + error)

  const cookieStore = cookies()
  cookieStore.delete(cookieName)
}

export async function getURLsFromCookie(cookieName: string = 'feed-list') {
  const cookieStore = cookies()
  const cookieValue = cookieStore.get(cookieName)?.value
  if (typeof cookieValue === 'string') {
    let feedList
    try {
      feedList = JSON.parse(cookieValue)
    } catch (error) {
      clearCookie(cookieName, error)
    }
    if (Array.isArray(feedList)) {
      return feedList
    } else {
      clearCookie(cookieName, 'feedList is not array')
      return []
    }
  }
  clearCookie(cookieName, 'cookieValue is not string')
  return []
}

export async function setURLToCookie(
  url: string,
  cookieName: string = 'feed-list'
) {
  console.log('setURLToCookie', url)
  const cookieStore = cookies()
  let cookie
  try {
    cookie = cookieStore.get(cookieName)
  } catch (error) {
    throw "Can't get cookie" + error
  }
  const cookieValue = typeof cookie === 'undefined' ? '[]' : cookie.value
  let feedList
  try {
    feedList = JSON.parse(cookieValue)
  } catch (error) {
    clearCookie(cookieName, error)
    return false
  }
  if (Array.isArray(feedList)) {
    if (feedList.includes(url)) {
      return true
    }
    try {
      feedList.push(url)
      cookieStore.set(cookieName, JSON.stringify(feedList))
    } catch (error) {
      console.error(error)
    }

    return true
  } else {
    console.error('feedList is not array')
    return false
  }
}
