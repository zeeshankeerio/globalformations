import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Mindscape Global Formations",
  description: "Learn how we protect your personal information and data privacy at Mindscape Global Formations.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
            Your privacy and data protection are our top priorities
          </p>
          <Badge className="mt-4 bg-green-100 text-green-800 border-green-200">
            Last updated: December 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-dm-sans)]">
              Mindscape Global Formations ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our LLC formation services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Personal Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Name, email address, and phone number</li>
                <li>• Business information (business name, address, purpose)</li>
                <li>• Payment information (processed securely through third-party providers)</li>
                <li>• Identification documents (for LLC formation requirements)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Technical Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IP address and device information</li>
                <li>• Browser type and version</li>
                <li>• Pages visited and time spent on our site</li>
                <li>• Referring website information</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Service Delivery</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Process your LLC formation</li>
                  <li>• Communicate about your order</li>
                  <li>• Provide customer support</li>
                  <li>• Send important updates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Business Operations</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Improve our services</li>
                  <li>• Analyze website usage</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              Data Protection & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 256-bit SSL encryption for all data transmission</li>
              <li>• Secure, encrypted database storage</li>
              <li>• Regular security audits and updates</li>
              <li>• Limited access to personal information</li>
              <li>• Secure payment processing through PCI-compliant providers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              Your Privacy Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Access & Control</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Request data deletion</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Data Portability</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Export your data</li>
                  <li>• Transfer to another service</li>
                  <li>• Restrict data processing</li>
                  <li>• Object to certain uses</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              Third-Party Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We may use third-party services to provide our services:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Payment Processing:</strong> Stripe, PayPal (we don't store payment details)</li>
              <li>• <strong>Email Services:</strong> For order updates and customer support</li>
              <li>• <strong>Analytics:</strong> Google Analytics (anonymized data only)</li>
              <li>• <strong>Customer Support:</strong> WhatsApp, email providers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="trust-shadow border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or your personal information, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> privacy@mindscapeanalytics.com</p>
              <p><strong>Phone:</strong> +1-307-210-6155</p>
              <p><strong>Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801</p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="trust-shadow border-0">
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to 
              review this Privacy Policy periodically.
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
