## Why

專案目前處於技術架構過渡期，樣式大量依賴舊有 Bootstrap 4 類別（如 `d-flex`、`w-100`、`align-items-center`）以及客製化 SCSS 工具類（如 `_util.scss` 中的 `fz-*px`、`_button.scss`、`_hover.scss`），與專案規範 `ARCHITECTURE_RULES.md` 的「Tailwind-First」架構標準嚴重脫節。此外，`tailwind.config.js` 預設覆蓋並清空了 padding、margin、width、height 等實用工具，阻礙了標準 Tailwind 語法的發揮。

為建立單一真實樣式來源、消除 SCSS 樣式發散並落實現代前端架構，需要將整個專案樣式全面重構為 Tailwind CSS 規範寫法。

## What Changes

- **解鎖與完善 Tailwind 設定**：修復 `tailwind.config.js`，移除清空 `padding`、`margin`、`width`、`height` 的限制，擴充設計 Token（色票、斷點、圓角），支援完整 Tailwind utilities。
- **建置與載入優化**：優化 Webpack 與 PostCSS 設定，確保全域樣式與 Tailwind 完美整合。
- **清除 SCSS 模組與 Bootstrap 依賴**：依據 `ARCHITECTURE_RULES.md` 規範，停用並清理 `styles/` 下的組件 SCSS partials（`_button.scss`、`_hover.scss`、`_bg.scss`、`_border.scss`、`_row-gap.scss`、`_util.scss`、`bootstrap/`），僅保留全域 reset 與必要字型設定。
- **全站組件與佈局重構**：將 `src/layout/`（Header、Footer、MainNav 等）、`src/components/`（Card、BannerTitle、Dropdown 等）與 `src/views/`（首頁、列表、內頁等）全面替換為純 Tailwind utility classes（例如 `w-full` 代替 `w-100`、`flex` 代替 `d-flex`、`text-[*px]` 代替 `fz-*px`、`font-bold` 代替 `font-weight-bold`）。
- **建立原子級 UI 組件**：將重複的按鈕樣式抽象化為標準組件或 Tailwind 類別封裝，取代 legacy `.btn` SCSS。

## Capabilities

### New Capabilities
- `styling/tailwind-system`: 定義專案全面採用 Tailwind-First 的樣式體系，規範全域 Token、響應式佈局、原子組件與樣式清查準則。

### Modified Capabilities
<!-- 無既有 specs 需調整 -->

## Impact

- **樣式檔案 (`styles/`)**：大幅精簡 SCSS 依賴，移除 Bootstrap 及過時 utilities。
- **前端組件 (`src/`)**：全站所有 React 組件與頁面 classNames 統一改為標準 Tailwind 語法。
- **打包體積與建置**：移除肥大的 Bootstrap SCSS 編譯，利用 Tailwind JIT/Purge 機制產生極輕量之 CSS Bundle。
- **使用者體驗**：維持各頁面視覺樣式與響應式排版一致，消除樣式衝突。
