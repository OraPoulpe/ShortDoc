"use client"
import { Button, Typography } from "antd"
import styles from "./home-page.module.scss"
import { Text } from "@/shared/ui/text"
import { PALETTE } from "@/shared/lib/constants"
import { UploadFileField } from "@/widgets/upload-file"
const { Title } = Typography

//TODO: изменить тег выделения слова другим цветом
export const HomePage = () => {
  return (
    <div className={styles.wrapHomePage}>
      <section className={styles.homeSection}>
        <Text
          level={"h1"}
          weight={700}
          size={52}
          text_align="center"
          className={styles.firtTitle}
        >
          <Text
            level={"span"}
            weight={700}
            size={52}
            color={PALETTE["primary-blue"]}
            className={styles.firtTitle}
          >
            Упростить
          </Text>{" "}
          документ в один клик
        </Text>
        <Text
          level={"h2"}
          weight={500}
          size={20}
          text_align="center"
          className={styles.secondTitle}
        >
          ShortDoc сделает ваш документ ясным и легким. Избавьтесь от
          информационной перегрузки с лаконичным и понятным текстом.
        </Text>
      </section>

      <UploadFileField />
    </div>
  )
}
