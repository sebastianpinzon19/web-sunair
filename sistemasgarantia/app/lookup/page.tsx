import Link from "next/link"
import Image from "next/image"
import { WarrantyLookup } from "@/components/warranty/warranty-lookup"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, FileText, Search, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Lookup Your Warranty | WarrantyPro",
  description: "Search and download your warranty certificate",
}

export default function LookupPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold block leading-none">WarrantyPro</span>
              <span className="text-xs text-muted-foreground">HVAC Protection</span>
            </div>
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Register
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-primary text-primary-foreground py-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/warranty-certificate.jpg"
            alt="Certificate background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Search className="h-4 w-4" />
            Warranty Lookup
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Find Your Warranty</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Enter your last name and serial number to view and download your warranty certificate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 -mt-6 relative z-20">
        <WarrantyLookup />
      </main>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-card border rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Where can I find my serial number?</h4>
              <p className="text-sm text-muted-foreground">
                The serial number is located on the rating plate of your HVAC equipment. It&apos;s typically 
                found on the outdoor unit for air conditioners or on the side panel for furnaces.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">What if I can&apos;t find my warranty?</h4>
              <p className="text-sm text-muted-foreground">
                Make sure you&apos;re entering the last name exactly as it was registered and the correct 
                serial number. If you still can&apos;t find it, contact our support team for assistance.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Can I register a new warranty here?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Click the &quot;Register&quot; button in the navigation to register a new warranty for 
                your HVAC equipment.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Still need help? Contact us at <span className="text-primary font-medium">1-800-WARRANTY</span> or{" "}
              <a href="mailto:support@warrantypro.com" className="text-primary hover:underline">
                support@warrantypro.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
