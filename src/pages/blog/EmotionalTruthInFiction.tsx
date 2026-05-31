import PageTransition from "@src/components/PageTransition";
import ScrollReveal from "@src/components/ScrollReveal";
import QuoteBlock from "@src/components/QuoteBlock";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmotionalTruthInFiction() {
  return (
    <PageTransition>
      <article className="font-quicksand pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <header className="mb-16">
              <Badge variant="secondary" className="mb-6">
                Process
              </Badge>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-8">
                Finding Emotional Truth in Fiction
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sep 28, 2024
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  7 min read
                </div>
              </div>
            </header>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl leading-relaxed text-muted-foreground mb-10">
                Readers rarely remember every plot twist or line of dialogue.
                What stays with them is how a story made them feel.
              </p>

              <p>
                Emotional truth is one of the most elusive qualities in
                storytelling. It cannot be measured by word count, plotting
                techniques, or world-building complexity. Yet it is often the
                difference between a story that is merely read and one that is
                remembered.
              </p>

              <p>
                When readers describe a novel as powerful, moving, or deeply
                personal, they are often responding to emotional truth rather
                than factual accuracy. They recognize something authentic in
                the characters' experiences—even when those experiences occur
                in entirely fictional worlds.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <div className="my-20">
              <QuoteBlock
                quote="Readers forgive impossible worlds far more easily than they forgive false emotions."
                attribution="Night Phlox"
              />
            </div>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">
                Authenticity Over Drama
              </h2>

              <p>
                One common misconception is that emotional impact requires
                emotional intensity. Writers sometimes attempt to create
                powerful scenes by increasing tragedy, conflict, or suffering.
                Yet readers are often moved more deeply by quiet moments of
                honesty than by dramatic spectacle.
              </p>

              <p>
                A character staring at an empty chair after losing someone they
                love may evoke more emotion than pages of dramatic dialogue.
                The difference lies not in the scale of the event but in the
                authenticity of the response.
              </p>

              <h2 className="text-3xl font-display font-bold mt-12 mb-6">
                Understanding Character Emotion
              </h2>

              <p>
                Emotional truth begins with understanding why a character feels
                what they feel. Every emotional reaction emerges from a
                combination of memory, desire, fear, belief, and experience.
              </p>

              <p>
                Before writing a scene, I often ask myself simple questions:
              </p>

              <ul>
                <li>What does this character want right now?</li>
                <li>What are they afraid of losing?</li>
                <li>What wound influences their decisions?</li>
                <li>What truth are they avoiding?</li>
              </ul>

              <p>
                The answers frequently reveal deeper emotional layers than the
                original scene outline ever contained.
              </p>

              <h2 className="text-3xl font-display font-bold mt-12 mb-6">
                The Universal Beneath the Specific
              </h2>

              <p>
                Fiction often deals with extraordinary circumstances: magical
                kingdoms, impossible mysteries, distant futures, and imagined
                worlds. Yet readers connect through emotions they already know.
              </p>

              <p>
                A queen losing her throne may remind readers of losing their
                sense of identity. A detective pursuing a hidden truth may
                reflect the universal desire for understanding. A hero's fear
                of failure mirrors countless personal struggles.
              </p>

              <p>
                The details may be fictional, but the emotions remain human.
              </p>
            </div>
          </ScrollReveal>

          {/* Closing Note */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 border-t pt-12">
              <h3 className="text-2xl font-display font-bold mb-4">
                Final Thought
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Emotional truth is not about making readers cry. It is about
                helping them recognize something real within themselves.
                Whether through joy, grief, wonder, hope, or fear, the most
                memorable stories remind us that we are not alone in our
                experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* Back */}
          <ScrollReveal delay={0.5}>
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