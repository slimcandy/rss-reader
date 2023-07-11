export default function FeedListSkeleton() {
  return (
    <ul
      className="mx-auto grid max-w-6xl animate-pulse
                grid-cols-1 
                gap-6 px-4 
                py-12 sm:grid-cols-2 sm:px-6 
                sm:py-16 lg:grid-cols-3 lg:px-8
                lg:py-20"
    >
      {[...Array(3)].map(function featuredArticles(number) {
        return (
          <li key={number}>
            <article className="mb-4 rounded bg-white p-4 shadow">
              <h2 className="mt-2 block h-16 w-3/4 bg-gray-200"></h2>
              <p className="mt-2 h-44 w-full bg-gray-200"></p>
            </article>
          </li>
        )
      })}
      {[...Array(3)].map(function restArticles(number) {
        return (
          <li key={number}>
            <article className="mb-4 rounded bg-white p-4 shadow">
              <h2 className="mt-2 block h-8 w-3/4 bg-gray-200"></h2>
              <p className="mt-2 h-24 w-full bg-gray-200"></p>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
