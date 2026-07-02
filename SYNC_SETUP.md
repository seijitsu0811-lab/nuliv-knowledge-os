# NuLiv Knowledge OS Notion Sync

This site is a static GitHub Pages frontend. Notion changes are synced into `sync-data.js` by GitHub Actions.

## Required setup

1. Create a Notion internal integration.
2. Copy its integration secret.
3. Share the `NuLiv Knowledge OS｜知識庫` database with that integration.
4. In GitHub repo settings, add these repository secrets:
   - `NOTION_TOKEN`: the Notion integration secret.
   - `NOTION_DATABASE_ID`: `4d6710708c984ac588482c61523a955d`
   - `NOTION_FAQ_DATABASE_ID`: `ecf074541a9d4088b59b94dfde056fdd`

## Sync behavior

- Manual sync: GitHub Actions -> `Sync Notion Knowledge Base` -> `Run workflow`.
- Auto sync: every 30 minutes.
- After sync commits `sync-data.js`, GitHub Pages rebuilds the public site.
