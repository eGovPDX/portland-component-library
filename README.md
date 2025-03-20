# Portland Component Library

A React component library for Portland.gov, built with design tokens from Figma.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/eGovPDX/portland-component-library.git
cd portland-component-library

# Install dependencies (using pnpm)
pnpm install

# Start Storybook
pnpm run storybook
```

Storybook will open in your default browser at [http://localhost:6006](http://localhost:6006)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

To install pnpm:
```bash
npm install -g pnpm
```

## Available Scripts

- `pnpm run storybook` - Start Storybook development server
- `pnpm run build` - Build the component library
- `pnpm run build-storybook` - Build Storybook for production
- `pnpm test` - Run tests

## Project Structure

```
portland-component-library/
├── src/
│   ├── components/     # React components
│   │   ├── Banner/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── PageTemplate/
│   │   └── SkipNav/
│   └── styles/        # SCSS styles and themes
│       └── themes/    # Theme-specific styles
├── .storybook/       # Storybook configuration
└── dist/            # Built component library
```

## Components

The library includes core layout components for Portland.gov pages:

- **Banner** - Official government website banner
- **Header** - Navigation component based on USWDS Header
- **Footer** - Site footer with accessibility information
- **SkipNav** - Keyboard accessibility enhancement
- **Example Page Template** - Example page template combining all current components

## Documentation

Full documentation is available in Storybook:

1. Start Storybook with `pnpm run storybook`
2. Open [http://localhost:6006](http://localhost:6006)
3. Browse components in the sidebar

Key documentation sections:
- Introduction - Overview and getting started
- Progress Report - Current status and roadmap
- Component documentation with live examples
- Design token documentation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[Add appropriate license information] 