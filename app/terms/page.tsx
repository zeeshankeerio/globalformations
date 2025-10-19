import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Users, Shield, AlertTriangle, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - Mindscape Global Formations",
  description: "Read our terms of service and conditions for using Mindscape Global Formations LLC services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
            Please read these terms carefully before using our services
          </p>
          <Badge className="mt-4 bg-blue-100 text-blue-800 border-blue-200">
            Last updated: December 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-dm-sans)]">
              These Terms of Service ("Terms") govern your use of Mindscape Global Formations' website and services. 
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, you may not access our services.
            </p>
          </CardContent>
        </Card>

        {/* Services Description */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Mindscape Global Formations provides LLC formation and business services including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• LLC formation and registration</li>
              <li>• EIN (Federal Tax ID) application assistance</li>
              <li>• Business banking setup guidance</li>
              <li>• Payment processing setup (PayPal, Stripe)</li>
              <li>• Business consultation and guidance</li>
              <li>• Document preparation and filing</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Accurate Information</h3>
              <p className="text-muted-foreground text-sm">
                You agree to provide accurate, complete, and up-to-date information for your LLC formation. 
                Any false or misleading information may result in service delays or additional fees.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Compliance</h3>
              <p className="text-muted-foreground text-sm">
                You are responsible for ensuring compliance with all applicable laws and regulations in your 
                jurisdiction. We provide guidance but cannot guarantee legal compliance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Payment Obligations</h3>
              <p className="text-muted-foreground text-sm">
                All fees are due as specified in your service agreement. State filing fees are non-refundable 
                once paid to government agencies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fees and Payment */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle>Fees and Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Service Fees</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Service fees are clearly displayed</li>
                  <li>• State filing fees are separate</li>
                  <li>• No hidden charges</li>
                  <li>• Payment due before service begins</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Refund Policy</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• 100% refund if we cannot form your LLC</li>
                  <li>• State fees are non-refundable</li>
                  <li>• Refund requests within 30 days</li>
                  <li>• Processing time: 5-10 business days</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Service Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While we strive to provide excellent service, please note:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Processing times may vary by state</li>
              <li>• We cannot guarantee approval by state agencies</li>
              <li>• Business name availability is subject to state approval</li>
              <li>• We provide guidance, not legal advice</li>
              <li>• Third-party services (banking, payments) are separate</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All content, trademarks, and intellectual property on our website belong to Mindscape Global Formations. 
              You may not reproduce, distribute, or modify our content without written permission.
            </p>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
              use, and protect your information. By using our services, you consent to our privacy practices.
            </p>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mindscape Global Formations shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from your use of our services. Our total liability shall not exceed the amount you 
              paid for our services.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of Wyoming, United States. 
              Any disputes shall be resolved in the courts of Sheridan County, Wyoming.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> legal@mindscapeanalytics.com</p>
              <p><strong>Phone:</strong> +1-307-210-6155</p>
              <p><strong>Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801</p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="trust-shadow border-0">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes 
              by email or website notice. Continued use of our services after changes constitutes acceptance of 
              the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
