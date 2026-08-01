import { useState } from "react";
import BookCard from "@src/components/BookCard";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";
import { Button } from "@src/components/ui/button";

import fantasyBook from "@assets/generated_images/Fantasy_book_cover_one_8ba2aef9.png";
import mysteryBook from "@assets/generated_images/Mystery_book_cover_two_ff101c37.png";
import literatureBook from "@assets/generated_images/Literature_book_cover_three_4f080171.png";
import books from "@src/lib/books";

//todo: remove mock functionality
const allBooks = books

export default function Works() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  const genres = ["All", "Fantasy", "Mystery", "Literary Fiction"];

  const filteredBooks =
    selectedGenre === "All"
      ? allBooks
      : allBooks.filter((book) => book.genre === selectedGenre);

  return (
    <PageTransition>
      <div className="font-quicksand pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto my-16">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                Published Works
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Each story is a journey through enchanting worlds, forgotten myths, enduring love, and the mysteries that shape the human heart.
              </p>

              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {filteredBooks.length} Work
                {filteredBooks.length !== 1 ? "s" : ""}
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={
                    selectedGenre === genre ? "default" : "outline"
                  }
                  size="lg"
                  className="rounded-full"
                  onClick={() => setSelectedGenre(genre)}
                  data-testid={`button-filter-${genre
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Books */}
          <div className="grid gap-8 lg:grid-cols-1">
            {filteredBooks.map((book, index) => (
              <ScrollReveal
                key={book.title}
                delay={index * 0.08}
              >
                <BookCard {...book} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}