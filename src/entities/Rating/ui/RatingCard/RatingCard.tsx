import React, { memo } from 'react'

import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Card } from '@/shared/ui/Card/Card'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'

interface RatingCardProps {
  title: string
  onSelect: (rate: number) => void
  rate: number
}

export const RatingCard = memo(({ title, onSelect, rate }: RatingCardProps) => {
  return (
    <Card className={classNames(cls.ratingCard)} fullWidth>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating onSelect={onSelect} rate={rate} />
      </VStack>
    </Card>
  )
})
