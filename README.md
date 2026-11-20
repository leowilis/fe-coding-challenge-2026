# Luma — Learning Platform

A responsive learning platform landing page built as part of the Buzzvel Frontend Coding Challenge.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Base UI
- Lucide React

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/leowilis/fe-coding-challenge-2026.git
cd fe-coding-challenge-2026
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

### Code Quality

Run ESLint:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npx tsc --noEmit
```

## Key Decisions

- **Next.js App Router:** Used for the application structure and a server-first rendering approach.
- **Server Components by default:** Client Components are used only where browser-side interactivity is required.
- **TypeScript:** Provides type safety and improves maintainability.
- **Tailwind CSS v4:** Used for responsive styling and consistent design implementation.
- **Component-based architecture:** Sections and shared UI components are organized for easier maintenance.
- **Form validation:** React Hook Form and Zod provide client-side form validation.
- **Accessibility:** Semantic HTML, accessible labels, keyboard interactions, and visible focus states are considered throughout the interface.
- **Navigation:** Section links use valid page anchors to support navigation without introducing unnecessary routes.

## Known Gaps

- This is currently a frontend-only implementation. No backend, database, or authentication service is connected.
- The login entry is visual only; authentication is not implemented.
- The contact form includes client-side validation, but actual message delivery requires a backend integration.
- For Teams currently navigates to Contact, Community to People, and About to How It Works. These are temporary destinations because dedicated sections or pages are not yet implemented.
- Dynamic course management and persistent user data are outside the current scope.

## Time Spent

Approximately **30 hours**, spread across November 14–20, 2026. Daily development time varied depending on the implementation and refinement tasks.

## AI Tools

**OpenAI ChatGPT** was used as a development assistant for:

- Technical planning and implementation guidance.
- Code review and debugging.
- Accessibility and performance improvement suggestions.
- Documentation support.

All implementation decisions and final code changes were reviewed and tested as part of the development process.

---

Built for the Buzzvel Frontend Coding Challenge.
