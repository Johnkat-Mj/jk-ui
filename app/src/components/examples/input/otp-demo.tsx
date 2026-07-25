import { Description } from "@/components/jk/input"
import { InputOTP, InputOTPControl, InputOTPGroup, InputOTPLabel, InputOTPSlot } from "@/components/jk/input-otp"


export const OtpDemo = () => {
  return (
    <div>
      <InputOTP containerClassName="space-y-2" maxLength={6}>
        <InputOTPLabel>Code</InputOTPLabel>
        <InputOTPControl >
          <InputOTPGroup>
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTPControl>
        <Description>Please enter the 6-digit code we sent to your email.</Description>
      </InputOTP>
    </div>
  )
}
