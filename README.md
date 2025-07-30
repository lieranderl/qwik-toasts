# Qwik-Toasts Library ⚡️

Qwik-Toasts is a versatile toast notification library built on top of [Qwik](https://qwik.builder.io/). It provides a simple and efficient way to display informative messages to users in your web applications.

**Qwik Integration**: Leveraging the capabilities of Qwik, our library seamlessly integrates with your web application, ensuring smooth and efficient performance.

**Tailwind CSS Styles**: The project utilizes Tailwind CSS for styling, offering a customizable and modern look for your toast notifications. Easily adapt the styles to match your application's design.

[**DaisyUI**](https://daisyui.com/): Embrace the aesthetics of DaisyUI themes to give your toast notifications a stylish and modern appearance.

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

or if you're using Bun:

```bash
bun install qwik-toasts
```

---

## Project Structure

```
└── src/
    ├── components/toast/
    └── index.ts
```

- `src/components/toast/`: Contains the core Qwik-Toasts components.
- `index.ts`: Entry point of the Qwik-Toasts library.

---

## Development

Qwik-Toasts uses [Vite](https://vitejs.dev/) with server-side rendering provided by [Qwik](https://qwik.builder.io/) and runs on [Bun](https://bun.sh/).

Start development:

```bash
bun install
bun start
```

---

## Production Build

To build the library for production and generate type definitions:

```bash
bun run build
```

Output will be in:

- `./lib` – Compiled output
- `./lib-types` – TypeScript definitions

---

## Example

Example usage is embedded in `root.tsx`.\
To run the example:

```bash
bun update
bun start
```

