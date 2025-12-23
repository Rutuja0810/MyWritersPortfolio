import HeroSection from "@src/components/HeroSection";
import BookCard from "@src/components/BookCard";
import BlogPostCard from "@src/components/BlogPostCard";
import QuoteBlock from "@src/components/QuoteBlock";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";
import { Button } from "@src/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import fantasyBook from "@assets/generated_images/Fantasy_book_cover_one_8ba2aef9.png";
import mysteryBook from "@assets/generated_images/Mystery_book_cover_two_ff101c37.png";
import literatureBook from "@assets/generated_images/Literature_book_cover_three_4f080171.png";
import authorPhoto from "@assets/generated_images/Author_portrait_photo_6ec25566.png";

//todo: remove mock functionality
const featuredBooks = [
  {
    title: "The Veil of Forgotten Names",
    cover: fantasyBook,
    genre: "Fantasy",
    year: 2023,
    excerpt: "In a world where names hold power and memories shape reality, a young archivist discovers that her forgotten past holds the key to preventing an ancient darkness from consuming everything she loves.",
    purchaseLink: "https://example.com",
  },
  {
    title: "Midnight at the Crossroads",
    cover: mysteryBook,
    genre: "Mystery",
    year: 2022,
    excerpt: "When a renowned detective vanishes during an investigation into a series of impossible crimes, her protégé must unravel a conspiracy that reaches into the highest echelons of power.",
    purchaseLink: "https://example.com",
  },
  {
    title: "The Weight of Unsaid Things",
    cover: literatureBook,
    genre: "Literary Fiction",
    year: 2021,
    excerpt: "Three generations of women confront the secrets that have shaped their family, discovering that sometimes the most profound truths are found in the silences between words.",
    purchaseLink: "https://example.com",
  },
];

//todo: remove mock functionality
const recentPosts = [
  {
    id: "crafting-believable-magic",
    title: "Crafting Believable Magic Systems",
    excerpt: "The best fantasy worlds don't just have magic—they have rules. Here's how I approach building systems that feel both wondrous and grounded.",
    date: "Oct 15, 2024",
    category: "Writing Craft",
    readTime: "5 min",
  },
  {
    id: "emotional-truth-in-fiction",
    title: "Finding Emotional Truth in Fiction",
    excerpt: "Raw emotion isn't about melodrama—it's about authenticity. Exploring how to write feelings that resonate with readers on a deep level.",
    date: "Sep 28, 2024",
    category: "Process",
    readTime: "7 min",
  },
  {
    id: "mystery-vs-suspense",
    title: "Mystery vs. Suspense: Understanding the Difference",
    excerpt: "These two elements often get confused, but understanding their distinction can transform your storytelling approach.",
    date: "Sep 10, 2024",
    category: "Writing Craft",
    readTime: "6 min",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      
      <section className="font-quicksand py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Featured Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Journeys through realms of fantasy, mystery, and the depths of human emotion.
              </p>
            </div>
            <Link href="/works">
              <Button variant="outline" className="hidden sm:flex" asChild>
                <a data-testid="link-view-all-works">
                  View All Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="space-y-8">
          {featuredBooks.map((book, index) => (
            <ScrollReveal key={book.title} delay={index * 0.1}>
              <BookCard {...book} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="font-quicksand bg-card py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-[3/4] relative overflow-hidden rounded-md">
                <img
                  src={authorPhoto}
                  alt="Night Phlox"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">About Elena</h2>
              <p className="text-lg leading-relaxed mb-6">
                Night Phlox is an award-winning author whose work explores the intersection of fantasy, mystery, and the raw depths of human emotion. Her novels have been praised for their intricate world-building, compelling characters, and unflinching examination of what it means to be human.
              </p>
              <Link href="/about">
                <Button variant="outline" asChild>
                  <a data-testid="link-read-more">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="font-quicksand py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <QuoteBlock
            quote="Writing is an act of archaeology—excavating the truths buried beneath layers of everyday existence."
            attribution="Night Phlox"
          />
        </ScrollReveal>
      </section>

      <section className="font-quicksand py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Recent Writing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Thoughts on craft, process, and the journey of storytelling.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="hidden sm:flex" asChild>
                <a data-testid="link-view-all-posts">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <BlogPostCard {...post} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
