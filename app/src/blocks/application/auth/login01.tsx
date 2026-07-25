
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"
import { Checkbox } from "@/components/jk/checkbox"
import { Input, InputGroup, InputTrailing, Label } from "@/components/jk/input"
import { Link } from "@/components/jk/link"
import { Separator } from "@/components/jk/separator"


export const Login01 = () => {
    return (
        <main className="flex min-h-screen justify-center items-center px-4 sm:px-10 lg:px-0 py-5">
            <Card size="none" className="rounded-lg p-6 sm:p-8 flex flex-col w-full max-w-md">

                <div className="text-center mb-8">
                    <div className="size-12 bg-primary text-white text-xl rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                    <rect width="488" height="488" fill="currentColor" className="text-background"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
                    <p className="text-muted-foreground mt-1">Sign in to your account</p>
                </div>


                <form className="space-y-4" id="login-form">
                    <Input type="email" id="email" label="Email" placeholder="you@company.com" />
                    <div className="space-y-2">
                        <Label htmlFor="login-password" className="block">Password</Label>
                        <InputGroup>
                            <Input id="login-password" variant="unstyled" type="password" placeholder="Your password here" className="pe-11 px-3" />
                            <InputTrailing absolute clickable className="text-foreground">
                                <button type="button" className="flex items-center cursor-pointer">
                                    <span className="iconify ph--eye text-muted-foreground/80"></span>
                                </button>
                            </InputTrailing>
                        </InputGroup>
                    </div>

                    <div className="flex items-center justify-between">
                        <Checkbox id="remember_me" >
                            Remember me
                        </Checkbox>
                        <Link href="#" className="text-sm text-primary">Forgot password?</Link>
                    </div>

                    <Button type="submit" className="w-full justify-center">
                        Sign in
                    </Button>
                </form>

                <Separator labelPlacement="middle" label="Or continue with" className="before:bg-muted my-6"
                    labelClass="px-3 bg-background text-foreground relative" />

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-center">
                        <span className="iconify ph--google-logo mr-2"></span>
                        <span>Google</span>
                    </Button>
                    <Button variant="outline" className="justify-center">
                        <span className="iconify ph--github-logo mr-2"></span>
                        <span>GitHub</span>
                    </Button>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                        Don't have an account?
                        <Link href="#" className="font-medium text-primary ml-1">Sign up</Link>
                    </p>
                </div>
            </Card>
        </main>

    )
}
