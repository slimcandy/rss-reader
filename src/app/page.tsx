import { Suspense } from 'react'

import FeedList from '@/components/FeedList'
import Header from '@/components/Header'
import FeedListSkeleton from '@/components/FeedListSkeleton'

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<FeedListSkeleton />}>
        <FeedList />
      </Suspense>
    </main>
  )
}
