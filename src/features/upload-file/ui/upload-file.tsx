"use client"

import React, { ChangeEvent, FC, useState } from "react"
import type { ThemeConfig, UploadFile, UploadProps } from "antd"
import { Button, ConfigProvider, message, Upload } from "antd"
import { Text } from "@/shared/ui/text"

import Image from "next/image"
import UploadIcon from "../../../../public/icons/upload-file-icon.svg"
import DeleteIcon from "../../../../public/icons/delete-icon.svg"

import styles from "./upload-file.module.scss"
import { PALETTE } from "@/shared/lib/constants"

const { Dragger } = Upload

export const UploadFileField: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [file, setFile] = useState<UploadFile>()
  const [uploading, setUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload = () => {
    //отправка документов на сервер
    // const formData = new FormData()
    // file.forEach((file) => {
    //   formData.append("files[]", file as FileType)
    // })
    // setUploading(true)
    // // You can use any AJAX library you like
    // fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setFileList([])
    //     message.success("upload successfully.")
    //   })
    //   .catch(() => {
    //     message.error("upload failed.")
    //   })
    //   .finally(() => {
    //     setUploading(false)
    //   })
  }

  const UploadFileInputProps: UploadProps = {
    maxCount: 1,
    accept:
      ".docx",
    multiple: false,
    onRemove: (file) => {
      // const index = file.indexOf(file)
      // const newFileList = file.slice()
      // newFileList.splice(index, 1)
      // setFile(newFileList)
    },
    beforeUpload: (file) => {
      setFile(file)
      console.log(file)
      setIsLoaded(true)

      return false
    },
  }

  if (!file) {
    return (
      <Dragger {...UploadFileInputProps} className={styles.wrapDragger}>
        <div className={styles.wrapContent}>
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
        </div>
      </Dragger>

      // <label className={styles.wrapDragger}>
      //   <input
      //     type="file"
      //     className={styles.inputFile}
      //     value={file}
      //     onChange={handleChangeUploadFile  }
      //   />
      //   <Image
      //     src={UploadIcon.src}
      //     alt="Загрузка документа"
      //     width={80}
      //     height={80}
      //   />
      //   <div className={styles.wrapContent}>
      //     <Text level={"h3"} weight={500} size={24} text_align="center">
      //       Выберите или перетащите файл
      //     </Text>
      //     <Text
      //       level={"h3"}
      //       weight={500}
      //       size={16}
      //       text_align="center"
      //       color={PALETTE["text-gray"]}
      //     >
      //       Мы поддерживаем .docx
      //     </Text>
      //   </div>
      // </label>
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
