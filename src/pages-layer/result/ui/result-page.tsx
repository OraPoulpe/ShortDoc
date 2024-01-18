import { PreviewResult } from "@/features/preview-result"
import React, { FC } from "react"
import styles from './result-page.module.scss'

export const ResultPage: FC = () => {
  return (
    <div className={styles.wrapResultPage}>
      <PreviewResult />
    </div>
  )
}
