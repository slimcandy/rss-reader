export default function formatDate(pubDate: string) {
  const date = new Date(pubDate)
  const formattedDate = date.toLocaleDateString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
  return formattedDate
}
