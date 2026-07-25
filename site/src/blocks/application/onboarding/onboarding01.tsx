"use client"

import { Button } from "@/components/jk/button"
import { Card, CardBody, CardFooter, CardHeader } from "@/components/jk/card"
import { Input } from "@/components/jk/input"
import { useState } from "react"

const steps = [
  { id: 1, label: "Profile", icon: "ph--user" },
  { id: 2, label: "Company", icon: "ph--building" },
  { id: 3, label: "Team", icon: "ph--users-three" },
  { id: 4, label: "Done", icon: "ph--check-circle" },
]

const stepContent = [
  {
    title: "Create your profile",
    description: "Tell us about yourself to get started",
    fields: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" placeholder="John" />
          <Input label="Last Name" placeholder="Doe" />
        </div>
        <Input label="Job Title" placeholder="e.g. Product Designer" />
      </div>
    ),
  },
  {
    title: "Set up your company",
    description: "Add your company details",
    fields: (
      <div className="space-y-4">
        <Input label="Company Name" placeholder="Acme Inc." />
        <Input label="Website" placeholder="https://acme.com" type="url" />
        <Input label="Industry" placeholder="e.g. Technology" />
      </div>
    ),
  },
  {
    title: "Invite your team",
    description: "Bring your teammates onboard",
    fields: (
      <div className="space-y-4">
        <Input label="Team members' emails" placeholder="Enter email addresses" />
        <div className="text-xs text-muted-foreground">
          <span>You can invite more team members later from the settings page.</span>
        </div>
      </div>
    ),
  },
  {
    title: "You're all set!",
    description: "Your workspace is ready to go",
    fields: (
      <div className="flex flex-col items-center text-center py-6">
        <div className="size-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <span aria-hidden="true" className="iconify ph--check-circle size-8 text-success" />
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">
          We&apos;ve set up your workspace. Start exploring the dashboard to see what you can do.
        </p>
      </div>
    ),
  },
]

export const Onboarding01 = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = currentStep === steps.length - 1

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`size-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      index <= currentStep
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <span aria-hidden="true" className="iconify ph--check size-4" />
                    ) : (
                      <span aria-hidden="true" className={`iconify ${step.icon} size-4`} />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1.5 ${
                      index <= currentStep ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-px w-8 sm:w-12 mx-2 mt-[-1.5rem] ${index < currentStep ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </CardHeader>

        <CardBody>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">{stepContent[currentStep].title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{stepContent[currentStep].description}</p>
          </div>
          {stepContent[currentStep].fields}
        </CardBody>

        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            isDisabled={currentStep === 0}
            onPress={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          >
            <span aria-hidden="true" className="iconify ph--arrow-left size-3.5 mr-1.5" />
            Back
          </Button>
          <Button
            size="sm"
            onPress={() => {
              if (isLastStep) return
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }}
          >
            {isLastStep ? (
              <>
                <span aria-hidden="true" className="iconify ph--rocket-launch size-3.5 mr-1.5" />
                Go to Dashboard
              </>
            ) : (
              <>
                Continue
                <span aria-hidden="true" className="iconify ph--arrow-right size-3.5 ml-1.5" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
