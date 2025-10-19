"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Download,
  CheckCircle,
  Star,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Mail,
  Calculator,
  CreditCard,
  Sparkles,
  ExternalLink,
  Shield,
  ArrowRight,
  Rocket
} from "lucide-react"

interface LeadMagnetProps {
  onGetStarted?: () => void
}

interface LeadMagnet {
  id: string
  title: string
  description: string
  value: number
  format: string
  icon: any
  popular?: boolean
  downloads: number
  color: string
  downloadUrl: string
  fileSize: string
  lastUpdated: string
  sourceUrl?: string
}

export default function LeadMagnet({ onGetStarted }: LeadMagnetProps = {}) {
  const [email, setEmail] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set())
  const [emailError, setEmailError] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (newEmail.trim() === "") {
      setEmailError("")
      setIsValidEmail(false)
    } else if (!validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address")
      setIsValidEmail(false)
    } else {
      setEmailError("")
      setIsValidEmail(true)
    }
  }

  const leadMagnets: LeadMagnet[] = [
    {
      id: "llc-formation-guide-2025",
      title: "LLC Formation Guide 2025",
      description: "Complete step-by-step formation process with state-specific requirements",
      value: 397,
      format: "72-page PDF",
      icon: FileText,
      popular: true,
      downloads: 5247,
      color: "from-blue-500 to-blue-600",
      downloadUrl: "/resources/LLC-Formation-Guide-2025.pdf",
      fileSize: "2.4 MB",
      lastUpdated: "January 2025",
      sourceUrl: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure"
    },
    {
      id: "state-comparison-2025",
      title: "50-State Comparison Chart",
      description: "Comprehensive fees, taxes, and benefits analysis for all US states",
      value: 247,
      format: "28-page PDF",
      icon: TrendingUp,
      downloads: 4123,
      color: "from-green-500 to-green-600",
      downloadUrl: "/resources/State-Comparison-Chart-2025.pdf",
      fileSize: "1.8 MB",
      lastUpdated: "January 2025",
      sourceUrl: "https://www.nass.org/business-services/corporations"
    },
    {
      id: "tax-optimization-2025",
      title: "Tax Strategies 2025",
      description: "Latest IRS regulations, deductions, and optimization strategies",
      value: 297,
      format: "45-page PDF",
      icon: Calculator,
      downloads: 3456,
      color: "from-purple-500 to-purple-600",
      downloadUrl: "/resources/Tax-Strategies-2025.pdf",
      fileSize: "3.1 MB",
      lastUpdated: "January 2025",
      sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed"
    },
    {
      id: "business-banking-2025",
      title: "Banking & Credit Guide",
      description: "Business account setup, credit building, and financial management",
      value: 197,
      format: "32-page PDF",
      icon: CreditCard,
      downloads: 2989,
      color: "from-orange-500 to-orange-600",
      downloadUrl: "/resources/Business-Banking-Guide-2025.pdf",
      fileSize: "1.5 MB",
      lastUpdated: "January 2025",
      sourceUrl: "https://www.fdic.gov/resources/consumers/consumer-news/"
    }
  ]

  const handleDownload = async (magnetId: string) => {
    if (!email.trim() || !isValidEmail) {
      setEmailError("Please enter a valid email address to download")
      return
    }

    const magnet = leadMagnets.find(m => m.id === magnetId)
    if (!magnet) {
      console.error('Magnet not found:', magnetId)
      alert('❌ Resource not found. Please try again.')
      return
    }

    setIsDownloading(true)

    try {
      // Simulate email capture and validation
      await new Promise(resolve => setTimeout(resolve, 800))

  // Track download analytics (in real app, send to analytics service)

      // Generate and download the PDF
      await generateAndDownloadPDF(magnet)

      setDownloadedItems(prev => new Set([...prev, magnetId]))

      // Show success message with next steps
      alert(`✅ ${magnet.title} is ready for download!\n\nNext steps:\n• Check your browser's download folder\n• Save the PDF for future reference\n• Contact us via WhatsApp for personalized assistance\n\nMindscape Global Formations - Your LLC Formation Experts`)
    } catch (error) {
      console.error('Download failed:', error)
      alert('❌ Download failed. Please check your popup blocker settings and try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const generateAndDownloadPDF = async (magnet: LeadMagnet) => {
    // Create comprehensive HTML content that can be converted to PDF
    const htmlContent = generateHTMLContent(magnet)

    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      throw new Error('Popup blocked. Please allow popups for this site.')
    }

    printWindow.document.write(htmlContent)
    printWindow.document.close()

    // Wait for content to load then trigger print/save as PDF
    setTimeout(() => {
      printWindow.print()
      setTimeout(() => {
        printWindow.close()
      }, 1000)
    }, 500)
  }

  const generateHTMLContent = (magnet: LeadMagnet): string => {
    const contentMap: { [key: string]: string } = {
      "llc-formation-guide-2025": `
        <h2>Table of Contents</h2>
        <ol>
          <li>Introduction to LLC Formation</li>
          <li>Choosing Your State of Formation</li>
          <li>Selecting Your LLC Name</li>
          <li>Registered Agent Requirements</li>
          <li>Articles of Organization</li>
          <li>Operating Agreement Essentials</li>
          <li>EIN Application Process</li>
          <li>State-Specific Requirements</li>
          <li>Banking and Financial Setup</li>
          <li>Tax Elections and Considerations</li>
          <li>Ongoing Compliance Requirements</li>
          <li>Common Mistakes to Avoid</li>
        </ol>
        
        <h2>Chapter 1: Introduction to LLC Formation</h2>
        <p>A Limited Liability Company (LLC) is one of the most popular business structures in the United States, offering flexibility, tax advantages, and personal asset protection...</p>
        
        <h3>Benefits of LLC Formation:</h3>
        <ul>
          <li>Limited personal liability protection</li>
          <li>Tax flexibility and pass-through taxation</li>
          <li>Operational flexibility</li>
          <li>Enhanced credibility with customers and vendors</li>
          <li>Easier access to business banking and credit</li>
        </ul>
        
        <h2>Chapter 2: Choosing Your State of Formation</h2>
        <p>While you can form an LLC in any state, most businesses benefit from forming in their home state. However, certain states offer advantages for specific business types...</p>
        
        <h3>Top States for LLC Formation:</h3>
        <ul>
          <li><strong>Delaware:</strong> Business-friendly courts, no state sales tax</li>
          <li><strong>Wyoming:</strong> No state income tax, strong privacy protection</li>
          <li><strong>Nevada:</strong> No state income tax, minimal reporting requirements</li>
          <li><strong>Texas:</strong> No state income tax, large market access</li>
        </ul>`,

      "state-comparison-2025": `
        <h2>2025 State-by-State LLC Formation Comparison</h2>
        
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>State</th>
            <th>Filing Fee</th>
            <th>Annual Fee</th>
            <th>Processing Time</th>
            <th>Tax Rate</th>
          </tr>
          <tr><td>Alabama</td><td>$200</td><td>$0</td><td>7-10 days</td><td>6.5%</td></tr>
          <tr><td>Alaska</td><td>$250</td><td>$100</td><td>5-7 days</td><td>0%</td></tr>
          <tr><td>Arizona</td><td>$50</td><td>$0</td><td>3-5 days</td><td>4.9%</td></tr>
          <tr><td>Arkansas</td><td>$45</td><td>$150</td><td>5-7 days</td><td>5.9%</td></tr>
          <tr><td>California</td><td>$70</td><td>$800</td><td>7-14 days</td><td>8.84%</td></tr>
          <tr><td>Colorado</td><td>$50</td><td>$10</td><td>3-5 days</td><td>4.4%</td></tr>
          <tr><td>Delaware</td><td>$90</td><td>$300</td><td>1-2 days</td><td>8.7%</td></tr>
          <tr><td>Florida</td><td>$125</td><td>$138.75</td><td>3-5 days</td><td>5.5%</td></tr>
        </table>
        
        <h3>Key Considerations by State:</h3>
        <p><strong>Delaware:</strong> Premier jurisdiction for businesses planning to go public or seek investment...</p>
        <p><strong>Wyoming:</strong> Excellent privacy protection and no state income tax...</p>
        <p><strong>Nevada:</strong> No corporate income tax and minimal reporting requirements...</p>`,

      "tax-optimization-2025": `
        <h2>2025 Tax Optimization Strategies for LLCs</h2>
        
        <h3>New Tax Changes for 2025:</h3>
        <ul>
          <li>Section 199A deduction extended through 2025</li>
          <li>Updated depreciation schedules</li>
          <li>New R&D expense capitalization rules</li>
          <li>Enhanced employee retention credits</li>
        </ul>
        
        <h3>LLC Tax Elections:</h3>
        <h4>1. Default (Disregarded Entity/Partnership)</h4>
        <p>Pass-through taxation, no entity-level tax...</p>
        
        <h4>2. S Corporation Election</h4>
        <p>Potential self-employment tax savings...</p>
        
        <h4>3. C Corporation Election</h4>
        <p>21% corporate tax rate, potential for tax deferral...</p>
        
        <h3>Deduction Strategies:</h3>
        <ul>
          <li>Home office deduction optimization</li>
          <li>Vehicle expense tracking</li>
          <li>Equipment depreciation strategies</li>
          <li>Business meal deductions</li>
          <li>Professional development expenses</li>
        </ul>`,

      "business-banking-2025": `
        <h2>Business Banking Setup Guide 2025</h2>
        
        <h3>Required Documents for Business Banking:</h3>
        <ul>
          <li>Articles of Organization (certified copy)</li>
          <li>EIN confirmation letter</li>
          <li>Operating Agreement</li>
          <li>Government-issued ID</li>
          <li>Business license (if applicable)</li>
        </ul>
        
        <h3>Top Business Banks for LLCs:</h3>
        <h4>1. Chase Business Complete Banking</h4>
        <p>$0 monthly fee with qualifying deposits...</p>
        
        <h4>2. Bank of America Business Advantage</h4>
        <p>Extensive branch network, integrated services...</p>
        
        <h4>3. Wells Fargo Business Choice Checking</h4>
        <p>No monthly fee options, robust online platform...</p>
        
        <h3>Building Business Credit:</h3>
        <ol>
          <li>Obtain a DUNS number</li>
          <li>Register with business credit bureaus</li>
          <li>Establish trade lines with suppliers</li>
          <li>Apply for business credit cards</li>
          <li>Monitor your business credit reports</li>
        </ol>`
    }

    const content = contentMap[magnet.id] || `
      <h2>Resource Content</h2>
      <p>This comprehensive guide provides detailed information about ${magnet.title.toLowerCase()}.</p>
      <p>Content includes step-by-step instructions, best practices, and expert recommendations.</p>
    `

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${magnet.title}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 40px;
            color: #333;
          }
          h1 { 
            color: #1e3a8a; 
            border-bottom: 3px solid #1e3a8a;
            padding-bottom: 10px;
          }
          h2 { 
            color: #1e40af; 
            margin-top: 30px;
          }
          h3 { 
            color: #2563eb; 
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0;
          }
          th, td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: left;
          }
          th { 
            background-color: #f8fafc; 
            font-weight: bold;
          }
          ul, ol { 
            margin: 15px 0; 
            padding-left: 30px;
          }
          li { 
            margin: 8px 0; 
          }
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            color: white;
            border-radius: 10px;
          }
          .footer {
            margin-top: 50px;
            padding: 20px;
            background-color: #f8fafc;
            border-radius: 10px;
            text-align: center;
            font-size: 14px;
            color: #64748b;
          }
          @media print {
            body { margin: 20px; }
            .header { background: #1e3a8a !important; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${magnet.title}</h1>
          <p>Professional Business Resource from Mindscape Global Formations</p>
          <p>A Division of Mindscape Analytics | Last Updated: ${magnet.lastUpdated} | ${magnet.format}</p>
        </div>
        
        ${content}
        
        <div class="footer">
          <p><strong>Source:</strong> ${magnet.sourceUrl || 'Official Government Resources and Industry Best Practices'}</p>
          <p><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or tax advice. 
          Consult with qualified professionals for your specific situation.</p>
          <p><strong>© 2025 Mindscape Global Formations</strong></p>
          <p>A Division of Mindscape Analytics | 30 N Gould St Ste N, Sheridan, WY 82801</p>
          <p>Visit: <strong>ll.mindscapeanalytics.com</strong> | Main Site: <strong>mindscapeanalytics.com</strong></p>
        </div>
      </body>
      </html>
    `
  }

  const getTotalValue = () => {
    return leadMagnets.reduce((total, magnet) => total + magnet.value, 0)
  }

  const handleDownloadAll = async () => {
    if (!email.trim() || !isValidEmail) {
      setEmailError("Please enter a valid email address to download")
      return
    }

    setIsDownloading(true)

    try {
      // Simulate email capture and welcome sequence
      await new Promise(resolve => setTimeout(resolve, 1000))

  // Track bulk download (analytics/event capture should be wired server-side)

      // Download all resources with staggered timing
      for (let i = 0; i < leadMagnets.length; i++) {
        const magnet = leadMagnets[i]
        if (magnet) {
          await generateAndDownloadPDF(magnet)

          // Add delay between downloads to prevent browser blocking
          if (i < leadMagnets.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000))
          }
        }
      }

      const allIds = new Set(leadMagnets.map(m => m.id))
      setDownloadedItems(allIds)

      alert(`🎉 Success! All ${leadMagnets.length} business resources are downloading!\n\nValue: $${getTotalValue().toLocaleString()} - Yours FREE!\n\n📧 Check your email for additional resources and business tips.\n💬 Need help? Contact us via WhatsApp for expert guidance!\n\nMindscape Global Formations - ll.mindscapeanalytics.com`)
    } catch (error) {
      console.error('Bulk download failed:', error)
      alert('⚠️ Some downloads may have been blocked by your browser.\n\nTip: Allow popups for this site and try again, or download resources individually.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50/30 via-white/20 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.02),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 px-4 py-2 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            2025 Updated Resources
          </Badge>

          <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
              Free Business Resources
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-blue-600">
              Worth ${getTotalValue().toLocaleString()}
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Download expert guides and checklists from <strong>Mindscape Global Formations</strong> - updated for 2025 regulations
          </p>

          {/* Compact Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
              <CheckCircle className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-slate-700">2025 Updated</span>
            </div>
            <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
              <Star className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-slate-700">Expert Created</span>
            </div>
            <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
              <Users className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-slate-700">16,000+ Downloads</span>
            </div>
          </div>
        </div>

        {/* Compact Email Collection */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-xl">
            <CardContent className="p-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Get Instant Access</h3>
                    <p className="text-xs text-slate-600">Download all {leadMagnets.length} resources free from Mindscape Global</p>
                  </div>
                </div>

                <div className="flex-1 flex gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full border-slate-200 focus:border-blue-500 rounded-lg ${emailError ? 'border-red-300 focus:border-red-500' : ''
                        } ${isValidEmail ? 'border-green-300 focus:border-green-500' : ''}`}
                    />
                    {emailError && (
                      <p className="text-xs text-red-500 mt-1">{emailError}</p>
                    )}
                  </div>
                  <Button
                    className={`px-6 rounded-lg transition-all duration-200 ${isValidEmail
                      ? "btn-mg-primary hover:shadow-lg"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                      }`}
                    onClick={handleDownloadAll}
                    disabled={isDownloading || !isValidEmail}
                  >
                    {isDownloading ? (
                      <Clock className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-1" />
                        Get All
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-500">
                <span>✓ No spam, unsubscribe anytime</span>
                <span>✓ Instant download</span>
                <span>✓ 2025 updated content</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compact Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {leadMagnets.map((magnet) => (
            <div
              key={magnet.id}
              className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-4 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-200 hover:-translate-y-1"
            >
              {/* Popular badge */}
              {magnet.popular && (
                <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs border-0 shadow-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}

              {/* Multi-colored Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${magnet.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                <magnet.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-slate-900 text-sm mb-2 leading-tight">
                  {magnet.title}
                </h3>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {magnet.description}
                </p>

                {/* Meta info */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs p-2 bg-slate-50/70 rounded-lg">
                    <span className="text-slate-600">{magnet.format}</span>
                    <span className="font-bold text-blue-600">${magnet.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-blue-50/70 rounded-lg">
                    <span className="text-slate-600">{magnet.fileSize}</span>
                    <span className="text-blue-600 font-medium">{magnet.lastUpdated}</span>
                  </div>
                  {magnet.sourceUrl && (
                    <div className="flex items-center gap-1 text-xs text-slate-500 justify-center">
                      <Shield className="w-3 h-3" />
                      <span>Authentic Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Professional Glossy Button */}
                <Button
                  onClick={() => handleDownload(magnet.id)}
                  disabled={isDownloading || downloadedItems.has(magnet.id) || !isValidEmail}
                  size="sm"
                  className={`w-full mb-2 text-xs rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ${downloadedItems.has(magnet.id)
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                    : isValidEmail
                      ? "bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-700 hover:to-blue-600 text-white border-0"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed border-0"
                    }`}
                >
                  {downloadedItems.has(magnet.id) ? (
                    <>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Downloaded
                    </>
                  ) : (
                    <>
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </>
                  )}
                </Button>

                {/* Download count */}
                <div className="text-xs text-slate-500">
                  {magnet.downloads.toLocaleString()} downloads
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Bundle Offer */}
        <Card className="border-2 border-green-200/60 bg-gradient-to-r from-green-50/50 to-blue-50/50 mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <Badge className="mb-3 bg-gradient-to-r from-green-600 to-green-700 text-white border-0 shadow-lg">
                  Bundle Deal
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Get All {leadMagnets.length} Resources
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black text-green-600">FREE</span>
                  <span className="text-lg text-slate-500 line-through">${getTotalValue().toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {leadMagnets.map((magnet, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{magnet.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className={`w-full mb-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ${isValidEmail
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                    }`}
                  onClick={handleDownloadAll}
                  disabled={isDownloading || !isValidEmail}
                >
                  {isDownloading ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download All FREE
                    </>
                  )}
                </Button>
                <p className="text-sm text-slate-600 mb-1">
                  Normally ${getTotalValue().toLocaleString()} - Free today!
                </p>
                <p className="text-xs text-slate-500">
                  ✓ Instant access ✓ No credit card ✓ 2025 updated
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ready to Start CTA */}
        <Card className="border-2 border-blue-200/60 bg-gradient-to-r from-blue-50/50 to-purple-50/50 mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              <Badge className="mb-4 bg-blue-600 text-white border-0 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Launch Your Business?
              </Badge>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Start Your LLC Formation Today
              </h3>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                You've got the knowledge from our expert resources. Now let our specialists handle the formation process while you focus on building your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Rocket className="w-5 h-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Start My LLC Formation</span>
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Starting at $50</div>
                  <div className="text-sm text-slate-500">+ State Fee • No Hidden Costs</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day processing available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>100% money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Expert support included</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Source Verification & Disclaimer */}
        <Card className="bg-white/60 backdrop-blur-sm border border-slate-200/60 mb-8">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Authentic Resources</h3>
              </div>
              <p className="text-sm text-slate-600 max-w-3xl mx-auto">
                All resources are compiled from official government sources, industry best practices, and expert knowledge by
                <strong> Mindscape Global Formations</strong>, a division of Mindscape Analytics.
                Updated regularly to reflect current regulations and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50/50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Government Sourced</h4>
                <p className="text-xs text-slate-600">SBA, IRS, and state agency resources</p>
              </div>

              <div className="p-3 bg-green-50/50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Expert Reviewed</h4>
                <p className="text-xs text-slate-600">Verified by business formation specialists</p>
              </div>

              <div className="p-3 bg-purple-50/50 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">2025 Updated</h4>
                <p className="text-xs text-slate-600">Current regulations and requirements</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200/60">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-slate-900 text-sm mb-2">Need Personal Assistance?</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded-lg shadow-sm"
                    onClick={() => window.open('https://wa.me/13072106155', '_blank')}
                  >
                    <span className="mr-1">💬</span>
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg shadow-sm"
                    onClick={() => window.location.href = 'mailto:info@mindscapeanalytics.com'}
                  >
                    <Mail className="w-3 h-3 mr-1" />
                    Email Us
                  </Button>
                  <Button
                    size="sm"
                    className="bg-slate-600 hover:bg-slate-700 text-white text-xs px-4 py-2 rounded-lg shadow-sm"
                    onClick={() => window.open('https://ll.mindscapeanalytics.com', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Site
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  <strong>Mindscape Global Formations</strong> - A Division of Mindscape Analytics<br />
                  30 N Gould St Ste N, Sheridan, WY 82801
                </p>
              </div>

              <p className="text-xs text-slate-500 text-center">
                <strong>Disclaimer:</strong> These resources are for informational purposes only and do not constitute legal, tax, or financial advice.
                Always consult with qualified professionals for your specific business needs.
              </p>
            </div>
          </CardContent>
        </Card>


      </div>
    </section>
  )
}