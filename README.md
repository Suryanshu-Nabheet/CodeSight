<div align="center">
  
  # CodeSight
  ### Understand Any Codebase in Seconds
  
  AI insights on your GitHub repo - understand quality, design, security, and improvement opportunities in seconds.

  **Built perfectly end-to-end by Suryanshu Nabheet**


[![GitHub Stars](https://img.shields.io/github/stars/Suryanshu-Nabheet/CodeSight?style=for-the-badge&logo=github&color=yellow)](https://github.com/Suryanshu-Nabheet/CodeSight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge)](./CODE_OF_CONDUCT.md)

  <br />

[Features](#-features) • [Quick Start](#-quick-start) • [API Reference](#-api-reference) • [License](#-license)

  <br />

</div>

---

## About

**CodeSight** is an ultra-fast, open-source tool that leverages AI to analyze GitHub repositories instantly. Built with a modern local-first architecture, CodeSight operates with **zero databases, zero mandatory user accounts, and zero rate limits**. Your analyses run instantly, and your code privacy is respected.

### Why CodeSight?

| Benefit                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| **Save Hours**         | Understand any codebase in seconds, not hours       |
| **AI-Powered**         | Intelligent analysis using advanced language models |
| **100% Local-First**   | No database dependencies or PostgreSQL required     |
| **Zero Rate Limits**   | Fully unlocked for unlimited concurrent analyses     |
| **Branch Support**     | Analyze any branch, not just the default            |
| **Beautiful UI**       | Modern, responsive dark/blue glassmorphism theme   |
| **Privacy First**      | No code is stored; analysis happens in real-time    |
| **Free & Open Source** | MIT licensed, fully community-driven                |

---

## Features

### Core Analysis

* **Health Scoring:** Comprehensive score (0-100) for overall code quality
* **Architecture Analysis:** Visualize component relationships and structure
* **Security Insights:** Identify potential vulnerabilities and security issues
* **Dependency Analysis:** Understand package dependencies and outdated packages
* **Tech Stack Detection:** Automatically identify frameworks and technologies
* **AI Recommendations:** Get actionable improvement suggestions
* **Branch Analysis:** Analyze any branch in the repository
* **Data Flow Diagrams:** Interactive Mermaid diagrams showing data flow patterns

### Export & Sharing

* **Copy Plain Text:** Copy analysis report as formatted plain text
* **Copy Markdown:** Copy full report in Markdown format
* **Download PDF:** Export detailed PDF report with all insights

### User Experience

* **Interactive File Tree:** Explore repository structure with file statistics
* **Real-time Progress:** Watch the analysis happen live with status updates
* **Responsive Layout:** Works seamlessly on desktop, tablet, and mobile
* **Lightning Fast:** Built with Next.js 16 and Tailwind v4 for optimal performance

---

## Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **pnpm** (recommended) or npm/yarn
- **Git**

```bash
# Verify Node.js version
node --version  # Should be >= 18.0.0

# Install pnpm if needed
npm install -g pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Suryanshu-Nabheet/CodeSight.git
cd CodeSight

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your API keys (see Environment Variables section)

# 5. Start development server
pnpm dev

# 6. Open http://localhost:3000
```

### Environment Variables

Create a `.env.local` file with the following:

```env
# ===========================================
# REQUIRED
# ===========================================

# GitHub Personal Access Token
# Get yours at: https://github.com/settings/tokens
# Required scopes: repo, read:user
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# OpenRouter API Key
# Get yours at: https://openrouter.ai/keys
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxx

# ===========================================
# OPTIONAL
# ===========================================

# Site URL (for SEO and social sharing)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

<details>
<summary><b> How to Get API Keys</b></summary>

#### GitHub Personal Access Token

1. Go to **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token (classic)"**
3. Select scopes: `repo`, `read:user`
4. Copy the token and add it to `.env.local`

#### OpenRouter API Key

1. Go to [OpenRouter](https://openrouter.ai/)
2. Sign up and navigate to **Settings** → **API Keys**
3. Create a new key and add it to `.env.local`

</details>

---

## Tech Stack

| Category       | Technologies                       |
| -------------- | ---------------------------------- |
| **Framework**  | Next.js 16, React 19, TypeScript 5 |
| **Styling**    | Tailwind CSS 4, shadcn/ui          |
| **Animation**  | Framer Motion                      |
| **Diagrams**   | Mermaid                            |
| **PDF Export** | jsPDF                              |
| **AI Integration** | OpenRouter AI SDK              |

---

## Project Structure

```
CodeSight/
├── app/
├── components/
├── context/
├── lib/
├── public/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## API Reference

### Analyze Repository

Analyzes a GitHub repository and returns comprehensive insights.

```http
POST /api/analyze
Content-Type: application/json
```

#### Request Body

```json
{
  "repoUrl": "https://github.com/owner/repo",
  "branch": "main"
}
```

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Suryanshu Nabheet
```
