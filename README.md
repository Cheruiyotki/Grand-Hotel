# Aurelia Grand Hotel Website

A premium, multi-page Hotel Management website built with React, Tailwind CSS, Framer Motion, and React Router.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React Icons

## Theme

- Primary background: `#E5E4E2` (Platinum)
- Primary accent/nav/buttons/headings: `#1B263B` (Deep Dark Blue)
- Heading font: Playfair Display (serif)
- Body font: Inter (sans-serif)

## Features

- Multi-page responsive experience:
  - Home
  - Rooms
  - About
  - Contact
- Animated page transitions using Framer Motion
- Scroll-reveal section animations
- Luxury hero with floating "Check Availability" bar
- Featured suites slider on home page
- Modular, reusable component architecture
- Real data module for rooms, amenities, and testimonials

## Project Structure

```txt
src/
  components/
    Navbar.jsx
    Footer.jsx
    Button.jsx
    RoomCard.jsx
    SectionHeader.jsx
  pages/
    Home.jsx
    Rooms.jsx
    About.jsx
    Contact.jsx
  data/
    hotelData.js
  hooks/
    useScrollReveal.js
    useContactForm.js
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Data Model Notes

Each room in `src/data/hotelData.js` includes:

- `title`
- `pricePerNight`
- `maxGuests`
- `sqft`
- `amenities` (icon key + label)
- `description`

## Customization

- Update hotel content in `src/data/hotelData.js`
- Adjust color, typography, and spacing in `tailwind.config.js` and `src/index.css`
- Add new pages in `src/pages` and register routes in `src/App.jsx`
