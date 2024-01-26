import { mockData } from "@/widgets/preview-result/data/mock-data"
import { ITableData } from "../interfaces/tableData.interface"

export const makeDataTable = mockData.map((item, index): ITableData => {
  const key = index + 1
  const orig = item
  const res = ""

  return {
    key: key.toString(),
    orig,
    res,
  }
})
