import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  FileText, 
  Award,
  Building,
  Globe,
  Server,
  Eye,
  Zap
} from "lucide-react"

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "256-bit SSL Encryption",
      description: "Bank-level security for all data",
      badge: "Active"
    },
    {
      icon: Lock,
      title: "AES-256 Data Protection",
      description: "Military-grade encryption at rest",
      badge: "Active"
    },
    {
      icon: Server,
      title: "99.9% Uptime SLA",
      description: "Enterprise infrastructure",
      badge: "Guaranteed"
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "GDPR & CCPA compliant",
      badge: "Certified"
    }
  ]

  const complianceBadges = [
    { icon: Award, name: "SOC 2", description: "Type II Certified" },
    { icon: FileText, name: "GDPR", description: "EU Compliant" },
    { icon: Building, name: "ISO 27001", description: "Security Standard" },
    { icon: Globe, name: "PCI DSS", description: "Payment Security" }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
            <Shield className="w-4 h-4 mr-2" />
            Security & Compliance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Your data is protected with Fortune 500-level security standards
          </p>
        </div>

        {/* Security Features - Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-200">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/80 mb-2 font-[family-name:var(--font-dm-sans)]">
                  {feature.description}
                </p>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {feature.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Badges - Horizontal Layout */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                Industry Certifications
              </h3>
              <p className="text-white/70 text-sm">Audited and certified by leading security organizations</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <badge.icon className="w-8 h-8 text-white/80 mx-auto mb-2" />
                  <div className="font-semibold text-white text-sm">{badge.name}</div>
                  <div className="text-xs text-white/70">{badge.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators - Compact */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">99.9% Uptime</h4>
            <p className="text-sm text-white/70">Enterprise infrastructure reliability</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Zero Breaches</h4>
            <p className="text-sm text-white/70">Perfect security track record</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">24/7 Monitoring</h4>
            <p className="text-sm text-white/70">Continuous threat detection</p>
          </div>
        </div>

        {/* Security Badges - Compact Footer */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-xs">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>AES-256</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>SOC 2</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-3 h-3" />
              <span>GDPR</span>
            </div>
            <div className="flex items-center gap-1">
              <Building className="w-3 h-3" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>PCI DSS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}