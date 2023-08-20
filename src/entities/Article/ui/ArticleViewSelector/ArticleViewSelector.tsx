import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import ListIcon from 'shared/assets/icons/list.svg'
import TiledIcon from 'shared/assets/icons/tiled.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'

interface ArticleViewSelectorProps {
  className?: string
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view = ArticleView.SMALL, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={className}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            size={20}
            Svg={viewType.icon}
            className={classNames('', {
              [cls.notSelected]: viewType.view !== view
            })}
          />
        </Button>
      ))}
    </div>
  )
})
