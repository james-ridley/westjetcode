# PromoCard Component

A flexible promotional card component with image, configurable buttons (2-3), and dual surface colors.

## Features

- **Flexible Button Count**: Support for 2 or 3 buttons
- **Image Support**: Hero image with proper aspect ratio
- **Dual Surface Colors**: Light and dark theme variants
- **8px Spacing System**: Consistent spacing throughout
- **TypeScript Support**: Full type safety
- **Storybook Integration**: Interactive documentation

## Usage

```vue
<template>
  <PromoCard
    image-src="https://example.com/image.jpg"
    image-alt="Promotional image"
    surface-color="light"
    :buttons="buttons"
  >
    <template #content>
      <h3>Special Offer</h3>
      <p>Discover our amazing promotion with great deals.</p>
    </template>
  </PromoCard>
</template>

<script setup lang="ts">
import { PromoCard } from '@westjet/westjet-components'

const buttons = [
  {
    label: 'Learn More',
    variant: 'primary',
    onClick: () => console.log('Primary clicked')
  },
  {
    label: 'View Details',
    variant: 'secondary',
    onClick: () => console.log('Secondary clicked')
  }
]
</script>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `imageSrc` | `string` | Yes | - | Source URL for the hero image |
| `imageAlt` | `string` | Yes | - | Alt text for the image |
| `surfaceColor` | `'light' \| 'dark'` | No | `'light'` | Background color theme |
| `buttons` | `PromoButton[]` | Yes | - | Array of 2-3 button configurations |

## Button Configuration

Each button in the `buttons` array should have:

```typescript
interface PromoButton {
  label: string           // Button text
  variant?: 'primary' | 'secondary' | 'tertiary'  // Button style
  onClick: () => void     // Click handler
}
```

## Button Variants

- **Primary**: Blue background, white text
- **Secondary**: Light gray background, dark text
- **Tertiary**: Transparent background, underlined text

## Spacing

All spacing uses multiples of 8px:
- Container padding: 16px (2 × 8px)
- Button padding: 8px 16px
- Button gaps: 8px
- Content padding: 16px

## Examples

### 2 Buttons, Light Theme
```vue
<PromoCard
  image-src="/path/to/image.jpg"
  image-alt="Light theme promo"
  surface-color="light"
  :buttons="[
    { label: 'Buy Now', variant: 'primary', onClick: handleBuy },
    { label: 'Learn More', variant: 'secondary', onClick: handleLearn }
  ]"
>
  <template #content>
    <h3>Light Theme Card</h3>
    <p>Content goes here...</p>
  </template>
</PromoCard>
```

### 3 Buttons, Dark Theme
```vue
<PromoCard
  image-src="/path/to/image.jpg"
  image-alt="Dark theme promo"
  surface-color="dark"
  :buttons="[
    { label: 'Book', variant: 'primary', onClick: handleBook },
    { label: 'Compare', variant: 'secondary', onClick: handleCompare },
    { label: 'Details', variant: 'tertiary', onClick: handleDetails }
  ]"
>
  <template #content>
    <h3>Dark Theme Card</h3>
    <p>Content goes here...</p>
  </template>
</PromoCard>
```