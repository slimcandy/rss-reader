'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

export default function ModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function closeModal() {
    setIsModalOpen(false)
  }
  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <>
      <button className="btn" onClick={openModal}>
        <PlusCircleIcon className="mr-1 inline-block h-5 w-5" />
        Add RSS Feed
      </button>
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
            <button className="btn-sm btn" onClick={closeModal}>
              <XCircleIcon className="mr-1 inline-block h-5 w-5" />
              Close modal
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
