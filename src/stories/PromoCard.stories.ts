import type { Meta, StoryObj } from '@storybook/vue3'
import PromoCard from '../components/PromoCard.vue'

const meta: Meta<typeof PromoCard> = {
  title: 'Components/PromoCard',
  component: PromoCard,
  tags: ['autodocs'],
  argTypes: {
    surfaceColor: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    buttons: {
      control: { type: 'object' },
    },
  },
}

export default meta
type Story = StoryObj<typeof PromoCard>

export const TwoButtonsLight: Story = {
  args: {
    imageSrc: 'https://picsum.photos/400/200?random=1',
    imageAlt: 'Sample promotional image',
    surfaceColor: 'light',
    buttons: [
      {
        label: 'Learn More',
        variant: 'primary',
        onClick: () => alert('Primary button clicked!'),
      },
      {
        label: 'View Details',
        variant: 'secondary',
        onClick: () => alert('Secondary button clicked!'),
      },
    ],
  },
  render: (args) => ({
    components: { PromoCard },
    setup() {
      return { args }
    },
    template: `
      <PromoCard v-bind="args">
        <template #content>
          <h3>Special Offer</h3>
          <p>Discover our amazing promotion with great deals and exclusive offers.</p>
        </template>
      </PromoCard>
    `,
  }),
}

export const ThreeButtonsDark: Story = {
  args: {
    imageSrc: 'https://picsum.photos/400/200?random=2',
    imageAlt: 'Dark theme promotional image',
    surfaceColor: 'dark',
    buttons: [
      {
        label: 'Book Now',
        variant: 'primary',
        onClick: () => alert('Book Now clicked!'),
      },
      {
        label: 'Compare',
        variant: 'secondary',
        onClick: () => alert('Compare clicked!'),
      },
      {
        label: 'Learn More',
        variant: 'tertiary',
        onClick: () => alert('Learn More clicked!'),
      },
    ],
  },
  render: (args) => ({
    components: { PromoCard },
    setup() {
      return { args }
    },
    template: `
      <PromoCard v-bind="args">
        <template #content>
          <h3>Premium Experience</h3>
          <p>Experience luxury travel with our premium services and exclusive amenities.</p>
        </template>
      </PromoCard>
    `,
  }),
}

export const TwoButtonsDark: Story = {
  args: {
    imageSrc: 'https://picsum.photos/400/200?random=3',
    imageAlt: 'Travel destination image',
    surfaceColor: 'dark',
    buttons: [
      {
        label: 'Explore',
        variant: 'primary',
        onClick: () => alert('Explore clicked!'),
      },
      {
        label: 'Get Quote',
        variant: 'secondary',
        onClick: () => alert('Get Quote clicked!'),
      },
    ],
  },
  render: (args) => ({
    components: { PromoCard },
    setup() {
      return { args }
    },
    template: `
      <PromoCard v-bind="args">
        <template #content>
          <h3>Adventure Awaits</h3>
          <p>Embark on unforgettable journeys to the world's most beautiful destinations.</p>
        </template>
      </PromoCard>
    `,
  }),
}