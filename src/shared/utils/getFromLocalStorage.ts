"use client"

export function getFromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("origin")

    if (storedData) {
      return Promise.resolve(JSON.parse(storedData))
    } else {
      return []
    }
  }
}
