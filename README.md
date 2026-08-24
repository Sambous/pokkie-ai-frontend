# Pokkie.ai

Marketing site for **Pokkie** — AI receptionist for beauty, restaurants, and small businesses.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion

## Develop

```bash
npm install
npm run dev
```

## Call requests

`POST /api/call-request` accepts `{ name, business, phone }`.

Optional env:

- `RESEND_API_KEY`
- `NOTIFY_EMAIL`
- `RESEND_FROM`

Without those, submissions are logged server-side.

## Deploy

Connected to Vercel. Domain: [pokkie.ai](https://pokkie.ai).
