"use client"

import { ToggleGroup, ToggleGroupItem } from '@/components/jk/toggle-group'


export const DemoToggleGroup = () => {
  return (
    <ToggleGroup  defaultSelectedKeys={["3d"]}>
      <ToggleGroupItem intent='plain-primary' id="1d">1d</ToggleGroupItem>
      <ToggleGroupItem intent='plain-primary' id="3d">3d</ToggleGroupItem>
      <ToggleGroupItem intent='plain-primary' id="7d">7d</ToggleGroupItem>
      <ToggleGroupItem intent='plain-primary' id="2w">2w</ToggleGroupItem>
    </ToggleGroup>
  )
}
