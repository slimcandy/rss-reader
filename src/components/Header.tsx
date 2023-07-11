import { RssIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ModalButton from './ModalButton'

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link
          href="/"
          className="link -m-1.5 flex items-end p-1.5"
          title="Home Page"
        >
          <span className="sr-only">RSS Reader</span>
          <RssIcon className="mr-1 inline-block h-8 w-8" />
          Home Page
        </Link>
        <ModalButton />
      </nav>
    </header>
  )
}
