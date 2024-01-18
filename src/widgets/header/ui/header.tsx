import Image from "next/image"
import React, { FC } from "react"
import LOGO from "../../../../public/icons/LOGO.svg"
import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.wrapHeader}>
      <Image src={LOGO.src} alt="ShortDoc" width={150} height={41}/>
    </div>
  )
}

