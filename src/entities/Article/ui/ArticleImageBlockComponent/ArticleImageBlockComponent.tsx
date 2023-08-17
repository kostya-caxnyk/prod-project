import React, { memo } from 'react'

import cls from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleImageBlock } from 'entities/Article/model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleImageBlockComponent)}>
        <img src={block.src} alt={block.title} />
        {block.title && <Text text={block.title} />}
      </div>
    )
  }
)
