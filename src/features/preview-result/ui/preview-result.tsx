import React, { FC } from "react"
import styles from "./preview-result.module.scss"
import { Divider } from "antd"

export const PreviewResult: FC = () => {
  return (
    <div className={styles.wrapPreview}>
      <section className={styles.wrapText}></section>
      {/* <Divider /> */}
      <section className={styles.wrapText}></section>
    </div>
  )
}
