# Sustiqon OS

**A sustainability-monitoring dashboard for a joinery (woodworking) workshop.**

Built at the **Hållbarhetskväll** ("Sustainability Evening") hackathon. Sustiqon OS gives a
small manufacturing workshop a single "operating system" view of its environmental impact —
turning raw shop-floor sensor data into impact metrics, goals, and team gamification.

> 📄 Prefer a one-page summary? See **[OVERVIEW.pdf](OVERVIEW.pdf)**.

---

## What it does

Sustiqon OS pulls a joinery workshop's sustainability signals into one dashboard so a team can
see its footprint and act on it:

- **Impact stats** — trees saved, paint waste reduced, materials recycled, energy saved, each
  with month-over-month change.
- **Connected IoT sensors** — live readings for paint usage, wood dust (PM2.5), humidity,
  noise level, and energy draw.
- **Air quality** — workshop air-quality monitoring.
- **Team gamification** — streaks, milestone progress, and earnable badges (Eco Starter,
  Waste Warrior, Goal Crusher…) to drive behavior change.
- **Goals** — tracked targets like reducing VOC emissions, zero-paint-waste days, and 100%
  renewable energy, each with progress and deadline.
- **Inventory** — materials inventory table.
- **Quick actions** & **feedback** — fast operations and a feedback channel.
- **Digital Product Passport (DPP)** — a dedicated section, aligned with EU DPP requirements
  for product traceability and sustainability data.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite 5, TypeScript |
| Styling | Tailwind CSS, custom earth-tone theme |
| UI components | shadcn/ui (Radix UI primitives) |
| Data viz | Recharts |
| Routing / state | React Router, TanStack Query |
| Testing | Vitest, Testing Library, Playwright |
| Origin | Prototyped on Lovable.dev |

## Getting started

```bash
bun install        # or: npm install
bun run dev        # start the dev server (Vite)
bun run build      # production build
bun run test       # run the Vitest suite
```

Then open the local URL Vite prints (default http://localhost:5173).

## Project structure

```
src/
├── pages/                  # Index (dashboard) + NotFound
├── components/
│   ├── dashboard/          # AirQuality, IoTSensors, Gamification, Goals,
│   │                       #   ImpactStats, Inventory, QuickActions, Feedback…
│   └── ui/                 # shadcn/ui primitives
├── hooks/                  # use-mobile, use-toast
└── lib/                    # utilities
```

## Status

A hackathon prototype: the dashboard UI is fully built and the data shown is representative
sample data, demonstrating the intended product experience.

---

*Hackathon project • prototyped on Lovable.dev • by [christopherwang0129SE](https://github.com/christopherwang0129SE)*
