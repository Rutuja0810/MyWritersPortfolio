import { Link, useLocation } from "react-router-dom";
import { Button } from "@src/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isHomePage = pathname === "/";

  const navTextColor = isHomePage
    ? "text-white"
    : "text-foreground";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md font-quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="link-home"
            className={`font-display text-3xl font-bold tracking-[0.08em] transition-colors ${navTextColor}`}
          >
            Night Phlox
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link
                    to={link.href}
                    data-testid={`link-${link.label.toLowerCase()}`}
                    className={`
                      text-base transition-all
                      ${
                        isActive
                          ? `${navTextColor} font-semibold`
                          : `${navTextColor} opacity-75 hover:opacity-100`
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </Button>
              );
            })}

            {/* Uncomment if needed */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              className={navTextColor}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                    className={`
                      py-4 text-lg transition-colors
                      ${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}