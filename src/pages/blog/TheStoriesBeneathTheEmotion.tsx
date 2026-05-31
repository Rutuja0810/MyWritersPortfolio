import PageTransition from "@src/components/PageTransition";
import ScrollReveal from "@src/components/ScrollReveal";
import QuoteBlock from "@src/components/QuoteBlock";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TheStoriesBeneathTheEmotion() {
  return (
    <PageTransition>
      <article className="font-quicksand pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <header className="mb-16">
              <Badge variant="secondary" className="mb-6">
                Writing Craft
              </Badge>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6">
                The Stories Beneath the Emotion
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Why I Write Emotion-Driven Fiction
              </p>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Oct 15, 2024
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  6 min read
                </div>
              </div>
            </header>
          </ScrollReveal>

          {/* Opening */}
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl leading-relaxed text-muted-foreground mb-10">
                When readers remember a story years after finishing it, they
                rarely remember every event.
              </p>

              <p>They remember how it made them feel.</p>

              <p>A moment of grief.</p>

              <p>A feeling of hope.</p>

              <p>The anxiety before a difficult choice.</p>

              <p>The warmth of a reunion.</p>

              <p>The ache of a goodbye.</p>

              <p>
                For me, emotion has always been the heart of storytelling.
              </p>

              <p>
                Long before I began creating worlds, mysteries, and fantastical
                journeys, I found myself drawn to the emotions hidden beneath
                them.
              </p>

              <p>
                The battles, adventures, and revelations matter, but what truly
                fascinates me is what those moments do to the people
                experiencing them.
              </p>

              <p>How does loss change someone?</p>

              <p>How does love endure hardship?</p>

              <p>How does guilt linger?</p>

              <p>How does hope survive when everything else seems lost?</p>

              <p>These questions often become the starting point of my stories.</p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <div className="my-20">
              <QuoteBlock
                quote="The moments that stay with us are rarely the loudest.\nThey are often the quiet emotions we carry long after everything else has passed."
                attribution="RJ"
              />
            </div>
          </ScrollReveal>

          {/* Section 1 */}
          <ScrollReveal delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Emotions We Struggle to Describe
              </h2>

              <p>Some emotions are easy to name.</p>

              <p>Happiness.</p>

              <p>Anger.</p>

              <p>Fear.</p>

              <p>Sadness.</p>

              <p>
                But many of the emotions we experience are far more
                complicated.
              </p>

              <p>The feeling of missing someone who is still alive.</p>

              <p>The guilt of hurting someone unintentionally.</p>

              <p>The fear of losing something precious.</p>

              <p>
                The loneliness of carrying a burden no one else can see.
              </p>

              <p>
                The strange mixture of pain and gratitude that sometimes
                accompanies memory.
              </p>

              <p>
                These emotions often exist beyond simple definitions. We feel
                them deeply, yet struggle to explain them.
              </p>

              <p>Writing allows me to explore those spaces.</p>

              <p>
                It allows me to give shape to emotions that often remain
                unspoken.
              </p>
            </div>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Characters Before Plot
              </h2>

              <p>When I begin writing, I rarely start with a plot.</p>

              <p>I begin with people.</p>

              <p>I want to understand who they are.</p>

              <p>What they fear.</p>

              <p>What they hide.</p>

              <p>What they regret.</p>

              <p>What they desire.</p>

              <p>
                The plot becomes meaningful because of the emotions attached
                to it.
              </p>

              <p>A journey matters because of the person taking it.</p>

              <p>
                A mystery matters because of the truth someone fears
                discovering.
              </p>

              <p>A sacrifice matters because of what it costs.</p>

              <p>
                Without emotional weight, events become little more than
                moments passing by.
              </p>

              <p>
                With emotional truth, those same moments can stay with a
                reader long after the story ends.
              </p>
            </div>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal delay={0.5}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Why Raw Emotions Matter
              </h2>

              <p>Real life is rarely simple.</p>

              <p>People are contradictory.</p>

              <p>They can be brave and afraid at the same time.</p>

              <p>Kind and flawed.</p>

              <p>Hopeful and broken.</p>

              <p>Strong and vulnerable.</p>

              <p>
                I believe stories become more powerful when they embrace that
                complexity.
              </p>

              <p>Raw emotions are not always comfortable.</p>

              <p>
                Sometimes they reveal parts of ourselves we would rather
                ignore.
              </p>

              <p>
                Yet those are often the moments that create the strongest
                connections between readers and characters.
              </p>

              <p>
                When readers see a piece of themselves within a character's
                struggle, the story becomes personal.
              </p>

              <p>And that connection is something I value deeply.</p>
            </div>
          </ScrollReveal>

          {/* Section 4 */}
          <ScrollReveal delay={0.6}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-16 mb-6">
                Fantasy, Mystery, and Human Emotion
              </h2>

              <p>
                Although I write fantasy and mystery, the emotional core
                remains the same.
              </p>

              <p>The setting may change.</p>

              <p>The world may be unfamiliar.</p>

              <p>The circumstances may be extraordinary.</p>

              <p>But the emotions remain human.</p>

              <p>A kingdom can fall.</p>

              <p>A secret can reshape lives.</p>

              <p>A mystery can alter the course of a story.</p>

              <p>
                Yet beneath every event is a person trying to understand
                themselves, others, and the world around them.
              </p>

              <p>That is where my attention always returns.</p>

              <p>To the heart beneath the spectacle.</p>
            </div>
          </ScrollReveal>

          {/* Closing */}
          <ScrollReveal delay={0.7}>
            <div className="mt-20 border-t pt-12">
              <h2 className="text-3xl font-display font-bold mb-6">
                The Stories I Hope to Tell
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                As a writer, I hope to create stories that allow readers to
                feel deeply.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Stories that encourage empathy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Stories that explore both light and darkness.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Stories that remind us that emotions are not weaknesses to
                overcome but experiences that connect us to one another.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Because every person carries emotions that deserve to be
                understood.
              </p>

              <p className="text-lg leading-relaxed">
                And every emotion carries a story waiting to be told.
              </p>

              <div className="mt-12">
                <p className="font-display text-2xl font-bold">RJ</p>

                <p className="text-muted-foreground italic">
                  Author of Fantasy, Mystery & Literary Fiction
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Back */}
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