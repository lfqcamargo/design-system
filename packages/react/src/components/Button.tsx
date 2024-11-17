import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$color-primary-variant-500',
        '&:not(:disabled):hover': {
          background: '$color-primary-variant-300',
        },

        '&:disabled': {
          backgroundColor: '$color-primary-200',
        },

        '&:focus': {
          boxShadow: '0 0 0 2px $colors$color-primary-100',
        },
      },

      secondary: {
        color: '$color-primary-variant-300',
        border: '2px solid $color-primary-variant-500',

        '&:not(:disabled):hover': {
          background: '$color-primary-variant-500',
          color: '$white',
        },

        '&:disabled': {
          color: '$color-primary-200',
          borderColor: '$color-primary-200',
        },
      },
      tertiary: {
        color: '$color-primary-100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$color-primary-600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
