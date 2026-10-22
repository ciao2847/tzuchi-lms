# Apache 前端路由部署

React 使用 BrowserRouter，部署路徑為 `/tzuchi/react/`。重新整理或直接開啟
`/tzuchi/react/calendar` 時，Apache 必須回傳 React 的 `index.html`。

Build 會將 `public/.htaccess` 複製到 `dist/.htaccess`。部署時將此檔案與
`index.html` 一起上傳到網站的 `react` 實體目錄；注意上傳工具可能隱藏點開頭檔案。
設定只處理該目錄下的前端路由，保留實體檔案、目錄、API 與靜態資源請求。
不會修改同層 `/tzuchi/api/`。

Apache 2.4 需啟用 `mod_rewrite`，並允許這個實體目錄使用 rewrite 指令。
若 `.htaccess` 被忽略，請管理員確認對應的 `<Directory>` 至少允許
`AllowOverride FileInfo`；使用 `AllowOverrideList` 時也需允許相關 rewrite 指令。
修改 Apache 主設定後需重新載入伺服器。也可以由管理員將同樣規則直接加入
對應的 Directory 設定。

部署後驗證：

- 直接開啟並重新整理 `/tzuchi/react/calendar`，應回傳 HTTP 200 並顯示行事曆。
- `/tzuchi/react/pick/123` 應能進入 React 路由。
- 實際 JS、CSS 與 `/tzuchi/react/api/academic-videos.php` 應正常回應。
- 不存在的 `/tzuchi/react/js/missing.js` 應保持 404，不能回傳 HTML。

若上傳後出現 500，請檢查 Apache error log，確認模組及 AllowOverride 權限。
