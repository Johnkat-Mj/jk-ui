import { Avatar } from "@/components/jk/avatar"

export const AvatarSizes = () => {
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="xs"
        />
        <span className="text-xs text-fg-muted">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="sm"
        />
        <span className="text-xs text-fg-muted">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="default"
        />
        <span className="text-xs text-fg-muted">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="md"
        />
        <span className="text-xs text-fg-muted">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="lg"
        />
        <span className="text-xs text-fg-muted">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
          size="xl"
        />
        <span className="text-xs text-fg-muted">xl</span>
      </div>
    </div>
  )
}

