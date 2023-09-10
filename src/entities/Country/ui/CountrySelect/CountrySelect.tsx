import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from '@/shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import { ListBox } from '@/shared/ui/Popups'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <ListBox
        className={classNames(className)}
        label={t('Select country')}
        items={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  }
)
