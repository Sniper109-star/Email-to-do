# AgentFlow - Mobile AI Platform

A unified platform for AI agents, workflows, notifications, and blockchain automation. Built with Next.js 16, React 19, and powered by modern AI and integration services.

## Overview

AgentFlow provides a comprehensive mobile-first interface for managing:

- **AI Agents**: LangGraph + CrewAI powered autonomous agents
- **Workflows**: Trigger.dev automation and orchestration
- **Notifications**: Multi-channel notifications via OneSignal, Knock, and Resend
- **Blockchain**: Monad smart contract integration for decentralized automation

## Tech Stack

### Frontend
- **Next.js 16.1.3** with App Router and Turbopack
- **React 19.2.3** with latest features
- **TypeScript 5.9.3** for type safety
- **Tailwind CSS 4.1.17** for styling
- **Framer Motion 11.3.29** for animations
- **Radix UI** components for accessible UI elements

### Backend & Integrations
- **Supabase**: PostgreSQL database + auth
- **LangChain**: AI model integrations (OpenAI, Anthropic)
- **Trigger.dev**: Workflow automation and scheduling
- **Resend**: Email service provider
- **OneSignal**: Push notifications
- **Knock**: In-app notifications
- **Viem**: Blockchain interaction (Monad)

### Development Tools
- **ESLint & Prettier**: Code quality and formatting
- **TypeScript**: Static type checking
- **React Query**: Data fetching and caching

## Project Structure

```
src/
├── app/
│   ├── (mobile)/           # Mobile route group
│   │   ├── agents/         # AI agents management
│   │   ├── dashboard/      # Main dashboard
│   │   ├── notifications/  # Notification center
│   │   ├── profile/        # User profile
│   │   ├── workflows/      # Workflow management
│   │   └── layout.tsx      # Mobile layout
│   ├── api/                # API routes
│   │   ├── agents/         # Agent endpoints
│   │   ├── emails/         # Email service
│   │   ├── notifications/  # Notification endpoints
│   │   ├── workflows/      # Workflow endpoints
│   │   └── blockchain/     # Blockchain endpoints
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   └── mobile/             # Mobile UI components
│       ├── BottomSheet.tsx
│       ├── Card.tsx
│       ├── PullToRefresh.tsx
│       ├── SafeAreaWrapper.tsx
│       ├── TouchButton.tsx
│       └── index.ts
├── lib/
│   ├── integrations/       # Service integrations
│   │   ├── agentmail.ts
│   │   ├── brevo.ts (REST API-based)
│   │   ├── crewai.ts
│   │   ├── knock.ts
│   │   ├── langgraph.ts
│   │   ├── monad.ts
│   │   ├── onesignal.ts
│   │   ├── resend.ts
│   │   └── triggerdev.ts
│   ├── constants.ts
│   ├── supabase.ts
│   └── utils.ts
├── types/
│   └── dts.d.ts            # Type declarations
└── demos/
    └── UseLayoutEffectDemo.tsx
```

## Key Features

### Mobile-First Design
- Touch-optimized UI components
- Safe area padding for notched devices
- Responsive layouts with Tailwind CSS
- Pull-to-refresh functionality
- Bottom sheet modals for navigation

### AI Agent Management
- Create and manage autonomous agents
- Monitor agent status and task completion
- Execute agent workflows
- Configure agent parameters

### Workflow Automation
- Define and trigger automated workflows
- Schedule recurring tasks
- Monitor workflow execution
- View workflow history and logs

### Multi-Channel Notifications
- Push notifications via OneSignal
- In-app notifications via Knock
- Email notifications via Resend
- Notification preferences and management

### Blockchain Integration
- Monad smart contract interaction
- Decentralized transaction execution
- On-chain state management

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager
- Environment variables (see .env.example)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd email-to-do
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   Note: Legacy peer deps flag is used due to react-query@3 compatibility

3. **Set up environment variables**
   Create a `.env.development.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_KEY=your_service_key
   
   BREVO_API_KEY=your_brevo_key
   RESEND_API_KEY=your_resend_key
   ONESIGNAL_API_KEY=your_onesignal_key
   KNOCK_API_KEY=your_knock_key
   
   TRIGGER_DEV_API_KEY=your_trigger_key
   OPENAI_API_KEY=your_openai_key
   ANTHROPIC_API_KEY=your_anthropic_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

## Build & Deployment

### Development Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

### Code Formatting
```bash
npm run format
```

## Important Notes

### Framer Motion Integration
- Motion divs must not have `className` attribute directly - wrap them in a regular div
- Animation properties (`initial`, `animate`, `exit`) are applied to motion elements only
- Complex layouts use motion.div as wrapper with regular div for styling

### Brevo Email Service
- Switched from SDK to REST API due to Turbopack AMD compatibility issues
- Uses native fetch API for email sending
- Requires `BREVO_API_KEY` environment variable

### Build Configuration
- Uses Turbopack as the default bundler
- Includes experimental features: serverActions, transitionIndicator
- All packages support module ESM syntax

## Database Schema

### Key Tables (Supabase)
- `agents` - AI agent configurations and status
- `workflows` - Workflow definitions and execution history
- `notifications` - Notification queue and history
- `blockchain_transactions` - On-chain transaction records
- `users` - User profiles and preferences

## API Endpoints

### Email Service
- `POST /api/emails` - Send emails via Resend, Brevo, or AgentMail

### Agents
- `GET /api/agents` - List all agents
- `POST /api/agents` - Create new agent
- `PUT /api/agents/[id]` - Update agent
- `DELETE /api/agents/[id]` - Delete agent

### Workflows
- `GET /api/workflows` - List workflows
- `POST /api/workflows` - Create workflow
- `POST /api/workflows/[id]/trigger` - Execute workflow

### Notifications
- `GET /api/notifications` - Get notifications
- `POST /api/notifications` - Send notification

### Blockchain
- `POST /api/blockchain` - Execute smart contract interaction

## Performance Optimizations

- Server-side rendering for better SEO
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minimization with Tailwind
- Font optimization with next/font

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Known Issues & Fixes

### CSS Pseudo-element Issue (Fixed)
- **Issue**: Invalid pseudo-element selectors (`::backdrop`, `::file-upload-button`) caused CSS parsing errors
- **Fix**: Applied proper pseudo-element selectors:
  - Use `*::before` and `*::after` instead of bare pseudo-elements
  - Use `input[type="file"]::file-selector-button` for file input buttons
  - Use `dialog::backdrop` only with `<dialog>` elements

### Framer Motion Type Errors (Fixed)
- **Issue**: motion.div with className conflicted with TypeScript types in framer-motion 11
- **Fix**: Separated motion elements from className attributes by wrapping in regular divs

### Brevo SDK Incompatibility (Fixed)
- **Issue**: sib-api-v3-sdk used AMD module format incompatible with Turbopack
- **Fix**: Replaced SDK with REST API using native fetch

## Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript for all new code
3. Run linting and formatting before committing
4. Test changes in development mode
5. Ensure builds pass successfully

## License

Proprietary - All rights reserved

## Support

For issues, please open a GitHub issue or contact the development team.

## Changelog

### Latest (v1.0.0)
- Fixed CSS pseudo-element syntax errors in globals.css
- Resolved framer-motion TypeScript compatibility issues
- Replaced Brevo SDK with REST API integration
- Added "type": "module" to package.json for ESM support
- Updated framer-motion to compatible version (11.3.29)
- Build now passes successfully with TypeScript checks

