# Shopping Cart App - React + TypeScript + Vite

A learning project demonstrating React fundamentals with TypeScript and Vite. This application showcases component composition, state management with hooks, and building a simple shopping cart interface.

## Features

- **React 18** with TypeScript for type-safe development
- **Vite** for fast builds and hot module reloading (HMR)
- **ItemCounter Component** - Reusable component for managing item quantities
- **Shopping Cart Display** - Lists items with individual quantity controls
- **ESLint configuration** for code quality
- **SWC** for fast TypeScript/JSX transformation
- **Vitest** for unit testing and code coverage
- **Testing Library** for component testing
- **Helper modules** with math utilities

## Project Structure

```
src/
├── App.tsx                      # Main component styling
├── FirstStepApp.tsx             # Shopping cart application
├── main.tsx                     # Application entry point
├── shopping-cart/
│   ├── ItemCounter.tsx          # Item counter component with increment/decrement
│   ├── ItemCounter.css          # Component styling
│   └── ItemCounter.test.tsx     # Component tests
├── helpers/
│   ├── math.helper.ts           # Math utility functions
│   └── math.helper.test.ts      # Helper functions tests
└── assets/                      # Static assets
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

- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI dashboard
- `npm run coverage` - Generate code coverage report
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
- **TypeScript 5.6** - Type
- **Vitest 4** - Unit testing framework
- **Testing Library** - React component testing utilities
- **Vitest Coverage** - Code coverage reporting safety
- **Vite 6** - Build tool and dev server
- **SWC** - Fast JavaScript/TypeScript compiler
- **ESLint** - Code linting

## Learning Concepts

This project covers:
- Functional components with TypeScript
- React Hooks (useState)
- Component composition a
- **Unit testing with Vitest**
- **Component testing with Testing Library**
- **Mocking functions and modules**
- **Snapshot testing**
- **Code coverage analysis**

## Testing

The project includes comprehensive tests for components and utilities:

- **Component Tests** - ItemCounter component with event interactions
- **Unit Tests** - Math helper functions (divide, etc.)
- **Snapshot Tests** - Component rendering consistency
- **Style Tests** - CSS class application verification
- **Mock Tests** - Function call verification

View test results with UI:
```bash
npm run test:ui
```

Generate coverage report:
```bash
npm run coverage
```nd reusability
- Props and interfaces
- Conditional rendering and styling
- Array mapping and lists