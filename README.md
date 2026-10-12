# Bhushan Nagpure - Data Analyst Portfolio

A responsive, single-page portfolio for a fresher Data Analyst looking for entry-level roles and paid internships in India.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Recharts

## Features

- Premium dark analytics-inspired layout
- Responsive navigation and mobile menu
- Hero section with CTA links and dashboard preview
- About, skills, projects, dashboard gallery, education, resume, and contact sections
- Clickable dashboard previews with a lightbox view
- Local contact form validation with visible success and error states
- Back-to-top control
- Accessible semantic structure and keyboard-friendly interactions
- Single data file for easy content edits

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run linting:

```bash
npm run lint
```

## Project Structure

- `src/data/portfolioData.ts` - single source of truth for content
- `src/components/` - reusable portfolio sections and UI blocks
- `src/App.tsx` - page composition
- `src/index.css` - global styles and motion/accessibility rules

## Content Editing

Update `src/data/portfolioData.ts` to change:

- Personal details
- Social links
- Skills
- Project cards
- Dashboard gallery placeholders
- Education details
- Resume summary and placeholder note
- Contact copy

## Resume PDF

A downloadable PDF is not wired by default.

To enable it:

1. Export your resume as `resume.pdf`.
2. Place it in the `public/` folder.
3. Set `resumeData.downloadUrl` to `/resume.pdf` in `src/data/portfolioData.ts`.

## Dashboard Screenshots

The dashboard gallery uses placeholder mockups until real screenshots are added.

To replace a placeholder:

1. Add your screenshot to `public/` or `src/assets/`.
2. Update the matching `dashboardGallery` item in `src/data/portfolioData.ts`.
3. Set `isPlaceholder` to `false` and point `imageUrl` to the image path.

## Deployment to GitHub

1. Create a new GitHub repository.
2. Commit and push the project.
3. Keep secrets out of the repository.
4. Update links in `src/data/portfolioData.ts` once the final project URLs are live.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Leave the build command as `npm run build`.
4. Leave the output directory as `dist`.
5. Deploy.

## Placeholder Checklist Before Publishing

- Confirm `bhushannagpure25@gmail.com` is the email you want published.
- Replace the resume placeholder with a real PDF link.
- Add real GitHub links for projects that are still using placeholders.
- Add live dashboard URLs where published dashboards exist.
- Replace dashboard mockups with actual screenshots if available.
- Review project descriptions to ensure they match the final work exactly.

## Notes

- This portfolio intentionally avoids invented work history or results.
- Incomplete projects are labeled as in progress or left with explicit placeholders.
- The design uses a dark navy palette with clean white surfaces and blue/teal accents.
