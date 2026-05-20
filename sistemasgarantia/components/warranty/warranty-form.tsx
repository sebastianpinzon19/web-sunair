"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { WarrantyFormData } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"
import { Stepper } from "@/components/stepper"
import { CustomerInfoStep } from "@/components/warranty/customer-info-step"
import { DealerInfoStep } from "@/components/warranty/dealer-info-step"
import { ProductsStep } from "@/components/warranty/products-step"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Loader2, Shield, CheckCircle, User, Store, Package } from "lucide-react"

const steps = [
  { id: 1, title: "Customer Info", description: "Owner details", icon: User },
  { id: 2, title: "Dealer Info", description: "Contractor details", icon: Store },
  { id: 3, title: "Products", description: "Equipment registration", icon: Package },
]

const initialFormData: WarrantyFormData = {
  applicationType: "residential",
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  installationDate: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  dealerName: "",
  dealerEmail: "",
  dealerPhone: "",
  products: [{ serialNumber: "" }],
  acceptTerms: false,
}

function generateWarrantyNumber(): string {
  const prefix = "WRN"
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

export function WarrantyForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<WarrantyFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateFormData = (data: Partial<WarrantyFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    const updatedKeys = Object.keys(data)
    setErrors((prev) => {
      const newErrors = { ...prev }
      updatedKeys.forEach((key) => delete newErrors[key])
      return newErrors
    })
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
      if (!formData.ownerEmail.trim()) newErrors.ownerEmail = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.ownerEmail))
        newErrors.ownerEmail = "Invalid email format"
      if (!formData.ownerPhone.trim()) newErrors.ownerPhone = "Phone number is required"
      if (!formData.installationDate) newErrors.installationDate = "Installation date is required"
      if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address is required"
      if (!formData.city.trim()) newErrors.city = "City is required"
      if (!formData.state) newErrors.state = "State is required"
      if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"
    }

    if (step === 2) {
      if (!formData.dealerName.trim()) newErrors.dealerName = "Dealer name is required"
      if (!formData.dealerEmail.trim()) newErrors.dealerEmail = "Dealer email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.dealerEmail))
        newErrors.dealerEmail = "Invalid email format"
      if (!formData.dealerPhone.trim()) newErrors.dealerPhone = "Dealer phone is required"
    }

    if (step === 3) {
      formData.products.forEach((product, index) => {
        if (!product.serialNumber.trim()) {
          newErrors[`product-${index}`] = "Serial number is required"
        }
      })
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = "You must accept the terms and conditions"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsSubmitting(true)
    const supabase = createClient()

    try {
      const warrantyNumber = generateWarrantyNumber()

      const { data: warranty, error: warrantyError } = await supabase
        .from("warranties")
        .insert({
          application_type: formData.applicationType,
          owner_name: formData.ownerName,
          owner_email: formData.ownerEmail,
          owner_phone: formData.ownerPhone,
          installation_date: formData.installationDate,
          address_line1: formData.addressLine1,
          address_line2: formData.addressLine2 || null,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          dealer_name: formData.dealerName,
          dealer_email: formData.dealerEmail,
          dealer_phone: formData.dealerPhone,
          warranty_number: warrantyNumber,
        })
        .select()
        .single()

      if (warrantyError) throw warrantyError

      const productsToInsert = formData.products.map((product) => ({
        warranty_id: warranty.id,
        serial_number: product.serialNumber,
      }))

      const { error: productsError } = await supabase
        .from("warranty_products")
        .insert(productsToInsert)

      if (productsError) throw productsError

      router.push(`/register/success?number=${warrantyNumber}`)
    } catch (error) {
      console.error("Error submitting warranty:", error)
      setErrors({ submit: "Failed to submit warranty. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentStepInfo = steps[currentStep - 1]
  const StepIcon = currentStepInfo.icon

  return (
    <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
      {/* Left sidebar - visible on large screens */}
      <div className="hidden lg:block lg:col-span-2">
        <div className="sticky top-24">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/technician.jpg"
                alt="HVAC Professional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-lg">Register in Minutes</h3>
                <p className="text-sm opacity-90">Simple 3-step process</p>
              </div>
            </div>
            <CardContent className="pt-6">
              {/* Vertical stepper for sidebar */}
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isComplete = currentStep > step.id
                  const isCurrent = currentStep === step.id
                  
                  return (
                    <div key={step.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center shrink-0
                          ${isComplete ? "bg-accent text-accent-foreground" : ""}
                          ${isCurrent ? "bg-primary text-primary-foreground" : ""}
                          ${!isComplete && !isCurrent ? "bg-muted text-muted-foreground" : ""}
                        `}>
                          {isComplete ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <Icon className="h-5 w-5" />
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-0.5 h-8 mt-2 ${isComplete ? "bg-accent" : "bg-muted"}`} />
                        )}
                      </div>
                      <div className="pt-2">
                        <p className={`font-medium ${isCurrent ? "text-primary" : ""}`}>
                          {step.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t space-y-3">
                <h4 className="font-semibold text-sm">Registration Benefits:</h4>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Up to 10 years extended coverage</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Priority customer support</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Instant digital certificate</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Easy online access 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main form */}
      <div className="lg:col-span-3">
        <Card className="shadow-lg">
          {/* Mobile header */}
          <div className="lg:hidden border-b p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <StepIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Step {currentStep} of 3</p>
                <p className="font-semibold">{currentStepInfo.title}</p>
              </div>
            </div>
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          {/* Desktop header */}
          <div className="hidden lg:block border-b p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <StepIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Step {currentStep} of 3</p>
                <h2 className="text-xl font-bold">{currentStepInfo.title}</h2>
              </div>
            </div>
          </div>

          <CardContent className="p-6 lg:p-8">
            <div className="min-h-[420px]">
              {currentStep === 1 && (
                <CustomerInfoStep
                  data={formData}
                  updateData={updateFormData}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <DealerInfoStep
                  data={formData}
                  updateData={updateFormData}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <ProductsStep
                  data={formData}
                  updateData={updateFormData}
                  errors={errors}
                />
              )}
            </div>

            {errors.submit && (
              <div className="bg-destructive/10 text-destructive border border-destructive/20 rounded-lg p-4 mt-6">
                <p className="text-sm font-medium">{errors.submit}</p>
              </div>
            )}

            <div className="flex justify-between pt-6 mt-6 border-t">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleBack}
                disabled={currentStep === 1 || isSubmitting}
                className="px-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              {currentStep < 3 ? (
                <Button type="button" size="lg" onClick={handleNext} className="px-6">
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <Shield className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
