# Newsletter signups → Google Sheet — setup (one-time)

The website now has a working signup (top-nav "Join List" button + a popup on a
visitor's first visit) that collects **Name, Email, and Phone**. To make those
signups land in your Google Sheet, do the steps below once. It's mostly clicking.

**Your sheet:**
https://docs.google.com/spreadsheets/d/1CkgM8HP8eaQ7qA0hdf0Ep4iePWSIVxVSKVMRhh0tdsc/edit

---

## Step 1 — Open the script editor
1. Open the sheet (link above).
2. Top menu: **Extensions → Apps Script**. A new tab opens with a code editor.

## Step 2 — Paste this code
Delete whatever is in the editor, paste this in its place, then click the **Save**
icon (💾).

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    var name = (data.name || "").toString();
    var email = (data.email || "").toString().toLowerCase();
    var phone = (data.phone || "").toString();
    var subscribedAt = (data.subscribedAt || new Date().toISOString());

    // Add a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date", "Name", "Email", "Phone"]);
    }

    // Skip if this email is already in the sheet.
    var lastRow = sheet.getLastRow();
    if (lastRow >= 2) {
      var existing = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
      for (var i = 0; i < existing.length; i++) {
        if ((existing[i][0] || "").toString().toLowerCase() === email) {
          return ContentService
            .createTextOutput(JSON.stringify({ result: "duplicate" }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    sheet.appendRow([subscribedAt, name, email, phone]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## Step 3 — Deploy it as a web app
1. Top right: **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description:** `COH newsletter`
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Google will ask you to **Authorize access**. Approve it. If you see a
   "Google hasn't verified this app" warning, click **Advanced → Go to (project name)**,
   then **Allow**. (This is normal for your own scripts.)
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfy....../exec`

## Step 4 — Give the URL to the site
Two ways:

- **Easiest:** paste the URL back to me in chat and I'll wire it in.
- **Or yourself, in Vercel:** Project → **Settings → Environment Variables** → add
  - **Name:** `SHEET_WEBHOOK_URL`
  - **Value:** the web-app URL from Step 3
  - Apply to **Production** (and Preview if you want) → **Save**, then redeploy.

For local testing, the same value goes in a file named `.env.local` at the repo root:
```
SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfy....../exec
```

---

## How it behaves
- **With `SHEET_WEBHOOK_URL` set:** every signup is appended to your sheet as a row
  (Date, Name, Email, Phone). Repeat emails are skipped automatically.
- **Without it (local dev only):** signups save to `data/newsletter-subscribers.json`
  so you can test. This does NOT persist on Vercel — that's why the sheet URL is
  required for the live site.

## Updating the script later
If you change the Apps Script code, you must **Deploy → Manage deployments → Edit
(pencil) → Version: New version → Deploy** for changes to take effect. The web-app
URL stays the same.
