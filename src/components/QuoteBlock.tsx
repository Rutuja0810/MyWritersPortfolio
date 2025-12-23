interface QuoteBlockProps {
  quote: string;
  attribution?: string;
}

export default function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <blockquote className="relative py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-6xl text-primary/20 mb-4 font-display">"</div>
        <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-6" data-testid="text-quote">
          {quote}
        </p>
        {attribution && (
          <cite className="text-base text-muted-foreground not-italic" data-testid="text-attribution">
            — {attribution}
          </cite>
        )}
      </div>
    </blockquote>
  );
}
