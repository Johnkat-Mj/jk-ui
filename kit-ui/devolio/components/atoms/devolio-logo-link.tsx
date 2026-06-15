import Link from "next/link"



export const DevolioLogoLink = () => {
  return (
    <Link href={"/#home"} className="flex items-center gap-1">
      <div className="flex w-6 h-7 rounded-r-3xl relative border-[6px] border-primary">
        <span className="absolute flex -top-1.5 -left-1.5 size-2.5 border-[3px] border-t-0 border-l-0 bg-linear-to-br from-primary to-orange-400 border-bg"></span>
      </div>
      <span className="font-semibold text-lg text-fg-title">evolio</span>
    </Link>
  )
}

