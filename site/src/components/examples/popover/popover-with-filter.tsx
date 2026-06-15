"use client"

import { Button } from "@/components/jk/button"
import { Input, InputGroup, Label } from "@/components/jk/input"
import { Popover, PopoverContent } from "@/components/jk/popover"
import { Radio, RadioGroup } from "@/components/jk/radio"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/jk/select"


export const PopoverWithFilter = () => {
    return (
        <>
            <Popover>
                <Button iconOnly variant="outline">
                    <span aria-hidden="true" className="iconify ph--funnel"></span>
                </Button>
                <PopoverContent className="p-4 flex flex-col w-75">
                    <div className="w-full flex flex-col">
                        <span className="text-fg mb-4 border-b border-border pb-3 font-medium">Filter</span>
                        <div className="w-full flex flex-col space-y-2.5">
                            <RadioGroup className="space-y-1.5 flex flex-col p-2.5 bg-bg-muted/50 rounded-md">
                                <Radio value="all" id="all">
                                    All events
                                </Radio>
                                <Radio value="passed_event" id="passed_event">
                                    Passed events
                                </Radio>
                                <Radio value="upcoming_event" id="upcoming_event">
                                    Upcoming events
                                </Radio>
                            </RadioGroup>
                            <InputGroup >
                                <Input variant="unstyled" type="email" placeholder="Search somthing" className="ps-8" />
                                <InputGroup.Leading className="[--left-space:9px] opacity-70 text-sm" absolute>
                                    <span className="flex text-sm iconify ph--magnifying-glass"></span>
                                </InputGroup.Leading>
                            </InputGroup>
                            <div className="relative space-y-1.5">
                                <Label htmlFor="location">Location</Label>
                                <Select id="location" name="location">
                                    <SelectTrigger  />
                                    <SelectContent >
                                        <SelectItem id="barca" textValue="Barcelone">Barcelona</SelectItem>
                                        <SelectItem id="miami" textValue="Miami">Miami</SelectItem>
                                        <SelectItem id="lubumbashi" textValue="Lubumbashi">Lubumbashi</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button size="sm" className="mt-4 justify-center">
                                Filter
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}
