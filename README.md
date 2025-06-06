# Error 20 - Quarter-Life Crisis Awareness Platform

![Error 20 Logo](/src/data/thumbnail/logo.png)

## Overview

Error 20 is a bilingual (Arabic/English) platform designed to help young adults navigate their "quarter-life crisis" - that critical period where many face psychological and professional challenges while trying to discover themselves and their passions. This modern, responsive web application provides resources, workshops, self-assessment tools, and a supportive community for young people finding their way in life.

## Features

- **Fully Bilingual**: Complete Arabic and English language support with RTL/LTR handling
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Interactive Self-Awareness Quiz**: Help users understand their current state of mind
- **Educational Resources**: Curated collection of mental health and career development resources
- **Video Library & Podcasts**: Educational content from experts
- **Workshop Directory**: Online and in-person workshop listings
- **Responsive Design**: Fully functional on mobile, tablet, and desktop devices
- **Smooth Animations**: Utilizing Framer Motion for a polished UX

## Sections

1. **Hero**: Engaging introduction to the platform's purpose
2. **Sponsors**: Featuring organizations supporting the initiative
3. **Milestones**: Highlighting impact metrics and achievements
4. **Testimonials**: Sharing success stories and experiences
5. **Resources**: Collection of helpful tools and materials
6. **Videos**: Educational videos and podcast episodes
7. **Workshops**: Interactive workshop schedule and registration
8. **Quiz**: Self-awareness assessment tool
9. **CTA**: Call-to-action for further engagement

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Performance Optimization**: Dynamic imports, code splitting, lazy loading
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd error20
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
error20/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── animations/  # Animation components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Main page sections
│   ├── context/         # React context providers
│   ├── data/            # Site data and content
│   │   └── thumbnail/   # Image assets
│   ├── translations/    # Localization files
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Performance Optimizations

- **Code Splitting**: Non-critical sections are lazy loaded
- **Font Optimization**: Language-specific font preloading
- **Image Handling**: Optimized image loading and placeholders
- **Bundle Size**: Optimized chunk splitting for better caching
- **Animation Performance**: GPU-accelerated animations

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build locally

## Credits

Error 20 is a platform developed to support young adults through life transitions, particularly the quarter-life crisis period. The platform draws from various psychological resources and educational materials to create a supportive environment for self-discovery and growth.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
