import BlogPostCard from "@src/components/BlogPostCard";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";

//todo: remove mock functionality
const blogPosts = [
  {
    id: "crafting-believable-magic",
    title: "Crafting Believable Magic Systems",
    excerpt: "The best fantasy worlds don't just have magic—they have rules. Here's how I approach building systems that feel both wondrous and grounded in reality.",
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
  {
    id: "world-building-details",
    title: "The Art of Invisible World-Building",
    excerpt: "The best world-building is the kind readers absorb without noticing. Learn how to create immersive settings without info-dumping.",
    date: "Aug 22, 2024",
    category: "Writing Craft",
    readTime: "8 min",
  },
  {
    id: "character-motivation",
    title: "Why Your Characters Do What They Do",
    excerpt: "Understanding character motivation is the key to writing believable actions and compelling arcs that keep readers invested.",
    date: "Aug 5, 2024",
    category: "Character Development",
    readTime: "6 min",
  },
  {
    id: "writers-block-myth",
    title: "The Myth of Writer's Block",
    excerpt: "What we call writer's block is often something else entirely. Here's how I navigate creative resistance and keep the words flowing.",
    date: "Jul 18, 2024",
    category: "Process",
    readTime: "5 min",
  },
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="font-quicksand pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">Writing & Reflections</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Essays on craft, process, and the art of storytelling.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.05}>
                <BlogPostCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
