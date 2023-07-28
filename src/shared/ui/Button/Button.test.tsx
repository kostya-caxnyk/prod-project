import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('button component', () => {
  test('without props, but with text', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
