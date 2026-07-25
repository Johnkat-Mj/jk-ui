import { Avatar } from "@/components/jk/avatar"

export const AvatarPlaceholder = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="solid" intent="primary" size="md" />
        <Avatar text="AB" variant="solid" intent="secondary" size="md" />
        <Avatar text="CD" variant="solid" intent="success" size="md" />
        <Avatar text="EF" variant="solid" intent="destructive" size="md" />
        <Avatar text="GH" variant="solid" intent="gray" size="md" />
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="soft" intent="primary" size="md" />
        <Avatar text="AB" variant="soft" intent="secondary" size="md" />
        <Avatar text="CD" variant="soft" intent="success" size="md" />
        <Avatar text="EF" variant="soft" intent="destructive" size="md" />
        <Avatar text="GH" variant="soft" size="md" />
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <Avatar text="JD" variant="outline" intent="primary" size="md" />
        <Avatar text="AB" variant="outline" intent="secondary" size="md" />
        <Avatar text="CD" variant="outline" intent="success" size="md" />
        <Avatar text="EF" variant="outline" intent="destructive" size="md" />
        <Avatar text="GH" variant="outline" size="md" />
      </div>
    </div>
  )
}

