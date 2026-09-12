# iconsax-react-v2

> **1100 Iconsax icons as React components, in 6 styles.**
> A maintained, drop-in replacement for `iconsax-react@0.0.8` (which is abandoned).

Free · MIT · No dependencies (peer: `react >= 16.8.0`).

## Install

```bash
npm install iconsax-react-v2
```

## Usage

```jsx
import { Archive, AddCircle, ChevronDown } from "iconsax-react-v2";

<Archive size={24} color="#fff" variant="Bold" />
<AddCircle size={32} color="green" variant="Linear" />
<ShieldTick size={20} variant="Bulk" />
<ChevronDown size={16} variant="Broken" />
```

The component API matches `iconsax-react` exactly — swap the import and it just works:

```jsx
// before (abandoned package)
import { Archive } from "iconsax-react";
// after
import { Archive } from "iconsax-react-v2";
```

## Props

| Prop      | Type                 | Default         | Values                                                    |
| --------- | -------------------- | --------------- | --------------------------------------------------------- |
| `color`   | `string`             | `currentColor`  | Any CSS color                                             |
| `size`    | `string` / `number`  | `24`            | Pixel size                                                |
| `variant` | `string`             | `Linear`        | `Linear` · `Bold` · `Outline` · `Bulk` · `Broken` · `TwoTone` |

All other `SVGAttributes` (`className`, `onClick`, `style`, …) pass through to the `<svg>` element.

## Styles

| Style     | Description                                        |
| --------- | -------------------------------------------------- |
| `Linear`  | Stroke-only, rounded caps (default)                |
| `Bold`    | Solid fill                                         |
| `Outline` | Filled outlines (empty centers)                    |
| `Bulk`    | Semi-transparent background + solid foreground     |
| `Broken`  | Dashed / stroke variant                            |
| `TwoTone` | Stroke + 40% opacity accent                        |

## Chevron icons

`ArrowDown4`, `ArrowLeft3`, `ArrowRight4`, `ArrowUp3` were chevron-shaped icons that are no longer exported.
Use these instead:

| Old (removed) | New (use this)      |
| ------------- | ------------------- |
| `ArrowDown4`  | `ChevronDown`       |
| `ArrowLeft3`  | `ChevronLeft`       |
| `ArrowRight4`  | `ChevronRight`      |
| `ArrowUp3`    | `ChevronUp`         |

## Module formats

- **ESM** — `dist/index.esm.js`
- **CJS** — `dist/index.cjs.js`
- **TypeScript** — `dist/index.d.ts` (with `IconProps` / `Icon` types)

## Migrating from iconsax-react

1. `npm uninstall iconsax-react`
2. `npm install iconsax-react-v2`
3. Replace `from "iconsax-react"` with `from "iconsax-react-v2"` in your imports

There are **no other changes** — component names, props, and variants are identical.

## License

MIT — Icons from [iconsax.io](https://iconsax.io).