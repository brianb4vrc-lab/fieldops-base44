# FieldOps for Base44

This folder is the **backend data model** (and SDK examples) for the multi-company construction app.

## What Base44 expects

| Path | Purpose |
|------|---------|
| `base44/config.jsonc` | Project config |
| `base44/entities/*.jsonc` | Database tables (entities) |
| `base44/.app.jsonc` | Your app id after `base44 create` |
| `seed-vrc-data.json` | VRC starter jobs/equipment (import manually or via function) |
| `frontend-sdk-examples.js` | How the React frontend calls the API |

Base44 frontends are **React/Vite**, not a single HTML file.  
Use these entities after: `npx base44 create` (React template), then copy `base44/entities/*` into your project and run:

```bash
npx base44 entities push
# or
npx base44 deploy -y
```

## Company isolation

Every operational entity has `company_id` and RLS so users only see their company.

## VRC seed

See `seed-vrc-data.json` and `BASE44-IMPORT.md`.
