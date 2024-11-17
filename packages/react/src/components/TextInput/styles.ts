import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$color-primary-900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $color-primary-900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$color-primary-variant-300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariant: {
    size: 'md',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$color-primary-400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$color-primary-400',
  },
})
