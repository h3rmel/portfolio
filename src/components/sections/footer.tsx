import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative p-6 md:px-12 lg:px-24 bg-background border-t lg:border-x">
      <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>
          © {year} {siteConfig.name}
        </span>
        <div className="flex gap-6">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest transition-colors duration-100 hover:text-foreground hover:underline"
          >
            GitHub
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest transition-colors duration-100 hover:text-foreground hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
