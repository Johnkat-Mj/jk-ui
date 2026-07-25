import { Avatar } from "@/components/jk/avatar"

export const AvatarRadius = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="User avatar"
            size="md"
            radius="none"
          />
          <span className="text-xs text-fg-muted">none</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="User avatar"
            size="md"
            radius="default"
          />
          <span className="text-xs text-fg-muted">default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="User avatar"
            size="md"
            radius="circle"
          />
          <span className="text-xs text-fg-muted">circle</span>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            text="JD"
            variant="solid"
            intent="primary"
            size="md"
            radius="none"
          />
          <span className="text-xs text-fg-muted">none</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            text="AB"
            variant="solid"
            intent="primary"
            size="md"
            radius="default"
          />
          <span className="text-xs text-fg-muted">default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar 
            text="CD"
            variant="solid"
            intent="primary"
            size="md"
            radius="circle"
          />
          <span className="text-xs text-fg-muted">circle</span>
        </div>
      </div>
    </div>
  )
}

