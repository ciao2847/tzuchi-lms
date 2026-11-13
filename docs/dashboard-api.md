# 個人學習歷程串接

課程資訊頁 `/course/:id` 使用 GET `/course/courseInfo/{id}`（實測修正文件的 cousreInfo 拼字），
帶 X-API-Key 與登入 Cookie。快速選課及學程明細的有效課程連結都導入此頁。
畫面顯示 API 課程名稱、年度、類型、多位講師、屬性、認列學程及學分、適用對象、
大綱、簡介、目的、備註、日期、時長、完成規範、聯絡人、報名截止日及報名人數。
大綱、簡介、目的、備註沿用原版文字樣式，在頁面中依內容自動增高；將 HTML 清單、
段落與換行等內容標籤轉成 React 元素，不複製 API 的屬性、樣式或網址，不使用 iframe。
`classroom` 是代碼，尚無名稱對照；只顯示 `classroomother`，缺少時顯示「—」。
`signUpCheck.enterCourse === true` 顯示進入課程，否則依 `canRegister === true` 顯示我要報名，
兩者皆否則停用按鈕並顯示 API 訊息。桌機及手機操作一致。
API 尚未提供報名操作端點與進入課程網址，按鈕沿用原 NLMS `course_opration.php?id=` 頁，
不在前端直接送出報名或套用 Moodle ID 推測網址。
載入使用 Spinner，失敗可重試，401 清除登入，切換課程／使用者或離頁取消舊請求。
驗證：`node scripts/test-course-info.cjs`。

快速選課屬性使用 GET `/course/category`，無參數，帶 X-API-Key 與登入 Cookie。
快速選課 `/course` 在登入驗證中先顯示搜尋版面，搜尋欄位停用並呈現 Pulse，
登入確認與課程載入共用同一個列表 Spinner。登入驗證成功前不請求課程或屬性資料，
不顯示個人清單；驗證失敗沿用登入導向，其餘頁面維持原本保護行為。
快速選課首次成功回應的 `data.branch` 作為院區預設（例如 dl 對應大林），同步院區選單、
後續查詢與清除條件的院區；取得回應前暫以登入資料院區為初值，未提供時使用 all。
手動選擇院區後不再以 API 回應覆寫，切換使用者重新取得預設。
回應為 `data: [{ id, branch, name }]`；選取院區時依 branch 篩選，全部院區顯示全部屬性。
屬性 ID 帶入 `/course/quick` 的 category；切換院區或使用者時清空原選取屬性與 category。
屬性載入採 Spinner，失敗可重試，401 清除登入；離頁或換帳號取消請求，避免沿用舊帳號資料。

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
學程明細呼叫 GET `/dashboard/programInfo/{id}`，顯示 `totalCredit`、`passCredit`、
`passRealCredit` 及 `programCategory`。燈號逐筆保留數量：`p` 綠色 OK、`q` 綠色 X、
`w` 黃色、`d`／`d.` 黑色 X、`o` 紅色。課程 `status` 非空值歸已上課，空值歸其他可選課；
`morning`／`other`（含中括號）不提供連結，其餘有效課程 ID 連到 NLMS 課程頁。
學程不存在、ID 空白、Session 過期、網路失敗與格式異常均會顯示失敗狀態；
切換學程或使用者時取消舊請求，避免顯示前一筆內容。

「學習歷程」分頁使用全部歷史課程，提供年份篩選與卡片／列表切換，沿用快速選課的
文字、間距、顯示切換與分頁元件；電腦預設列表，手機及平板預設卡片。
年份預設顯示當年；桌機和平板第一排三欄，最近兩年加上最右側「更多」，比照已結束學程。
其餘年份在「更多」選取，選取後顯示「更多：年份」；手機維持下拉選單。
選單涵蓋至少最近十年，也保留更早的資料年份。
課程按日期由新到舊排列。類型、簽到時間、通過時間目前沒有對應 API 欄位，
依確認暫顯示「—」，不以 classroom 或 start 推測這些資料。
驗證此分頁可執行 `node scripts/test-learning-history.cjs`。
通知信 HTML 放在 sandbox iframe，禁止腳本、表單與外部資源載入。
通知信未讀狀態依 `read` 欄位顯示；系統公告未提供 `read` 時預設未讀。點開通知信或公告後立即將圓點變淡，並在 localStorage 依帳號與訊息類型保存已讀 ID，重新載入資料時合併本機已讀紀錄。未串接後端已讀更新 API，因此不同裝置或瀏覽器不會同步；清除網站資料後，本機紀錄也會清除。

公告 API 只有標題與日期，沒有公告全文、附件或詳細頁網址；學程簡介／說明文字
目前沒有對應欄位，不能由學分資料推導。外訓歷程仍待對應 API，現有外訓分頁
沿用學程選擇區，不代表已接到個人外訓紀錄 API。

頁面恢復已儲存的登入時，先 POST `/session`，確認成功後才載入個人資料。
檢查中顯示進度；網路失敗保留儲存資料並提供重試，HTTP 401 或 `SESSION_EXPIRED`
才清除登入資料。`/session` 回傳 `data: {}`，無法在本機使用者資料遺失時重建姓名等欄位。
登入提供預設勾選的「保持登入」選項。勾選時 API 傳 `keeplogin: 1`，
未勾選傳 `0`；API 呼叫端只有 `true`、`1`、`'1'` 會正規化為 `1`，其餘為 `0`。
使用者資料與 `remember` 選擇快取在同來源分頁共用的 `localStorage`。
未勾選時只有瀏覽器 Session 標記存在才可恢復；勾選時可在重新開啟瀏覽器後
嘗試恢復，仍須由 `/session` 確認後端登入尚未過期。新分頁不受 `sessionStorage` 隔離影響。
快取與標記都不代表已登入，每次開頁仍先 POST `/session`，確認成功後才顯示個人資料。
其他分頁登出時同步清除本頁狀態，其他分頁換帳號時重新驗證；
重新整理、關閉分頁及切換頁面不會主動呼叫登出 API，也不使用定時器自動登出。
Session 標記不設定 `Max-Age`／`Expires`；瀏覽器的 Session 還原功能可能在重新開啟後
恢復這類 Cookie，所以前端無法精準觀察整個瀏覽器的關閉，也無法在後端已回傳 401 時維持登入。
後端須確認 `keeplogin: 0` 使用 HttpOnly Session Cookie，並清除／取代先前持續登入憑證；
`keeplogin: 1` 則提供有期限的持續登入憑證，讓重新開啟瀏覽器後的 `/session` 仍可確認登入。
兩種模式的 Cookie 與伺服器 Session 到期規則由後端控制，「保持登入」不代表永不過期。
[MDN：Session Cookie 生命週期](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
專案首頁以外的所有路由都由 `RequireLogin` 保護，包括直接開啟網址、課程詳細頁、
外訓資料、功能選單頁、404 及未知路徑。未登入或 Session 驗證失敗時使用 replace 導向
`/#login`（由 Router 套用部署的 `/tzuchi/react` 基底路徑）；驗證中只顯示登入確認提示，
受保護頁面不會掛載或顯示資料欄位。登入區會捲入畫面並聚焦帳號欄。
API 401、跨分頁登出後同樣會導回首頁；瀏覽器快取還原頁面時重新確認 Session。
外部網址依原連結正常開啟，未加入登入攔截。驗證可執行 `node scripts/test-route-auth.cjs`。
登入與登出成功回傳非空的 `modurl` 時，都會背景 GET 並帶 Cookie；
`no-cors` 回應不可讀，不能以此宣告 Moodle 已登入／登出。
詳見 [API 檢查紀錄](api-integration-audit.md) 與 [Moodle 後端確認問題](moodle-backend-questions.md)。

本機執行 `npm run dev`，`/tzuchi-api` 由 webpack 代理到內網 API，讓瀏覽器共用
同來源 Cookie。修改 webpack 設定後需重新啟動開發伺服器。正式版使用內網完整網址，
建議部署在與 API 相同來源的 `/tzuchi/react/`。

驗證：`node scripts/test-dashboard.cjs`；production build 使用
`npx cross-env NODE_ENV=production webpack --config config/webpack.prod.babel.js`。

## 保持登入的後端 Cookie 規格

本儲存庫沒有登入 API 後端。前端已傳送 `keeplogin` 並使用 `credentials: include`。登入憑證須由 API 的 `Set-Cookie` 設定，不可透過 JSON 或 localStorage 儲存。現有 `tzuchi_lms_session` 只是瀏覽器生命週期標記，不是登入憑證。

- 勾選 (`keeplogin: 1`)：發出 HttpOnly Cookie，以 Max-Age 或 Expires 設定後端核定的持續登入期限。
- 未勾選 (`keeplogin: 0`)：發出不帶 Max-Age／Expires 的 HttpOnly Session Cookie，撤銷並取代先前的持續登入票證。
- 正式環境須配合 HTTPS 設定 Secure；目前內網 API 使用 HTTP，須配合部署調整。Cookie Path 須涵蓋認證與 dashboard API；同站可採 SameSite=Lax，跨站需另確認 SameSite=None; Secure 與 CORS。
- 登出時在伺服器撤銷票證，並以相同名稱、Domain、Path 搭配 Max-Age=0 清除 Cookie。

驗收：在瀏覽器 Network 檢查 Set-Cookie、Application 確認 HttpOnly；勾選後重新開啟瀏覽器仍能通過 /session，未勾選時不得保留持續登入票證，登出後舊票證必須失效。HttpOnly 阻止 JavaScript 讀取 Cookie，不能阻止所有機器人。參見 [MDN Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie)。
