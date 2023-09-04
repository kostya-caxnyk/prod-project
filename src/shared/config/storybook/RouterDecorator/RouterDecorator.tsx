import { Story } from '@storybook/react'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story) => (
  <Suspense fallback="">
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  </Suspense>
)
