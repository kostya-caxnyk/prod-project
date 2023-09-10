import React, { memo } from 'react'

import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  ({ block }: ArticleCodeBlockComponentProps) => {
    return <Code>{block.code}</Code>
  }
)
