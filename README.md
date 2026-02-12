# Shopping Cart App - React + TypeScript + Vite

A learning project demonstrating React fundamentals with TypeScript and Vite. This application showcases component composition, state management with hooks, and building a simple shopping cart interface.

## Features

- **React 18** with TypeScript for type-safe development
- **Vite** for fast builds and hot module reloading (HMR)
- **ItemCounter Component** - Reusable component for managing item quantities
- **Shopping Cart Display** - Lists items with individual quantity controls
- **ESLint configuration** for code quality
- **SWC** for fast TypeScript/JSX transformation

## Project Structure

```
src/
├── App.tsx              # Main component styling
├── FirstStepApp.tsx     # Shopping cart application
├── main.tsx             # Application entry point
├── shopping-cart/
│   ├── ItemCounter.tsx  # Item counter component with increment/decrement
│   └── ItemCounter.css  # Component styling
└── assets/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JaviKo500/02-first-step-react-ts.git
cd 02-first-steps
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Key Components

### ItemCounter
A controlled component that manages and displays item quantities with increment/decrement functionality.

**Props:**
- `productName` (string) - Name of the product
- `quantity` (number, optional) - Initial quantity (defaults to 1)

**Features:**
- Increment button (+1)
- Decrement button (-1) with minimum quantity of 1
- Visual feedback when quantity is 1 (red text)

## Technologies Used

- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 6** - Build tool and dev server
- **SWC** - Fast JavaScript/TypeScript compiler
- **ESLint** - Code linting

## Learning Concepts

This project covers:
- Functional components with TypeScript
- React Hooks (useState)
- Component composition and reusability
- Props and interfaces
- Conditional rendering and styling
- Array mapping and lists