import { UploadFile } from "antd"

export interface IFileData {
  file: UploadFile
  id: string
}

export interface IResponse {
  text: string[]
}
