import BookCard from '../BookCard'
import bookCover from '@assets/generated_images/Fantasy_book_cover_one_8ba2aef9.png'

export default function BookCardExample() {
  return (
    <BookCard
      title="The Veil of Forgotten Names"
      cover={bookCover}
      genre="Fantasy"
      year={2023}
      excerpt="In a world where names hold power and memories shape reality, a young archivist discovers that her forgotten past holds the key to preventing an ancient darkness from consuming everything she loves."
      purchaseLink="https://example.com"
    />
  )
}
