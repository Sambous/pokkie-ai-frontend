import { CallForm } from "./CallForm";

export function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-rose/30 via-ink-soft to-ink px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-champagne/20 blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl">
                Ready to hear Pokkie?
              </h2>
              <p className="mt-4 max-w-md text-blush-deep/90">
                One call. Your number. Hear how she books for a beauty brand like
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
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-bold text-cream">
            Pokkie<span className="text-rose-bright">.</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            AI receptionist for beauty, restaurants & small businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-muted">
          <a href="mailto:hello@pokkie.ai" className="hover:text-cream">
            hello@pokkie.ai
          </a>
          <a href="#" className="hover:text-cream">
            Privacy
          </a>
          <a href="#" className="hover:text-cream">
            Terms
          </a>
          <span>© {new Date().getFullYear()} Pokkie</span>
        </div>
      </div>
    </footer>
  );
}
