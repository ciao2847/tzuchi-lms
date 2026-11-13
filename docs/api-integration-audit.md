# 學習網 API 串接檢查

本次檢查以提供的登入、登出、Session、Dashboard 附件及 programInfo 規格為準。
以下區分真實內網端點檢查與模擬回應測試，不將未實測的登入成功流程列為已通過。

## 真實 API 檢查

從工作環境連到 `http://10.2.10.236:8064/tzuchi/api`，使用既有 API Key，
每個請求都沒有帶使用者 Session Cookie，也未輸入帳密。沒有借用或更動瀏覽器中的登入。

| 端點 | 方法 | 實際結果 | 可證明的範圍 |
| --- | --- | --- | --- |
| `/session` | POST | HTTP 401，`SESSION_EXPIRED`，訊息「請重新登入」 | 未登入錯誤格式正確 |
| `/dashboard` | GET | HTTP 401，`SESSION_EXPIRED`，訊息「請重新登入」 | 未登入保護正常 |
| `/dashboard/programInfo/3324` | GET | HTTP 401，`SESSION_EXPIRED`，訊息「請重新登入」 | 未登入保護正常 |
| `/login`，不帶帳密 | POST | HTTP 403，`DATA_EMPTY`，訊息「無資料」 | 路由可連線且拒絕空輸入；此代碼未列在提供的登入範例 |
| `/logout` | POST | HTTP 200，`success: true` | 匿名登出可成功；未證明有效 Session 與 Moodle 都已清除 |

尚未實測：有效帳密登入、錯誤帳密的 `AUTH_ACCOUNT_ERROR`、有 Session 的個人資料、
登入後的 `PROGRAM_ERROR`／`INPUTDATA_EMPTY`、瀏覽器跨來源 Cookie／CORS、Moodle 登入登出。
這些成功及失敗情境已有模擬測試，但仍需在瀏覽器以測試帳號驗收。

## 程式核對及修正

- 登入統一 POST JSON `{uid, pwd, keeplogin}`；只修剪帳號，不修改密碼。
  「保持登入」預設勾選；勾選傳 `1`，未勾選傳 `0`。
  API 呼叫端只有 `true`、`1`、`'1'` 正規化為 `1`，`false`、`'0'` 等不會誤啟用持續登入。
- 同來源分頁共用使用者資料快取及 `remember` 選擇。未勾選時必須有瀏覽器 Session 標記，
  勾選則可跨次開啟瀏覽器嘗試恢復；兩者都須經 `/session` 確認成功後才能顯示個人資料，
  單靠 `localStorage` 不會自動登入。
- 登入、登出、Session 及個人資料請求帶 `X-API-Key` 與 `credentials: 'include'`，不快取。
- POST `/session`、POST `/logout` 沒有請求參數或 body；Dashboard 與 programInfo 使用 GET。
- 恢復儲存登入前先檢查 Session，檢查中不載入個人資料；失敗顯示狀態與重試。
- HTTP 401 或 `error.code: SESSION_EXPIRED` 會清除登入狀態並提示重新登入；
  HTTP 200 卻帶過期錯誤時也不會誤當成功。
- 保留後端 `error.code`、`error.message`、`error.fields`；不再把詳細錯誤顯示成泛用 `HTTP 401 Error`。
- 網路錯誤與資料格式錯誤分別顯示，不將網路錯誤當成密碼錯誤或直接清除儲存登入。
- 登出成功後才清除本機登入；失敗可以重試，避免重複送出登出。登出回傳的 `modurl` 已補上背景呼叫。
- 登入、Session 檢查、學習歷程、學程明細與登出有載入文字／狀態提示；可讀取的進度不代表 Moodle 已完成同步。
- `programInfo` 保留燈號數量及 `p/q/w/d/d./o` 對應、三種學分數；
  已上／可上課依 `course.status` 分組，`morning`／`other` 不產生超連結。
- 有效課程連到已提供的 NLMS 課程網址，避免未知 ID 導到目前仍有示範資料的詳細頁。

## 驗證指令

```
node scripts/test-api-contracts.cjs
node scripts/test-auth-session.cjs
node scripts/test-program-info.cjs
node scripts/test-dashboard.cjs
node scripts/test-learning-history.cjs
node scripts/test-quick-courses.cjs
```

這六組測試通過；涵蓋方法、標頭、Cookie 選項、登入參數、錯誤格式、Session 狀態及重試、
舊請求取消、登出與 Moodle URL 呼叫、燈號、學分、課程分組與連結例外。
正式編譯使用 `npx cross-env NODE_ENV=production webpack --config config/webpack.prod.babel.js`。
本次正式編譯成功，`dist/` 已更新。

另外執行既有 `test-speech-proxy.cjs` 時，CA 檢查通過，但工作環境禁止啟動 PHP（`spawnSync php EPERM`），
因此語音代理 PHP 測試未完成；與本次登入／學程變更無關，沒有修改代理程式。

## 待後端補齊

Moodle 的環境網址、驗證身分方式、Cookie、登出 `sesskey` 與成功回報契約，
整理在 [Moodle 後端確認問題](moodle-backend-questions.md)，尚未發送給後端。
另需確認登入回傳的院區欄位、無本機資料時如何取得使用者資料、學程簡介欄位，
以及外訓歷程的獨立 API；現有文件無法證明這些資料已提供。

登入保留規則另需後端確認：`keeplogin: 0` 應使用 HttpOnly Session Cookie，
並清除或取代先前的持續登入 Cookie；`keeplogin: 1` 應提供有期限的持續登入憑證，
讓重新開啟瀏覽器後可由 `/session` 確認登入，並說明有效期、撤銷及登出規則。
沒有 `Max-Age`／`Expires` 的前端 Session 標記
仍可能被瀏覽器的 Session 還原功能保留，因此不能宣稱前端能精準偵測整個瀏覽器關閉；
實際有效性仍由後端 Session 決定。
[MDN：Session Cookie 生命週期](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
