"use client"

import { useEffect, useState } from "react"

export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState<boolean | undefined>()

  useEffect(() => {
    const result = matchMedia(query)
    const onChange = () => {
      setValue(result.matches)
    }

    result.addEventListener("change", onChange)
    onChange()
    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}
