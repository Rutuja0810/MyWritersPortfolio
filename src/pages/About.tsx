import QuoteBlock from "@src/components/QuoteBlock";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";
import authorPhoto from "@assets/generated_images/Author_portrait_photo_6ec25566.png";
import workspacePhoto from "@assets/generated_images/Writer_workspace_photo_92e86317.png";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 font-quicksand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <ScrollReveal className="md:col-span-2">
            <div className="aspect-[3/4] relative overflow-hidden rounded-md sticky top-24">
              <img
                src={authorPhoto}
                alt="Night Phlox"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="md:col-span-3 prose prose-lg max-w-none">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">About Elena</h1>
            
            <p className="text-xl leading-relaxed mb-8">
              Night Phlox is an award-winning author whose work transcends genre boundaries, weaving together elements of fantasy, mystery, and literary fiction to create stories that resonate with emotional truth.
            </p>

            <h2 className="text-3xl font-display font-bold mt-12 mb-4">The Journey</h2>
            <p className="leading-relaxed mb-6">
              Born in a small coastal town, Elena grew up surrounded by fog-shrouded mornings and stories whispered by the sea. These early influences would later permeate her writing, creating atmospheres that are as much character as setting.
            </p>
            <p className="leading-relaxed mb-6">
              After studying literature at university, Elena spent years honing her craft while working as a librarian—a profession that deepened her understanding of storytelling's power to illuminate the human condition. Her debut novel, published in 2019, immediately garnered critical acclaim for its intricate plotting and emotional depth.
            </p>

            <h2 className="text-3xl font-display font-bold mt-12 mb-4">Writing Philosophy</h2>
            <p className="leading-relaxed mb-6">
              Elena believes that the best stories are those that operate on multiple levels—entertaining readers while also challenging them to confront uncomfortable truths about themselves and the world. Her work is characterized by:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Complex, morally ambiguous characters who feel achingly real</li>
              <li>Intricate world-building grounded in emotional authenticity</li>
              <li>Plots that keep readers guessing while exploring deeper themes</li>
              <li>Prose that balances beauty with precision</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mt-12 mb-4">Recognition</h2>
            <p className="leading-relaxed mb-6">
              Elena's novels have been recognized with numerous awards and have been translated into twelve languages. She has been featured in major literary publications and is a sought-after speaker at writing conferences worldwide.
            </p>
          </ScrollReveal>
        </div>

        <QuoteBlock
          quote="I write to discover what I didn't know I knew—to excavate the truths that hide in the shadowy corners of human experience."
        />

        <div className="mt-16">
          <div className="aspect-[4/3] relative overflow-hidden rounded-md mb-6">
            <img
              src={workspacePhoto}
              alt="Elena's writing space"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Elena's writing space, where stories come to life
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Influences</h3>
            <p className="leading-relaxed text-muted-foreground">
              Margaret Atwood, Ursula K. Le Guin, Tana French, Donna Tartt, Gabriel García Márquez, and the Gothic tradition
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">When Not Writing</h3>
            <p className="leading-relaxed text-muted-foreground">
              Elena can be found exploring coastal trails, collecting vintage books, practicing archery, or losing herself in obscure folklore from around the world.
            </p>
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
