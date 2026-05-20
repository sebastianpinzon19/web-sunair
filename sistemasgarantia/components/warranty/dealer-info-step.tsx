"use client"

import { WarrantyFormData } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCheck, Mail, Phone } from "lucide-react"

interface DealerInfoStepProps {
  data: WarrantyFormData
  updateData: (data: Partial<WarrantyFormData>) => void
  errors: Record<string, string>
}

export function DealerInfoStep({ data, updateData, errors }: DealerInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 rounded-lg p-4 mb-6">
        <p className="text-sm text-muted-foreground">
          Please provide the information of the dealer or contractor who installed the equipment.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="dealerName" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            Dealer/Contractor Name *
          </Label>
          <Input
            id="dealerName"
            value={data.dealerName}
            onChange={(e) => updateData({ dealerName: e.target.value })}
            placeholder="ABC HVAC Services"
            className={`mt-1.5 ${errors.dealerName ? "border-destructive" : ""}`}
          />
          {errors.dealerName && (
            <p className="text-sm text-destructive mt-1">{errors.dealerName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dealerEmail" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Dealer Email Address *
          </Label>
          <Input
            id="dealerEmail"
            type="email"
            value={data.dealerEmail}
            onChange={(e) => updateData({ dealerEmail: e.target.value })}
            placeholder="contact@abchvac.com"
            className={`mt-1.5 ${errors.dealerEmail ? "border-destructive" : ""}`}
          />
          {errors.dealerEmail && (
            <p className="text-sm text-destructive mt-1">{errors.dealerEmail}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dealerPhone" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Dealer Phone Number *
          </Label>
          <Input
            id="dealerPhone"
            type="tel"
            value={data.dealerPhone}
            onChange={(e) => updateData({ dealerPhone: e.target.value })}
            placeholder="(555) 987-6543"
            className={`mt-1.5 ${errors.dealerPhone ? "border-destructive" : ""}`}
          />
          {errors.dealerPhone && (
            <p className="text-sm text-destructive mt-1">{errors.dealerPhone}</p>
          )}
        </div>
      </div>
    </div>
  )
}
