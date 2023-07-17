'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { revalidatePath } from 'next/cache'

import { setURLToCookie } from '@/lib/cookieStore'

export default function ModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [url, setURL] = useState('')
  function closeModal() {
    setIsModalOpen(false)
  }
  function openModal() {
    setIsModalOpen(true)
  }
  function handleURLChange(event: React.ChangeEvent<HTMLInputElement>) {
    setURL(event.target.value)
  }

  async function handleAddFeed() {
    await setURLToCookie(url.trim())
    closeModal()
    revalidatePath('/')
  }

  return (
    <>
      <button className="btn flex-nowrap" onClick={openModal}>
        <PlusCircleIcon className="mr-1 inline-block h-5 w-5" />
        Add RSS Feed
      </button>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="card card-bordered absolute left-1/2 top-1/2 w-1/2 min-w-fit max-w-full -translate-x-1/2 -translate-y-1/2 transform border-2 border-amber-900 bg-amber-100 bg-opacity-95 shadow-2xl shadow-amber-700"
      >
        <Dialog.Panel className="card-body">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="card-actions order-1 justify-end lg:order-2">
              <button className="btn btn-ghost btn-sm" onClick={closeModal}>
                <kbd className="kbd kbd-sm">Esc</kbd> Close
              </button>
            </div>
            <Dialog.Title className="card-title order-2 mb-2 lg:order-1 lg:mb-4">
              Add a New RSS Feed
            </Dialog.Title>
          </div>

          <form
            name="add-feed"
            action={handleAddFeed}
            className="flex w-full flex-col gap-y-2 lg:gap-y-4"
          >
            <label className="sr-only">Feed URL</label>
            <input
              className="input input-bordered input-primary w-full"
              type="url"
              placeholder="https://example.com/rss.xml"
              value={url}
              onChange={handleURLChange}
              list="feeds"
              autoFocus={isModalOpen}
              required
            />
            <button type="submit" className="btn btn-primary max-w-fit">
              Add Feed
            </button>

            <datalist id="feeds">
              <option value="https://www.reddit.com/.rss">Reddit</option>
              <option value="http://rss.cnn.com/rss/cnn_topstories.rss">
                CNN Top Stories
              </option>
              <option value="http://feeds.bbci.co.uk/news/world/rss.xml">
                BBC World News
              </option>
              <option value="https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml">
                NY Times Homepage
              </option>
              <option value="https://hnrss.org/frontpage">Hacker News</option>
              <option value="https://www.theguardian.com/world/rss">
                The Guardian World News
              </option>
              <option value="https://feeds.feedburner.com/TechCrunch/">
                TechCrunch
              </option>
              <option value="https://www.bloomberg.com/feeds/bpol/sitemap_news_tech.xml">
                Bloomberg Technology
              </option>
              <option value="https://www.theverge.com/rss/index.xml">
                The Verge
              </option>
              <option value="https://www.espn.com/espn/rss/news">
                ESPN Top Headlines
              </option>
            </datalist>
          </form>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
