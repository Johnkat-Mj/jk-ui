import { Button } from "@/components/jk/button"


export const ButtonDemo = () => {
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <Button>
        Click Me
      </Button>
      <Button variant="outline">
        Click Me
      </Button>
      <Button variant="soft">
        Click Me
      </Button>
    </div>
  )
}
