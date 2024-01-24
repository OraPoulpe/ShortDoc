"use client"

import React, { ChangeEvent, FC, useState } from "react"
import type { ThemeConfig, UploadFile, UploadProps } from "antd"
import { Button, ConfigProvider, Flex, message, Spin, Upload } from "antd"
import { Text } from "@/shared/ui/text"

import Image from "next/image"
import UploadIcon from "../../../../public/icons/upload-file-icon.svg"
import DeleteIcon from "../../../../public/icons/delete-icon.svg"

import styles from "./upload-file.module.scss"
import { PALETTE } from "@/shared/lib/constants"
import { useUploadFileMutation } from "@/shared/api/fileApi"
import { generateFileId } from "@/shared/utils/generateFileId"
import { IFileData } from "@/shared/interfaces/fileData"
import { useRouter } from "next/navigation"

const { Dragger } = Upload

export const UploadFileField: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [file, setFile] = useState<UploadFile>()
  const [uploading, setUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const [uploadFile] = useUploadFileMutation()

  const handleUploadFile = async () => {
    console.log("file before upload", file)
    const fileId = generateFileId()
    const fileData: IFileData = {
      file: file,
      id: fileId,
    }
    //   const res = await uploadFile(fileData)
    router.push(`/result/${fileId}`)

    console.log()
  }

  const UploadFileInputProps: UploadProps = {
    maxCount: 1,
    accept: ".docx",
    multiple: false,
    onChange(info) {
      // if (info.file.type != 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      //   message.warning(`${info.file.name} формат должен быть docx.`);

      // }
      const { status } = info.file
      console.log("info", status)
      if (status !== "uploading") {
        console.log("uploading", info.file, info.fileList)
      }
      if (status === "done") {
        message.success(`${info.file.name} документ загружен успешно.`)
      } else if (status === "error") {
        message.error(`${info.file.name} не удалось загрузить документ.`)
      }
    },
    beforeUpload: (file) => {
      setFile(file)
      // console.log(file)
      setIsLoaded(true)

      return false
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files)
    },
  }

  if (!file) {
    return (
      <Dragger {...UploadFileInputProps} className={styles.wrapDragger}>
        <Flex justify="center" gap={50}>
          <Image
            src={UploadIcon.src}
            alt="Загрузка документа"
            width={80}
            height={80}
          />
          <div>
            <Text level={"h3"} weight={500} size={24} text_align="center">
              Выберите или перетащите файл
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
      </Dragger>
    )
  } else {
    return (
      <ConfigProvider theme={lodedFileTheme}>
        <section className={styles.wrapLoadedSection}>
          <div className={styles.wrapFileName}>
            <Text level={"h3"} weight={600} size={16}>
              {file?.name}
            </Text>
            <Image
              onClick={() => {
                setFile(undefined)
              }}
              src={DeleteIcon.src}
              alt="Удалить документ"
              width={24}
              height={24}
            />
          </div>
          <Button
            type="primary"
            size="large"
            style={{ width: "100%" }}
            loading={isLoading}
            onClick={handleUploadFile}
          >
            Упростить
          </Button>
        </section>
      </ConfigProvider>
    )
  }
}

const lodedFileTheme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: PALETTE["primary-blue"],
      colorText: PALETTE["white"],
      controlHeightLG: 48,
    },
  },
}
