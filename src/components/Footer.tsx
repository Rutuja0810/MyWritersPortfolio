import { Link } from "react-router-dom";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Mail, Twitter, Instagram, BookOpen } from "lucide-react";
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
      description: "You'll receive updates about new releases and writing.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/works">
                <a data-testid="link-footer-works">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    Works
                  </Button>
                </a>
              </Link>
              <Link href="/about">
                <a data-testid="link-footer-about">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    About
                  </Button>
                </a>
              </Link>
              <Link href="/blog">
                <a data-testid="link-footer-blog">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    Blog
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a data-testid="link-footer-contact">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    Contact
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
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

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates about new releases and exclusive writing insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="icon" data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Night Phlox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
