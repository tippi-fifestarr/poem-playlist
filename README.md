# 18-Track Poem Playlist

<div align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="96" height="96">
    <defs>
      <linearGradient id="musicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <circle cx="16" cy="16" r="15" fill="url(#musicGradient)" stroke="#1f2937" stroke-width="1"/>
    
    <rect x="12" y="8" width="1.5" height="12" fill="#ffffff"/>
    
    <ellipse cx="11.2" cy="19" rx="2" ry="1.5" fill="#ffffff"/>
    
    <path d="M13.5 8 Q18 6 18 10 Q18 8 13.5 10" fill="#ffffff"/>
    
    <line x1="20" y1="12" x2="26" y2="12" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
    <line x1="20" y1="15" x2="24" y2="15" stroke="#ffffff" stroke-width="1" opacity="0.6"/>
    <line x1="20" y1="18" x2="27" y2="18" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
    <line x1="20" y1="21" x2="25" y2="21" stroke="#ffffff" stroke-width="1" opacity="0.6"/>
    
    <path d="M7 10 Q7 8 9 8 Q11 8 11 10 Q11 8 13 8 Q15 8 15 10 Q15 12 11 16 Q7 12 7 10" fill="#ffffff" opacity="0.7" transform="scale(0.4) translate(10, 15)"/>
  </svg>
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