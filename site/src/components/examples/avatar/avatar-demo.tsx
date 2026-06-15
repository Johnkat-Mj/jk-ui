import { Avatar } from "@/components/jk/avatar"

export const AvatarDemo = () => {
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <Avatar 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt="User avatar"
        size="md"
      />
      <Avatar 
        text="JD"
        variant="solid"
        intent="solid-primary"
        size="md"
      />
      <Avatar 
        text="AB"
        variant="soft"
        intent="soft-primary"
        size="md"
      />
      <Avatar 
        text="CD"
        variant="outline"
        intent="outline-primary"
        size="md"
      />
    </div>
  )
}

