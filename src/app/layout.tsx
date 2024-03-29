import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import { Montserrat } from "next/font/google"

import React from "react"
import { Providers } from "@/shared/lib/store/provider/provider"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import StyledComponentsRegistry from "./registry"
import { MainLayout } from "@/shared/ui/layout/main-layout"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShortDoc",
  description: "Упростить документ в один клик",
  manifest: '/manifest.json',
  icons: { apple: '/icon.png' },
}

export const viewport: Viewport = {
  themeColor: '#6C9EFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Providers>
          <AntdRegistry>
            <StyledComponentsRegistry>
              <MainLayout>{children}</MainLayout>
            </StyledComponentsRegistry>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  )
}
