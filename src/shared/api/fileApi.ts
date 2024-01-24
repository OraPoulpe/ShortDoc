import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UploadFile } from "antd"
import { IFileData } from "../interfaces/fileData";

export const fileApi = createApi({
  reducerPath: "file",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://inverse-projects.store/api",
  }),

  tagTypes: ["fileData"],

  endpoints: (build) => ({
    uploadFile: build.mutation<IFileData, IFileData>({
      query: (fileData: IFileData) => ({
        url: "/news/create/",
        method: "POST",
        body: { ...fileData },
      }),
    }),
  }),
})

export const { useUploadFileMutation } = fileApi;
