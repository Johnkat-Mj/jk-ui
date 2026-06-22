import { Avatar } from "@/components/jk/avatar"
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"
import { SiteCaret } from "../../../components/atoms/site-caret"
import { ProgressBar, ProgressBarTrack } from "@/components/jk/progress-bar"
import { DatePicker } from "@/components/jk/date-picker"
import { DemoTagWithStack } from "./demo-tag-with-stacks"
import { DemoViewTable } from "./demo-view-table"
import { DropZoneWithFileTrigger } from "@/components/examples/drop-zone/drop-zone-with-file-trigger"


export const DemoIllustration = () => {
    return (
        <section className="relative lg:mx-auto w-full lg:max-w-350 -mt-10 sm:-mt-16 md:-mt-19 px-1 pt-1 overflow-hidden flex flex-col justify-center">
            <div className="border-b border-border-strong/70 border-dashed divide-border-strong/70 divide-dashed min-w-[630px] min-[460px]:min-w-[890px] md:min-w-[1000px] w-full grid grid-cols-[300px_1fr] md:grid-cols-[360px_1fr] lg:grid-cols-[360px_1fr_360px]">
                <div className="p-4 relative border-t border-x bg-bg/20 backdrop-blur-sm">
                    <SiteCaret className="-top-1 -left-1" />
                    <SiteCaret className="-top-1 -right-1" />
                    <Card className="shadow-sm [--ui-padding:1.125rem]">
                        <div className="flex items-center gap-4">
                            <div className="size-10">
                                <Avatar size="lg" src="/johnkat_mj.webp" alt="User default" loading="lazy"
                                    decoding="async" fetchPriority="auto" width="150" height="150" />
                            </div>
                            <div className="space-y-0.5 flex flex-col">
                                <span className="font-semibold text-sm text-fg-title">Johnkat MJ</span>
                                <p className="text-sm text-fg-muted">johnkatmj@hmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-fg-muted mt-2">
                            <span className="flex iconify ph--buildings"></span>
                            <span>Unoforge</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <Button size="sm" className="justify-center truncate">
                                Manage profile
                            </Button>
                            <Button size="sm" variant="outline" className="justify-center truncate">
                                View Details
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="col-span-1 flex items-end relative">
                    <div className="w-full grid sm:grid-cols-2 h-26 border-t border-border-strong/20 border-dashed relative">
                        <div className="bg-bg/20 backdrop-blur-sm flex items-center justify-center p-4 border-t border-r border-dashed border-border-strong/70 relative">
                            <SiteCaret className="-top-1 -left-1" />
                            <div className="max-h-full overflow-hidden flex size-full items-center justify-center">
                                <DemoTagWithStack />
                            </div>
                        </div>
                        <div className="max-sm:hidden bg-bg/20 backdrop-blur-sm flex items-center justify-center p-4 relative border-t border-r lg:border-r-0 border-dashed border-border-strong/70">
                            <SiteCaret className="-top-1 -left-1" />
                            <DatePicker label="Date" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 p-4 flex items-center justify-center max-lg:hidden bg-bg/20 backdrop-blur-sm border-t border-x border-dashed border-border-strong/70 relative">
                    <SiteCaret className="-top-1 -left-1" />
                    <SiteCaret className="-top-1 -right-1" />
                    <SiteCaret className="bottom-25 -left-1" />
                    <Card fill="none" className="h-max bg-bg-surface [--ui-padding:0.125rem]">
                        <div className="bg-bg inner-radius p-3.5 flex flex-col">
                            <span className="font-semibold text-fg-title">
                                Plan ui components V1
                            </span>
                            <div ></div>
                            <p className="my-1.5 text-fg-muted text-sm line-clamp-1">
                                Plan the components for the next version of the UI
                            </p>
                            <div className="flex flex-col pt1">
                                <ProgressBar aria-label="Usage Progress" value={30}>
                                    <ProgressBarTrack className={"text-primary"} />
                                </ProgressBar>
                                <div className="pt-0.5 flex w-full text-xs justify-between text-fg-muted">
                                    <span>On going</span>
                                    <div className="font-medium text-fg">3/10</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-1.5">
                                <div className="flex -space-x-2">
                                    <Avatar src="/avatar1.webp" alt="Avatar 1" loading="lazy" size="xs"
                                        fetchPriority="auto" width="100" height="100" className="border border-bg-muted" />
                                    <Avatar src="/avatar2.webp" alt="Avatar 1" loading="lazy" size="xs"
                                        fetchPriority="auto" width="100" height="100"
                                        className="border border-bg-muted" />
                                    <Avatar src="/avatar2.webp" alt="Avatar 1" loading="lazy" size="xs"
                                        fetchPriority="auto" width="100" height="100"
                                        className="border border-bg-muted" />
                                </div>
                                <div className="flex gap-2 items-center text-sm text-fg-muted">
                                    <span className="flex items-center text-xs">
                                        <span className="iconify ph--file-plus text-sm mr-0.5"></span> 4
                                    </span>
                                    <span className="flex items-center text-xs">
                                        <span className="iconify ph--chat-centered-text text-sm mr-0.5"></span> 4
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="border-b border-border-strong/70 border-x border-dashed divide-border-strong/70 divide-dashed divide-x min-w-[530px] min-[460px]:min-w-[740px] sm:min-w-[890px] md:min-w-[1000px] w-full grid grid-cols-[350px_1fr] md:grid-cols-[480px_1fr] lg:grid-cols-[650px_1fr]">
                <div className="p-4 w-full overflow-hidden grid">
                    <DemoViewTable />
                </div>
                <div className="w-full overflow-hidden grid">
                    <div className="p-4 relative grid lg:grid-cols-2 gap-4 h-max">
                        <div className="bg-bg rounded-ui ring ring-border-card w-full px-3.5 py-6 flex flex-col items-center text-center">
                            <div className="size-10 rounded-full ui-subtle ui-subtle-gray flex items-center justify-center">
                                <span className="iconify ph--calendar-plus text-xl"></span>
                            </div>
                            <p className="mt-2 mb-3 text-fg-muted text-sm">No Schedules</p>
                            <Button size="sm" variant="outline"
                                className="btn mt-auto">
                                Create new schedule
                            </Button>
                        </div>
                        <Card className="relative z-12 shadow-sm max-lg:hidden flex items-start gap-4">
                            <div className="flex min-wmax ui-subtle ui-subtle-gray p-2.5 inner-radius">
                                <span className="iconify ph--github-logo"></span>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <span className="text-fg-title font-semibold">Github</span>
                                <p className="mt-2 mb-3 text-sm text-fg-muted">
                                    Link pull requests, commits and automate workflows
                                </p>
                                <Button size="sm" variant="outline" className="mt-auto w-max">
                                    Enable
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className="border-t border-border-strong/70 border-dashed p-4 *:max-w-full">
                        <DropZoneWithFileTrigger />
                    </div>
                </div>
            </div>
        </section>
    )
}
