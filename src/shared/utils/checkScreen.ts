"use client"

const SIZE = {
  'xs': 320,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
} as const


export const checkScreen = (minmax: "max" | "min", size: keyof typeof SIZE): boolean => {
  const pageWidth = document.documentElement.scrollWidth
  

  if (minmax === "min") {
    return pageWidth > SIZE[size]
  } else {
    return pageWidth < SIZE[size]
  }
}
