# AgentFlow - Mobile AI Platform Setup Guide

## Quick Start

### Prerequisites
- Node.js 18+ (or Bun)
- Supabase account
- API keys for tested services

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Apply database schema
bun run db:push

# Start development server
bun run dev
```

### Mobile Development

The app is optimized for mobile-first UI/UX with:
- Touch-optimized components (TouchButton)
- Safe area handling for notched devices
- Bottom navigation bar
- Pull-to-refresh
- Bottom sheets
- Swipeable cards

### Architecture

```
src/
├── app/
│   ├── (mobile)/          # Mobile route group
│   │   ├── dashboard/
│   │   ├── agents/
│   │   ├── workflows/
│   │   ├── notifications/
│   │   └── profile/
│   ├── api/
│   │   ├── agents/
│   │   ├── workflows/
│   │   ├── emails/
│   │   ├── notifications/
│   │   └── blockchain/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── mobile/
│       ├── BottomNav.tsx
│       ├── TouchButton.tsx
│       ├── Card.tsx
│       ├── PullToRefresh.tsx
│       ├── BottomSheet.tsx
│       └── SafeAreaWrapper.tsx
├── lib/
│   ├── supabase.ts
│   ├── constants.ts
│   └── integrations/
│       ├── langgraph.ts
│       ├── crewai.ts
│       ├── triggerdev.ts
│       ├── resend.ts
│       ├── agentmail.ts
│       ├── brevo.ts
│       ├── onesignal.ts
│       ├── knock.ts
│       └── monad.ts
└── demos/
    └── UseLayoutEffectDemo.tsx
```

### Key Integrations

| Category | Service | Package |
|----------|---------|---------|
| Frontend | Next.js 16 + React 19 | next, react |
| Backend | Supabase | @supabase/supabase-js |
| Agents | LangGraph + CrewAI | @langchain/core, langchain |
| Workflows | Trigger.dev | @trigger.dev/sdk |
| Email | Resend / AgentMail / Brevo | resend, agentmail, @brevo/sdk |
| Notifications | OneSignal / Knock | onesignal, knock |
| Blockchain | Monad | viem |

## Deploy on Replit

1. Import this repository into Replit
2. Add all environment variables in Replit Secrets
3. Run `bun install`
4. Start with `bun run dev`

The app will be available at your Replit domain with mobile-optimized UI.
