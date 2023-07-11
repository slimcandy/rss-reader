'use client'

import { useState } from 'react'
import {
  RssIcon,
  PlusCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function closeModal() {
    setIsModalOpen(false)
  }
  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5" title="Home Page">
            <span className="sr-only">RSS Reader</span>
            <RssIcon className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <button className="btn" onClick={openModal}>
            <PlusCircleIcon className="mr-1 inline-block h-5 w-5" />
            Add RSS Feed
          </button>
        </div>
      </nav>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="card-bordered card absolute top-8 w-96 bg-base-100 shadow-xl ring-8 lg:w-1/2"
      >
        <Dialog.Panel className="card-body">
          <Dialog.Title className="card-title">Add RSS Feed</Dialog.Title>

          <form>
            <div className="join">
              <label className="sr-only">Feed URL</label>
              <input
                className="input-bordered input-primary input join-item"
                type="text"
                placeholder="https://example.com/rss.xml"
              />
              <button className="btn-primary join-item btn rounded-r-full">
                Add Feed
              </button>
            </div>
          </form>
          <div className="card-actions justify-end">
            <button className="btn-sm btn">
              <XCircleIcon className="mr-1 inline-block h-5 w-5" />
              Close modal
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
