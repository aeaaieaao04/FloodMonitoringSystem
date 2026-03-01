# Flood Monitoring System

A React + Vite prototype web app for flood and tsunami monitoring.

## Overview

This project simulates a flood monitoring dashboard with:

- monitored water locations and alert status
- interactive monitoring cards with inline details
- protected admin route with login and logout flow
- incident reporting form using controlled inputs
- multi-page navigation using client-side routing

## Tech Stack

- React 18
- Vite 6
- React Router 7 (`react-router`)
- TypeScript

## Project Structure

```text
src/
  app/
    components/
    data/
    pages/
      Admin.tsx
      Configuration.tsx
      Dashboard.tsx
      IncidentReport.tsx
      Login.tsx
      Monitoring.tsx
      Notifications.tsx
      Summary.tsx
      UserManagement.tsx
    App.tsx
    App.css
  main.tsx
public/
  waters/
```

## Features

### 1. State Management

- local component state via `useState`
- auth state (`isSignedIn`) in `src/app/App.tsx`
- monitoring selection state in `src/app/pages/Monitoring.tsx`
- full form state in `src/app/pages/IncidentReport.tsx`

### 2. Controlled Form Inputs

The Incident Report page (`/incident-report`) includes controlled:

- text
- email
- tel
- number
- select
- radio
- checkbox
- date
- time
- textarea

Submitted values are displayed in a live preview section.

### 3. Routing and Navigation

Routes configured in `src/app/App.tsx`:

- `/` Dashboard
- `/login` Login
- `/admin` Admin (protected)
- `/admin/users` User Management (protected)
- `/monitoring` Monitoring
- `/incident-report` Incident Report
- `/notifications` Notifications
- `/summary` Summary
- `/configuration` Configuration

Navigation is available through the hamburger menu in the top blue header.

### 4. Protected Admin Access

- unauthenticated users are redirected from `/admin` and `/admin/users` to `/login`
- successful login redirects users back to the requested page
- admin page provides a logout action

### 5. Monitoring Cards

- water level cards are shown on the Monitoring page
- clicking a card expands inline details in the same page
- each card includes image, trend, location details, and sensor metadata

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run start
```

## Quick Demo Flow

1. Open Dashboard (`/`)
2. Open Monitoring and click different cards
3. Open Incident Report and submit the controlled form
4. Open Admin (you will be redirected to Login)
5. Login, open Admin, then click Logout

## Notes

- Static water images are stored in `public/waters`.
- If an image fails, the app falls back to `/location.png`.

## Submission Commit Message

Required lab commit message:

```text
AppDev-L4: State, interaction, and navigation implemented
```
