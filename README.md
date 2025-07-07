# weather-alerts

https://thomblweed.github.io/weather-alerts/

## Setup

This repository uses [pnpm](https://pnpm.io/installation) as the package manager, version `10.12.4`. It was developed on an environment using [Node version 22.17.0](https://nodejs.org/en/blog/release/v22.17.0)

To install dependencies

`pnpm install`

## Development

To run for development

`pnpm dev`

To check for linting

`pnpm lint`

To ensure formatting

`pnpm format`

To ensure types

`pnpm typecheck`

## Run

For full performance, please run this app in preview/production build mode

`pnpm preview`

## Components and Styling

This app uses [shadcn](https://ui.shadcn.com/) for the components and theme. Each component is installed locally to the [`src/ui/components`](./src/ui/components/) folder as described [here](https://ui.shadcn.com/docs/installation/vite#add-components).

[Tailwind](https://tailwindcss.com/) is used for the styling.

## Future Improvements

- Pagination and user selection of pagination size
- Filters state should be lifted to the search params in the url
- Actions column should be pinned
- Reset all filters button
- Mobile view updates as not currently not supported
