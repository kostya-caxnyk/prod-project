import React, { type InputHTMLAttributes, memo, type ChangeEvent, useEffect, useRef } from 'react'

import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string
  onChange?: (newValue: string) => void
}

export const Input = memo(
  ({ value, onChange, type = 'text', placeholder, autoFocus, ...props }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    useEffect(() => {
      if (autoFocus) {
        inputRef.current?.focus()
      }
    }, [autoFocus])

    return (
      <div className={cls.inputWrapper}>
        {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
        )}
        <input
          className={classNames(cls.input)}
          type={type}
          onChange={onChangeHandler}
          value={value}
          ref={inputRef}
          {...props}
        />
      </div>
    )
  }
)
