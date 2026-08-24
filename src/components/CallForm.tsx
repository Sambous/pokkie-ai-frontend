"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

type CallFormProps = {
  id?: string;
  compact?: boolean;
};

export function CallForm({ id = "get-a-call", compact = false }: CallFormProps) {
  const { t } = useI18n();
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
        setMessage(json.error ?? t.form.errorGeneric);
        return;
      }

      setStatus("success");
      setMessage(t.form.success);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(t.form.errorNetwork);
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
          {t.form.title}
        </p>
        <p className="mt-1.5 text-sm text-blush-deep/80">{t.form.subtitle}</p>
      </div>

      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            {t.form.name}
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder={t.form.namePlaceholder}
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            {t.form.business}
          </span>
          <input
            name="business"
            required
            autoComplete="organization"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder={t.form.businessPlaceholder}
          />
        </label>
        <label className={`block ${compact ? "" : "sm:col-span-2"}`}>
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            {t.form.phone}
          </span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-rose/50 focus:ring-2 focus:ring-rose/30"
            placeholder={t.form.phonePlaceholder}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-5 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === "loading" ? t.form.sending : t.form.submit}
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
