# FinTara Site — Project Instructions

## What This Is
Personal finance & wealth-building blog. Next.js 14 + MDX + Tailwind. Ships bilingual (`/en/`, `/es/`).

## Stack
- Next.js 14, React 18, TypeScript 5
- MDX via `next-mdx-remote` + `gray-matter` frontmatter
- Tailwind CSS 3 + `@tailwindcss/typography`
- Deploy: Vercel

## Commands
```powershell
cd 01_Finance\fintara
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Content
- Blog posts as `.mdx` files in `content/`
- Frontmatter: title, date, description, tags, language (en/es)
- Original content per language — not translations
