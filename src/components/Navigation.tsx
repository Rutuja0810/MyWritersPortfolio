import { Link, useLocation } from "react-router-dom";
import { Button } from "@src/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  const navTextColor = pathname === "/" ? "text-white" : "text-black";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white font-quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Site Title */}
          <Link
            to="/"
            className={`font-display text-2xl md:text-3xl font-bold ${navTextColor}`}
          >
            Night Phlox
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={pathname === link.href ? "secondary" : "ghost"}
                size="default"
                asChild
              >
                <Link
                  to={link.href}
                  data-testid={`link-${link.label.toLowerCase()}`}

                  className={`text-lg ${navTextColor}`}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
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
    </nav>
  );
}
