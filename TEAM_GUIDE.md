# TEAM_GUIDE.md

## Flood Monitoring System — Team Contribution Guide

This guide helps each team member explain what they contributed to the project for Laboratory Activities 2 & 3.

---

## Team Member Roles

### 1. Project Setup & Structure (Member 1)
- Created the React project using Vite
- Set up the folder structure: `src/`, `components/`, `styles/`
- Added the main files: `App.tsx`, `index.html`, `main.tsx`
- Ensured the project runs in the browser

### 2. Reusable Components (Member 2)
- Made the `StatsCard`, `WaterLevelCard`, and `AlertCard` components in `components/`
- Used props to pass data into each component
- Ensured components are reusable (not hard-coded)

### 3. Layout & Styling (Member 3)
- Applied CSS Grid and Flexbox for layout in `App.tsx`
- Used Tailwind CSS for simple, consistent styling
- Made sure the layout is responsive (works on mobile and desktop)

### 4. Dynamic Data & Interaction (Member 4)
- Stored all system data in arrays at the top of `App.tsx`
- Used `.map()` to render lists of cards from arrays
- Added the show/hide alerts button using React's `useState`
- Made sure the UI updates when the button is clicked

---

## How to Explain the System (for Presentation)

1. **Project Structure:**
   - "We set up a React project with a clean folder structure. All code is in `src/`, and components are in their own folder."
2. **Reusable Components:**
   - "We made three simple components: StatsCard, WaterLevelCard, and AlertCard. Each one uses props, so we can reuse them easily."
3. **Layout & Styling:**
   - "We used Grid and Flexbox for layout, and Tailwind CSS for styling. The layout adapts to different screen sizes."
4. **Dynamic Data & Interaction:**
   - "All our data is in arrays at the top of App.tsx. We use `.map()` to create cards. The alerts section can be shown or hidden with a button, which uses React state."

---

## Demo Script (Quick)
- "This is our Flood Monitoring System."
- "We have three main sections: statistics, water levels, and alerts."
- "All data is dynamic and easy to change."
- "The alerts section can be toggled with this button."
- "Everything is built with reusable components and a responsive layout."

---

## Tips for Q&A
- If asked about components: "Each card is a component that gets its data from props."
- If asked about layout: "We use Grid for cards and Flexbox for headers."
- If asked about interaction: "The button uses React's useState to show/hide alerts."
- If asked about data: "All data is in arrays, so it's easy to update or add new items."

---

Good luck with your presentation!
