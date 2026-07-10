# @etax/design-system

Etax's React component library — components, design tokens, and styles shared across Etax products.

## Install

```sh
pnpm add @etax/design-system
```

## Usage

```tsx
import { Button, Input, Card } from '@etax/design-system'
import '@etax/design-system/styles.css'

function Example() {
  return (
    <Card title="Sign in" subtitle="Access your account">
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="primary">Continue</Button>
    </Card>
  )
}
```

## Dark mode

Set `data-theme="dark"` on any ancestor element (commonly `<html>` or `<body>`) to switch
semantic color tokens to their dark variants:

```html
<html data-theme="dark">
  ...
</html>
```

## Development

```sh
pnpm install     # install dependencies
pnpm dev         # build in watch mode
pnpm build       # production build (dist/)
pnpm typecheck   # type-check without emitting
pnpm lint        # lint src/
```

## Project structure

```
src/
  tokens/          design tokens as CSS custom properties (colors, spacing, type, etc.)
  components/
    Button/
      Button.tsx
      Button.css
      index.ts
    Input/
    Card/
  index.ts         package entry point, re-exports all components + tokens
```

## Styling convention

Components use plain CSS (not CSS Modules) with class names prefixed by component name —
e.g. `.button-root`, `.button-primary`, `.input-field`, `.card-header` — to avoid collisions
across the library, all styled entirely with tokens from `src/tokens/tokens.css` (no hardcoded
colors, spacing, or type sizes).

> **Why not CSS Modules?** `tsup` (built on esbuild) has a built-in CSS loader that
> unconditionally intercepts every `.css` import before any user esbuild plugin runs, which
> makes CSS-Modules esbuild plugins silently produce empty class maps. Plain CSS + a naming
> convention sidesteps this entirely and needs no extra build tooling.

Add new components by following the same folder pattern: component + prefixed CSS file + local
`index.ts`, exported from the root `src/index.ts`.
