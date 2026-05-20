"use client"

import { WarrantyFormData, US_STATES } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Building2, Home } from "lucide-react"

interface CustomerInfoStepProps {
  data: WarrantyFormData
  updateData: (data: Partial<WarrantyFormData>) => void
  errors: Record<string, string>
}

export function CustomerInfoStep({ data, updateData, errors }: CustomerInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Application Type</Label>
        <RadioGroup
          value={data.applicationType}
          onValueChange={(value: 'residential' | 'commercial') =>
            updateData({ applicationType: value })
          }
          className="grid grid-cols-2 gap-4 mt-3"
        >
          <div>
            <RadioGroupItem
              value="residential"
              id="residential"
              className="peer sr-only"
            />
            <Label
              htmlFor="residential"
              className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
            >
              <Home className="mb-3 h-6 w-6" />
              <span className="font-medium">Residential</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="commercial"
              id="commercial"
              className="peer sr-only"
            />
            <Label
              htmlFor="commercial"
              className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
            >
              <Building2 className="mb-3 h-6 w-6" />
              <span className="font-medium">Commercial</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="ownerName">Property Owner Name *</Label>
          <Input
            id="ownerName"
            value={data.ownerName}
            onChange={(e) => updateData({ ownerName: e.target.value })}
            placeholder="John Smith"
            className={errors.ownerName ? "border-destructive" : ""}
          />
          {errors.ownerName && (
            <p className="text-sm text-destructive mt-1">{errors.ownerName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="ownerEmail">Email Address *</Label>
          <Input
            id="ownerEmail"
            type="email"
            value={data.ownerEmail}
            onChange={(e) => updateData({ ownerEmail: e.target.value })}
            placeholder="john@example.com"
            className={errors.ownerEmail ? "border-destructive" : ""}
          />
          {errors.ownerEmail && (
            <p className="text-sm text-destructive mt-1">{errors.ownerEmail}</p>
          )}
        </div>

        <div>
          <Label htmlFor="ownerPhone">Phone Number *</Label>
          <Input
            id="ownerPhone"
            type="tel"
            value={data.ownerPhone}
            onChange={(e) => updateData({ ownerPhone: e.target.value })}
            placeholder="(555) 123-4567"
            className={errors.ownerPhone ? "border-destructive" : ""}
          />
          {errors.ownerPhone && (
            <p className="text-sm text-destructive mt-1">{errors.ownerPhone}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="installationDate">Installation Date *</Label>
          <Input
            id="installationDate"
            type="date"
            value={data.installationDate}
            onChange={(e) => updateData({ installationDate: e.target.value })}
            className={errors.installationDate ? "border-destructive" : ""}
          />
          {errors.installationDate && (
            <p className="text-sm text-destructive mt-1">{errors.installationDate}</p>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Installation Address</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="addressLine1">Address Line 1 *</Label>
            <Input
              id="addressLine1"
              value={data.addressLine1}
              onChange={(e) => updateData({ addressLine1: e.target.value })}
              placeholder="123 Main Street"
              className={errors.addressLine1 ? "border-destructive" : ""}
            />
            {errors.addressLine1 && (
              <p className="text-sm text-destructive mt-1">{errors.addressLine1}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input
              id="addressLine2"
              value={data.addressLine2}
              onChange={(e) => updateData({ addressLine2: e.target.value })}
              placeholder="Apt, Suite, Unit, etc. (optional)"
            />
          </div>

          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={data.city}
              onChange={(e) => updateData({ city: e.target.value })}
              placeholder="Miami"
              className={errors.city ? "border-destructive" : ""}
            />
            {errors.city && (
              <p className="text-sm text-destructive mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <Label htmlFor="state">State *</Label>
            <Select
              value={data.state}
              onValueChange={(value) => updateData({ state: value })}
            >
              <SelectTrigger className={errors.state ? "border-destructive" : ""}>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && (
              <p className="text-sm text-destructive mt-1">{errors.state}</p>
            )}
          </div>

          <div>
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              value={data.zipCode}
              onChange={(e) => updateData({ zipCode: e.target.value })}
              placeholder="33101"
              className={errors.zipCode ? "border-destructive" : ""}
            />
            {errors.zipCode && (
              <p className="text-sm text-destructive mt-1">{errors.zipCode}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
