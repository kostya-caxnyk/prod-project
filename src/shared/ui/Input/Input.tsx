import React, { type InputHTMLAttributes, memo, type ChangeEvent, useEffect, useRef } from 'react'

import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface InputProps<Name>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'name'> {
  value?: string | number
  onChange?: (newValue: string, name: Name) => void
  name?: Name
}

const InputComponent =
  <Name extends string,>({ value, onChange, type = 'text', placeholder, autoFocus, name, ...props }: InputProps<Name>) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value, (name || '') as Name)
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

export const Input = memo(InputComponent) as typeof InputComponent
