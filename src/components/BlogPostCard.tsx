import { Card } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <a data-testid={`link-blog-${id}`}>
        <Card className="p-6 h-full hover-elevate active-elevate-2 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" data-testid="badge-category">
              {category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-display font-bold mb-3" data-testid="text-post-title">
            {title}
          </h3>
          
          <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1" data-testid="text-excerpt">
            {excerpt}
          </p>
          
          <div className="text-xs text-muted-foreground">
            {readTime} read
          </div>
        </Card>
      </a>
    </Link>
  );
}
