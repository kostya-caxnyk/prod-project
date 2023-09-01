import { classNames } from 'shared/lib/classNames/classNames'
import {
  createContext,
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef
} from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getScrollPositionByPath,
  scrollRestorationActions
} from 'features/ScrollRestoration'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const pageContext = createContext<HTMLDivElement | null>(null)

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const position = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useEffect(() => {
    wrapperRef.current.scrollTop = position
  }, [position])

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestorationActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop
      })
    )
  }, 500)

  return (
    <pageContext.Provider value={wrapperRef.current}>
      <section
        onScroll={onScroll}
        ref={wrapperRef}
        className={classNames(cls.page, className)}
        id="page-id"
      >
        {children}
        <div ref={triggerRef} className={cls.trigger} />
      </section>
    </pageContext.Provider>
  )
})
