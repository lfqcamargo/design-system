import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@daro/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}