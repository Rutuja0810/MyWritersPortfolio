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
import authorPhoto from "@assets/Night Phlox.png";
import books from '@src/lib/books'

//todo: remove mock functionality
const featuredBooks = books

//todo: remove mock functionality
const recentPosts = [
  {
    id: "crafting-believable-magic",
    title: "Crafting Believable Magic Systems",
    excerpt:
      "The best fantasy worlds don't just have magic—they have rules. Here's how I approach building systems that feel both wondrous and grounded.",
    date: "Oct 15, 2024",
    category: "Writing Craft",
    readTime: "5 min",
  },
  {
    id: "emotional-truth-in-fiction",
    title: "Finding Emotional Truth in Fiction",
    excerpt:
      "Raw emotion isn't about melodrama—it's about authenticity. Exploring how to write feelings that resonate with readers on a deep level.",
    date: "Sep 28, 2024",
    category: "Process",
    readTime: "7 min",
  },
  {
    id: "mystery-vs-suspense",
    title: "Mystery vs. Suspense: Understanding the Difference",
    excerpt:
      "These two elements often get confused, but understanding their distinction can transform your storytelling approach.",
    date: "Sep 10, 2024",
    category: "Writing Craft",
    readTime: "6 min",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />

      {/* Featured Works */}
      <section className="font-quicksand py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
                Featured Works
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Journeys through realms of fantasy, mystery, and the depths of
                human emotion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8">
            {featuredBooks.map((book, index) => (
              <ScrollReveal key={book.title} delay={index * 0.1}>
                <BookCard {...book} />
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link to="/works" data-testid="link-view-all-works">
                View All Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="font-quicksand bg-card py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={authorPhoto}
                    alt="Night Phlox"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                  About Night Phlox
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Night Phlox is a fantasy author drawn to stories of love, mystery, and the quiet magic of nature. Her work blends emotional storytelling with myth, memory, and immersive world-building to create journeys that linger long after the final page. The Secret of Red Leaf is her debut published novel.
                </p>

                <Button variant="outline" size="lg" asChild>
                  <Link to="/about" data-testid="link-read-more">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="font-quicksand py-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <QuoteBlock
              quote="Writing is an act of archaeology—excavating the truths buried beneath layers of everyday existence."
              attribution="Night Phlox"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Blog */}
      <section className="font-quicksand py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
                Recent Writing
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Thoughts on craft, process, and the journey of storytelling.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <BlogPostCard {...post} />
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog" data-testid="link-view-all-posts">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="font-quicksand py-28 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Continue the Conversation
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Whether you'd like to discuss a story, share your thoughts, or
              simply say hello, I'd love to hear from you.
            </p>

            <Button size="lg" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}