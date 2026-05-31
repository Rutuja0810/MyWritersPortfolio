import { useState } from "react";
import BookCard from "@src/components/BookCard";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";
import { Button } from "@src/components/ui/button";

import fantasyBook from "@assets/generated_images/Fantasy_book_cover_one_8ba2aef9.png";
import mysteryBook from "@assets/generated_images/Mystery_book_cover_two_ff101c37.png";
import literatureBook from "@assets/generated_images/Literature_book_cover_three_4f080171.png";

//todo: remove mock functionality
const allBooks = [
  {
    title: "The Veil of Forgotten Names",
    cover: fantasyBook,
    genre: "Fantasy",
    year: 2023,
    excerpt:
      "In a world where names hold power and memories shape reality, a young archivist discovers that her forgotten past holds the key to preventing an ancient darkness from consuming everything she loves.",
    purchaseLink: "https://example.com",
  },
  {
    title: "Midnight at the Crossroads",
    cover: mysteryBook,
    genre: "Mystery",
    year: 2022,
    excerpt:
      "When a renowned detective vanishes during an investigation into a series of impossible crimes, her protégé must unravel a conspiracy that reaches into the highest echelons of power.",
    purchaseLink: "https://example.com",
  },
  {
    title: "The Weight of Unsaid Things",
    cover: literatureBook,
    genre: "Literary Fiction",
    year: 2021,
    excerpt:
      "Three generations of women confront the secrets that have shaped their family, discovering that sometimes the most profound truths are found in the silences between words.",
    purchaseLink: "https://example.com",
  },
  {
    title: "Echoes in the Dark",
    cover: mysteryBook,
    genre: "Mystery",
    year: 2020,
    excerpt:
      "A small coastal town harbors secrets that refuse to stay buried. When the past resurfaces, one woman must decide how far she'll go to protect the truth.",
    purchaseLink: "https://example.com",
  },
  {
    title: "Crown of Shattered Stars",
    cover: fantasyBook,
    genre: "Fantasy",
    year: 2019,
    excerpt:
      "An exiled princess and a rogue mage must form an uneasy alliance to reclaim a kingdom stolen by dark magic and ancient betrayals.",
    purchaseLink: "https://example.com",
  },
];

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
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                Published Works
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                A collection of stories spanning fantasy realms, mysterious
                investigations, and profound explorations of the human
                experience.
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
          <div className="grid gap-8 lg:grid-cols-2">
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