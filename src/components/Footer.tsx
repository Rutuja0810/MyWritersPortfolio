import { Link } from "react-router-dom";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Mail, Instagram, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@src/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    //todo: remove mock functionality
    console.log("Newsletter subscription:", email);

    toast({
      title: "Subscribed!",
      description:
        "You'll receive updates about new releases and writing.",
    });

    setEmail("");
  };

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm font-quicksand mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold mb-4">
              Night Phlox
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Stories woven from mystery, imagination, memory,
              and the hidden connections that shape our lives.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold mb-5">
              Explore
            </h3>

            <nav className="flex flex-col gap-3">
              <Link
                to="/works"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-works"
              >
                Works
              </Link>

              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-about"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-blog"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-bold mb-4">
              Newsletter
            </h3>

            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Receive updates on new releases, writing projects,
              and occasional reflections from behind the page.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />

              <Button
                type="submit"
                data-testid="button-subscribe"
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Instagram clicked")}
                data-testid="button-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Goodreads clicked")}
                data-testid="button-goodreads"
              >
                <BookOpen className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Night Phlox. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground italic">
            Every story begins with a single voice.
          </p>
        </div>
      </div>
    </footer>
  );
}