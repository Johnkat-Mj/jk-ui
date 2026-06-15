"use client"

import { Button } from "@/components/jk/button"
import { Checkbox, CheckboxLabel } from "@/components/jk/checkbox"
import { Description, Input } from "@/components/jk/input"
import { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/jk/sheet"


export const SheetDemo = () => {
    return (
        <Sheet>
            <Button variant="outline" size="sm">Edit Settings</Button>
            <SheetContent>
                {({ close }) => (
                    <>
                        <SheetHeader>
                            <SheetTitle>Update User Settings</SheetTitle>
                            <SheetDescription>Adjust your preferences and configurations here.</SheetDescription>
                        </SheetHeader>
                        <SheetBody className="space-y-4">
                            <Input label="Username" placeholder="johndoe" />
                            <Input type="email" label="Email" placeholder="johndoe@gmail.com" />

                            <Checkbox>
                                <CheckboxLabel>Enable notifications</CheckboxLabel>
                                <Description>Receive updates and alerts via email.</Description>
                            </Checkbox>
                        </SheetBody>
                        <SheetFooter>
                            <SheetClose size="sm">Cancel</SheetClose>
                            <Button size="sm" onPress={close} type="submit">
                                Save
                            </Button>
                        </SheetFooter>
                    </>
                )}
            </SheetContent>
        </Sheet>
    )
}
