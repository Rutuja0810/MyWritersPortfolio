import PageTransition from "@src/components/PageTransition";
import ScrollReveal from "@src/components/ScrollReveal";
import QuoteBlock from "@src/components/QuoteBlock";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function EveryPersonCarriesAStory() {
  return (
    <PageTransition>
      <article className="font-quicksand pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <header className="mb-16">
              <Badge variant="secondary" className="mb-6">
                Author Journal
              </Badge>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6">
                Every Person Carries a Story
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Why I Write Fantasy, Mystery, and Literary Fiction
              </p>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nov 1, 2024
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  8 min read
                </div>
              </div>
            </header>
          </ScrollReveal>

          {/* Opening */}
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-display font-bold mb-8">
                Every Person Carries a Story
              </h2>

              <p className="text-2xl text-muted-foreground leading-relaxed mb-10">
                When people think about stories, they often think about
                extraordinary events.
              </p>

              <p>A great battle.</p>
              <p>A hidden kingdom.</p>
              <p>A mystery waiting to be solved.</p>

              <p>
                Yet what has always fascinated me most is not the event itself,
                but the people living through it.
              </p>

              <p>
                <strong>Every person carries a story.</strong>
              </p>

              <p>
                Each of us moves through life carrying memories, fears, dreams,
                regrets, hopes, and countless moments that remain unseen by
                others. We meet people every day without knowing the journeys
                that shaped them or the silent battles they fight within
                themselves.
              </p>

              <p>
                That simple thought became one of the reasons I began writing.
              </p>

              <p>I wanted to explore those unseen worlds.</p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <div className="my-20">
              <QuoteBlock
                quote="Every soul carries a story.\nSome are spoken.\nOthers wait quietly to be discovered."
                attribution="Night Phlox"
              />
            </div>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                The Stories Hidden Beneath the Surface
              </h2>

              <p>Many stories begin with a question.</p>

              <p>For me, stories often begin with a feeling.</p>

              <p>Sometimes it is a moment of loss.</p>

              <p>Sometimes it is wonder.</p>

              <p>
                Sometimes it is the realization that two people can experience
                the same event and carry entirely different truths away from it.
              </p>

              <p>From those feelings, characters begin to appear.</p>

              <p>
                They arrive carrying their own histories, beliefs, wounds, and
                desires. As they grow, they reveal connections that were never
                visible at first glance.
              </p>

              <p>
                Lives become intertwined. Choices create consequences. Small
                moments become turning points.
              </p>

              <p>Gradually, a world begins to form around them.</p>
            </div>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Why Fantasy and Mystery?
              </h2>

              <p>
                Fantasy and mystery have always felt like natural companions.
              </p>

              <p>
                Fantasy allows us to explore possibilities beyond ordinary
                life. It creates space for imagination, symbolism, and wonder.
              </p>

              <p>
                Mystery reminds us that there is always more beneath the
                surface than what we first see.
              </p>

              <p>
                Together, they allow me to explore questions that exist both
                inside and outside of fiction:
              </p>

              <ul>
                <li>How well do we truly know one another?</li>
                <li>How does the past shape the present?</li>
                <li>Can people change?</li>
                <li>What happens when hidden truths finally emerge?</li>
                <li>
                  How do love, loss, and memory continue to influence us long
                  after a moment has passed?
                </li>
              </ul>

              <p>These questions often become the foundation of my stories.</p>
            </div>
          </ScrollReveal>

          {/* Section 4 */}
          <ScrollReveal delay={0.5}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Nature as a Storyteller
              </h2>

              <p>Another constant source of inspiration for me is nature.</p>

              <p>A forest remembers countless seasons.</p>

              <p>
                A river continues its journey regardless of who stands upon its
                banks.
              </p>

              <p>
                A single leaf may seem insignificant, yet it carries the story
                of an entire tree.
              </p>

              <p>
                Nature often speaks in symbols, and those symbols frequently
                find their way into my writing.
              </p>

              <p>
                Ancient forests, moonlit paths, quiet lakes, changing seasons,
                and forgotten places are more than settings. They become part
                of the story itself.
              </p>

              <p>Sometimes they reflect a character's emotions.</p>

              <p>Sometimes they reveal truths that words cannot.</p>
            </div>
          </ScrollReveal>

          {/* Section 5 */}
          <ScrollReveal delay={0.6}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                The Beginning of a Publishing Journey
              </h2>

              <p>
                My first published work, <em>The Secret of Red Leaf</em>,
                represents the beginning of a journey that has been years in
                the making.
              </p>

              <p>It is not the first story I have written.</p>

              <p>Nor will it be the last.</p>

              <p>
                It is simply the first story I have chosen to share with the
                world.
              </p>

              <p>
                Like many writers, I have spent countless hours building
                worlds, exploring characters, and searching for the right words
                to express emotions that are often difficult to describe.
              </p>

              <p>Publishing is a new chapter in that journey.</p>

              <p>One that I am excited to begin.</p>
            </div>
          </ScrollReveal>

          {/* Closing */}
          <ScrollReveal delay={0.7}>
            <div className="mt-20 border-t pt-12">
              <h2 className="text-3xl font-display font-bold mb-6">
                Looking Ahead
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                As I continue writing, I hope to create stories that invite
                readers to wonder, question, feel, and reflect.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Stories that remain with them long after the final page.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Stories that remind us that every life contains mysteries worth
                exploring.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Because in the end, every person carries a story.
              </p>

              <p className="text-lg leading-relaxed">
                And perhaps the most meaningful stories are the ones hidden
                where few people think to look.
              </p>

              <div className="mt-12">
                <p className="font-display text-2xl font-bold">RJ</p>

                <p className="text-muted-foreground italic">
                  Author of Fantasy, Mystery & Literary Fiction
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Back Button */}
          <ScrollReveal delay={0.8}>
            <div className="mt-16">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </PageTransition>
  );
}