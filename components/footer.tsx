import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 text-sm text-muted-foreground flex-wrap">
          <Link href="/" className="font-display font-semibold text-foreground">
            Propentro<span className="text-primary">.</span>
          </Link>
          <span className="hidden md:inline text-border">{"/"}</span>
          <span>Made in Ireland</span>
          <span className="hidden md:inline text-border">{"/"}</span>
          <Link href="/features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <span className="hidden md:inline text-border">{"/"}</span>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <span className="hidden md:inline text-border">{"/"}</span>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <span className="hidden md:inline text-border">{"/"}</span>
          <a href="mailto:hello@propentro.com" className="hover:text-foreground transition-colors">hello@propentro.com</a>
          <span className="hidden md:inline text-border">{"/"}</span>
          <span>{"© 2026 Propentro"}</span>
        </div>
      </div>
    </footer>
  );
}
