import { templates } from "@/data/templates"


export const AllTemplates = () => {
  return (
    <div className="py-8 sm:py-16 px-3.5 sm:px-8 md:px-16 lg:px-8 xl:px-0 mx-auto w-full max-w-3xl lg:max-w-5xl grid sm:grid-cols-2 gap-6">
      {templates.map((template) => (
        <div key={template.id} className="relative">
          <div className="bg-muted rounded-lg aspect-standard-tv overflow-hidden relative group z-4 ring ring-border/40">
            <img
              src={template.cover}
              alt={`${template.title} cover`}
              width={1911}
              height={1433}
              className="size-full object-cover rounded-lg ease-linear duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-1 bottom-1 p-4 backdrop-filter backdrop-blur-md bg-gray-100/70 dark:bg-gray-950/70 rounded-[calc(var(--radius-ui)-(--spacing(1)))] flex justify-center gap-x-1 duration-300 ease-linear transition opacity-0 group-hover:opacity-100">
              <a
                href={template.href}
                className="btn ease-linear duration-200 btn-solid btn-solid-neutral text-background btn-sm rounded-lg gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  slot="icon"
                  data-slot="icon"
                  aria-hidden="true"
                  className="flex iconify ph--download size-4 text-current"
                />
                Download
              </a>
              <a
                href={template.preview}
                className="btn ease-linear duration-200 btn-outline btn-outline-gray btn-sm rounded-lg gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  slot="icon"
                  data-slot="icon"
                  aria-hidden="true"
                  className="flex iconify ph--link-break size-4 text-current"
                />
                Preview
              </a>
            </div>
          </div>
          <div className="pt-3 px-3 flex flex-col flex-1">
            <h3 className="flex items-center justify-between gap-3 flex-1">
              <a
                href={template.href}
                className="font-semibold text-lg text-foreground before:absolute before:inset-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {template.title}
              </a>
              <span className="badge-sm rounded-lg ui-solid ui-solid-neutral">
                {template.price}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">{template.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-lg bg-muted text-muted-foreground ring ring-border/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
