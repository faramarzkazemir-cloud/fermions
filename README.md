# Fermions on solitons

Interactive demo for a staged scientific feasibility study: kink + Yukawa bound modes (1+1), soft Q-ball + Dirac bound states (3+1), and electromagnetic charge via Mechanism A.

**Repo:** https://github.com/faramarzkazemir-cloud/fermions  
**Demo branch:** `demo/polished-ui`

## Verdict (from the report)

| Claim | Answer |
|-------|--------|
| Existence | **YES** |
| Stability evidence | **YES** (not a full proof) |
| Electron compositeness claimed? | **No** |
| All-neutral EM charge | **HARD NO** |
| Mechanism A | **YES** (feasibility) |

## Run locally

```bash
git clone https://github.com/faramarzkazemir-cloud/fermions.git
cd fermions
git checkout demo/polished-ui
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173/fermions/`).

## Live demo (GitHub Pages)

After this branch is merged to `main` and Pages is enabled for the repo, the site deploys from `.github/workflows/pages.yml` to:

`https://faramarzkazemir-cloud.github.io/fermions/`

Enable Pages once: repo **Settings → Pages → Source: GitHub Actions**.

## What the demo shows

- Sticky nav through Intro · Stage 1 · Stage 2 · Charge · Disclaimer
- Hero with bilingual title and verdict chips
- Tables and cards fed only from `src/data/*` (no invented numbers)
- Full narrative in `docs/REPORT.md`; raw outputs in `calculations/`

## Stack

Vite + React + TypeScript + KaTeX

## Disclaimer

Mathematical/numerical feasibility only. Not a claim that the electron is composite; no full quantum stability proof; QED precision deferred.
