# Bio-Creator-Suite

## Biodata-Pro static application

The redesign uses the root `index.html`, `style.css`, `styles/clarity.css`,
`script.js` and `js/` ES modules. There is no build step for this application;
serve these files over HTTP(S), not `file://`. Biodata and photos stay in memory.
Only the language preference is persisted. The existing analytics, font and PDF
CDN integrations remain; local drafts do not imply zero third-party requests.
The actual source inventory is 29 ordinary fields plus photo (30 controls); the
earlier audit incorrectly counted 30 ordinary fields. All are retained.

Responsibilities: `state.js` owns the draft, `localization.js` the four languages,
`templates.js` the ten unchanged template definitions, `rendering.js` safe text
insertion, `validation.js` validation, and `export.js` print/PDF generation.
`script.js` connects the accessible UI to these modules. Wedding cards remain
in the independent `wedding-card.html`; privacy stays at `privacy.html`.

### Implementation/deployment decision

Phase 0 found production HTML/JS/CSS matching the root static sources after
newline normalization. This supports the static path but does not prove the
deployed revision or hosting settings. Hosting-dashboard access has not been
established. Confirm the publishing branch/directory before releasing.

The existing `npm run build` targets the **separate React scaffold**: Vite uses
`client/` (whose expected `index.html` is absent), outputs `dist/public`, and the
server bundle serves that directory. `.replit` also names `dist/public`.
That build does not copy the root static application. These settings and the
unused scaffold are intentionally unchanged; do not use that build as a static
release command. No migration, backend or cloud draft has been introduced.

### Checks

Run `node --test tests\*.test.mjs` for the complete suite (Node 24 and an existing
Chrome/Edge executable). No package installation is required. The browser helper
uses an isolated temporary profile, a debugging pipe (no debugging port or
changes to your browser configuration), and an ephemeral loopback HTTP server.
It closes the browser/server and removes its profile afterwards. The export and
wedding tests use the existing public CDN libraries and require network access;
they fail rather than silently skip if those libraries cannot load.

Use `node script\serve-static.mjs` for a loopback-only preview at
http://127.0.0.1:4173. This is a development helper, not deployment.

Restart this preview process after changing `script/serve-static.mjs`, including
its public-file allowlist. An already-running process keeps the old server code
even though it serves updated HTML/JS files from disk. If Print opens a
`Marriage-Biodata.html` page showing "Not found", restart the preview server and
verify that URL returns HTML before retrying Print. Keep the editor tab open
while restarting; refreshing it discards the memory-only draft.
Automated browser tests start fresh isolated servers, so their success does not
establish that an older preview process has picked up server changes.

Phone acceptance remains the legacy 10–13 character regex (including spaces and
hyphens), not a newly normalized international-phone policy. All fields remain
optional. Template identities and the existing long-document export branches
(standalone canvas shrinks to one page; bundled html2pdf uses page-break rules)
remain unchanged pending explicit policy approval.

### Implemented behavior and test scope

- B/Clarity structure with A/Heirloom warm neutrals, burgundy actions and restrained
  serif display type. Application styles do not recolor the ten document templates.
- All ten accessible gallery choices select the creator template. Personal,
  Family, Contact and Design & Review stages preserve the same draft.
- Persistent include/hide controls cover all 29 fields and photo. Hiding retains
  the value in memory; omitted photo retains the original placeholder behavior.
- Desktop live preview and a native mobile preview dialog use the same safe
  renderer. User values are inserted as text after label localization; markup
  and words matching template labels cannot become executable HTML or translations.
- Empty drafts are not replaced by fictional samples and cannot export. Samples
  appear only in discovery. Photo replacement is decoded before acceptance;
  invalid images keep the previous photo. The existing `image/*` policy remains.
  A JPEG/PNG-only or 10 MiB limit is **not** silently introduced; the old
  unenforced size claim was removed. A new restriction still needs approval.
- DOB calculations retain ages 18–99 and now clear stale calculated age for empty,
  invalid or out-of-range dates. Boundary/date cases are tested.
- Phone acceptance is deliberately unchanged; validation errors are localized,
  associated with inputs, and focus the Contact stage. All fields stay optional.
- PDF libraries load on demand from the existing primary/fallback CDNs. Asset
  failures, blocked popups, cancellation and retry readiness are explicit.
  Cancellation suppresses download; an in-flight renderer may finish computing.
  Desktop print views stay open for review/retry rather than closing on a timer.
  Neither a print dialog nor a download request is reported as a confirmed save.
- Document backgrounds now fill at least one A4 page in previews and export;
  branding sits inside the template with reserved bottom space. Long content
  can still grow; no text or photos are stretched. Template restyling is deferred.
- Downloads use `Marriage-Biodata.pdf` without a name, or
  `Marriage-Biodata-<name>.pdf`, retaining English and Indic characters.
  Desktop printing uses the same title and the static `Marriage-Biodata.html`
  shell instead of `about:blank`, giving browsers a named URL fallback.
  Draft data is passed only in memory, never through that URL or storage.
  Native save-dialog suggestions remain browser/print-driver controlled and
  require a manual check; automated tests verify titles and download filenames.
- Existing template rendering functions/helpers were checked against the
  pre-redesign source and retained verbatim. Privacy and wedding HTML are unchanged.

Automated coverage includes state/validation/localization, all 40 template/locale
render combinations (including literal HTML-like input and field-value fidelity),
keyboard tab navigation and dialog focus, 320/390/768/1024/1440 px reflow in all four
languages, actual mobile document fitting, storage/network checks with a synthetic
marker, photo decode/recovery, empty export, blocked popup and cancellation.
Real html2pdf tests generate 40 PDFs, ten sparse/name-less PDFs and a
long-content multipage PDF. Geometry checks cover A4 backgrounds and in-template
branding across all four languages and ten templates; review actions maintain
at least 20 px separation at all tested viewport widths. Desktop
tests create four print documents and Chrome PDFs. The browser print method is
intercepted to avoid an OS dialog: this tests print-document construction and
Chrome PDF output, not a human saving from a native print dialog. The alternate
single-page shrinking branch is checked with a deterministic canvas/PDF double.
Wedding tests exercise 4 themes, 3 fonts, 6 avatars, mouse/touch event handlers,
mobile preview toggling and real html2canvas PNG output.

Release checks still requiring real devices/human review: iOS Safari and Android
download/print UX, OS print cancellation, screen-reader announcements, virtual
keyboard/safe-area behavior, 200% zoom/forced colors, human-reviewed translations
and Indic shaping in final PDFs. Headless Chromium PDF generation is not proof
that every viewer/device renders identically. Some older marketing/SEO copy and
existing document colors remain outside the newly localized UI; template
contrast/field-coverage changes need separate approval to preserve identity.

### Release and rollback gates

Before deployment, verify the real publishing source, all root assets and `js/`
module MIME types, direct public URLs, four-script font/output quality and real
mobile/desktop export behavior. Include `Marriage-Biodata.html` alongside
`index.html`; it is required for desktop printing. Publish the static files atomically: cached old
HTML mixed with missing new modules is not a valid release. Retain the previous
complete static release so rollback restores HTML, CSS and JavaScript together.
No push or deployment is automatic.
