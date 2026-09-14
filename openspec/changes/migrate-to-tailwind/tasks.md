## 1. Tailwind & Build Configuration

- [x] 1.1 更新 `tailwind.config.js`：移除 `padding`、`margin`、`width`、`height` 的空物件限制，依據 `ARCHITECTURE_RULES.md` 將專案色彩（`primary`、`secondary`、`main` 等）、斷點（`xl: 1200px`、`xxl: 1600px`）整合至 `theme.extend`，並執行 `npm run build` 驗證編譯無誤
- [x] 1.2 強化 `styles/tailwind.css`：配置 `@tailwind base; @tailwind components; @tailwind utilities;` 及必要之 `@layer` 輔助定義，驗證 Tailwind utility classes 正常產出

## 2. Global Layout Migration

- [x] 2.1 重構導覽列與 Header 體系：將 `src/layout/Header.js`、`MainNav.js`、`SubMenu*.js`、`LanguageSelector.js` 中的 `d-flex`、`w-100`、`fz-*px` 替換為 Tailwind 工具類，驗證行動版與桌面版選單外觀正常
- [x] 2.2 重構頁尾 Footer 體系：將 `src/layout/Footer.js`、`FatFooter.js` 改寫為純 Tailwind classes，移除 `position-relative`、`trs-all` 等舊類別，驗證排版與背景響應式正常
- [x] 2.3 重構其餘全域 Layout 組件：改寫 `BtnBackTop.js`、`LoadingHint.js`、`MemberFuncBlk.js`、`SiteFuncBlk.js`、`SocialMediaLightBox.js`，驗證彈窗與浮動按鈕功能

## 3. UI Primitives & Core Atoms Migration

- [x] 3.1 建立標準按鈕原子組件與樣式：在 `src/components/ui/Button.js` 實作標準按鈕組件，並於 Tailwind 設定各按鈕變體，取代舊有 `_button.scss`，驗證 primary/secondary/outline 按鈕外觀
- [x] 3.2 重構核心展示組件：將 `src/components/Card.js`、`FarmCard.js`、`BannerTitle.js`、`BlockTitle.js`、`Breadcrumbs.js`、`ThumbFrame.js` 改寫為 Tailwind utility classes，驗證卡片與橫幅無破版

## 4. Complex Block & Search Components Migration

- [x] 4.1 重構搜尋與篩選區塊：改寫 `ConditionSearchBlk.js`、`AdvFilterSortBlk.js`、`SearchBar.js`、`CategoryShortcutBlk.js`、`Dropdown.js`，移除 `condition-search.scss` 依賴並驗證搜尋交互正常
- [x] 4.2 重構地圖與多媒體組件：改寫 `src/components/map/*`（`SpotMap.js`、`MapSpotCard.js` 等）、`PhotoCard.js`、`PhotoList.js`、`Slider.js`，驗證地圖標記與圖片清單排版正常

## 5. View Pages Migration

- [x] 5.1 重構首頁頁面：將 `src/views/home/index.js`、`FruitCalendar.js`、`FruitTheme.js` 全面改寫為 Tailwind classes，驗證首頁主橫幅、水果月曆與推薦區塊排版
- [x] 5.2 重構採果頁面：改寫 `src/views/pick/`（`index.js`、`SearchList.js`、`Notice.js`、`Introduction.js`），驗證條件搜尋列表與介紹正常顯示
- [x] 5.3 重構時令水果頁面：改寫 `src/views/season-fruits/` 與 `src/views/season-fruit/` 所有路由組件，驗證水果卡片網格與詳細資訊頁面
- [x] 5.4 重構伴手禮、老樹與 404 頁面：改寫 `src/views/souvenirs*`、`src/views/tree*`、`src/views/not-found/`，驗證所有次級頁面視覺一致

## 6. Legacy SCSS Deprecation & Build Verification

- [x] 6.1 清理 `styles/app.global.scss`：移除 `@import 'bootstrap/bootstrap-csii';`、`@import 'bootstrap/utilities';`、`_button.scss`、`_util.scss`、`_hover.scss`、`_bg.scss`、`_border.scss`、`partial/*`，僅保留基礎 reset 與 iconfont
- [x] 6.2 執行完整生產建置：執行 `npm run build`，驗證整個專案打包零警告、零錯誤，且 CSS Bundle 大幅精簡
