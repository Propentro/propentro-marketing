# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## System Context

This repo is part of the **Propentro** multi-repo ecosystem. See `../CLAUDE.md` for system-wide context.

This is the **public marketing website** — it has no API integration, no shared types with other repos, and no auth. Changes here do not affect the app, API, or database.

## What This Repo Is

Marketing and landing page site for Propentro. Static/SSR pages, no dynamic backend.

**Stack:** Next.js 16 | React 19 | TypeScript | Tailwind CSS 3 | Radix UI (shadcn/ui) | pnpm

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
```

## Project Structure

```
app/              ← Next.js App Router pages and layouts
components/       ← Reusable UI components (shadcn/ui based)
hooks/            ← Custom React hooks
lib/              ← Utility functions
styles/           ← Global CSS
public/           ← Static assets
```

## Conventions

- UI components use shadcn/ui patterns (Radix primitives + Tailwind + `cn()` utility)
- Icons: `lucide-react`
- Class merging: `clsx` + `tailwind-merge` via `cn()` from `lib/utils`
