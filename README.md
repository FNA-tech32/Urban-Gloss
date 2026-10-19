# Urban Gloss

Colour and finish atelier website for **Urban Gloss**, 18 Wicklow Street, Dublin 2. The app is a Next.js marketing site with online booking, phone OTP sign-in, a client dashboard, and a salon admin console.

## Studio

- **Brand:** Urban Gloss
- **Tagline:** Colour & Finish Atelier
- **Address:** 18 Wicklow Street, Dublin 2, D02 YH68, Ireland
- **Phone:** (01) 555 0142
- **Email:** hello@urbangloss.ie
- **Hours:** Tuesday–Saturday, with a late Thursday. Sunday and Monday are closed.

## What the app does

- **Home (`/`)** — Hero, services, stylist profiles, transformation gallery, reviews, hours, and a map for Wicklow Street.
- **Booking (`/booking`)** — Multi-step reservation with service, stylist, date, and time. Forms use React Hook Form and Zod.
- **Login (`/login`)** — Phone number plus a one-time code. `/signup` redirects here.
- **Client dashboard (`/dashboard`)** — Appointment list and messages with the studio.
- **Admin (`/admin`)** — Revenue charts, appointment status, services, and client records at `/admin/clients/[id]`.

### Demo sign-in

On `/login`, use **Instant One-Click Demo**, then continue with the mobile number and verify with code `123456`.

- **Client Demo** — Elena Rostova, `+353 87 123 4567` — opens `/dashboard`
- **Salon Director** — Agnes Burke, `+353 87 000 0001` — opens `/admin`

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4, Radix UI |
| Language | TypeScript 5 |
| Motion | Framer Motion |
| Forms | React Hook Form, Zod |
| Charts | Recharts |
| Theme | next-themes |

## Getting started

Requires Node.js 18.18 or later. This repo uses pnpm.

```bash
cd frontend
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
cd frontend
pnpm build
```

## Project layout

```text
Urban-Gloss/
├── frontend/
│   ├── app/                  # Routes: home, booking, login, dashboard, admin
│   ├── components/           # Navbar, footer, hero, services, team, gallery, location
│   ├── lib/                  # Types, demo data, validation, SEO helpers
│   └── public/               # Images and static files
└── README.md
```

## License

Designed for Urban Gloss, Dublin. All rights reserved.
