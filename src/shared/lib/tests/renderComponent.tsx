import { render } from '@testing-library/react'
import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface ComponentRenderOptions {
  route?: string
}

export function renderComponent(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  return render(
    <MemoryRouter initialEntries={[options.route || '/']}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
