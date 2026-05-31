import QuoteBlock from "@src/components/QuoteBlock";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";
import authorImage from "@assets/authorImage.png";
import workspacePhoto from "@assets/generated_images/Writer_workspace_photo_92e86317.png";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 font-quicksand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={authorImage}
                  alt="RJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
                About RJ
              </h1>

              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Writing under the pen name <strong>RJ</strong>, I create
                fantasy, mystery, and literary fiction that explores the
                connections between people, memory, destiny, and the unseen
                forces that shape their lives. My stories often weave together
                multiple perspectives, hidden truths, and emotionally driven
                journeys where every character carries a story of their own.
              </p>

              <QuoteBlock
                quote="Every person carries a story. 
                I write to explore the worlds hidden within them."
              />
            </ScrollReveal>
          </div>

          {/* Story Section */}
          <div className="mb-24">
            <ScrollReveal>
              <h2 className="text-4xl font-display font-bold mb-10">
                The Story Behind The Stories
              </h2>
            </ScrollReveal>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <ScrollReveal className="lg:col-span-3">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    My journey as a writer began with a simple fascination:
                    every person carries a world within them. Their dreams,
                    fears, memories, and choices create stories that are often
                    invisible to others. That fascination eventually grew into a
                    desire to create worlds where those hidden stories could be
                    explored through fantasy, mystery, and imagination.
                  </p>

                  <p>
                    Many of my stories begin with a single question, image,
                    emotion, or moment. From there, characters emerge,
                    relationships develop, and entire worlds gradually reveal
                    themselves. Rather than building stories around events
                    alone, I enjoy exploring how people change, heal, struggle,
                    and grow through those events.
                  </p>

                  <p>
                    My debut publication, <em>The Secret of Red Leaf</em>,
                    marks the first step in sharing those worlds with readers.
                    Inspired by mystery, emotion, and the enduring connections
                    between people, it represents both the beginning of my
                    publishing journey and a glimpse into the stories I hope to
                    tell in the years ahead.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:col-span-2">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={workspacePhoto}
                    alt="Writing space"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-muted-foreground text-center mt-3">
                  A quiet space where stories take shape
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Writing Philosophy */}
          <div className="mb-24">
            <ScrollReveal>
              <h2 className="text-4xl font-display font-bold mb-10">
                My Approach To Storytelling
              </h2>

              <p className="text-lg leading-relaxed max-w-3xl mb-12">
                For me, storytelling is not simply about telling readers what
                happens. It is about helping them experience what a character
                feels. I strive to create moments that invite readers to
                question, wonder, empathize, and reflect long after the final
                page.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {/* What I Write */}
              <ScrollReveal>
                <div className="h-full rounded-2xl border p-8 bg-card">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    What I Write
                  </h3>

                  <ul className="space-y-3">
                    <li>Fantasy rooted in emotion and wonder</li>
                    <li>
                      Mysteries built upon hidden truths and layered
                      perspectives
                    </li>
                    <li>
                      Character-driven journeys shaped by choice and
                      consequence
                    </li>
                    <li>
                      Stories where the past, present, and future intertwine
                    </li>
                    <li>
                      Worlds inspired by nature, symbolism, and imagination
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Influences */}
              <ScrollReveal delay={0.1}>
                <div className="h-full rounded-2xl border p-8 bg-card">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Influences
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    I draw inspiration from people, nature, time, and the
                    countless stories woven into everyday life. Every
                    individual experiences the world differently, carrying
                    emotions, memories, dreams, and struggles that belong
                    uniquely to them. Those unseen experiences often become the
                    foundation for the characters and worlds I create.
                  </p>
                </div>
              </ScrollReveal>

              {/* When Not Writing */}
              <ScrollReveal delay={0.2} className="md:col-span-2">
                <div className="rounded-2xl border p-8 bg-card">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    When Not Writing
                  </h3>

                  <p className="leading-relaxed text-muted-foreground max-w-3xl">
                    When I'm not writing, I enjoy exploring new ideas,
                    observing people, learning about different perspectives,
                    and developing the worlds, characters, and histories that
                    eventually find their way into my stories.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}