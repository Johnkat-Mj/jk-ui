"use client"

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"

interface PreviewBlockFrameProps {
  preview: string
  reloadKey?: number
}

const PreviewBlockFrameComponent = ({ preview, reloadKey = 0 }: PreviewBlockFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loadedFrameSrc, setLoadedFrameSrc] = useState<string>(preview)
  const frameSrc = useMemo(
    () => (reloadKey > 0 ? `${preview}${preview.includes("?") ? "&" : "?"}reload=${reloadKey}` : preview),
    [preview, reloadKey],
  )
  const frameIsLoading = loadedFrameSrc !== frameSrc

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe?.contentDocument?.readyState === 'complete') {
      setLoadedFrameSrc(frameSrc)
    }
  }, [frameSrc])

  const handleLoad = useCallback(() => {
    setLoadedFrameSrc(frameSrc)
  }, [frameSrc])

  return (
    <div
      className="w-full h-full bg-background duration-300 ease-linear ui-preview-frame
            flex items-center justify-center relative lg:group-data-[size=mobile]:rounded-ui lg:group-data-[size=md]:rounded-ui
            lg:group-data-[size=md]:w-194.5 lg:group-data-[size=mobile]:w-96 overflow-hidden"
    >
      {frameIsLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
          <span
            aria-label="Loading preview"
            className="iconify ph--spinner-gap size-6 text-muted-foreground animate-spin"
          />
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={frameSrc}
        loading="lazy"
        onLoad={handleLoad}
        className={`w-full h-full max-h-full overflow-hidden transition-opacity duration-300 ease-linear ${
          frameIsLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )
}

export const PreviewBlockFrame = memo(
  PreviewBlockFrameComponent,
  (prevProps, nextProps) =>
    prevProps.preview === nextProps.preview && prevProps.reloadKey === nextProps.reloadKey,
)
