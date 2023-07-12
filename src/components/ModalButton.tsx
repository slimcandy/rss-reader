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

          <form name="add-feed" action={handleAddFeed}>
            <div className="join">
              <label className="sr-only">Feed URL</label>
              <input
                className="input-bordered input-primary input join-item"
                type="url"
                placeholder="https://example.com/rss.xml"
                value={url}
                onChange={handleURLChange}
                list="feeds"
                required
              />
              <button
                type="submit"
                className="btn-primary join-item btn rounded-r-full"
              >
                Add Feed
              </button>
            </div>
            <input list="feeds" id="feedInput" name="feedInput" />

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
