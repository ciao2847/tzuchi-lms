## Purpose

Establish a unified, high-performance Tailwind-First styling system across the entire application, eliminating legacy Bootstrap and SCSS dependencies while ensuring visual and responsive design parity.

## ADDED Requirements

### Requirement: Full Tailwind utility configuration and design token integration
The build and styling system SHALL configure Tailwind CSS v3 to provide complete utility classes (including spacing, sizing, typography, and flexbox) and brand design tokens without restrictive empty overrides.

#### Scenario: Utility classes compile successfully
- **WHEN** components use standard Tailwind utility classes such as `w-full`, `p-4`, `m-2`, `flex`, and `text-primary`
- **THEN** the build pipeline generates corresponding CSS rules without build warnings or missing utility styles

#### Scenario: Brand color tokens are available
- **WHEN** styles reference project tokens such as `text-primary`, `bg-secondary`, and `bg-main`
- **THEN** Tailwind outputs the exact brand hex values defined in ARCHITECTURE_RULES.md

### Requirement: Complete elimination of Bootstrap and component SCSS partials
The application SHALL eliminate Bootstrap 4 styling dependencies and legacy component-specific SCSS partials from `styles/`.

#### Scenario: Bootstrap styles removed from build
- **WHEN** the global style entry is compiled
- **THEN** `bootstrap/bootstrap-csii`, `bootstrap/utilities`, `_button.scss`, and `_util.scss` are no longer imported

#### Scenario: Component rendering without legacy SCSS
- **WHEN** page and UI components are rendered
- **THEN** they rely exclusively on Tailwind utility classes and base reset styling instead of legacy SCSS classes (such as `fz-*px`, `trs-all`, `w-100`, `d-flex`)

### Requirement: Responsive layout and component visual parity
All UI components, global layout wrappers (Header, Footer, Navigation), and view pages SHALL render with identical responsive layouts and visual presentation using pure Tailwind classes.

#### Scenario: Desktop and mobile navigation layout
- **WHEN** the user views the header and main navigation on mobile (<1200px) or desktop (>=1200px)
- **THEN** the layout adapts responsively using Tailwind breakpoint prefixes (`md:`, `lg:`, `xl:`) without layout shift

#### Scenario: Interactive elements and button variants
- **WHEN** interactive components such as buttons, links, and cards are rendered
- **THEN** their hover, focus, disabled, and active states are driven by Tailwind pseudo-class modifiers (`hover:`, `focus:`, `disabled:`)
