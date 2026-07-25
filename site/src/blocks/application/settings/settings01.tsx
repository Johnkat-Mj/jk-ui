"use client"

import { Button } from "@/components/jk/button"
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@/components/jk/card"
import { Input } from "@/components/jk/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/jk/select"
import { Switch } from "@/components/jk/switch"
import { Separator } from "@/components/jk/separator"

const navItems = [
  { label: "Profile", icon: "ph--user", active: true },
  { label: "Account", icon: "ph--shield-check" },
  { label: "Notifications", icon: "ph--bell" },
  { label: "Appearance", icon: "ph--palette" },
  { label: "Billing", icon: "ph--credit-card" },
]

export const Settings01 = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account settings and preferences</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <nav className="lg:w-56 shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span aria-hidden="true" className={`iconify ${item.icon} size-4`} />
                {item.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <p className="text-sm text-muted-foreground">Update your personal details</p>
            </CardHeader>
            <CardBody>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="iconify ph--user size-8 text-primary" />
                </div>
                <div>
                  <Button size="sm" variant="outline">
                    <span aria-hidden="true" className="iconify ph--upload size-3.5 mr-1.5" />
                    Upload avatar
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">PNG or JPG. Max 2MB.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="John" />
                <Input label="Last Name" defaultValue="Doe" />
                <Input label="Email" defaultValue="john@company.com" type="email" className="sm:col-span-2" />
                <Input label="Phone" defaultValue="+1 (555) 123-4567" className="sm:col-span-2" />
              </div>
            </CardBody>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Language</p>
                  <p className="text-xs text-muted-foreground">Select your preferred language</p>
                </div>
                <Select aria-label="Language" defaultSelectedKey="en">
                  <SelectTrigger className="w-36" />
                  <SelectContent>
                    <SelectItem id="en" textValue="English">English</SelectItem>
                    <SelectItem id="fr" textValue="French">French</SelectItem>
                    <SelectItem id="de" textValue="German">German</SelectItem>
                    <SelectItem id="es" textValue="Spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="my-0" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Timezone</p>
                  <p className="text-xs text-muted-foreground">Set your local timezone</p>
                </div>
                <Select aria-label="Timezone" defaultSelectedKey="utc">
                  <SelectTrigger className="w-44" />
                  <SelectContent>
                    <SelectItem id="utc" textValue="UTC (Coordinated Universal)">UTC</SelectItem>
                    <SelectItem id="est" textValue="EST (Eastern Standard)">EST</SelectItem>
                    <SelectItem id="pst" textValue="PST (Pacific Standard)">PST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="my-0" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Email notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch aria-label="Email notifications" defaultSelected />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
