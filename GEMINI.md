# Fiction Development — AI Client Delivery Rules

## Core Mission & Aesthetic Standard
- **Standard:** Build high-end, luxury boutique agency websites ($10,000+ visual standard) with zero bloat and rapid turnaround.
- **Design Philosophy:** Clean modernism, editorial spacing, and subtle physics-based motion. Avoid generic, template-looking layouts.

---

## 1. Technical Stack
- **Framework:** Vite + React (TypeScript preferred)
- **Styling:** Tailwind CSS
- **Primitives & Components:** shadcn/ui + Aceternity UI
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React (`lucide-react`)
- **Forms & Lead Capture:** Web3Forms (action-based, zero-backend)
- **Deployment & Hosting:** Vercel (static edge deployment)

---

## 2. Visual Polish & UI Design System
- **Color Palette:**
  - Base: Refined slate/neutral dark or light themes (`zinc-900`/`slate-950` or `zinc-50`/`slate-50`).
  - Accent: Single high-contrast primary brand accent color.
  - Ban: Avoid default Bootstrap-style primary blues, purples, or uncalibrated saturation.
- **Layout & Structure:**
  - Modern Bento grid architecture for features and services.
  - Ample editorial whitespace (minimum `py-16` / `py-24`, sections spaced with `gap-8` to `gap-12`).
  - Subtle borders: Use `border border-white/10` (dark mode) or `border border-black/5` (light mode) with rounded corners (`rounded-2xl` or `rounded-3xl`).
- **Surface & Depth:**
  - Frosted glassmorphism: `backdrop-blur-md bg-white/70` (light) or `backdrop-blur-md bg-zinc-900/70` (dark).
  - Navigation bar: Sticky top header with `backdrop-blur-md bg-background/80` and subtle bottom border.
- **Typography Pairings:**
  - Primary UI: Plus Jakarta Sans, Geist, or Inter.
  - Editorial Accents / Headings: Modern sans or clean editorial serif pairs where appropriate.

---

## 3. Motion & Micro-Interactions
- **Interactive States:**
  - Subtle card/element hover lift: `hover:-translate-y-1 transition-all duration-300 ease-out`.
  - Button states: Clean scale down on active (`active:scale-95`) with smooth transitions.
- **Page Transitions & Reveal:**
  - Use `framer-motion` (Motion) viewport triggers for staggered fade-ups (`opacity: 0, y: 20` to `opacity: 1, y: 0`).
  - Keep animations fast and purposeful (`duration: 0.4s` to `0.6s`), never sluggish.

---

## 4. Media & Asset Standards
- **Photography:**
  - Source strictly high-resolution, curated editorial/lifestyle images from Unsplash or clean mockups.
  - Never use generic, low-effort corporate stock photos (e.g., people shaking hands in meeting rooms).
- **Icons:**
  - Use `lucide-react` exclusively for icons with consistent stroke widths (`strokeWidth={1.5}` or `2`).

---

## 5. Forms & Lead Generation
- **Contact Forms:**
  - Use Web3Forms endpoints for all client lead captures:
    ```tsx
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      {/* Form Fields */}
    </form>
    ```
  - Always provide clean interactive input feedback, focus rings (`focus:ring-2 focus:ring-accent`), and clear success toast/state.

---

## 6. Development & Guardrails
- Build purely client-side accessible components (WAI-ARIA compliant via shadcn/Radix primitives).
- Ensure 100% mobile responsiveness (no horizontal scroll leaks; touch targets >= 44x44px).
- Keep component code self-contained and easy to export.
