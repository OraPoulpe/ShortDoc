import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UploadFile } from "antd"
import { IFileData } from "../interfaces/fileData";

export const fileApi = createApi({
  reducerPath: "file",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://89.111.153.5:8000/InputFile/",
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
