import { RssIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import clsx from 'clsx'

import { playfair } from '@/lib/fonts'

import ModalButton from './ModalButton'

export default function Header() {
  return (
    <header className={clsx('mx-auto max-w-screen-md', playfair.className)}>
      <div className="grid grid-cols-3 items-center border-b-2 border-amber-900 py-2 lg:py-4">
        <h3 className="col-span-2 text-center text-lg">
          Your Web-based, Hassle-Free News Aggregator!
        </h3>
        <div className="text-right">
          <ModalButton />
        </div>
      </div>

      <Link
        href="/"
        className="link block w-full border-b-8 border-double border-amber-900 py-2 text-center text-2xl font-bold text-amber-950 lg:py-4 lg:text-4xl"
        title="Home Page"
      >
        <RssIcon className="mr-1 inline-block h-8 w-8 lg:h-16 lg:w-16" />
        RSS Reader
      </Link>
    </header>
  )
}
