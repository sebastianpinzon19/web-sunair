"use client"

import { WarrantyFormData } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2, Package } from "lucide-react"

interface ProductsStepProps {
  data: WarrantyFormData
  updateData: (data: Partial<WarrantyFormData>) => void
  errors: Record<string, string>
}

export function ProductsStep({ data, updateData, errors }: ProductsStepProps) {
  const addProduct = () => {
    updateData({
      products: [...data.products, { serialNumber: "" }],
    })
  }

  const removeProduct = (index: number) => {
    if (data.products.length > 1) {
      const newProducts = data.products.filter((_, i) => i !== index)
      updateData({ products: newProducts })
    }
  }

  const updateProduct = (index: number, serialNumber: string) => {
    const newProducts = [...data.products]
    newProducts[index] = { serialNumber }
    updateData({ products: newProducts })
  }

  return (
    <div className="space-y-6">
      <div className="bg-muted/50 rounded-lg p-4 mb-6">
        <p className="text-sm text-muted-foreground">
          Add the serial number(s) of the equipment you want to register for warranty coverage.
          You can find the serial number on the equipment label.
        </p>
      </div>

      <div className="space-y-4">
        {data.products.map((product, index) => (
          <div key={index} className="flex items-end gap-3">
            <div className="flex-1">
              <Label htmlFor={`serial-${index}`} className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Serial Number {index + 1} *
              </Label>
              <Input
                id={`serial-${index}`}
                value={product.serialNumber}
                onChange={(e) => updateProduct(index, e.target.value)}
                placeholder="Enter serial number (e.g., ABC123456)"
                className={`mt-1.5 ${errors[`product-${index}`] ? "border-destructive" : ""}`}
              />
              {errors[`product-${index}`] && (
                <p className="text-sm text-destructive mt-1">{errors[`product-${index}`]}</p>
              )}
            </div>
            {data.products.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeProduct(index)}
                className="shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={addProduct}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Another Product
      </Button>

      <div className="border-t pt-6 mt-6">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={data.acceptTerms}
            onCheckedChange={(checked) =>
              updateData({ acceptTerms: checked as boolean })
            }
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className={`text-sm font-medium leading-relaxed cursor-pointer ${
                errors.acceptTerms ? "text-destructive" : ""
              }`}
            >
              I agree to the Terms and Conditions *
            </label>
            <p className="text-sm text-muted-foreground">
              By registering this warranty, you confirm that all provided information is
              accurate and that you agree to our warranty terms and conditions.
            </p>
            {errors.acceptTerms && (
              <p className="text-sm text-destructive">{errors.acceptTerms}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
