# iconsax-react-v2

> 1100 Iconsax icons as React components, in 6 styles.

## Install

```bash
npm install iconsax-react-v2
```

## Usage

```jsx
import { Archive, AddCircle, ShieldTick } from "iconsax-react-v2";

<Archive size={24} color="#fff" variant="Bold" />
<AddCircle size={32} color="green" variant="Linear" />
<ShieldTick size={20} variant="Bulk" />
```

## Props

| Prop      | Type                                                  | Default     | Values                                                    |
| --------- | ----------------------------------------------------- | ----------- | --------------------------------------------------------- |
| `color`   | `string`                                              | `currentColor` | Any CSS color                                            |
| `size`    | `string` / `number`                                   | `24`        | Pixel size                                                 |
| `variant` | `string`                                              | `Linear`    | `Linear` · `Bold` · `Outline` · `Bulk` · `Broken` · `TwoTone` |

## Styles

- **Linear** - stroke-only, rounded caps (default)
- **Bold** - solid fill
- **Outline** - filled shapes, no strokes
- **Bulk** - semi-transparent background + solid foreground
- **Broken** - dashed/stroke variant
- **TwoTone** - stroke + 40% opacity accent

## License

MIT - Icons from [iconsax.io](https://iconsax.io)
