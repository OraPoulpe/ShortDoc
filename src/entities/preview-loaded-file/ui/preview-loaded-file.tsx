import { Text } from "@/shared/ui/text"
import { UploadFile } from "antd"
import Image from "next/image"
import React, { FC } from "react"
import styles from "./preview-loaded-file.module.scss"
import DeleteIcon from "../../../../public/icons/delete-icon.svg"

interface IPreviewLoadedFileProps {
  file: UploadFile
  onRemove: () => void
}

const PreviewLoadedFile: FC<IPreviewLoadedFileProps> = ({ file, onRemove }) => {
  return (
    <section className={styles.wrapLoadedSection}>
      <div className={styles.wrapFileName}>
        <Text level={"h3"} weight={600} size={16}>
          {file?.name}
        </Text>
        <Image
          onClick={() => onRemove()}
          src={DeleteIcon.src}
          alt="Удалить документ"
          width={24}
          height={24}
        />
      </div>
    </section>
  )
}

export default PreviewLoadedFile
