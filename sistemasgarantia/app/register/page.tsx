import Link from "next/link"
import Image from "next/image"
import { WarrantyForm } from "@/components/warranty/warranty-form"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, Search, CheckCircle, Clock, FileText } from "lucide-react"

export const metadata = {
  title: "Register Your Warranty | WarrantyPro",
  description: "Register your HVAC equipment warranty online",
}

export default function RegisterPage() {
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
            <Link href="/lookup">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Lookup
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-primary text-primary-foreground py-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-hvac.jpg"
            alt="HVAC background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="h-4 w-4" />
            Online Registration
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Register Your Warranty</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Complete the form below to register your HVAC equipment and activate your warranty coverage.
          </p>
          
          {/* Progress hints */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>Instant Activation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Takes 5 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4" />
              <span>Secure &amp; Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 -mt-6 relative z-20">
        <WarrantyForm />
      </main>

      {/* Help Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-card border rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Customer Support</p>
              <p className="font-medium">1-800-WARRANTY</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Email Support</p>
              <p className="font-medium">support@warrantypro.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
