
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"
import { Input } from "@/components/jk/input"
import { Link } from "@/components/jk/link"
import { Separator } from "@/components/jk/separator"


export const Signup01 = () => {
    return (
        <main className="flex min-h-screen justify-center items-center px-4 sm:px-10 lg:px-0 py-4 sm:py-6">
            <Card className="rounded-ui p-6 sm:p-8 flex flex-col w-full max-w-lg">
                <div className="size-12 bg-primary text-white text-xl rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg aria-hidden="true" width="488" height="488" className="size-7" viewBox="0 0 488 488" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_13_164)">
                            <path
                                d="M71.5342 71L416.602 416.068V416.068C321.314 511.356 166.822 511.356 71.5342 416.068V416.068C-23.7537 320.78 -23.7537 166.288 71.5342 71V71Z"
                                fill="currentColor" ></path>
                            <path
                                d="M483.659 249.5C483.659 274.629 436.788 344.5 411.659 344.5C386.53 344.5 392.659 274.629 392.659 249.5C392.659 224.371 413.03 204 438.159 204C463.288 204 483.659 224.371 483.659 249.5Z"
                                fill="currentColor" ></path>
                            <circle cx="243.429" cy="243.759" r="110" transform="rotate(48.3973 243.429 243.759)"
                                fill="currentColor" stroke="white" strokeWidth="80" className="stroke-primary"></circle>
                            <path
                                d="M309 71C309 96.129 212.629 101 187.5 101C162.371 101 142 80.629 142 55.5C142 30.371 162.371 10 187.5 10C212.629 10 309 45.871 309 71Z"
                                fill="currentColor" ></path>
                            <path
                                d="M417 101.5C417 126.629 415.129 215.5 390 215.5C364.871 215.5 326 126.629 326 101.5C326 76.371 346.371 56 371.5 56C396.629 56 417 76.371 417 101.5Z"
                                fill="currentColor" ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_13_164">
                                <rect width="488" height="488" fill="currentColor" className="text-bg"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="text-center">
                    <h1 className="text-fg-title mb-1 text-xl font-semibold">Create your account</h1>
                    <p className="text-sm text-fg-muted">
                        Fill in your details to get started
                    </p>
                </div>
                <Separator className="my-8 border-border-strong/60" />
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input type="text" placeholder="John" label="First Name" />
                        <Input type="text" placeholder="Doe" label="Last Name" />
                    </div>
                    <Input type="email" placeholder="johndoe@example.com" label="Email" />
                    <Input type="password" placeholder="••••••••" label="Create Password" />
                    <Input type="password" placeholder="••••••••" label="Confirm Password" />
                    <div className="text-xs text-fg-muted -mt-2">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </div>
                    <Button className="justify-center w-full mt-2">
                        Create Account
                    </Button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-fg-muted">
                        Already have an account?
                        <Link href="#" className="font-medium text-primary ml-1">Login</Link>
                    </p>
                </div>
            </Card>
        </main>
    )
}
