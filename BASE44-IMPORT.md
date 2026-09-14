# Add FieldOps to Base44 from this repo

## Option A — Base44 + GitHub (recommended)

1. Open this repo: https://github.com/brianb4vrc-lab/fieldops-base44
2. In Base44 (https://app.base44.com/), create or open your app.
3. Connect **GitHub** (Base44 settings / GitHub integration).
4. Sync this repository so `base44/entities/*.jsonc` land in your app.
5. Run:
   ```bash
   npx base44 entities push
   npx base44 deploy -y
   ```

## Option B — CLI from scratch

```bash
npx base44 create
cd your-app
# copy base44/entities and base44/config.jsonc from this repo
npx base44 entities push
```

## Option C — Chat prompt

Paste into Base44 chat:

> Import entity schemas for multi-company FieldOps. company_id on every record with RLS. Entities: Company, Job, Activity, Equipment, Vehicle, TimeEntry, DailyReport, ChangeOrder, Drawing, PttPeer. User fields: company_id, is_company_admin. Seed VRC as code vrc.

## Live links

- Repo: https://github.com/brianb4vrc-lab/fieldops-base44
- Standalone HTML app (phones): use field-super-app from vic-russell-field-apps repo / local download
