
export const UploadFileModel = () => {
  const removeEmptyLines = (lines: string[]): string[] => {
    return lines.filter((line) => line.trim() !== "")
  }

  return {
    removeEmptyLines
  }
}
