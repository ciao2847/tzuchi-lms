# 學術演講 Proxy 部署

網頁只請求同來源的 `/tzuchi/react/api/academic-videos.php`。PHP 在伺服器端
讀取 `https://nlms.tzuchi.com.tw/speech/sp.json`，驗證回應為 JSON 陣列後回傳。
縮圖及演講頁面的連結仍使用正式站。

## 部署

1. 執行 production build，將 `dist` 的全部內容放到主機 `react` 目錄，包含
   `api/academic-videos.php` 與 `api/cacert.pem`。網站 URL 需對應 `/tzuchi/react/`。
2. 主機必須能執行 PHP 7 或以上，並啟用 PHP cURL。若使用 IIS，必須已設定
   PHP FastCGI handler；單純的靜態檔案主機不能執行這個 Proxy。
3. 主機需能連線到正式站的 HTTPS 443。Proxy 會透過 `CURLOPT_CAINFO` 使用
   同目錄的 `cacert.pem`，不需為此修改全域 `php.ini`。主機 PHP 的執行帳號
   必須能讀取此檔案。本程式會驗證 TLS 憑證及主機名稱。
4. 網站的路由重寫規則需保留實際 PHP 檔案，不能將 `/api/academic-videos.php`
   重寫成 React 的 `index.html`。

部署後，在瀏覽器 Network 確認 `/tzuchi/react/api/academic-videos.php` 回傳
HTTP 200 與 JSON 陣列，再檢查學術演講卡片。

## 錯誤判斷

- 404：未上傳 `dist/api`，或網站目錄對應錯誤。
- 回傳 PHP 原始碼、下載 PHP 檔案或 500：主機的 PHP 執行設定需檢查。
- 503 且訊息提到 cURL：主機 PHP 未啟用 cURL。
- 503 且 `code` 為 `CA_BUNDLE_UNAVAILABLE`：未上傳 `cacert.pem`，或 PHP
  執行帳號無法讀取該檔案。
- 502：主機無法取得來源資料、TLS／連線失敗、超過 15 秒、回應超過 5 MiB，
  或來源並非有效的 JSON 陣列。先檢查 PHP／Web 伺服器記錄及對外連線。
- 回傳 HTML：可能被登入頁或 React 的路由重寫攔截。

502 的 JSON 現在會包含 `code`，用來區分：

- `UPSTREAM_CURL_ERROR`：以 `curlCode` 及 `curlMessage` 判斷連線錯誤。
  `upstreamStatus: 0` 表示未取得來源的 HTTP 狀態。
- `UPSTREAM_HTTP_ERROR`：來源回傳非 200，以 `upstreamStatus` 查看實際狀態。
  例如 301／302 是轉址，403 是拒絕存取。
- `UPSTREAM_RESPONSE_TOO_LARGE`：回應超過 5 MiB。
- `UPSTREAM_INVALID_JSON_ARRAY`：HTTP 200 的內容不是 JSON 陣列。

詳細 cURL 錯誤只寫入主機的 PHP error log，前綴為 `[speech-proxy]`，不會在
回應中公開憑證檔案路徑。請依實際代碼修正對外連線或 PHP CA 憑證設定。

## CA 憑證檔維護

`public/api/cacert.pem` 取自 curl 官方的 Mozilla CA 根憑證庫（MPL 2.0）：

- 說明：https://curl.se/docs/caextract.html
- 版本：https://curl.se/ca/cacert-2026-09-25.pem
- 官方 SHA-256：https://curl.se/ca/cacert-2026-09-25.pem.sha256
- 已核對的 SHA-256：`a41b5d356aea97a529fe27e0f7316d2f9d946d75927476cf9cf1b90637d00505`

後續需定期從 curl 官方取得新版、核對官方雜湊，並重新 build／部署。

`curlCode: 60` 代表憑證驗證失敗；缺少或過舊的 CA 庫是其中一種可能。
若補上此檔後仍回傳 60，請提供 PHP error log 中 `[speech-proxy]` 的
`curlError`。還需排查來源憑證是否過期、主機時間是否正確、來源憑證鏈是否
完整，以及公司 HTTPS 攔截是否使用內部 CA。內部 CA 應由管理員確認後提供，
不能單憑失敗連線取得的憑證直接加入信任庫。

開發環境使用 webpack 將相同的 API 路徑代理到正式站，因此本機開發不需要
執行 PHP。
