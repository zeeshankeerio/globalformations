// Trust signals section does not use Card wrapper; keep imports minimal
import { 
  Shield, 
  Award, 
  CheckCircle,
  Lock,
  Building
} from "lucide-react"

export default function TrustSignals() {
  const certifications = [
    {
      icon: Shield,
      title: "SSL Secured",
      description: "256-bit encryption protects all your data",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Award,
      title: "BBB Accredited",
      description: "A+ rating with Better Business Bureau",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Building,
      title: "Licensed Provider",
      description: "Licensed business formation service",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Lock,
      title: "Money-Back Guarantee",
      description: "100% satisfaction guarantee",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ]

  // const stats = [] // removed section

  // const securityFeatures = [] // removed section

  // const supportChannels = [] // removed section

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50/50 via-white/30 to-blue-50/40 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,58,138,0.02),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Certifications */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/10 to-slate-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${cert.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-7 h-7 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Removed Proven Track Record section (avoids duplication) */}

        {/* Removed Advanced Security Features section (security covered at bottom) */}

        {/* Removed 24/7 Expert Support section from top as requested */}

        {/* Modern Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { icon: Shield, text: "SSL Secured", color: "text-blue-600" },
              { icon: Award, text: "BBB A+ Rating", color: "text-blue-700" },
              { icon: Lock, text: "256-bit Encryption", color: "text-blue-600" },
              { icon: CheckCircle, text: "Money-Back Guarantee", color: "text-blue-700" },
              { icon: Building, text: "Licensed Provider", color: "text-blue-600" }
            ].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/80 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <badge.icon className={`w-4 h-4 ${badge.color}`} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
