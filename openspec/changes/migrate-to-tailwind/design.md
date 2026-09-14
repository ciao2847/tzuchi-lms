## Context

專案目前同時載入 Bootstrap 4 SCSS 體系（`styles/bootstrap/`、`styles/app.global.scss`）與 Tailwind CSS v3。但在現有 `tailwind.config.js` 中，為了避免與 Bootstrap 衝突，刻意清空了 `padding`、`margin`、`width`、`height`，導致標準 Tailwind 工具類無法產生。各組件內部混合使用 `d-flex`、`w-100`、`fz-18px`、`trs-all` 等舊版 SCSS 工具類。

根據專案現代化架構規範 `ARCHITECTURE_RULES.md` 第 3 條（Tailwind-First Styling）：
- 90% 以上樣式必須為 Tailwind utility classes。
- `styles/` 僅允許全域 reset、字型設定與第三方庫覆寫，禁止組件級 SCSS partials。
- 色票與斷點由 `tailwind.config.js` 集中管理。

## Goals / Non-Goals

**Goals:**
- 解鎖 Tailwind v3 完整功能，擴展色票、斷點與主題 Token。
- 徹底移除 Bootstrap SCSS 模組與組件級 SCSS partials（`_button.scss`、`_hover.scss`、`_util.scss` 等）。
- 全量將 `src/layout/`、`src/components/`、`src/views/` 重構為純 Tailwind utility classes。
- 提取標準原子級 UI 組件（如 `<Button>`），取代 legacy `.btn` 樣式。
- 確保所有頁面視覺表現、互動動畫與響應式斷點行為完全一致。

**Non-Goals:**
- 業務邏輯、API Client 或資料狀態管理（TanStack Query / Redux）之重構（依 ARCHITECTURE_RULES.md 其他章節另案辦理）。
- 更改頁面既有 DOM 結構或既有 UI/UX 流程。

## Decisions

### 1. 恢復與擴充 Tailwind Config
- **決策**：移除 `tailwind.config.js` 中對 `padding`、`margin`、`width`、`height` 的空物件覆寫；將品牌色票（`primary`、`secondary`、`main`/`accent` 等）、斷點（`xl: 1200px`, `xxl: 1600px`）、圓角放入 `theme.extend`。
- **替代方案**：保留空物件並手動增加 class -> 缺點是增加大量樣式冗餘且違背 Tailwind 原生生態。

### 2. 樣式類別對應字典 (Class Mapping Strategy)
全面替換專案內舊有類別至標準 Tailwind：
- **Display & Flexbox**:
  - `d-flex` → `flex`
  - `d-none` → `hidden`
  - `d-block` / `d-inline-block` → `block` / `inline-block`
  - `flex-column` → `flex-col`, `flex-md-column` → `md:flex-col`
  - `flex-fill` → `flex-1`, `flex-shrink-0` → `shrink-0`
  - `justify-content-center` / `between` → `justify-center` / `justify-between`
  - `align-items-center` / `start` / `end` → `items-center` / `items-start` / `items-end`
  - `align-self-stretch` → `self-stretch`
- **Sizing & Spacing**:
  - `w-100` → `w-full`, `h-100` → `h-full`
  - `vw-100` → `w-screen`, `vh-100` → `h-screen`
  - `miw-0` → `min-w-0`
  - `mx-auto` / `mr-auto` / `ml-auto` → `mx-auto` / `mr-auto` / `ml-auto`
- **Typography & Font**:
  - `font-weight-bold` → `font-bold`, `font-weight-normal` → `font-normal`
  - `fz-[N]px` → `text-[[N]px]` (例如 `fz-18px` → `text-[18px]`, `fz-md-24px` → `md:text-[24px]`)
  - `lh-initial` → `leading-normal`
- **Positioning & Transition**:
  - `position-relative` / `absolute` / `fixed` → `relative` / `absolute` / `fixed`
  - `absolute-top-left` → `absolute top-0 left-0`
  - `trs-all` / `trs` → `transition-all duration-300`
- **Border & Radius**:
  - `border-bottom` → `border-b`, `border-top` → `border-t`
  - `rounded-circle` → `rounded-full`

### 3. 按鈕與通用原子組件處理
- **決策**：在 `src/components/ui/Button.js` 建立可重用按鈕原子組件，提供 `variant`（primary, secondary, outline, danger 等）與 `size`，取代 `.btn.btn-primary` 等 SCSS 樣式。同時在 `styles/tailwind.css` 的 `@layer components` 提供相容性支援，確保遺漏組件不失效。

### 4. SCSS 結構修剪
- **決策**：自 `styles/app.global.scss` 中移除：
  - `@import 'bootstrap/bootstrap-csii';`
  - `@import 'bootstrap/utilities';`
  - `@import 'button';`
  - `@import 'util';`
  - `@import 'text';`
  - `@import 'bg';`
  - `@import 'border';`
  - `@import 'hover';`
  - `@import 'row-gap';`
  - `@import 'partial/*';`
  僅保留 `_reset.scss`、第三方庫覆寫與 iconfont 生成樣式。

## Risks / Trade-offs

- **[Risk] 部分組件因 Bootstrap 預設 box-sizing 或 padding 產生微小版面偏差**  
  → **Mitigation**: Tailwind Preflight 預設重置已具備標準 `border-box` 與 margin 重置；重構後逐一對頁面佈局進行建置與視覺驗收。
- **[Risk] 多層巢狀 SCSS 選擇器行為遺失**  
  → **Mitigation**: 審查 `partial/` 與 `condition-search.scss`，將特有交互效果轉換為 Tailwind group-hover, arbitrary variants 或 component-level Tailwind classes。
- **[Risk] 重構範圍涉及 170+ 檔案，可能產生漏網之魚**  
  → **Mitigation**: 採用全專案正則與靜態模式搜尋工具（grep），按「基礎建置 → 全域 Layout → 核心 Components → Views 頁面」模組化分批推進與驗證。

## Migration Plan

1. **基礎設定**：更新 `tailwind.config.js`、`styles/tailwind.css`，修復建置鏈。
2. **Layout 重構**：重構 `src/layout/`（Header, Footer, MainNav, FatFooter 等）。
3. **通用與核心組件重構**：重構 `src/components/`（Card, BannerTitle, SearchBar, Dropdown, Button 等）。
4. **業務頁面重構**：重構 `src/views/`（home, pick, season, souvenirs, tree, not-found 等）。
5. **樣式庫清理**：從 `styles/app.global.scss` 解除 Bootstrap 與舊 SCSS 引用，並移除冗餘 SCSS 檔案。
6. **最終編譯與功能驗收**：執行 `npm run build` 確認打包零警告零錯誤。
