import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation()

  return <div>{t('Main Page')}</div>
}

export default memo(MainPage)
