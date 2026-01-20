import { Link, NavLink, Outlet } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="inline-grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
              <Heart className="size-4" />
            </span>
            <span className="font-display text-xl tracking-tight">
              Utsab ♥ Tua
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavItem to="/home" label="Home" />
            <NavItem to="/memories" label="Memories" />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-10">
        <div className="container flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground">
            Made with love by Utsab for Tua
          </p>
          <p>
            © {new Date().getFullYear()} Utsab ♥ Tua. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground",
        )
      }
      end
    >
      {label}
    </NavLink>
  );
}
