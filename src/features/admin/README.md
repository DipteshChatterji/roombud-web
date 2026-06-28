# Admin portal (future)

This directory is reserved for the RoomBud admin portal.

Planned structure:

```
src/features/admin/
  layout/
  pages/
  components/
  adminRoutes.ts
```

Routes will live under `/admin/*` with authentication and role checks.
Do not add admin code until backend `/api/admin/*` endpoints are ready.
