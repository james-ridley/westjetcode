# WestJet Components

A Vue 3 component library for WestJet's design system, integrated with Figma via Code Connect.

## Features

- Vue 3 with TypeScript
- Storybook for component documentation
- Code Connect integration with Figma
- Vite for fast builds
- Ready for npm publishing

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start Storybook:
   ```bash
   npm run storybook
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Code Connect Setup

This project is configured to work with Figma's Code Connect feature. To set up:

1. Install the Code Connect CLI:
   ```bash
   npm install -g @figma/code-connect
   ```

2. Link your Figma file:
   ```bash
   npx code-connect link
   ```

3. Sync components:
   ```bash
   npm run code-connect
   ```

## Development

- Add new components in `src/components/`
- Create stories in `src/stories/`
- Run `npm run dev` for development server
- Run `npm run build` to build the library

## Publishing

To publish to npm:
```bash
npm run build
npm publish
```