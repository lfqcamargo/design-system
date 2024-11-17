import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$color-primary-900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $color-primary-900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,
  '&:focus': {
    outline: 0,
    borderColor: '$color-primary-variant-300',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$color-primary-400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
TextArea.displayName = 'TextArea'
