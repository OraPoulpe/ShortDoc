import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UploadFile } from "antd"
import { IFileData, IResponse } from "../interfaces/fileData"

export const fileApi = createApi({
  reducerPath: "file",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://short-doc.ru/",
  }),

  tagTypes: ["fileData"],

  endpoints: (build) => ({
    uploadFile: build.mutation<IResponse, FormData>({
      query: (fileData: FormData) => ({
        url: "/InputFile/",
        method: "POST",
        body: fileData ,
      }),
      // providesTags: (result, error, data) => [{ type: 'Data', id: '1' }]
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
