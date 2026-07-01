# Portfolio Website

## Overview
This repository contains a **React** portfolio website showcasing projects, skills, and contact information. It leverages **React Router** for multi‑page navigation, **Bootstrap** for styling, and a custom particle background for visual flair.

---

## Tech Stack
- **React** (JavaScript, functional components)
- **React Router DOM** – client‑side routing
- **Bootstrap** – UI components & responsive grid
- **React‑Bootstrap** – Bootstrap components as React components
- **CSS / SCSS** – custom styling, dark‑mode support
- **Particle.js** – animated background effect
- **Node.js & npm** – development server and build tooling

---

## Features
- Multi‑page layout (Home, Skills, Projects, Resume, Contact)
- Responsive design (desktop, tablet, mobile)
- Pre‑loader animation on initial load
- Smooth scroll‑to‑top on navigation changes
- Dynamic navigation bar with active link highlighting
- Footer with GitHub repo statistics badges

---

## Project Structure & Key Methods
```
src/
├─ App.js                // Root component with routing logic
├─ App.css                // Global CSS for the app
├─ style.css              // Additional styling (dark mode, particles)
├─ index.js               // React entry point
├─ index.css              // Base CSS reset
├─ assets/                // Images, icons, etc.
├─ components/            // Reusable UI components
│   ├─ Navbar/            // Navigation bar component
│   │   └─ Navbar.js
│   ├─ Footer/            // Footer with repo badges
│   │   └─ Footer.js
│   ├─ Home/              // Home page content
│   │   └─ Home.js
│   ├─ Skillset/          // Skill list component
│   │   └─ Skillset.js
│   ├─ Projects/          // Projects showcase component
│   │   └─ Projects.js
│   ├─ Contact/           // Contact form / info
│   │   └─ Contact.js
│   ├─ Resume/            // Resume page component
│   │   └─ Resume.js
│   ├─ Particle.js        // Particle background animation
│   ├─ PreLoader.js       // Loading spinner shown on startup
│   └─ ScrollToTop.js     // Scrolls to top on route change
├─ pages/                 // Page wrappers (currently same as components)
│   ├─ Home.js
│   ├─ Skillset.js
│   ├─ Projects.js
│   ├─ Resume.js
│   └─ Contact.js
```

### Core Methods / Logic
- **App.js** – Initializes state (`load`) for the pre‑loader, sets a timer via `useEffect`, and defines all routes using `<Routes>` and `<Route>`.
- **PreLoader.js** – Receives `load` prop; renders a full‑screen spinner while the app is initializing.
- **ScrollToTop.js** – Listens to route changes with `useLocation` and scrolls the window to the top.
- **Navbar.js** – Uses `NavLink` from React Router to provide navigation with active link styling.
- **Particle.js** – Configures the particle animation (speed, count, colors) via the `react-particles-js` library.
- **Footer.js** – Displays GitHub repository badges for size, stars, forks, issues, PRs, etc.

---

## Installation & Setup
1. **Prerequisites**
   - Node.js (>= 14.x)
   - npm (comes with Node)
2. **Clone the repository**
   ```bash
   git clone https://github.com/VIGGY2582/portfolio.git
   cd portfolio
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the development server**
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

---

## Scripts
| Script | Description |
|--------|-------------|
| `npm start` | Starts the development server (hot‑reloading). |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm test` | (If tests are added) Runs the test suite. |

---

## Contribution
Feel free to submit pull requests or open issues. Please ensure your code follows the existing coding style and includes relevant documentation.

---

## License
This project is licensed under the **MIT License** – see the `LICENCE` file for details.
