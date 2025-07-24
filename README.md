# 18-Track Poem Playlist

<div align="center">
  <img src="public/favicon.png" alt="18-Track Poem Playlist Logo" width="96" height="96">
</div>

A beautiful static site showcasing a curated playlist that tells a story through music - from self-possession to surrender and back again.

## Features

- **18 carefully curated tracks** with Apple Music and Tidal links
- **Tightened, title-only poem** that uses exact song titles
- **Detailed track-by-track journey** with researched insights into each song's mood, genre, and cultural moment
- **Responsive design** that works on all devices
- **Static site** optimized for fast loading
- **Ready for Vercel deployment**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tippi-fifestarr/poem-playlist.git
cd poem-playlist
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory that can be deployed to any static hosting service.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `out/` directory to your hosting service

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with Tailwind CSS
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   └── PlaylistPoem.tsx # Main playlist poem component
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/typography** - Beautiful typography styles

## License

This project is open source and available under the [MIT License](LICENSE). 