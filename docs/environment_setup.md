# Environment Setup

## Required Environment Variables

Create a `.env` file in the project root with the following variables.

### Core Application
```
NEXT_PUBLIC_APP_URL=https://your-app.replit.app
NEXT_PUBLIC_APP_NAME=AgentFlow
```

### Supabase
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_DB_URL=postgres://postgres:password@db.your-project.supabase.co:5432/postgres
```

### AI Providers
```
OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...
LANGGRAPH_API_KEY=your-langgraph-api-key
```

### Trigger.dev
```
TRIGGER_API_KEY=your-triggerdotdev-api-key
TRIGGER_API_URL=https://api.trigger.dev
NEXT_PUBLIC_TRIGGER_PUBLIC_KEY=your-trigger-public-key
```

### Email Providers
```
RESEND_API_KEY=re_...
AGENTMAIL_API_KEY=your-agentmail-api-key
AGENTMAIL_API_URL=https://api.agentmail.ai/v1
BREVO_API_KEY=your-brevo-api-key
```

### Notifications
```
ONESIGNAL_APP_ID=your-onesignal-app-id
ONESIGNAL_REST_API_KEY=your-onesignal-rest-api-key
KNOCK_API_KEY=your-knock-api-key
```

### Blockchain - Monad
```
MONAD_RPC_URL=https://rpc.monad.xyz
MONAD_CHAIN_ID=10143
MONAD_CHAIN_NAME=monad-testnet
MONAD_NATIVE_CURRENCY_NAME=MON
MONAD_NATIVE_CURRENCY_SYMBOL=MON
MONAD_EXPLORER_URL=https://monad.xyz
MONAD_PRIVATE_KEY=0x...
NEXT_PUBLIC_MONAD_ADDRESS=0x...
```

### Security
```
CRON_SECRET=your-random-cron-secret
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
```

## Setup Instructions

1. Clone the repository
2. Run `bun install` to install dependencies
3. Copy `.env.example` to `.env.local` and fill in values
4. Run Supabase migrations: `supabase db push`
5. Start development server: `bun dev`

## Portability

All dependencies are declared in `package.json`. The `bun.lock` file ensures reproducible installs. Supabase schema migrations are in `supabase/migrations/` for portable database setup.
