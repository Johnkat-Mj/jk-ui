"use client"

import { Toggle } from '@/components/jk/toggle'


export const DemoToggle = () => {
  return <Toggle>{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
}
