import React, { FC } from "react"
import styles from './result-page.module.scss'
import { PreviewResult } from "@/widgets/preview-result"

export const ResultPage: FC = () => {
  return (
    <div className={styles.wrapResultPage}>
      <PreviewResult />
    </div>
  )
}
