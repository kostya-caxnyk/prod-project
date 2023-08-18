import { useEffect } from 'react'

export const useInitialEffect = (func: () => any, deps: any[]) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      func()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps])
}
