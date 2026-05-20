import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle2, Search, Home, Download, Mail, Phone, PartyPopper } from "lucide-react"

export const metadata = {
  title: "Registration Successful | WarrantyPro",
  description: "Your warranty has been successfully registered",
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ number?: string }>
}) {
  const params = await searchParams
  const warrantyNumber = params.number || "N/A"

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-card">
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
        </div>
      </header>

      {/* Success Banner */}
      <section className="relative bg-gradient-to-br from-accent to-accent/80 text-accent-foreground py-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/warranty-certificate.jpg"
            alt="Certificate background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
            <CheckCircle2 className="h-16 w-16" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Registration Successful!</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Your HVAC equipment warranty has been registered and is now active.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 -mt-8 relative z-20">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="pt-8 pb-8 space-y-8">
            {/* Warranty Number */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                Your Warranty Number
              </p>
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 inline-block">
                <p className="text-3xl sm:text-4xl font-mono font-bold text-primary tracking-wider">
                  {warrantyNumber}
                </p>
              </div>
            </div>

            {/* Info Message */}
            <div className="bg-muted rounded-xl p-5 flex gap-4">
              <div className="p-2 bg-primary/10 rounded-lg h-fit">
                <PartyPopper className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Congratulations!</h3>
                <p className="text-sm text-muted-foreground">
                  Your warranty registration is complete. A confirmation email has been sent with 
                  your warranty details. Keep your warranty number safe - you&apos;ll need it along 
                  with your last name to access your certificate.
                </p>
              </div>
            </div>

            {/* What&apos;s Next */}
            <div>
              <h3 className="font-semibold mb-4 text-center">What&apos;s Next?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border rounded-xl p-4 flex gap-3">
                  <Download className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Download Certificate</p>
                    <p className="text-xs text-muted-foreground">
                      Use the lookup feature to download your warranty certificate PDF.
                    </p>
                  </div>
                </div>
                <div className="border rounded-xl p-4 flex gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Check Your Email</p>
                    <p className="text-xs text-muted-foreground">
                      We&apos;ve sent a confirmation email with all your warranty details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/lookup" className="flex-1">
                <Button variant="outline" className="w-full h-12">
                  <Search className="h-4 w-4 mr-2" />
                  View &amp; Download Certificate
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full h-12">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Support Info */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Need assistance?</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="tel:1-800-WARRANTY" className="flex items-center gap-2 text-primary hover:underline">
              <Phone className="h-4 w-4" />
              1-800-WARRANTY
            </a>
            <a href="mailto:support@warrantypro.com" className="flex items-center gap-2 text-primary hover:underline">
              <Mail className="h-4 w-4" />
              support@warrantypro.com
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
