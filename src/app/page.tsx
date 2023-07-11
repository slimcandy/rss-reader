import { Suspense } from 'react'

import FeedList from '@/components/FeedList'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <FeedList />
      </Suspense>
    </main>
  )
}
