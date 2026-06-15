"use client"

import { Input, Label } from "@/components/jk/input"
import { TagField } from "@/components/jk/tag-field"

export const DemoTagField = () => {
    return (
        <TagField className="w-full max-w-sm">
            <Label className="mb-1.5">Coupon codes</Label>
            <Input placeholder="Add codes, press Enter" />
        </TagField>
    )
}
