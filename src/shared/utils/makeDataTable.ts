"use client"

import {
  mockData,
  resultMockData,
} from "@/widgets/preview-result/data/mock-data"
import { ITableData } from "../interfaces/tableData.interface"
import { getFromLocalStorage } from "./getFromLocalStorage"

export const makeDataTable = (array: string[]): ITableData[] => {
  const resultData = array.map((item: string, index: number): ITableData => {
    const key = index + 1
    const origin = item
    const result = resultMockData[index]

    return {
      key: key.toString(),
      origin,
      result,
    }
  })
  return resultData
}
