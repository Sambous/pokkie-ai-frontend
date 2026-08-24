import { CallForm } from "./CallForm";

export function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-rose/40 via-ink-soft to-ink" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-champagne/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-rose-bright/20 blur-[80px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
                Ready to hear
                <span className="block text-gradient">Pokkie?</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-blush/90">
                One call. Your number. Hear how she books for a business like
                yours.
              </p>
            </div>
            <CallForm id="get-a-call-footer" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl font-bold text-cream">
            Pokkie<span className="text-rose-bright">.</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            AI receptionist for restaurants, beauty & small businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-muted">
          <a href="mailto:hello@pokkie.ai" className="transition hover:text-cream">
            hello@pokkie.ai
          </a>
          <a href="#" className="transition hover:text-cream">
            Privacy
          </a>
          <a href="#" className="transition hover:text-cream">
            Terms
          </a>
          <span>© {new Date().getFullYear()} Pokkie</span>
        </div>
      </div>
    </footer>
  );
}
