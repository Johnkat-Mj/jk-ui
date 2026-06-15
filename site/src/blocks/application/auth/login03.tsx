import { Button } from "@/components/jk/button"
import { Input } from "@/components/jk/input"
import { Link } from "@/components/jk/link"
import { Separator } from "@/components/jk/separator"


export const Login03 = () => {
    return (
        <main className="flex min-h-screen justify-center items-center px-5 sm:px-10 lg:px-0 py-5">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <div className="flex flex-col items-center gap-2 text-center">
                    <div
                        className="size-12 bg-primary text-white text-xl rounded-xl flex items-center justify-center mx-auto mb-4">
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
                    <h1 className="text-xl font-bold text-fg-title">
                        Welcome to Acme Inc.
                    </h1>
                    <p className="text-sm text-fg-muted">
                        Don&apos;t have an account?
                        <Link href="#" underlined className="text-primary">
                            Sign up
                        </Link>
                    </p>
                </div>
                <form className="flex flex-col gap-4">
                    <Input type="email" label="Email" placeholder="johnkatmj@gmail.com" />
                    <Button className="w-full justify-center">
                        Login
                    </Button>
                    <Separator label="Or continue" className="before:bg-bg-muted" labelPlacement="middle"
                        labelClass="px-3 bg-bg text-fg-muted text-sm relative" />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Button variant="outline" className="justify-center gap-1.5">
                            <span aria-hidden="true" className="iconify ph--apple-logo"></span>
                            <span className="hidden sm:flex text-sm">With Apple</span>
                        </Button>
                        <Button variant="outline" className="justify-center gap-1.5">
                            <span aria-hidden="true" className="iconify ph--google-logo"></span>
                            <span className="hidden sm:flex text-sm">With Google</span>
                        </Button>
                    </div>
                </form>
                <p className="px-6 text-center text-fg-muted mx-auto max-w-md text-sm mt-3">
                    By clicking continue, you agree to our
                    <Link href="#" underlined className="text-primary">Terms of Service</Link>
                    and <Link href="#" underlined className="text-primary">Privacy Policy</Link>.
                </p>
            </div>
        </main>

    )
}
