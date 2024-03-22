"use client"

import React, { FC, useEffect, useState } from "react"
import styles from "./preview-result.module.scss"

import { ITableData } from "@/shared/interfaces/tableData.interface"
import { PALETTE } from "@/shared/lib/constants"
import { makeDataTable } from "@/shared/utils/makeDataTable"
import {
  ConfigProvider,
  Pagination,
  Table,
  TableProps,
  ThemeConfig,
} from "antd"
import { getFromLocalStorage } from "@/shared/utils/getFromLocalStorage"

export const PreviewResult: FC = () => {
  const [data, setData] = useState<ITableData[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const preparedDataForTable = await getFromLocalStorage("origin")
        setData(makeDataTable(preparedDataForTable))
      } catch (error) {
        console.error("Ошибка при загрузке данных из localStorage:", error)
      }
    }

    fetchData()
  }, [])

  const updateObjectInList = (index: number, updatedObject: ITableData) => {
    const newData: ITableData[] = [...data]

    newData[index] = updatedObject

    setData(newData)
  }

  const columns = [
    {
      title: "Оригинал",
      dataIndex: "origin",
      key: "origin",
      width: "50%",
    },
    {
      title: "Результат",
      dataIndex: "result",
      key: "result",
      width: "50%",
    },
  ]

  const tableProps: TableProps = {
    dataSource: data,
    columns: columns,
    bordered: true,
    pagination: false,
    // loading: true,
    // showHeader: false,
    // scroll: false,
  }
  return <Table {...tableProps} />
}
