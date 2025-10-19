### Theme and UI Style Guide (Mindscape Global Formations)

- **Colors**
  - `--primary` (navy): brand headings, primary text on light backgrounds
  - `--accent` (emerald): highlights, icons, CTAs focus/hover rings
  - `--muted`/`--border`: cards, dividers; keep subtle

- **Typography**
  - Headings: `Space Grotesk` via `font-[family-name:var(--font-space-grotesk)]`
  - Body: `DM Sans` via `font-[family-name:var(--font-dm-sans)]`
  - Ramp: h1 48–72, h2 36–48, h3 24–28, body 16–18, small 12–14

- **Spacing**
  - Sections: `py-20` (desktop), `py-12` (mobile)
  - Stacks: `space-y-4` for small, `space-y-6` for large blocks
  - Grids: `gap-8` standard, `gap-12` for hero/value sections

- **Cards**
  - Base: subtle border `border-white/10` in hero or `border-border` on light
  - Elevation: hover `hover:shadow-2xl hover:-translate-y-3`
  - Radius: use `rounded-2xl/3xl` consistently

- **CTAs**
  - Primary: white on brand gradient area; navy text
  - Secondary: outline with soft background on hover; clear labels
  - Copy: action + outcome (e.g., “Get Started — View Pricing”)

- **Lists and Trust Badges**
  - Use semantic `<ul>` for badges; avoid repeating the same list multiple times on page

- **Accessibility**
  - Ensure focus ring: `focus:ring-2 focus:ring-accent/40`
  - Skip link present: `.skip-link` to `#main-content`

- **Performance**
  - Limit decorative backgrounds on mobile (`hidden sm|md:block`)
  - Use `loading="lazy"` for non-critical images/avatars










