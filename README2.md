# README2.md

## Flood Monitoring System — Project Structure & Guide

This document explains every folder and file in your project so anyone can understand and navigate it easily.

---

## Root Folder (`floodmonitoringsys/`)
- **package.json** — Lists project dependencies and scripts. Required for npm.
- **package-lock.json** — Auto-generated lock file for npm dependencies.
- **vite.config.ts** — Vite configuration for running and building the project.
- **tsconfig.json** — TypeScript configuration (how code is checked and compiled).
- **index.html** — The main HTML file loaded by the browser. Mounts the React app.
- **main.tsx** — The entry point for the React app. Renders the App component.
- **README.md / README2.md** — Project documentation.
- **TEAM_GUIDE.md / TEAM_GUIDE_LOCATIONS.md** — Guides for team roles and file locations.

## `src/` — Source Code Folder
- **app/** — Main application code.
- **styles/** — CSS and theme files for styling.

### `src/app/`
- **App.tsx** — The main React component. Contains the UI layout, data arrays, and logic for the whole system.
- **components/** — All reusable UI components for the app.

#### `src/app/components/`
- **StatsCard.tsx** — Shows a single statistic (e.g., number of locations).
- **WaterLevelCard.tsx** — Shows water level info for a location.
- **AlertCard.tsx** — Shows a single alert message.
- **ui/** — Shared UI building blocks (see below).
- **figma/** — (If present) Any components or images exported from Figma (not required for the lab).

##### `src/app/components/ui/`
- **button.tsx** — Reusable button component (used for the show/hide alerts button).
- **card.tsx** — Reusable card layout for displaying content in a box.
- **badge.tsx** — (If used) For small status labels in cards.
- **utils.ts** — Utility functions for class names (used by other UI components).

### `src/styles/`
- **index.css** — Main CSS file, imports other styles.
- **tailwind.css** — Tailwind CSS base and utilities.
- **theme.css** — Custom theme variables (colors, spacing, etc.).
- **fonts.css** — (If present) Custom font definitions.

---

## How the Project Works
- The app starts at `main.tsx`, which renders `App.tsx` into the page.
- All data (stats, water levels, alerts) is stored in arrays at the top of `App.tsx`.
- Components in `components/` are used to display each piece of data.
- The UI is styled using Tailwind CSS classes and custom CSS in `styles/`.
- The `ui/` folder contains only the basic building blocks needed for the cards and button.

---

## What to Edit
- To add a new location, edit the `waterLevels` array in `App.tsx`.
- To add a new alert, edit the `alerts` array in `App.tsx`.
- To change the look, edit the CSS files in `src/styles/`.
- To add a new type of card, create a new component in `components/`.

---

## What to Ignore
- Any files not listed above (like old Figma exports or unused UI files) are not needed for the lab.
- Only keep files that are used in your current UI for clarity and simplicity.

---

## Summary Table
| Folder/File | Purpose |
|-------------|---------|
| package.json | Project dependencies & scripts |
| vite.config.ts | Vite build config |
| tsconfig.json | TypeScript config |
| index.html | Main HTML file |
| main.tsx | React entry point |
| App.tsx | Main app UI & logic |
| components/ | Reusable UI components |
| ui/ | Basic UI building blocks |
| styles/ | CSS & theme files |

---

This structure is simple, clean, and easy to explain for your lab requirements. If you need to add more features, just follow the same folder and file organization!
