import { useCallback, useState } from 'react'

export function useToggle(initialValue: boolean) {
  const [state, setState] = useState(initialValue)

  const onToggle = useCallback(() => {
    setState((prev) => !prev)
  }, [])

  return [state, onToggle] as const
}
