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

export const PreviewResult: FC = () => {
  const [data, setData] = useState<ITableData[]>(makeDataTable)

  const updateObjectInList = (index: number, updatedObject: ITableData) => {
    const newData: ITableData[] = [...data]

    newData[index] = updatedObject

    setData(newData)
  }

  const updatedObject = { key: "1", orig: "Новый текст", res: "Новое значение" }

  useEffect(() => {
    updateObjectInList(1, updatedObject)
  }, [])

  const columns = [
    {
      title: "Оригинал",
      dataIndex: "orig",
      key: "orig",
      width: "50%",
    },
    {
      title: "Результат",
      dataIndex: "res",
      key: "res",
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
