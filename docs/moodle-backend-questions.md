# Moodle 登入／登出：後端待確認事項

本文件可交給後端確認；尚未發送給任何人。以下區分前端呼叫與 Moodle 已完成登入／登出，兩者不能視為同一件事。

## 前端目前能做的事

登入 API 成功且 `data.modurl` 有值時，前端會背景 GET 該網址，使用 `credentials: 'include'` 與 `mode: 'no-cors'`。登出 API 回傳的 `data.modurl` 也會採相同方式背景呼叫；API 與 Moodle 的執行結果須分別驗證。

`no-cors` 的跨來源回應是 opaque，JavaScript 讀不到 HTTP 狀態及內容；請求完成不能證明 Moodle Session 已建立或已清除。`fetch` 也不會將 HTML 當頁面執行腳本或操作確認表單。這是目前呼叫方式的能力限制，並非已確認後端失敗。[MDN：Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

開發環境的 `/tzuchi-api` 經 webpack 代理並改寫 Cookie 的 Domain／Path；`modurl` 目前直接請求回傳的網址，沒有經過相同代理。因此本機 API 登入成功，也不能推論另一個主機名稱上的 Moodle 可以讀到相同 Cookie。

## 可直接交給後端的問題

1. **正式與測試環境的網址是什麼？** 請提供前端、API、Moodle 的完整 origin，以及登入／登出 `modurl` 範例。回傳值必須是使用者瀏覽器可連線的位址；`127.0.0.1` 指向使用者自己的電腦，不能拿來代表遠端 Moodle。正式 HTTPS 頁面也需避免呼叫 HTTP 服務。[IANA：Loopback](https://www.iana.org/help/abuse-answers)、[MDN：Mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content)

2. **Moodle 如何辨識這次登入的使用者？** `index_auto_login.php` 是讀取既有的哪一個 Session，還是使用短效、一次性登入票證？請提供必要參數、有效期限、重放處理、失敗回應與可允許的返回網址。若端點依賴 API Cookie，請說明它與 Moodle 的實際網域及 Session 關係；前端不會再次傳送使用者密碼給 `modurl`。

3. **是否明確支援背景 GET？** 一次 GET 加上 HTTP 轉址就能建立 Moodle Session，還是需要 JavaScript、自動送出表單、頁面互動或頂層導向？請提供完整轉址順序與最終回應。如果必須載入頁面執行程式，請提供對應 SSO 流程，不以單純 fetch 當成已完成。

4. **Cookie 與跨來源設定如何部署？** 請列出 API 與 Moodle 各自 Cookie 的 Domain、Path、SameSite、Secure、HttpOnly。`credentials: 'include'` 不會把 localhost Cookie 改成遠端網域 Cookie，也不能繞過 SameSite 或瀏覽器第三方 Cookie 限制；真正跨站時，`SameSite=None; Secure` 仍不保證所有瀏覽器允許。[MDN：Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)、[MDN：Third-party cookies](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies)

5. **前端如何確認 Moodle 登入／登出成功？** `/session` 只證明學習網 API Session 有效，還是同時檢查 Moodle？若未涵蓋 Moodle，請提供可驗證的狀態 API、回傳狀態或 SSO 完成回呼，以及逾時／失敗時的使用者處理。若改用可讀取的跨來源 fetch，請允許明確的前端 origin 與 credentials，不能使用 `Access-Control-Allow-Origin: *`；JSON 請求及 API Key 標頭也需正確處理 OPTIONS。這些設定仍不會排除 Cookie 政策限制。[MDN：CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

6. **登出網址是否包含必要的 Moodle 登出驗證？** 範例只提供 `/tzuchi/lms2/login/logout.php`。Moodle 官方 4.5 分支原始碼顯示：使用者已登入但缺少有效 `sesskey` 時，會先顯示確認頁，不直接登出。請確認實際 Moodle 版本及自訂行為，回傳可完成登出的完整 URL，或由後端提供正式的 SSO 登出端點。也請確認 API 登出後，用來驗證 Moodle 登出的憑證是否仍有效。前端不自行推測 `sesskey` 或略過確認機制。[Moodle 官方 logout.php 原始碼](https://raw.githubusercontent.com/moodle/moodle/MOODLE_405_STABLE/login/logout.php)

7. **登出範圍與失敗策略是什麼？** 是只結束學習網 Session、同時結束 Moodle，還是連身分提供者也登出？API 已成功但 Moodle 呼叫失敗時，是否提供新的登出 URL 或重試端點？使用者下一次登入另一帳號時，如何避免沿用上一帳號的 Moodle Session？請明確區分「學習網已登出」與「Moodle 已確認登出」。

   最新登入規則提供預設勾選的「保持登入」。未勾選傳 `keeplogin: 0`，
   請確認使用 HttpOnly 工作階段 Cookie，並清除／取代舊的持續登入 Cookie／票證。
   勾選傳 `keeplogin: 1`，請提供可跨次開啟瀏覽器使用的持續登入憑證，說明期限、撤銷及
   登出方式，並確認 `/session` 如何恢復 API 與 Moodle 的登入；「保持登入」不代表永不過期。
   未勾選的前端快取仍受無持續有效期的工作階段標記限制，但瀏覽器的「還原上次工作階段」
   可能保留這類 Cookie，前端無法可靠判斷整個瀏覽器何時退出，也不能將關頁請求視為可靠登出。

8. **若需 iframe 或導向，採用哪個正式流程？** 隱藏 iframe 不會解決第三方 Cookie 限制，且可能被 Moodle 的 `X-Frame-Options` 或 CSP `frame-ancestors` 阻擋。請提供經確認的嵌入來源設定，或採頂層 SSO 導向並返回前端。若採 `postMessage` 回報完成，需約定訊息格式、特定 targetOrigin、檢查來源視窗／origin 及一次性識別值。[MDN：X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options)、[MDN：postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

## 驗收方式

請提供測試帳號與可連線環境，於瀏覽器逐一驗證：學習網登入成功後直接進 Moodle 不需再登入；重新整理後 `/session` 能確認學習網狀態；登出後 Moodle 的受保護頁面也要求重新登入；Session 過期回傳 HTTP 401 與 `SESSION_EXPIRED`；換帳號與阻擋第三方 Cookie 時有明確結果。只看到 `modurl` 請求發出或 Promise resolve，不算 Moodle 登入／登出驗收通過。

另請補充登入使用者的院區欄位與代碼（目前範例缺少 `branch`），以及學程「簡介」的回傳欄位；`programInfo` 範例目前只有類別、課程、燈號與三種學分數，前端不應自行補造。
