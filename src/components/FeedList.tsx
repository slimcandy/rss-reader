import Link from 'next/link'

export default function FeedList() {
  return (
    <ul
      className="mx-auto grid max-w-6xl grid-cols-1
                gap-6 
                px-4 py-12 
                sm:grid-cols-2 sm:px-6 sm:py-16 
                lg:grid-cols-3 lg:px-8 lg:py-20"
    >
      {[1, 2, 3].map(function richCards(item) {
        return (
          <li key={item}>
            <article className="mb-4 rounded bg-white p-4 shadow">
              <Link
                href="article.link"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-2xl font-bold text-blue-500 hover:underline"
              >
                article.title
              </Link>
              <p className="mt-2 text-gray-700">article.contentSnippet</p>
            </article>
          </li>
        )
      })}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(function richCards(
        item
      ) {
        return (
          <li key={item}>
            <article className="mb-4 rounded bg-white p-4 shadow">
              <Link
                href="article.link"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold text-blue-500 hover:underline"
              >
                article.title
              </Link>
              <p className="mt-2 text-gray-700">article.contentSnippet</p>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
