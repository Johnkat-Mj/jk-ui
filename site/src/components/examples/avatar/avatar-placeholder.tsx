import { Avatar } from "@/components/jk/avatar"

export const AvatarPlaceholder = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="solid" intent="solid-primary" size="md" />
        <Avatar text="AB" variant="solid" intent="solid-secondary" size="md" />
        <Avatar text="CD" variant="solid" intent="solid-success" size="md" />
        <Avatar text="EF" variant="solid" intent="solid-danger" size="md" />
        <Avatar text="GH" variant="solid" intent="solid-gray" size="md" />
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="soft" intent="soft-primary" size="md" />
        <Avatar text="AB" variant="soft" intent="soft-secondary" size="md" />
        <Avatar text="CD" variant="soft" intent="soft-success" size="md" />
        <Avatar text="EF" variant="soft" intent="soft-danger" size="md" />
        <Avatar text="GH" variant="soft" size="md" />
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="outline" intent="outline-primary" size="md" />
        <Avatar text="AB" variant="outline" intent="outline-secondary" size="md" />
        <Avatar text="CD" variant="outline" intent="outline-success" size="md" />
        <Avatar text="EF" variant="outline" intent="outline-danger" size="md" />
        <Avatar text="GH" variant="outline" size="md" />
      </div>
    </div>
  )
}

