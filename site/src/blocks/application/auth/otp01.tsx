
import { Button } from "@/components/jk/button"
import { InputOTP, InputOTPControl, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/jk/input-otp"
import { Link } from "@/components/jk/link"


export const Otp01 = () => {
    return (
        <main className="flex min-h-screen justify-center items-center px-5 sm:px-10 lg:px-0">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <div className="flex flex-col items-center gap-2 text-center">
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
                    <h1 className="text-xl font-semibold text-fg-title text-balance">
                        We sent a 6-digit code to your email address
                    </h1>
                </div>
                <form className="flex flex-col gap-4">
                    <InputOTP containerClassName="w-full" maxLength={6}>
                        <InputOTPControl >
                            <InputOTPGroup className="flex-1">
                                {[...Array(3)].map((_, index) => (
                                    <InputOTPSlot className="size-10 flex-1" key={index} index={index} />
                                ))}
                            </InputOTPGroup>
                            <InputOTPSeparator/>
                            <InputOTPGroup className="flex-1">
                                {[...Array(3)].map((_, index) => (
                                    <InputOTPSlot className="size-10 flex-1" key={index+3} index={index+3} />
                                ))}
                            </InputOTPGroup>
                        </InputOTPControl>
                    </InputOTP>

                    <p className="text-sm text-fg-muted text-center">
                        Didn&apos;t receive the code?
                        <Link href="#" underlined className="text-primary">
                            Resend
                        </Link>
                    </p>
                    <Button className="w-full justify-center">
                        Verify
                    </Button>
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
