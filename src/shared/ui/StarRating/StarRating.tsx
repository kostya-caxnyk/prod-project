import React, { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './StarRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '../Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg'
import { HStack } from '../Stack'

interface StarRatingProps {
  rate?: number
  onSelect: (rate: number) => void
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo(({ rate, onSelect }: StarRatingProps) => {
  const [selectedStars, setSelectedStars] = useState(rate || 0)

  useEffect(() => {
    setSelectedStars(rate || 0)
  }, [rate])

  const onMouseEnter = (star: number) => () => {
    if (!rate) {
      setSelectedStars(star)
    }
  }

  const onMouseLeave = () => {
    if (!rate) {
      setSelectedStars(0)
    }
  }

  return (
    <HStack gap="8">
      {stars.map((star) => (
        <Icon
          className={classNames(
            star <= selectedStars ? '' : cls.unselected,
            !rate && cls.icon
          )}
          size={40}
          Svg={StarIcon}
          key={star}
          onClick={() => {
            onSelect(star)
          }}
          onMouseEnter={onMouseEnter(star)}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </HStack>
  )
})
