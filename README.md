# Qwik-Toasts Library ⚡️

Qwik-Toasts is a versatile toast notification library built on top of [Qwik](https://qwik.builder.io/). It provides a simple and efficient way to display informative messages to users in your web applications.

Qwik Integration: Leveraging the capabilities of Qwik, our library seamlessly integrates with your web application, ensuring smooth and efficient performance.

Tailwind CSS Styles: The project utilizes Tailwind CSS for styling, offering a customizable and modern look for your toast notifications. Easily adapt the styles to match your application's design.

[DaisyUI](https://daisyui.com/): Embrace the aesthetics of DaisyUI themes to give your toast notifications a stylish and modern appearance.

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik on GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Builder.io](https://www.builder.io/)

---

## Installation

```bash
npm install qwik-toasts
```

or if you use bun:

```bash
bun install qwik-toasts
```

## Project Structure

Inside your Qwik-Toasts project, you'll find the following directories and files:

```
└── src/
    ├── components/toast
    │              └── ...
    └── index.ts
```

- `src/components/toast`: This directory is a location for Qwik-Toasts components.

- `index.ts`: The entry point of your Qwik-Toasts library.

## Development

During development, Qwik-Toasts uses [Vite's development server](https://vitejs.dev/) with server-side rendering (SSR) capabilities provided by Qwik and [Bun](https://bun.sh/). Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

Start development:

```bash
bun install
```

```bash
bun start
```

## Production

For production, the Qwik-Toasts library should generate the production build in the `./lib` directory, along with TypeScript type definitions in `./lib-types`.

```bash
bun run build
```

## Example

Check out the example located in the /example directory to see Qwik-Toasts in action.

[![Qwik-Toasts Example Video](https://img.youtube.com/vi/dj83Sr_KtJ4/0.jpg)](https://www.youtube.com/watch?v=dj83Sr_KtJ4)

Add daisyUI to your tailwind.config.js files, add tailwind for qwik-toasts:

```

module.exports = {
  content: [
    //...
    "./node_modules/qwik-toasts/**/*.{cjs,mjs}"
  ],
  //...
  plugins: [require("daisyui")],
}
```

Install dependencies:

```
bun install
```

Run:

```bash
bun start
```
