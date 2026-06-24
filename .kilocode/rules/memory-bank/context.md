# Project Context

## Current State
AgentFlow mobile AI platform upgraded from minimal Next.js starter to production-ready mobile-first application.

## Recently Completed
- [x] Mobile UI/UX upgrade with touch-optimized components
- [x] Created mobile pages: Dashboard, Agents, Workflows, Notifications, Profile
- [x] Added Supabase client and database schema
- [x] Integrated LangGraph + CrewAI for AI agents
- [x] Added Trigger.dev workflow orchestration
- [x] Added email provider integrations (Resend, AgentMail, Brevo)
- [x] Added notification integrations (OneSignal, Knock)
- [x] Added Monad blockchain smart contract support
- [x] Created API routes for all backend operations
- [x] Updated package.json with all dependencies
- [x] Created environment setup files (.env.local.example, docs/environment_setup.md)
- [x] Committed and pushed to GitHub

## Tech Stack (Mobile First)
- **Frontend**: Next.js 16 + React 19 + Tailwind CSS v4
- **Backend**: Supabase (Auth + PostgreSQL)
- **Agents**: LangGraph, CrewAI
- **Workflows**: Trigger.dev
- **Email**: Resend, AgentMail, Brevo
- **Notifications**: OneSignal, Knock
- **Blockchain**: Monad smart contracts (viem)
- **UI**: Mobile-optimized with Framer Motion, bottom navigation, touch buttons, pull-to-refresh, bottom sheets

## Recent Changes
- Upgraded from blank starter to full mobile platform
- All integrations added as library modules in src/lib/integrations/
- Supabase schema and migrations ready for db:push
- Environment variables documented in docs/environment_setup.md
- Architecture diagrams in Mermaid and PlantUML

## Upcoming Focus
- Mobile components are ready for feature expansion
- Supabase migrations need to be applied to a live project
- API keys need to be configured in .env.local
- Replit deployment ready when secrets are added
