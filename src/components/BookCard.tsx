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
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-book-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="grid md:grid-cols-5 gap-6 p-6">
        <div className="md:col-span-2">
          <div className="aspect-[2/3] relative overflow-hidden rounded-md">
            <img
              src={cover}
              alt={`${title} cover`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="md:col-span-3 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2" data-testid={`text-book-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </h3>
              <div className="flex gap-2 items-center">
                <Badge variant="secondary" data-testid={`badge-genre-${genre.toLowerCase()}`}>
                  {genre}
                </Badge>
                <span className="text-sm text-muted-foreground">{year}</span>
              </div>
            </div>
          </div>
          
          <p className="text-base leading-relaxed mb-6 flex-1" data-testid="text-excerpt">
            {excerpt}
          </p>
          
          {purchaseLink && (
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(purchaseLink, '_blank')}
                data-testid="button-purchase"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Purchase
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
