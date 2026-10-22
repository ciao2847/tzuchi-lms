# 個人學習歷程串接

登入後由 `DashboardProvider` 請求一次 GET `/tzuchi/api/dashboard`，無查詢參數或 body，
帶入 API Key 與登入 Session。首頁、手機通知及學習歷程側欄共用通知信與系統公告。
失敗時可重新載入；401 清除登入資料並提示重新登入；登出或換帳號時取消舊請求，
避免顯示前一位使用者資料。

實際 API 欄位與文件略有不同，adapter 同時支援：

- 學程 `name` 或 `title`。
- 課程 `calendarInfo` 或文件中的 `courses`。
- 歷程 `usrhistroy` 或 `usrhistory` 包含所有歷史課程，不因是否通過而排除。
  `pass` 為已完成、`yet` 為未完成；舊的 `yat` 欄位與狀態會正規化為 `yet`。

首頁摘要以 `coming`、`programs.inProgress`、`pass` 的筆數顯示待上課、進行中學程、
已完成課程。學習行事曆頁面保留原版版面，僅將側欄兩個區塊接上
`mail`（通知信）與 `announcement`（系統公告）。學程按鈕與手機下拉選單已接上
`programs.inProgress`，已結束學程使用 `programs.past`；以 `name` 或 `title` 顯示名稱、
`id` 作為選取值。行事曆已接上 `coming` 與全部歷史課程，按開始日期顯示，
已報名藍色、已完成綠色、未完成橘色。每日只顯示時間最早的一筆，其餘顯示剩餘筆數
（例如 `22+`），點擊可展開當日課程。預設當月，課程名稱提供完整 title。
學程詳細資料仍保留原版示範資料。
通知信 HTML 放在 sandbox iframe，禁止腳本、表單與外部資源載入。
未讀狀態依 `read` 欄位顯示，未實作後端未提供的已讀更新 API。

公告 API 只有標題與日期，沒有公告全文、附件或詳細頁網址；學程只有清單，沒有
學分明細或詳細內容。外訓歷程仍待對應 API。

本機執行 `npm run dev`，`/tzuchi-api` 由 webpack 代理到內網 API，讓瀏覽器共用
同來源 Cookie。修改 webpack 設定後需重新啟動開發伺服器。正式版使用內網完整網址，
建議部署在與 API 相同來源的 `/tzuchi/react/`。

驗證：`node scripts/test-dashboard.cjs`；production build 使用
`npx cross-env NODE_ENV=production webpack --config config/webpack.prod.babel.js`。
