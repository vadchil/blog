# Minimalist Blog

A modern, minimalist blog built with Next.js (App Router), featuring static site generation, Tailwind CSS, and Markdown support. Perfect for deployment to GitHub Pages with a custom domain.

## Features

- ✨ Modern, minimalist UI with calm color palette
- 📱 Mobile-first responsive design
- 🚀 Static Site Generation (SSG) for optimal performance
- 📝 Markdown-based blog posts
- 🔍 SEO optimized with metadata API
- 🗺️ Automatic sitemap.xml and robots.txt generation
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Markdown** (with gray-matter and remark)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic blog post page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Sitemap generator
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation component
├── lib/
│   ├── posts.ts              # Blog post utilities
│   └── utils.ts              # Helper functions
├── posts/
│   ├── getting-started.md    # Sample blog post
│   └── the-art-of-simplicity.md
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json
```

## Creating Blog Posts

1. Create a new Markdown file in the `posts/` directory with a `.md` extension.

2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2024-01-20"
description: "A brief description of your post"
---

Your content here...
```

3. The post will automatically appear on the home page, sorted by date.

## Building for Production

Build the static site:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_URL: ${{ secrets.NEXT_PUBLIC_BASE_URL || 'https://yourusername.github.io/blog' }}
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Update `next.config.js` if your repository is not at the root:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/blog', // Replace 'blog' with your repository name
  assetPrefix: '/blog',
  // ...
}
```

3. Set the `NEXT_PUBLIC_BASE_URL` environment variable in your repository secrets (if using a custom domain).

### Option 2: Manual Deployment

1. Build the site: `npm run build`

2. Copy the contents of the `out/` directory to your GitHub Pages branch.

3. Push to GitHub.

## Custom Domain Setup

1. Update `next.config.js` with your basePath (if needed):

```javascript
basePath: '/blog',
assetPrefix: '/blog',
```

2. Set the `NEXT_PUBLIC_BASE_URL` environment variable to your custom domain.

3. Add a `CNAME` file in the `public/` directory with your domain name.

4. Configure DNS settings with your domain provider.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette. The current theme uses soft grays, blues, and greens.

### Typography

Fonts and typography styles can be customized in:
- `app/globals.css` for global styles
- `tailwind.config.js` for Tailwind typography settings

### Metadata

Update site metadata in `app/layout.tsx`:
- Site title
- Description
- Author information
- Open Graph settings

## License

MIT

## Contributing

Feel free to fork this project and customize it for your own blog!

