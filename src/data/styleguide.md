# lisa-sy.com Style Guide

Reference document for design tokens, typography, components, and spacing conventions.

---

## Typography

### Font Family
- **Primary:** GT America Standard (`'GT-America', sans-serif`)
- Available weights: Light (300), Regular (400), Bold (700)

### Weight Usage
| Context | Weight | Tailwind | Value |
|---------|--------|----------|-------|
| Body default | Light | `font-light` | 300 |
| UI chrome (nav, tabs, controls, list items) | Regular | `font-normal` | 400 |
| Emphasis / headings | Bold | `font-bold` | 700 |

### Heading Scale
All headings use `line-height: 1.33`.

| Level | Base | md | lg | Usage |
|-------|------|----|----|-------|
| h1 | 30px (`text-3xl`) | 36px (`text-4xl`) | 48px (`text-5xl`) | Page hero (rare) |
| h2 | 24px (`text-2xl`) | 30px (`text-3xl`) | 36px (`text-4xl`) | Section title |
| h3 | 20px (`text-xl`) | 24px (`text-2xl`) | 30px (`text-3xl`) | Page title |
| h4 | 18px (`text-lg`) | 20px (`text-xl`) | 24px (`text-2xl`) | Subsection |
| h5 | 16px (`text-base`) | 18px (`text-lg`) | 20px (`text-xl`) | Label / TwoColumn title |
| h6 | 14px (`text-sm`) | 16px (`text-base`) | 18px (`text-lg`) | Caption |

### Body Text
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Body (global `p`) | `text-base` → `text-xl` → `text-2xl` | Light (300) | 1.45 | Long-form content, bios |
| Body (product page) | `text-lg` (18px) | Light (300) | 1.33 | Bio paragraph |
| Smaller (`.smaller`) | `text-base` → `text-lg` → `text-xl` | Light (300) | 1.45 | TwoColumn content |
| UI / Controls | `text-base` (16px) | Regular (400) | 1.2 | Tabs, nav, item count |
| List items | `text-lg` (18px) | Regular (400) | 1.2 | Product list rows |

---

## Colors

### Theme Tokens (defined in `@theme` in globals.css)

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `--color-foreground` | `#131313` | `text-foreground`, `bg-foreground` | Primary text, active controls |
| `--color-background` | `#EAE9E3` | `bg-background` | Page background |
| `--color-background-secondary` | `#dfddd2` | `bg-background-secondary` | Nav active state, card fill |
| `--color-accent` | `#131313` | `text-accent` | Links |
| `--color-accent-hover` | `#B7B12A` | `text-accent-hover` | Link hover |
| `--color-text-secondary` | `#757367` | `text-text-secondary` | Muted text, captions |

### Opacity-Based Surface Colors
| Pattern | Usage |
|---------|-------|
| `bg-black/[0.06]` | Inactive segmented controls, inactive view toggles |
| `hover:bg-black/[0.1]` | Segmented control hover |
| `hover:bg-black/[0.03]` | List item hover |
| `bg-[#d9d9d9]` | Thumbnail placeholder |
| `bg-foreground/10` | Dividers |

---

## Spacing

### Layout Constants (from `src/lib/constants.js`)
| Token | Value | Usage |
|-------|-------|-------|
| `NAV_WIDTH` | `14rem` (224px) | Sidebar navigation width |
| `MOBILE_HEADER_HEIGHT` | `3.5rem` (56px) | Mobile top bar |
| Content padding (mobile) | `1.25rem` (20px) | `p-5` |
| Content padding (desktop) | `2rem` (32px) | `md:p-8` |
| Max content width | `max-w-4xl` (896px) | Main content area |

### Common Spacing Patterns
| Pattern | Value | Usage |
|---------|-------|-------|
| `gap-10` | 40px | Between major sections (title → bio → table) |
| `gap-5` | 20px | Controls to content |
| `gap-4` | 16px | Grid items, card grid |
| `gap-2` | 8px | Between segmented controls, between sections in list |
| `gap-1` | 4px | Between nav items |
| `px-6` / `py-3` | 24px / 12px | List item internal padding |
| `px-4` / `py-3` | 16px / 12px | Segmented control internal padding |
| `py-1` / `px-4` | 4px / 16px | Sidebar nav link padding |

### List Layout
| Element | Width/Height |
|---------|-------------|
| Year column | `w-[129px]` fixed |
| List item row | `h-12` (48px) |
| Thumbnail (small) | `size-10` (40px) |
| Thumbnail (grid) | `aspect-square`, full width |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-[10px]` | 10px | Segmented controls, view toggles, list item hover, nav active state bg |
| `rounded-[9px]` | 9px | Thumbnails |
| `rounded-lg` | 8px | Sidebar nav links |

---

## Components

### Navigation (`Navigation.js`)
- Fixed left sidebar on desktop, slide-out drawer on mobile
- Font: `text-base font-normal` (16px, Regular 400)
- Active state: `bg-background-secondary` (`#dfddd2`)
- Hover: `hover:bg-background-secondary`
- Link padding: `py-1 px-4`
- Hidden on item detail pages (`/work/[slug]`, `/studio-art/[slug]`, `/sketches/[slug]`)

### Segmented Control (tabs on `/product-design`)
- Pill-shaped buttons: `h-8 px-4 py-1 rounded-[10px]` (32px height)
- Font: `text-base font-normal` (16px, Regular 400)
- Active: `bg-foreground text-background` (black fill, white text)
- Inactive: `bg-black/[0.06] text-foreground`
- Hover (inactive): `hover:bg-black/[0.1]`
- Always: `cursor-pointer`

### View Toggle (list/grid on `/product-design`)
- Same surface treatment as Segmented Control
- Icon size: 16px (lucide `List` and `LayoutGrid`)
- Active/inactive states match Segmented Control

### ListItem (`/product-design` page)
- Row height: `h-12` (48px)
- Padding: `px-6 py-3`
- Font: `text-lg font-normal` (18px, Regular 400)
- Title type: full opacity
- Project type: `opacity-60`
- Hover: `hover:bg-black/[0.03] rounded-[10px]`
- Company titles support `hoverText` — text swaps on hover to show expanded role (e.g., "Instagram" → "Instagram · Staff Product Designer (IC6) on Creators Team")
- Always: `cursor-pointer`

### Thumbnail
- Small (list): `size-10 rounded-[9px] bg-[#d9d9d9]`
- Large (grid): `w-full aspect-square rounded-[9px] bg-[#d9d9d9]`

### TwoColumn (`TwoColumn.js`)
- Grid: `md:grid-cols-3`
- Title in first column (`h5`)
- Content spans 2 columns (`md:col-span-2`)
- Used on About page for structured sections

### Home Page Cards
- 2×2 grid: `grid-cols-1 sm:grid-cols-2 gap-4`
- Card: `rounded-lg border border-foreground/10 bg-background-secondary/50`
- Image area: `aspect-[4/3] bg-background-secondary`
- Label: `text-base md:text-lg font-normal` inside `px-4 py-3`
- Hover: `hover:bg-background-secondary`

---

## Interactive Patterns

| Pattern | Classes | Usage |
|---------|---------|-------|
| Hover fill (controls) | `hover:bg-black/[0.1]` | Tabs, view toggles |
| Hover fill (list) | `hover:bg-black/[0.03]` | List rows |
| Hover fill (nav) | `hover:bg-background-secondary` | Sidebar links |
| Active fill (controls) | `bg-foreground text-background` | Selected tab/toggle |
| Active fill (nav) | `bg-background-secondary` | Current page link |
| Transition | `transition-colors` | All interactive elements |
| Pointer | `cursor-pointer` | All clickable elements |

---

## Breakpoints (Tailwind defaults)

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Card grid → 2 cols |
| `md` | 768px | Desktop nav visible, responsive type scale |
| `lg` | 1024px | Largest type scale step |
| `xl` | 1280px | — |
| `2xl` | 1536px | — |

---

## File Structure

```
src/
├── app/globals.css          # Theme tokens, @font-face, base typography
├── lib/constants.js         # Layout constants (NAV_WIDTH, etc.)
├── lib/product-design.js    # Product/Software data
├── lib/item.js              # Studio Art item data
├── components/
│   ├── Navigation.js        # Sidebar nav
│   ├── TwoColumn.js         # Two-column layout
│   ├── ItemLink.js          # Linked image thumbnails
│   ├── ItemPageClient.js    # Full-screen item viewer
│   └── CloudinaryImage.js   # Cloudinary image wrapper
```
