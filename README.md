# tracker

## Dev

```bash
cd /path/to/mam && npm start
# Open http://localhost:9080/bog/tracker/app/-/test.html
```

## Build

```bash
npx mam bog/tracker
```

## Deploy

Push to `master` → GitHub Actions → GitHub Pages: https://bog.github.io/tracker/

Feature branches deploy to: https://bog.github.io/tracker/{branch-name}/

## Desktop (Tauri)

Tag `v*` triggers Tauri build via GitHub Actions.
