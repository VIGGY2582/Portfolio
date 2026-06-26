# Redesign Skills Page Implementation Plan

## Goal
Update the portfolio's Skills page to a modern, premium UI with responsive CSS Grid layouts, centered cards, hover animations, new tool list, coding profiles, and live GitHub/LeetCode stats while preserving the neon‑purple theme.

## User Review Required
- Confirm use of public GitHub and LeetCode APIs (no auth). 
- Approve removal of MongoDB Compass and addition of Canva (and pgAdmin). 
- Verify GitHub username (`VIGGY2582`) and LeetCode username (`VIGNESHWARACHAKRAVARTHY`). 
- Choose icon source for new tools (CDN or placeholders).

## Open Questions
1. Preferred size/border radius of heatmaps? 
2. Any custom colors beyond existing neon purple? 
3. Should the GitHub contributions be fetched as SVG or via API?

## Proposed Changes
### 1. Professional Skillset (`Techstack.jsx`)
- Ensure container uses `className="skills-grid"` (already). 
- Add filler empty `.skill-box` elements when items %5 != 0 to centre last row. 
- Update CSS: set `aspect-ratio:1/1` on `.skill-box`, increase icon size (`font-size:3rem`), add hover `translateY(-8px) scale(1.04)` with purple glow.

### 2. Tools I Use (`Toolstack.jsx`)
- Replace icons with: VS Code, GitHub, IntelliJ, Docker, Postman, pgAdmin, Canva. 
- Update component markup to use `className="tool-box"` inside the same `skills-grid`. 
- Adjust `.tool-box` CSS to match new dimensions (square, height 105px -> 140px if needed) and hover effect.

### 3. Coding Profiles (`CodingProfiles.jsx`)
- New component rendering two cards (GitHub, LeetCode) with icons, links, neon‑purple border/glow.
- Add CSS `.profile-card` similar to `.tool-box`.

### 4. GitHub Contributions (`GitHubHeatmap.jsx`)
- Fetch SVG via `https://github.com/users/<username>/contributions` and embed `<img>`.
- Optional fetch total contributions via `https://api.github.com/users/<username>`.
- Responsive CSS `.github-heatmap`.

### 5. LeetCode Statistics (`LeetCodeStats.jsx`)
- Fetch data from `https://leetcode.com/<username>/api/problems/all/` (public JSON) for solved/total.
- Render progress bars and embed activity heatmap (if available) or placeholder.
- CSS `.leetcode-stats`, `.progress-bar`.

### 6. Layout and Spacing
- Wrap each section in `<section className="section">` with vertical padding (80‑100px). 
- Ensure overall container `max-width:1200px; margin:auto;`.
- Add Google Font `Inter` via `@import`.

### 7. CSS (`style.css`)
- Consolidate `.skills-grid`, `.skill-box`, `.tool-box`, `.profile-card` styles.
- Add media queries for 5/3/2 columns (already present). 
- Remove unused selectors (`.tech-icons`, etc.).
- Define `.section` spacing and global typography.

### 8. Cleanup
- Delete old `MongoDB Compass` references. 
- Ensure imports are correct and unused files removed.
- Run `npm run dev` and `npm run build` to verify.

## Verification Plan
- **Automated**: `npm run build` (no errors), lint pass.
- **Manual**: Open Skills page, check:
  - Uniform card size, centered layout, responsive columns.
  - Hover animations smooth.
  - Last row centered (Golang, Git, Postman).
  - Tools list updated, icons displayed.
  - Coding profile cards link correctly.
  - GitHub heatmap loads, LeetCode stats visible.
  - No console errors (CORS, fetch failures).

---
*Please confirm the above plan and answer the open questions so we can proceed with implementation.*
