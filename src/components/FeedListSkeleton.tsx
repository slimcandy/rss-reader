export default function FeedListSkeleton() {
  return (
    <ul className="mx-auto my-2 flex max-w-screen-md animate-pulse flex-col gap-y-4">
      {[...Array(3)].map(function featuredArticles(number) {
        return (
          <li key={number}>
            <article className="prose-lg border-2 border-double border-amber-900 px-4 py-6">
              <h2 className="h-10 w-3/4 bg-amber-200"></h2>
              <p className="mt-2 h-24 w-full bg-amber-200"></p>
            </article>
          </li>
        )
      })}
      {[...Array(3)].map(function restArticles(number) {
        return (
          <li key={number}>
            <article className="prose border-b-2 border-amber-200 px-4 py-2">
              <h2 className="h-8 w-3/4 bg-amber-200"></h2>
              <p className="mt-2 h-16 w-full bg-amber-200"></p>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
