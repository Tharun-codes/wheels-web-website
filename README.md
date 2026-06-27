# Wheels Web - Car Loan Application Website

A modern, responsive car loan application website built with React, TailwindCSS, and Lucide icons. This project provides a seamless user experience for customers to calculate car loans, learn about services, and get in touch with the Wheels Web team.

## Features

- **Interactive Loan Calculator**: Real-time loan calculations with adjustable parameters
- **Modern UI/UX**: Beautiful gradient designs, smooth animations, and responsive layout
- **Comprehensive Sections**: Hero, Features, How It Works, Testimonials, FAQ, and Contact Form
- **Mobile-First Design**: Fully responsive across all device sizes
- **Smooth Navigation**: Sticky header with smooth scrolling and mobile menu
- **Professional Components**: Card layouts, accordions, forms, and more

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS & Autoprefixer**: CSS processing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd wheelswebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
wheelswebsite/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── ContactForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── LoanCalculator.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      accent: { /* your accent colors */ }
    }
  }
}
```

### Content

All content is easily editable in the respective component files:
- Hero section: `src/App.jsx`
- Features: `src/components/Features.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- FAQ: `src/components/FAQ.jsx`
- Contact info: `src/components/ContactForm.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Vite provides fast hot module replacement (HMR)
- Optimized production builds with code splitting
- Lazy loading and tree shaking support
- Minimal bundle size

## License

This project is open source and available for personal and commercial use.

## Support

For questions or support, please contact the Wheels Web team at support@wheelsweb.com.

---

Built with ❤️ using React and TailwindCSS
