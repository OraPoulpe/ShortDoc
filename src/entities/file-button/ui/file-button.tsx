import { PALETTE } from "@/shared/lib/constants"
import { Button, ConfigProvider, ThemeConfig } from "antd"
import React, { FC } from "react"
import { UploadOutlined } from '@ant-design/icons';

const FileButton: FC = () => {
  return (
    <ConfigProvider theme={lodedFileTheme}>
      <Button
        type="primary"
        size="large"
        style={{ width: "100%" }}
        // loading={isLoading}
        // onClick={handleUploadFile}
        icon={<UploadOutlined />}
      >
        Выберите файл
      </Button>
    </ConfigProvider>
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

export default FileButton

