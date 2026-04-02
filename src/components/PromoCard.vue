<template>
  <div
    :class="[
      'promo-card',
      `promo-card--${surfaceColor}`,
      `promo-card--${buttons.length}-buttons`
    ]"
  >
    <div class="promo-card__image-container">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="promo-card__image"
      />
    </div>

    <div class="promo-card__content">
      <slot name="content" />
    </div>

    <div class="promo-card__actions">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="[
          'promo-card__button',
          button.variant && `promo-card__button--${button.variant}`
        ]"
        @click="button.onClick"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface PromoButton {
  label: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick: () => void
}

export interface PromoCardProps {
  imageSrc: string
  imageAlt: string
  surfaceColor: 'light' | 'dark'
  buttons: PromoButton[]
}

const props = withDefaults(defineProps<PromoCardProps>(), {
  surfaceColor: 'light'
})

// Validate button count
if (props.buttons.length < 2 || props.buttons.length > 3) {
  console.warn('PromoCard: buttons prop must contain 2 or 3 buttons')
}
</script>

<style scoped>
.promo-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.promo-card--light {
  background-color: #ffffff;
  color: #333333;
}

.promo-card--dark {
  background-color: #1a1a1a;
  color: #ffffff;
}

.promo-card__image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.promo-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-card__content {
  padding: 16px;
}

.promo-card__actions {
  padding: 0 16px 16px 16px;
  display: flex;
  gap: 8px;
}

.promo-card--2-buttons .promo-card__actions {
  justify-content: space-between;
}

.promo-card--3-buttons .promo-card__actions {
  justify-content: space-around;
}

.promo-card__button {
  flex: 1;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 0;
}

.promo-card__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.promo-card--dark .promo-card__button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.promo-card__button--primary {
  background-color: #007acc;
  color: white;
  border-color: #007acc;
}

.promo-card__button--primary:hover {
  background-color: #005999;
}

.promo-card__button--secondary {
  background-color: #f0f0f0;
  color: #333;
  border-color: #f0f0f0;
}

.promo-card--dark .promo-card__button--secondary {
  background-color: #333;
  color: #fff;
  border-color: #333;
}

.promo-card__button--secondary:hover {
  background-color: #e0e0e0;
}

.promo-card--dark .promo-card__button--secondary:hover {
  background-color: #444;
}

.promo-card__button--tertiary {
  background-color: transparent;
  color: #666;
  border-color: transparent;
  text-decoration: underline;
}

.promo-card--dark .promo-card__button--tertiary {
  color: #ccc;
}

.promo-card__button--tertiary:hover {
  background-color: transparent;
  color: #333;
}

.promo-card--dark .promo-card__button--tertiary:hover {
  color: #fff;
}
</style>