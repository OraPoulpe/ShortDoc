import { Text } from "@/shared/ui/text"
import { Flex } from "antd"
import Image from "next/image"
import React, { FC } from "react"
import UploadIcon from "../../../../public/icons/upload-file-icon.svg"
import styles from "./file-field.module.scss"
import { PALETTE } from "@/shared/lib/constants"

const FileField: FC = () => {
  return (
    <Flex justify="center" gap={50}>
      <Image
        src={UploadIcon.src}
        alt="Загрузка документа"
        width={80}
        height={80}
        className={styles.uploadIcon}
      />
      <div className={styles.wrapInputText}>
        <Text
          level={"h3"}
          weight={500}
          size={24}
          text_align="center"
          className={styles.firstText}
        >
          "Выберите или перетащите файл"
        </Text>
        <Text
          level={"h3"}
          weight={500}
          size={16}
          text_align="center"
          color={PALETTE["text-gray"]}
        >
          Мы поддерживаем .docx
        </Text>
      </div>
    </Flex>
  )
}

export default FileField
