import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Link href="/" className="font-display font-semibold text-foreground">
            Propentro<span className="text-primary">.</span>
          </Link>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/#roadmap" className="hover:text-foreground transition-colors">
              Roadmap
            </Link>
            <a
              href="https://sufyant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              sufyant.com
            </a>
          </div>
          <span>{"© 2026 Propentro"}</span>
        </div>
      </div>
    </footer>
  );
}
