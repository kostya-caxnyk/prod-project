import React, { memo } from 'react'

import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent = memo(
  ({ block, className }: ArticleTextBlockComponentProps) => {
    return (
      <div className={className}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    )
  }
)
