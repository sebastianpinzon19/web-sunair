"use client"

import { useState } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { Warranty } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Search, 
  Loader2, 
  Download, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  MapPin, 
  Calendar,
  Package,
  Building2,
  Shield,
  FileText
} from "lucide-react"
import { jsPDF } from "jspdf"

export function WarrantyLookup() {
  const [lastName, setLastName] = useState("")
  const [serialNumber, setSerialNumber] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [warranty, setWarranty] = useState<Warranty | null>(null)
  const [error, setError] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSearch = async () => {
    if (!lastName.trim() || !serialNumber.trim()) {
      setError("Please enter both last name and serial number")
      return
    }

    setIsSearching(true)
    setError("")
    setWarranty(null)
    setSearched(true)

    const supabase = createClient()

    try {
      const { data: products, error: searchError } = await supabase
        .from("warranty_products")
        .select(`
          serial_number,
          warranty:warranties!inner(
            id,
            application_type,
            owner_name,
            owner_email,
            owner_phone,
            installation_date,
            address_line1,
            address_line2,
            city,
            state,
            zip_code,
            dealer_name,
            dealer_email,
            dealer_phone,
            warranty_number,
            created_at
          )
        `)
        .ilike("serial_number", serialNumber.trim())

      if (searchError) throw searchError

      const matchingWarranty = products?.find((p) => {
        const w = p.warranty as unknown as Warranty
        const ownerLastName = w.owner_name.split(" ").pop()?.toLowerCase()
        return ownerLastName === lastName.trim().toLowerCase()
      })

      if (matchingWarranty) {
        const w = matchingWarranty.warranty as unknown as Warranty
        const { data: allProducts } = await supabase
          .from("warranty_products")
          .select("serial_number")
          .eq("warranty_id", w.id)

        setWarranty({
          ...w,
          warranty_products: allProducts || [],
        })
      } else {
        setError("No warranty found matching the provided information")
      }
    } catch (err) {
      console.error("Search error:", err)
      setError("An error occurred while searching. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  const generatePDF = () => {
    if (!warranty) return

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()

    // Header with gradient effect
    doc.setFillColor(30, 64, 175)
    doc.rect(0, 0, pageWidth, 45, "F")

    // Shield icon area
    doc.setFillColor(59, 130, 246)
    doc.circle(pageWidth / 2, 15, 8, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.setFont("helvetica", "bold")
    doc.text("WARRANTY CERTIFICATE", pageWidth / 2, 35, { align: "center" })

    // Warranty Number Badge
    doc.setFillColor(241, 245, 249)
    doc.roundedRect(pageWidth / 2 - 45, 50, 90, 18, 3, 3, "F")
    doc.setTextColor(30, 64, 175)
    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text(`#${warranty.warranty_number}`, pageWidth / 2, 61, { align: "center" })

    doc.setTextColor(0, 0, 0)
    let y = 85

    // Customer Information Section
    doc.setFillColor(248, 250, 252)
    doc.roundedRect(15, y - 5, pageWidth - 30, 45, 3, 3, "F")
    
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(30, 64, 175)
    doc.text("CUSTOMER INFORMATION", 20, y + 5)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    y += 15
    doc.text(`Name: ${warranty.owner_name}`, 20, y)
    doc.text(`Email: ${warranty.owner_email}`, pageWidth / 2, y)
    y += 8
    doc.text(`Phone: ${warranty.owner_phone}`, 20, y)
    doc.text(`Type: ${warranty.application_type.charAt(0).toUpperCase() + warranty.application_type.slice(1)}`, pageWidth / 2, y)

    // Installation Address Section
    y += 25
    doc.setFillColor(248, 250, 252)
    doc.roundedRect(15, y - 5, pageWidth - 30, 35, 3, 3, "F")
    
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(30, 64, 175)
    doc.text("INSTALLATION ADDRESS", 20, y + 5)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    y += 15
    doc.text(warranty.address_line1 + (warranty.address_line2 ? `, ${warranty.address_line2}` : ""), 20, y)
    y += 8
    doc.text(`${warranty.city}, ${warranty.state} ${warranty.zip_code}`, 20, y)

    // Dealer Information Section
    y += 25
    doc.setFillColor(248, 250, 252)
    doc.roundedRect(15, y - 5, pageWidth - 30, 35, 3, 3, "F")
    
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(30, 64, 175)
    doc.text("DEALER / CONTRACTOR", 20, y + 5)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    y += 15
    doc.text(`Name: ${warranty.dealer_name}`, 20, y)
    y += 8
    doc.text(`Email: ${warranty.dealer_email}`, 20, y)
    doc.text(`Phone: ${warranty.dealer_phone}`, pageWidth / 2, y)

    // Registered Products Section
    y += 25
    const productsHeight = 20 + (warranty.warranty_products.length * 8)
    doc.setFillColor(248, 250, 252)
    doc.roundedRect(15, y - 5, pageWidth - 30, productsHeight, 3, 3, "F")
    
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(30, 64, 175)
    doc.text("REGISTERED PRODUCTS", 20, y + 5)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    warranty.warranty_products.forEach((product, index) => {
      y += 12
      doc.text(`${index + 1}. Serial Number: ${product.serial_number}`, 25, y)
    })

    // Important Dates
    y += 20
    doc.setFillColor(30, 64, 175)
    doc.roundedRect(15, y - 5, pageWidth - 30, 25, 3, 3, "F")
    
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(255, 255, 255)
    doc.text(`Installation Date: ${new Date(warranty.installation_date).toLocaleDateString()}`, 25, y + 8)
    doc.text(`Registration Date: ${new Date(warranty.created_at).toLocaleDateString()}`, pageWidth / 2, y + 8)

    // Footer
    doc.setFontSize(8)
    doc.setTextColor(120, 120, 120)
    doc.text(
      "This certificate confirms warranty coverage for the registered equipment. Keep for your records.",
      pageWidth / 2,
      285,
      { align: "center" }
    )

    doc.save(`warranty-${warranty.warranty_number}.pdf`)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Search Form */}
      <Card className="shadow-lg">
        <CardContent className="p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Search Your Warranty</h2>
              <p className="text-sm text-muted-foreground">Enter your details below</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="serialNumber" className="text-sm font-medium">
                Serial Number <span className="text-destructive">*</span>
              </Label>
              <div className="relative mt-1.5">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="serialNumber"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="Enter equipment serial number"
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">
                Find on equipment rating plate
              </p>
            </div>

            <Button
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full h-12"
              size="lg"
            >
              {isSearching ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Search Warranty
                </>
              )}
            </Button>

            {error && searched && (
              <div className="flex items-start gap-3 p-4 bg-destructive/10 text-destructive rounded-xl border border-destructive/20">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">No Results Found</p>
                  <p className="text-sm opacity-90">{error}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Panel */}
      <div>
        {!warranty && !searched && (
          <Card className="h-full min-h-[400px] flex items-center justify-center">
            <CardContent className="text-center p-8">
              <div className="relative w-48 h-48 mx-auto mb-6 opacity-80">
                <Image
                  src="/images/warranty-certificate.jpg"
                  alt="Warranty Certificate"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ready to Search</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Enter your last name and serial number to find and download your warranty certificate.
              </p>
            </CardContent>
          </Card>
        )}

        {!warranty && searched && !error && (
          <Card className="h-full min-h-[400px] flex items-center justify-center">
            <CardContent className="text-center p-8">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Searching...</p>
            </CardContent>
          </Card>
        )}

        {!warranty && searched && error && (
          <Card className="h-full min-h-[400px] flex items-center justify-center border-destructive/20">
            <CardContent className="text-center p-8">
              <div className="p-4 bg-destructive/10 rounded-full inline-block mb-4">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Warranty Not Found</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-6">
                Please check your information and try again, or contact support for assistance.
              </p>
              <Button variant="outline" onClick={() => { setSearched(false); setError("") }}>
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        {warranty && (
          <Card className="shadow-lg border-2 border-accent/30">
            <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground p-6 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Warranty Found</p>
                  <p className="font-bold text-lg">{warranty.warranty_number}</p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 space-y-5">
              {/* Owner Info */}
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Owner</p>
                  <p className="font-semibold">{warranty.owner_name}</p>
                  <p className="text-sm text-muted-foreground">{warranty.owner_email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Installation Address</p>
                  <p className="font-medium">{warranty.address_line1}</p>
                  <p className="text-sm text-muted-foreground">
                    {warranty.city}, {warranty.state} {warranty.zip_code}
                  </p>
                </div>
              </div>

              {/* Dealer */}
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Dealer</p>
                  <p className="font-semibold">{warranty.dealer_name}</p>
                  <p className="text-sm text-muted-foreground">{warranty.dealer_phone}</p>
                </div>
              </div>

              {/* Dates & Products */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="flex gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Installed</p>
                    <p className="font-medium text-sm">
                      {new Date(warranty.installation_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Products</p>
                    <p className="font-medium text-sm">{warranty.warranty_products.length} registered</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <Button onClick={generatePDF} className="w-full h-12" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Certificate (PDF)
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
