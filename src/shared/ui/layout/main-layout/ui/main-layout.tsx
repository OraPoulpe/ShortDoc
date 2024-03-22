import React from "react"
import styles from "./main-layout.module.scss"
import { ConfigProvider, ThemeConfig } from "antd"
import { PALETTE } from "@/shared/lib/constants"
import { Header } from "@/widgets/header"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={mainTheme}>
      <header>
        <Header />
      </header>
      <main className={styles.MainLayout}>{children}</main>
      <footer className="">Загружая свои документы на этот сайт вы соглашаетесь с нашим Положением о конфиденциальности</footer>
    </ConfigProvider>
  )
}

const mainTheme: ThemeConfig = {
  token: {
    // Seed Token
    colorPrimary: PALETTE["primary-blue"],
  },
}

export default MainLayout