"use client"

import { Avatar } from "@/components/jk/avatar"
import {
    ComboBox,
    ComboBoxContent,
    ComboBoxInput,
    ComboBoxItem,
    ComboBoxLabel,
} from "@/components/jk/combo-box"


const users = [
    {
        id: 1,
        name: "Barbara Kirlin Sr.",
        image_url: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Rosemarie Koch",
        image_url: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Mrs. Reva Heaney Jr.",
        image_url: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Ms. Ettie Abshire DVM",
        image_url: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        name: "Bria Ziemann",
        image_url: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 6,
        name: "Heloise Borer Sr.",
        image_url: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: 7,
        name: "Miss Jacinthe Gerlach DVM",
        image_url: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: 8,
        name: "Miss Stephania Schaefer Sr.",
        image_url: "https://i.pravatar.cc/150?img=8",
    },
    {
        id: 9,
        name: "Kevon Hackett MD",
        image_url: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: 10,
        name: "Tom Ledner",
        image_url: "https://i.pravatar.cc/150?img=10",
    },
]

export const ComboboxWithAvatars = () => {
    return (
        <ComboBox aria-label="Users" className={"max-w-xs"} isRequired>
            <ComboBoxInput placeholder="Select a user" />
            <ComboBoxContent items={users}>
                {(item) => (
                    <ComboBoxItem id={item.id} textValue={item.name}>
                        <Avatar size="xs" src={item.image_url} className="mr-2 -ml-1"/>
                        <ComboBoxLabel>{item.name}</ComboBoxLabel>
                    </ComboBoxItem>
                )}
            </ComboBoxContent>
        </ComboBox>
    )
}
