"use client"

import React, { ChangeEvent, FC, useState } from "react"
import type { ThemeConfig, UploadFile, UploadProps } from "antd"
import { Button, ConfigProvider, Flex, message, Spin, Upload } from "antd"
import { Text } from "@/shared/ui/text"
import "./upload-file.css"

import mammoth from "mammoth"

import Image from "next/image"

import styles from "./upload-file.module.scss"
import { PALETTE } from "@/shared/lib/constants"
import {
  fileApi,
  useGetResultQuery,
  useUploadFileMutation,
} from "@/shared/api/fileApi"
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

  // const { data } = useGetResultQuery()

  // console.log(data)

  const handleUploadFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    const fileId = generateFileId()

    // console.log("file before upload", file)

    formData.append("id", fileId)

    if (file instanceof File) {
      formData.append("file", file, file.name)
    }

    // const fileData: IFileData = {
    //   file: file,
    //   id: "45454",
    // }
    // try {
    //   const res = await uploadFile(formData)
    //   console.log("res", res)

    //   if ("data" in res) {
    //     console.log("data", res.data.text[12])
    //   }

    //   invalidateQueries("uploadFile")
    // } catch (error) {}

    // headers: { "Content-Type": "multipart/form-data" },
    // const response = await fetch("https://short-doc.ru/InputFile/", {
    //   method: "POST",
    //   body: formData,

    // })

    router.push(`/result/${fileId}`)
  }

  const UploadFileInputProps: UploadProps = {
    name: "file",
    maxCount: 1,
    accept: ".docx",
    multiple: false,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log("onChange", info)
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    },

    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
    beforeUpload: async (file) => {
      setFile(file)
      setIsLoaded(true)

      message.success(`${file.name} файл добавлен успешно`)

      const reader = new FileReader()
      reader.onload = async () => {
        const arrayBuffer = reader.result as ArrayBuffer
        const result = await mammoth.extractRawText({ arrayBuffer })
        const origin: string[] = result.value
          .split("\n")
          .filter((line) => line.trim() !== "")
        localStorage.setItem("origin", JSON.stringify(origin))
      }
      reader.readAsArrayBuffer(file)
      return false
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files)
    },
  }

  const [test, setTest] = useState<File | null>()

  return (
    <form
      onSubmit={handleUploadFile}
      style={{ width: "100%", height: "180px" }}
    >
      {!file && (
        <>
          {pageWidth.width < 576 ? (
            <>
              <Upload {...UploadFileInputProps} className={"wrapUpload"}>
                <FileButton />
              </Upload>
              <Text
                level={"h3"}
                weight={500}
                size={16}
                text_align="center"
                color={PALETTE["text-gray"]}
              >
                Мы поддерживаем .docx
              </Text>
            </>
          ) : (
            <Dragger {...UploadFileInputProps} className={styles.wrapDragger}>
              <FileField />
            </Dragger>
          )}
        </>
      )}

      {file && (
        <>
          <ConfigProvider theme={lodedFileTheme}>
            <PreviewLoadedFile
              file={file}
              onRemove={() => setFile(undefined)}
            />
            <Button
              type="primary"
              size="large"
              style={{ width: "100%" }}
              loading={isLoading}
              htmlType="submit"
            >
              Упростить
            </Button>
          </ConfigProvider>
        </>
      )}
    </form>
  )
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
function invalidateQueries(arg0: string) {
  throw new Error("Function not implemented.")
}
