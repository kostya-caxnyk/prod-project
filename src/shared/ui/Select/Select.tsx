import { classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'

export interface SelectOption<T> {
  value: T
  content: string
}

interface SelectProps<T> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  )

  return (
    <div className={classNames(cls.wrapper, className)}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
}

export const Select = memo(SelectComponent) as typeof SelectComponent
