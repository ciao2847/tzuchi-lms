# Modern Frontend Architecture & Coding Standards Blueprint (v2.0)

This document defines the modernized architectural guidelines, component patterns, state management strategies, styling standards, and API layers for new projects. All AI agents and developers MUST follow these guidelines to prevent architectural drift, cognitive overhead, and legacy technical debt.

---

## 1. Core Architecture Philosophy & Tech Stack

### Core Principles
1. **Server State vs. Client State Separation**: Never use global client stores (like plain Redux) as an ad-hoc database for caching server responses without invalidation strategies.
2. **Tailwind-First Styling**: Single source of truth for styling. Eliminate SCSS component partials (`_button.scss`, `_hover.scss`) in favor of utility classes and component-encapsulated variants.
3. **Unified API Gateway**: Never call raw `fetch()` in components. All network calls must pass through a centralized HTTP client that guarantees `response.ok` checks, unified error interceptors, and typed responses.
4. **Adapter Pattern for Backend Quirks**: Legacy data structures (e.g., bitmasks, non-standard date formats, deeply nested media arrays) must be transformed in `src/adapters/` before reaching UI components.

### Recommended Stack Matrix
- **Framework**: React 18+ (Functional Components, Hooks, TypeScript strongly recommended)
- **Tooling**: Webpack 5 or Vite with absolute path aliases (`src/*`)
- **Routing**: `react-router-dom` v6 (`useRoutes`, `Outlet`, route lazy loading with `React.lazy()` & `Suspense`)
- **Server State / Data Fetching**: **TanStack Query (React Query)** or **RTK Query** (handles caching, deduping, background refetch, loading/error states)
- **Client Global State**: **Redux Toolkit** or **Zustand** (strictly for client-only state: session, modals, carts, UI themes)
- **Styling**: **Tailwind CSS v3+** + CSS Modules / Minimal SCSS (strictly for base reset and typography)
- **Icons**: SVG Components (e.g. `lucide-react` or SVGR) instead of Webpack icon font generation
- **UI Notifications**: Centralized toast / modal (`sweetalert` or `sonner`)

---

## 2. Directory Structure & Taxonomy

Imports resolve directly from `src/` (configured in bundler aliases). **Never use deep relative imports (`../../..`)**.

```
src/
├── adapters/        # Data mappers & transformers (converts raw API responses -> clean domain models)
├── api/             # API service declarations & endpoint functions (uses apiClient)
├── components/      # UI components
│   ├── ui/          # Headless / primitive atoms (Button, Input, Spinner, Modal)
│   └── blocks/      # Domain compound components (BannerTitle, SearchFilter, PhotoGallery)
├── constants/       # Global constants, route definitions, config variables
├── contexts/        # React Context for cross-cutting UI needs (e.g., Theme, Lightbox)
├── hooks/           # Reusable generic lifecycle hooks (useClickOutside, useDebounce)
├── layout/          # Page shells, Navigation, Header, Footer, Accessibility anchors
├── lib/             # Third-party library initializations & unified HTTP client (apiClient.js)
├── store/           # Redux Toolkit / Zustand stores (CLIENT-ONLY global state)
├── views/           # Route-level page components (Lazy loaded)
├── Routes.js        # Centralized routing configuration
└── index.js         # Application entry point
styles/
├── reset.scss       # Browser CSS reset & baseline element styles
└── tailwind.css     # Tailwind directives (@tailwind base, components, utilities)
```

---

## 3. Styling Standards: Tailwind-First Paradigm

### A. Eliminating Style Drift
- **90%+ of styling MUST be Tailwind utility classes**: Spacing (`p-4`), Layout (`flex`, `grid`), Colors (`text-primary`), Typography (`text-lg font-bold`), and Transitions (`hover:scale-105 transition-all`).
- **SCSS Restrictions**:
  - `styles/` is restricted to global resets, font face imports, and 3rd-party library overrides (e.g. Swiper, PhotoSwipe).
  - **PROHIBITED**: Do NOT create component-specific SCSS files (e.g. `_button.scss`, `_card.scss`, `_hover.scss`). If a group of utility classes repeats frequently, extract a reusable React component (e.g., `<Button variant="primary">`) or use `clsx` / `tailwind-merge`.

### B. Theme Color Tokens (`tailwind.config.js`)
All colors must be sourced from theme tokens:
```javascript
// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: { DEFAULT: '#2C5A3E', light: '#3D7A55', dark: '#1E3F2B' },
                secondary: '#82be66',
                accent: '#f9793a',
                neutral: { 50: '#f9fafb', 100: '#f3f4f6', 800: '#1f2937', 900: '#111827' }
            },
            screens: {
                xl: '1200px',
                xxl: '1600px'
            }
        }
    }
}
```

---

## 4. Unified API Layer & Error Interception

### A. Centralized HTTP Client (`src/lib/apiClient.js`)
Components and services must NEVER use raw `fetch()` directly. All requests use `apiClient`:

```javascript
// src/lib/apiClient.js
import swal from 'sweetalert'

export class ApiError extends Error {
    constructor(status, message, data) {
        super(message)
        this.status = status
        this.data = data
    }
}

export const apiClient = async (endpoint, options = {}) => {
    const { silent = false, headers = {}, ...customConfig } = options

    const config = {
        method: customConfig.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...headers
        },
        ...customConfig
    }

    try {
        const response = await fetch(endpoint, config)
        const data = await response.json().catch(() => null)

        // Native fetch does NOT reject on 4xx/5xx HTTP status! We must explicitly check response.ok:
        if (!response.ok) {
            const errorMessage = data?.message || data?.toString() || `HTTP ${response.status} Error`
            throw new ApiError(response.status, errorMessage, data)
        }

        return data
    } catch (error) {
        if (!silent) {
            swal({
                title: '網路通訊錯誤',
                text: error.message || '請檢查網路連線或稍後再試',
                icon: 'error'
            })
        }
        throw error
    }
}
```

---

## 5. State Management: The 2-Tier Architecture

### Tier 1: Server State (TanStack Query / RTK Query)
- Use for all remote API data, list caching, details fetching, and mutations.
- Eliminates manual `isLoading`, `hasError`, and boilerplate `createSlice` reducers.

```javascript
// Example: src/api/fruitQueries.js
import { useQuery } from '@tanstack/react-query'
import { apiClient } from 'lib/apiClient'
import { adaptFruitDetail } from 'adapters/fruitAdapter'

export const useFruitDetail = (id, lang = 'zh-tw') => {
    return useQuery({
        queryKey: ['fruit', lang, id],
        queryFn: async () => {
            const rawData = await apiClient(`/_api/${lang}/fruit?id=${id}`)
            return adaptFruitDetail(rawData)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60 * 5 // Cache valid for 5 minutes
    })
}
```

### Tier 2: Client State (Redux Toolkit / Zustand)
- Strictly reserved for client-only UI states (e.g. sidebar toggle, shopping cart, active modal, current user preferences).
- **Rule**: If data comes from the server, do NOT copy it into Redux unless it is being edited offline.

---

## 6. Adapter Pattern (Decoupling Backend Quirks)

Never allow raw, fragile backend structures (like Bitmasks, unformatted timestamps, or unpredictable media shapes) to leak into UI components. Transform them at the adapter boundary.

```javascript
// src/adapters/fruitAdapter.js
import { MONTHS_MAP } from 'constants/utils'

/**
 * Decodes bitmask integers into human-readable month arrays.
 * e.g., bitmask 20 -> ['3月', '5月']
 */
export const decodeMonthBitmask = (value) => {
    if (typeof value !== 'number' || value <= 0) return []
    return Object.entries(MONTHS_MAP)
        .filter(([mask]) => (value & Number(mask)) === Number(mask))
        .map(([, monthName]) => monthName)
}

/**
 * Normalizes raw fruit API data into a predictable UI model.
 */
export const adaptFruitDetail = (raw) => {
    if (!raw) return null
    return {
        id: raw.id,
        title: raw.name || raw.title || '未命名',
        description: raw.description || '',
        coverUrl:
            raw.images?.find((img) => img.isCover)?.url ||
            raw.images?.[0]?.url ||
            `${process.env.BASE_PATH || ''}/images/not-found/miss.jpg`,
        seasonMonths: decodeMonthBitmask(raw.months),
        updatedAt: raw.update_time ? new Date(raw.update_time) : null
    }
}
```

---

## 7. Component Architecture & Lifecycle

### A. View Page Template (`src/views/<feature>/index.js`)
Pages must be memoized and cleanly consume queries and adapters:

```javascript
// src/views/season-fruits/index.js
import React from 'react'
import { useParams } from 'react-router-dom'
import BannerTitle from 'components/blocks/BannerTitle'
import Spinner from 'components/ui/Spinner'
import { useFruitsList } from 'api/fruitQueries'
import SeasonList from './SeasonList'

const SeasonFruitsPage = () => {
    const { season = 'all' } = useParams()
    const { data: fruits, isLoading, isError } = useFruitsList(season)

    return (
        <div className="w-full">
            <BannerTitle title="四季水果" sub="品嚐最鮮美的原味" img="season-fruit.jpg" />
            <section className="max-w-[1280px] mx-auto py-8 px-4">
                {isLoading && (
                    <div className="flex justify-center p-12">
                        <Spinner size={24} />
                    </div>
                )}
                {isError && (
                    <div className="text-center text-red-500 py-6">載入資料失敗，請重新整理</div>
                )}
                {fruits && <SeasonList data={fruits} />}
            </section>
        </div>
    )
}

export default React.memo(SeasonFruitsPage)
```

### B. Global Layout & Accessibility (a11y)
All routes render inside `src/layout/index.js`, maintaining:
- Skip-to-content anchor: `<a href="#main-content" className="sr-only focus:not-sr-only">跳至主要內容</a>`
- Consistent header, main body `<main id="main-content">`, footer, scroll-to-top buttons, and lightbox portals.

---

## 8. Internationalization (i18n) Architecture

- **UI Strings**: Managed via `react-i18next` with JSON translation files loaded asynchronously.
- **Dynamic Content**: Requested via API query parameter (`?lang=en`). Do not store all languages simultaneously in one giant global state tree.

---

## 9. Strict "NEVER" Anti-Patterns Checklist

1. **NEVER call raw `fetch()` in components**: Always use `apiClient` or a TanStack Query hook.
2. **NEVER assume `fetch` rejects on 4xx/5xx**: Always verify `response.ok`.
3. **NEVER mix SCSS component files with Tailwind**: Keep component styling inside Tailwind classes or CSS Modules.
4. **NEVER manually write Redux boilerplate for simple GET requests**: Use TanStack Query / RTK Query.
5. **NEVER let raw Bitmask or media arrays reach UI components**: Normalize them in `src/adapters/`.
6. **NEVER use browser `window.alert()`**: Use the centralized alert notification.
7. **NEVER use deep relative imports**: Use root aliases (`components/...`, `api/...`, `lib/...`).
