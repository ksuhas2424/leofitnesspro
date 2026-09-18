# LEO FITNESS PRO — Official Frontend Website

Welcome to the official frontend website repository for **LEO FITNESS PRO**, a premium fitness and personal training commercial gym located in Hyderabad.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation
Clone or open the directory and run:
```bash
npm install
```

### Development Mode
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🎨 Architecture & Configuration Guide

### 1. Brand Logo Replacement
- **File Location**: `public/logo-badge.svg`
- **To update**: Replace `public/logo-badge.svg` with your high-res logo file (SVG, PNG, or WEBP).
- Reference link in `index.html` and components: `src/components/Navbar.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`.

### 2. Hero Athlete Image Replacement
- **File Location**: `public/hero-athlete.svg` (or `.jpg` / `.png`)
- **To update**: Place your high-quality muscular athlete photo in `public/hero-athlete.svg` (or `public/hero-athlete.jpg`).
- If using `.jpg` or `.png`, update the `src` attribute inside `src/components/Hero.jsx`:
```jsx
<img src="/hero-athlete.jpg" alt="Leo Fitness Pro Athlete" className="athlete-hero-img" />
```

### 3. Membership Plans & Pricing Updates
- **File Location**: `src/data/plans.js`
- Edit prices, plan titles, durations, featured states, or bullet points:
```javascript
{
  id: "monthly",
  name: "MONTHLY",
  price: "₹2,500",
  duration: "/ MONTH",
  benefits: [ ... ]
}
```

### 4. Adding or Replacing Gallery Photos
- **File Location**: `src/data/gallery.js`
- To add real gym photos, place image files inside `public/gallery/` and reference them in `src/data/gallery.js`:
```javascript
{
  id: 1,
  title: "Heavy Weight Zone",
  subtitle: "Hammer Strength Racks",
  category: "STRENGTH",
  image: "/gallery/heavy-weights.jpg",
  alt: "Leo Fitness Pro Heavy Weights"
}
```

### 5. Contact Details & Google Maps URL
- **File Location**: `src/data/contactInfo.js`
- Update phone numbers, physical address, opening hours, or Google Maps URL:
```javascript
export const contactInfo = {
  brandName: "LEO FITNESS PRO",
  address: { line1: "...", area: "...", stateZip: "..." },
  phone: "085229 94219",
  googleMapsUrl: "https://maps.google.com/?q=..."
};
```

---

## 🛠️ Technology Stack
- **Framework**: React 18+ (Vite)
- **Styling**: Vanilla CSS3 with CSS Custom Variables & Responsive Grid
- **Icons**: Lucide React
- **Typography**: Google Fonts (`Oswald`, `Montserrat`, `Inter`)
- **Aesthetics**: `#DFA316` Gold Accent, Ultra-dark cards, Crisp White background

---

## 📱 Responsive Testing Breakpoints
- **Desktop**: 1440px, 1280px
- **Tablet**: 1024px, 768px
- **Mobile**: 430px, 390px, 375px
