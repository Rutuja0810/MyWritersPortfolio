import { Card } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  cover: string;
  genre: string;
  year: number;
  excerpt: string;
  purchaseLink?: string;
}

export default function BookCard({
  title,
  cover,
  genre,
  year,
  excerpt,
  purchaseLink,
}: BookCardProps) {
  return (
    <Card
      className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-testid={`card-book-${title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div className="flex flex-col h-full">
        {/* Cover */}
        <div className="relative overflow-hidden">
          <div className="aspect-[2/3]">
            <img
              src={cover}
              alt={`${title} cover`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              data-testid={`badge-genre-${genre.toLowerCase()}`}
            >
              {genre}
            </Badge>

            <span className="text-sm text-muted-foreground">
              {year}
            </span>
          </div>

          <h3
            className="text-2xl font-display font-bold leading-tight mb-4"
            data-testid={`text-book-title-${title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {title}
          </h3>

          <p
            className="text-muted-foreground leading-relaxed flex-1 mb-6"
            data-testid="text-excerpt"
          >
            {excerpt}
          </p>

          {purchaseLink && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(purchaseLink, "_blank")}
              data-testid="button-purchase"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Purchase Book
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}