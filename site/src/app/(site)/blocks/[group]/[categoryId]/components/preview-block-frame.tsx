"use client"

import { memo, useCallback, useMemo, useState } from "react"

interface PreviewBlockFrameProps {
  preview: string
  reloadKey?: number
}

const PreviewBlockFrameComponent = ({ preview, reloadKey = 0 }: PreviewBlockFrameProps) => {
  const [loadedFrameSrc, setLoadedFrameSrc] = useState<string | null>(null)
  const frameSrc = useMemo(
    () => (reloadKey > 0 ? `${preview}${preview.includes("?") ? "&" : "?"}reload=${reloadKey}` : preview),
    [preview, reloadKey],
  )
  const frameIsLoading = loadedFrameSrc !== frameSrc

  const handleLoad = useCallback(() => {
    setLoadedFrameSrc(frameSrc)
  }, [frameSrc])

  return (
    <div
      className="w-full h-full bg-bg duration-300 ease-linear ui-preview-frame
            flex items-center justify-center relative lg:group-data-[size=mobile]:rounded-ui lg:group-data-[size=md]:rounded-ui
            lg:group-data-[size=md]:w-194.5 lg:group-data-[size=mobile]:w-96 overflow-hidden"
    >
      {frameIsLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg">
          <span
            aria-label="Loading preview"
            className="iconify ph--spinner-gap size-6 text-fg-muted animate-spin"
          />
        </div>
      )}

      <iframe
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
