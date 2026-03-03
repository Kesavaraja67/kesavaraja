<div align="center">

# ⚡ The Portfolio of Kesavaraja M

<p align="center">
  <em>Building at the Intersection of Intelligence and Interaction.</em>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-orange?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Gemini API](https://img.shields.io/badge/Powered_by-Gemini_Flash_2.5-8E75B2?style=for-the-badge&logo=google-gemini)](https://aistudio.google.com/)

---

</div>

## 🌌 Overview

"I build things people screenshot."

This repository houses my personal portfolio architecture—a meticulously crafted digital experience powered by advanced frontend mechanics and artificial intelligence.

Going beyond static templates, this portfolio integrates **fluid typography**, **WebGL-inspired micro-interactions**, **custom shaders**, and an **embedded conversational AI Agent (KesavarajaChat)** powered by Google's Gemini 2.5 Flash API that acts as a fully context-aware digital clone.

## 🚀 Key Features

- **Cinematic Design System:** Complete dark-mode aesthetic utilizing `#0C0C0F` backgrounds with dual `#00FFCC` (Cyan) and `#7000FF` (Violet) high-contrast accents matching cyber/synthwave aesthetics.
- **AI Agent Integration:** A floating, animated chat widget connected directly to the Gemini API, prompt-engineered to represent my persona, skills, past projects, and contact avenues.
- **Hardware-Accelerated Animations:** Uses purely native and Framer Motion logic to execute 60FPS scroll-jacking (SmoothScroll), parallax effects, scramble text reveals, and custom magnetic cursor repulsions.
- **Micro-interactions:** Magnetic hovering buttons, custom granular noise overlays, and dual-blend color-grading overlays managed via CSS mix-blend modes.
- **Production-Ready SEO:** Full integration of OpenGraph tags, modern metadata API structures, and dynamic routing optimizations.

---

## 🛠 Tech Stack

The architecture focuses heavily on performance, strict typing, and bleeding-edge web APIs.

| Layer            | Technologies Used                                                         |
| :--------------- | :------------------------------------------------------------------------ |
| **Framework**    | Next.js 14 (App Router)                                                   |
| **Language**     | TypeScript                                                                |
| **Styling**      | Tailwind CSS v3, CSS Modules, Raw CSS mix-blends                          |
| **Animation**    | Framer Motion, GSAP, Custom hooks                                         |
| **AI / Backend** | Google Gemini (`gemini-2.5-flash`), Next.js Route Handlers (`app/api`)    |
| **Typography**   | Fontshare (Clash Display, Cabinet Grotesk), Google Fonts (JetBrains Mono) |

---

## 💻 Getting Started (Local Development)

To run this application locally, you will need a Google Gemini API Key.

**1. Clone the repository**

```bash
git clone https://github.com/Kesavaraja67/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
# or yarn install / pnpm install
```

**3. Setup Environment Variables**
Create a `.env.local` file in the root directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**4. Run the development server**

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📈 Deployment & SEO

This portfolio is heavily optimized for Server-Side Generation (SSG) and edge deployments.

If deploying on **Vercel** or **Render**:

1. Connect the GitHub repository.
2. In the deployment settings, add the `GEMINI_API_KEY` to the environment variables.
3. Hit Deploy.

### Google Search Console Verification

When taking this to production under a custom domain, replace the placeholder tag inside `src/app/layout.tsx` -> `metadata.verification.google` with your live Google Search Console HTML tag to immediately begin indexing and SEO tracking.

---

## 👤 About the Developer

**Kesavaraja M**  
_AI Engineer & Full Stack Developer_

Specializing in LLM Integration, TinyML, Computer Vision, and highly aesthetic React ecosystems. I explore the gap between aesthetic design and artificial intelligence, crafting digital interactions that are performant and beautiful.

- **Email:** [krkesavaraja67@gmail.com](mailto:krkesavaraja67@gmail.com)
- **LinkedIn:** [linkedin.com/in/kesavaraja-m](https://linkedin.com/in/kesavaraja-m)
- **X (Twitter):** [@KesavaRaja70355](https://x.com/KesavaRaja70355)

---

<p align="center">
  <em>Designed and developed dynamically by Kesavaraja</em>
</p>
