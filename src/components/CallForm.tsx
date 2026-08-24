"use client";

import { useState, type FormEvent } from "react";

type CallFormProps = {
  id?: string;
  compact?: boolean;
};

export function CallForm({ id = "get-a-call", compact = false }: CallFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/call-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          phone: data.get("phone"),
        }),
      });

      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage("Got it — Pokkie will call you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`gloss-panel rounded-3xl ${compact ? "p-5" : "p-6 sm:p-8"}`}
    >
      <div className="mb-5">
        <p className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
          Get a call from Pokkie
        </p>
        <p className="mt-1.5 text-sm text-blush-deep/80">
          Hear how she sounds with your business — no commitment.
        </p>
      </div>

      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Your name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder="Alex"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Business
          </span>
          <input
            name="business"
            required
            autoComplete="organization"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder="Studio Luxe"
          />
        </label>
        <label className={`block ${compact ? "" : "sm:col-span-2"}`}>
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder="+31 6 12 34 56 78"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-5 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Get a call from Pokkie"}
      </button>

      {message ? (
        <p
          className={`mt-3 text-center text-sm ${
            status === "success" ? "text-champagne" : "text-rose-bright"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
