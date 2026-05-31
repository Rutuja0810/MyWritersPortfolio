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
    <Link
      to={`/blog/${id}`}
      data-testid={`link-blog-${id}`}
      className="block h-full"
    >
      <Card className="group h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <Badge variant="secondary" data-testid="badge-category">
            {category}
          </Badge>

          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
        </div>

        <h3
          className="text-2xl font-display font-bold leading-tight mb-4 transition-colors group-hover:text-primary"
          data-testid="text-post-title"
        >
          {title}
        </h3>

        <p
          className="text-muted-foreground leading-relaxed flex-1 mb-6"
          data-testid="text-excerpt"
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-muted-foreground">
            {readTime} read
          </span>

          <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read Article →
          </span>
        </div>
      </Card>
    </Link>
  );
}