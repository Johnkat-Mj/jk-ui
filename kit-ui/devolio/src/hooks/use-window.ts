import { useCallback, useEffect, useState } from "react"

export const useWindow = () => {
  const [scrollY, setscrollY] = useState<number>(0)
  const handleScrollY = useCallback(
    () => {
      setscrollY(()=>window.scrollY)
    },
    [],
  )


  useEffect(() => {
    document.addEventListener("load",handleScrollY)
    document.addEventListener("scroll",handleScrollY)
    return () => {
      document.removeEventListener("load",handleScrollY)
      document.removeEventListener("scroll",handleScrollY )
    }
  }, [handleScrollY])
  return {scrollY}
}