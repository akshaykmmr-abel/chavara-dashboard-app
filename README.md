# Chavara Dashboard App

## Bounded Context: Member Management & Interactions

This is the authenticated dashboard for Chavara Matrimony members.

## Domain Structure

```
src/
├── domains/
│   ├── identity/          # Authentication, authorization, session
│   │   ├── ui/           # Nav, logout, user menu
│   │   ├── services/     # Auth verification, logout
│   │   └── types/        # User, AuthState
│   ├── profile/          # Member profile management
│   │   ├── ui/
│   │   ├── services/
│   │   └── types/
│   ├── search/           # Match search and discovery
│   │   ├── ui/
│   │   ├── services/
│   │   └── types/
│   ├── membership/       # Subscription and plan management
│   │   ├── ui/
│   │   ├── services/
│   │   └── types/
│   └── messaging/        # Member-to-member communication
│       ├── ui/
│       ├── services/
│       └── types/
├── shared/               # Cross-cutting concerns
├── app/                  # Next.js App Router pages
└── middleware.ts         # Authentication guard
```

## Key Principles

- **Authentication required** - middleware validates on every request
- **Domain isolation** - each domain owns its UI, state, and services
- **Backend integration** - all data via existing APIs
- **Ubiquitous language** - Profile, Search, Membership, not generic terms

## Authentication Flow

1. Middleware checks for `auth_token` cookie
2. If missing, redirect to public web
3. If present, verify with backend
4. If invalid, redirect to public web
5. If valid, allow access

## Local Development

```bash
npm install
npm run dev
```

Visit: http://localhost:3001

## Docker Build

```bash
docker build -t chavara-dashboard-app .
docker run -p 3001:3001 chavara-dashboard-app
```

## Environment Variables

See `.env.example` for required configuration.

## Production Deployment

- Deploy to: https://dashboard.chavaramatrimony.com
- Requires valid authentication cookie
- All API calls include credentials
