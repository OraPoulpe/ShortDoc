import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UploadFile } from "antd"
import { IFileData } from "../interfaces/fileData"

export const fileApi = createApi({
  reducerPath: "file",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://89.111.153.5:8000/",
  }),

  tagTypes: ["fileData"],

  endpoints: (build) => ({
    uploadFile: build.mutation<IFileData, IFileData>({
      query: (fileData: IFileData) => ({
        url: "/InputFile/",
        method: "POST",
        body: { ...fileData },
      }),
    }),
    getResult: build.query<string, void>({
      query: () => ({
        url: "/InputFile/",
        method: "GET",
        params: { id: 0 },
      }),
    }),
  }),
})

export const { useUploadFileMutation, useGetResultQuery } = fileApi
