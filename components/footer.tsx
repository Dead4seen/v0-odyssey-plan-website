export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Odyssey</p>
            <p className="text-xs text-muted-foreground/60 mt-1">A Digital Journey Map</p>
          </div>

          <div className="flex items-center gap-8 text-xs text-muted-foreground">
            <span>INTJ-A</span>
            <span className="text-primary">•</span>
            <span>8w7 / 9w1</span>
            <span className="text-primary">•</span>
            <span>The Architect</span>
          </div>

          <p className="text-xs text-muted-foreground/60">© 2025 — The journey continues</p>
        </div>
      </div>
    </footer>
  )
}
