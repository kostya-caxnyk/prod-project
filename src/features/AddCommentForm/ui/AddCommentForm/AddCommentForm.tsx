import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './AddCommentForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import {
  addCommentFormActions,
  addCommentFormReducer
} from '../../model/slice/addCommentFormSlice'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormError,
  getAddCommentFormText
} from 'features/AddCommentForm/model/selectors/getCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface AddCommentFormProps {
  onSendComment: (text: string) => void
}

const AddCommentForm = memo(({ onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  useDynamicModuleLoader('addCommentForm', addCommentFormReducer)
  const dispatch = useAppDispatch()

  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const onChange = useCallback(
    (text: string) => {
      dispatch(addCommentFormActions.setText(text))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text)
    onChange('')
  }, [onChange, onSendComment, text])

  return (
    <div className={classNames(cls.addCommentForm)}>
      <Input
        value={text}
        onChange={onChange}
        className={cls.input}
        placeholder={t('Enter comment text here')}
      />
      <Button onClick={onSendHandler}>{t('Send')}</Button>
    </div>
  )
})

export default AddCommentForm
