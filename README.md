# Nuxt Server Assets

This is a demonstration of how to use Nuxt with `server/assets/` to use static assets from server routes.

- [Nuxt Server Directory](https://nuxt.com/docs/guide/directory-structure/server)
- [Nitro Server Assets](https://nitro.unjs.io/guide/assets#server-assets)
- [Unstorage](https://unstorage.unjs.io/)

Checkout these files to see how it works:
- [`server/assets/`](./server/assets/): The server assets directory
- [`server/routes/pdf.ts`](./server/routes/pdf.ts): The server route that generates the PDF by reading the font from `server/assets/fonts/`
- [`server/routes/random.jpg.ts`](./server/routes/random.jpg.ts): The server route that return a random image from `server/assets/images/`

When building your application, the `server/assets/` files will be copied to the `.output/server/chunks/raw` directory to be read on any serverless platform.

## Credits

I created this demo after seeing [this tweet](https://twitter.com/Rich_Harris/status/1748450915407806509) by [Rich Harris](https://twitter.com/Rich_Harris).

- [Rich-Harris/fowl-play](https://github.com/Rich-Harris/fowl-play/tree/main)
- [Rich-Harris/sveltekit-pdf-demo](https://github.com/Rich-Harris/sveltekit-pdf-demo)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
