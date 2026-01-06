# React + TypeScript + Vite

▶️ How to Run the Project
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

Then open:
http://localhost:5173

 Component & Styling Decisions
# Component Structure

The UI is structured around a single PracticeSummaryCard as the main container component, with smaller, focused subcomponents such as MetricCard, StatusIndicator, TrendChart, and Recommendations.

This separation follows the single-responsibility principle, making each component easier to understand, test, and reuse independently.

The structure also mirrors how the card would scale in a real dashboard, where individual metrics or indicators may evolve independently.

# Styling Approach

I chose Tailwind CSS for styling due to its utility-first approach, fast iteration speed, and excellent support for responsive design.

Tailwind allows styles to live close to the markup, reducing context switching and avoiding the overhead of managing separate CSS files for a small-to-medium UI.

It also aligns well with modern React/Vite workflows and design-system-driven development.

# Visual Consistency & Responsiveness

Consistent spacing, typography, and color usage were achieved by relying on Tailwind’s design tokens (spacing scale, font sizes, color palette).

Responsive behavior was handled using Tailwind’s breakpoint utilities (grid-cols, md, lg) to ensure the layout adapts smoothly across screen sizes.

Hover and transition utilities were used sparingly to add subtle visual polish without overcomplicating the UI.

# Scaling & Real-World Use
Integration into a Larger PracticeFuel Dashboard

The card is designed to be fully reusable, accepting all data via props, making it easy to integrate into a larger dashboard or list view.

Styling could be aligned with a broader design system by extending Tailwind’s theme (colors, spacing, typography).

The component could be packaged as part of a shared UI library and consumed across multiple pages or products.

Improvements with One Extra Day

Add accessibility enhancements (ARIA labels, better focus states, keyboard navigation).

Introduce skeleton loaders or loading states for async data.

Add unit and component tests (e.g., with React Testing Library).

Improve theming support (dark mode, brand variants).

Add subtle animations for state changes (e.g., metric updates).

# Time Management
Approximate Time Allocation (2 Hours)

Project setup & tooling: 10–15 minutes

Component layout & structure: ~45 minutes

Styling, responsiveness & polish: ~40 minutes

README & explanation: ~15–20 minutes
