"use client"

import React, { ChangeEvent, FC, useState } from "react"
import type { ThemeConfig, UploadFile, UploadProps } from "antd"
import { Button, ConfigProvider, Flex, message, Spin, Upload } from "antd"
import { Text } from "@/shared/ui/text"

import Image from "next/image"

import styles from "./upload-file.module.scss"
import { PALETTE } from "@/shared/lib/constants"
import { useUploadFileMutation } from "@/shared/api/fileApi"
import { generateFileId } from "@/shared/utils/generateFileId"
import { IFileData } from "@/shared/interfaces/fileData"
import { useRouter } from "next/navigation"
import { useWindowSize } from "@/shared/hooks/useWindowsSize"
import { FileField } from "@/entities/file-field"
import { PreviewLoadedFile } from "@/entities/preview-loaded-file"
import FileButton from "@/entities/file-button/ui/file-button"

const { Dragger } = Upload

export const UploadFileField: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [file, setFile] = useState<UploadFile>()
  const [uploading, setUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const [uploadFile] = useUploadFileMutation()

  const pageWidth = useWindowSize()

  const handleUploadFile = async () => {
    console.log("file before upload", file)
    const fileId = generateFileId()
    const fileData: IFileData = {
      file: file,
      id: fileId,
    }
    // const res = await uploadFile(fileData)
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
        {pageWidth.width < 576 ? <FileButton/> : <FileField />}
      </Dragger>
    )
  } else {
    return (
      <ConfigProvider theme={lodedFileTheme}>
        <PreviewLoadedFile file={file} onRemove={() => setFile(undefined)} />
        <Button
          type="primary"
          size="large"
          style={{ width: "100%" }}
          loading={isLoading}
          onClick={handleUploadFile}
        >
          Упростить
        </Button>
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
