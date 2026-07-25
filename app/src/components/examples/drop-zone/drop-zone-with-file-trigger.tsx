"use client"

import type { DropEvent } from "@react-types/shared"
import { useState } from "react"
import { isFileDropItem } from "react-aria-components"
import { DropZone } from "@/components/jk/drop-zone"
import { Description } from "@/components/jk/input"
import { FileTrigger } from "@/components/jk/file-trigger"

export const DropZoneWithFileTrigger = ()=> {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items
      .filter(isFileDropItem)
      .find((item) => item.type === "image/jpeg" || item.type === "image/png")
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  const onSelectHandler = async (e: FileList | null) => {
    if (e) {
      const files = Array.from([...e])
      const item = files[0]

      if (item) {
        setDroppedImage(URL.createObjectURL(item))
      }
    }
  }
  return (
    <DropZone
      getDropOperation={(types) =>
        types.has("image/jpeg") || types.has("image/png") ? "copy" : "cancel"
      }
      onDrop={onDropHandler}
      className={"w-full max-w-sm"}
    >
      {droppedImage ? (
        <img alt="" src={droppedImage} className="aspect-square size-full object-contain" />
      ) : (
        <div className="grid space-y-3">
          <div className="mx-auto text-foreground grid size-12 place-content-center rounded-full border bg-bg-muted/70 border-border group-data-drop-target:border-primary/70 group-data-drop-target:bg-primary/20">
            <span aria-hidden className="size-5 iconify ph--image" />
          </div>
          <div className="flex justify-center">
            <FileTrigger
            size="sm"
              acceptedFileTypes={["image/png", "image/jpeg"]}
              allowsMultiple={false}
              onSelect={onSelectHandler}
            >
              Upload a file
            </FileTrigger>
          </div>
          <Description>Or drag and drop PNG, JPG, GIF up to 10MB</Description>
        </div>
      )}
      <input type="hidden" name="image" value={droppedImage} />
    </DropZone>
  )
}
