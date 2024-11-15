import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@daro/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lfqcamargo.png',
    alt: 'Lucas Camargo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}