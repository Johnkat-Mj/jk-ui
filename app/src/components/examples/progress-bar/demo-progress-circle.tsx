import { ProgressCircle } from "@/components/jk/progress-bar-circle"


export const DemoProgressCircle = () => {
  return (
    <>
      <ProgressCircle className="text-primary" value={40} maxValue={90} />
    </>
  )
}
