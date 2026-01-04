<div align="center">

# Zerodha TPSL & MT Copy Bot (Frontend)

React + Vite + Tailwind v4. Clean, fast, and responsive UI for configuring TPSL inputs and monitoring trades.

</div>

## Highlights
- **Inputs** for Spot, Futures, Options, and MT Copy with enable/disable toggles.
- **Tabbed tables** for SLTP Trades and MT Copy Trades.
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config needed).
- **React Router** for Main, History, Logs.

## Quick start
```bash
npm install
npm run dev
# open the URL shown by Vite (usually http://localhost:5173)
```

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview built app

## Project structure
```
src/
  components/   # Sidebar, Header, InputCard, TradesTable
  pages/        # Main, History, Logs
  data/         # config.json (default input values)
  App.css       # imports Tailwind: @import "tailwindcss";
```

## Notes
- Tailwind is loaded by importing `src/App.css` in `src/main.jsx`.
- Default input states live in `src/data/config.json`.

---
Made with React 19, Vite 7, and Tailwind 4.
