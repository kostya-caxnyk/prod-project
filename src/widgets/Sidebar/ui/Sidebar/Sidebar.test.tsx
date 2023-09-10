import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderComponent } from '@/shared/lib/tests/renderComponent'

describe('sidebar component', () => {
  test('Test render', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderComponent(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toHaveClass('expanded')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('expanded')
  })
})
