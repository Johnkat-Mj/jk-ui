import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"
import { Checkbox } from "@/components/jk/checkbox"
import { Input } from "@/components/jk/input"
import { Link } from "@/components/jk/link"


export const Login02 = () => {
    return (
        <main className="flex min-h-screen justify-center items-center px-5 sm:px-10 lg:px-0 py-5">
            <Card size="none" className="rounded-lg p-5 sm:p-8 max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-foreground">Sign In</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Welcome back! Please sign in to your account.
                    </p>
                </div>
                <form className="space-y-4">
                    <Input id="email" type="email" placeholder="johndeo@gmail.com" label="Email" autoComplete="off" />
                    <Input id="password" type="password" placeholder="********" label="Password" autoComplete="off" />

                    <div className="flex items-center justify-between">
                        <Checkbox id="remember">
                            Remember me
                        </Checkbox>

                        <Link href="#" underlined className="text-sm text-primary">Forgot password?</Link>
                    </div>
                    <Button type="submit"
                        className="justify-center w-full">
                        Sign In
                    </Button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account?
                        <Link href="#" className="text-primary">Sign up</Link>
                    </p>
                </div>
            </Card>
        </main>
    )
}
