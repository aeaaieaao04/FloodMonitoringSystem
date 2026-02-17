# TEAM_GUIDE_LOCATIONS.md

## Where to Find Each Team Member's Work

### 1. Project Setup & Structure (Member 1)
- Project created with Vite: (root folder, package.json, vite.config.ts)
- Folder structure: `src/`, `src/app/`, `src/app/components/`, `src/styles/`
- Main entry files: [index.html](index.html), [src/main.tsx](src/main.tsx), [src/app/App.tsx](src/app/App.tsx)

### 2. Reusable Components (Member 2)
- [src/app/components/StatsCard.tsx](src/app/components/StatsCard.tsx)
- [src/app/components/WaterLevelCard.tsx](src/app/components/WaterLevelCard.tsx)
- [src/app/components/AlertCard.tsx](src/app/components/AlertCard.tsx)
- Each component uses props and is imported in [src/app/App.tsx](src/app/App.tsx)

### 3. Layout & Styling (Member 3)
- Layout code: [src/app/App.tsx](src/app/App.tsx) (see the `return` statement)
- Uses Tailwind CSS classes for Grid and Flexbox
- Responsive design: grid-cols-1, md:grid-cols-3, etc.
- Styling files: [src/styles/index.css](src/styles/index.css), [src/styles/tailwind.css](src/styles/tailwind.css), [src/styles/theme.css](src/styles/theme.css)

### 4. Dynamic Data & Interaction (Member 4)
- Data arrays: At the top of [src/app/App.tsx](src/app/App.tsx) (stats, waterLevels, alerts)
- `.map()` usage: In the JSX of [src/app/App.tsx](src/app/App.tsx) to render lists
- Show/hide alerts: `useState` and the toggle button in [src/app/App.tsx](src/app/App.tsx)

---

## About the UI Tabs
- The current UI does not use tabs. It only has three simple sections: statistics, water levels, and alerts.
- If you see any code for tabs, you can safely remove it for simplicity. The current version is already as simple as possible for Lab 2 & 3.

---

## Summary
- All work is clearly separated and easy to find in the files above.
- The UI is simple: no tabs, just three sections and one interactive button.
- You can explain and demo everything in under 5 minutes!
