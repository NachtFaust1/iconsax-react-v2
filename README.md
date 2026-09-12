# iconsax-react-v2

> **1100 Iconsax icons as React components, in 6 styles.**
> A maintained, drop-in replacement for `iconsax-react@0.0.8` (which is abandoned).

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

## License

MIT - Icons from [iconsax.io](https://iconsax.io).
