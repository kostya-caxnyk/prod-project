import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleTextBlock } from 'entities/Article/model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  ({ block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation()

    return (
      <div>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    )
  }
)
