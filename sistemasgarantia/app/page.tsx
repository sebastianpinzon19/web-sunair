import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  Search, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Headphones,
  Building2,
  Home,
  Thermometer
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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
            <Link href="/register">
              <Button>Register Warranty</Button>
            </Link>
            <Link href="/lookup">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Lookup
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-hvac.jpg"
            alt="Modern HVAC system"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Shield className="h-4 w-4" />
              Official Warranty Registration Portal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Protect Your HVAC Investment Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Register your heating and cooling equipment online in minutes. Get instant access 
              to your warranty certificate and enjoy peace of mind for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto">
                  Register Your Warranty
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/lookup">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 w-full sm:w-auto">
                  <Search className="h-5 w-5 mr-2" />
                  Find My Warranty
                </Button>
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm">Instant Registration</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">24/7 Online Access</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm">Extended Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">50K+</p>
              <p className="text-primary-foreground/80 mt-1">Warranties Registered</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10 Years</p>
              <p className="text-primary-foreground/80 mt-1">Max Coverage</p>
            </div>
            <div>
              <p className="text-4xl font-bold">98%</p>
              <p className="text-primary-foreground/80 mt-1">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-primary-foreground/80 mt-1">Online Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your warranty in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-border" />
            
            <Card className="text-center relative bg-card border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-10 pb-8">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-5">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fill Out Form</h3>
                <p className="text-muted-foreground">
                  Enter your information, dealer details, and equipment serial numbers in our easy-to-use form.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center relative bg-card border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-10 pb-8">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-5">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Submit Registration</h3>
                <p className="text-muted-foreground">
                  Review your details and submit. Your warranty is instantly activated in our system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center relative bg-card border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-10 pb-8">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-5">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Certificate</h3>
                <p className="text-muted-foreground">
                  Download your warranty certificate immediately and access it anytime online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Coverage for Every Need
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you have a residential home or commercial property, our warranty 
                registration system covers all types of HVAC installations.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-lg h-fit">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Residential</h3>
                    <p className="text-muted-foreground">
                      Full coverage for home heating and cooling systems including split systems, 
                      heat pumps, and furnaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-lg h-fit">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Commercial</h3>
                    <p className="text-muted-foreground">
                      Extended warranties for commercial HVAC units, rooftop systems, and 
                      industrial climate control equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/happy-family.jpg"
                alt="Family enjoying comfortable home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Register Your Warranty?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your investment and enjoy peace of mind
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Extended Coverage</h3>
                <p className="text-muted-foreground text-sm">
                  Up to 10 years of comprehensive parts and labor coverage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <Headphones className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Priority Support</h3>
                <p className="text-muted-foreground text-sm">
                  Registered customers get priority service and faster response times.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Digital Records</h3>
                <p className="text-muted-foreground text-sm">
                  Access your warranty certificate anytime from anywhere online.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <Thermometer className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Full Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Coverage for compressors, coils, motors, and all major components.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/technician.jpg"
                alt="Professional HVAC technician"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Trusted by Professionals
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Thousands of HVAC contractors and dealers trust our warranty registration 
                system to protect their customers and streamline their business.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg italic text-foreground mb-4">
                  &quot;The online registration process is incredibly simple. My customers 
                  appreciate the instant confirmation and easy access to their warranty 
                  certificates.&quot;
                </p>
                <footer className="text-muted-foreground">
                  <strong className="text-foreground">Michael Rodriguez</strong>
                  <br />
                  <span className="text-sm">HVAC Contractor, Climate Solutions Inc.</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warranty-certificate.jpg"
            alt="Warranty certificate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Register Your Warranty?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            It only takes a few minutes to register your equipment and secure your 
            warranty coverage for years of peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
                Start Registration Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/lookup">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Search className="h-5 w-5 mr-2" />
                Lookup Existing Warranty
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">WarrantyPro</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Professional HVAC warranty registration and management system.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/register" className="hover:text-primary transition-colors">Register Warranty</Link></li>
                <li><Link href="/lookup" className="hover:text-primary transition-colors">Lookup Warranty</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>help@warrantypro.com</li>
                <li>1-800-WARRANTY</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon-Fri: 8am - 6pm EST</li>
                <li>Online: 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} WarrantyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
