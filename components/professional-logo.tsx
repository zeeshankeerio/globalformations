import Link from "next/link"
import { cn } from "@/lib/utils"
import { Building2, Star } from "lucide-react"
import ModernLogoIcon from "./modern-logo-icon"

interface ProfessionalLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark"
  showTagline?: boolean
  className?: string
  href?: string
  animated?: boolean
  iconStyle?: "modern" | "classic"
}

export default function ProfessionalLogo({ 
  size = "md", 
  variant = "light", 
  showTagline = false,
  className,
  href = "/",
  animated = true,
  iconStyle = "classic"
}: ProfessionalLogoProps) {
  const sizeClasses = {
    sm: {
      container: "w-10 h-10",
      mg: "text-xs",
      badge: "w-3 h-3 -top-0.5 -right-0.5",
      icon: "w-3 h-3",
      title: "text-base",
      subtitle: "text-xs",
      tagline: "text-xs",
      gap: "gap-2"
    },
    md: {
      container: "w-14 h-14",
      mg: "text-sm",
      badge: "w-4 h-4 -top-1 -right-1",
      icon: "w-4 h-4",
      title: "text-xl",
      subtitle: "text-sm",
      tagline: "text-xs",
      gap: "gap-3"
    },
    lg: {
      container: "w-16 h-16",
      mg: "text-base",
      badge: "w-5 h-5 -top-1 -right-1",
      icon: "w-5 h-5",
      title: "text-2xl",
      subtitle: "text-lg",
      tagline: "text-sm",
      gap: "gap-4"
    },
    xl: {
      container: "w-20 h-20",
      mg: "text-lg",
      badge: "w-6 h-6 -top-1 -right-1",
      icon: "w-6 h-6",
      title: "text-3xl",
      subtitle: "text-xl",
      tagline: "text-base",
      gap: "gap-4"
    }
  }

  const variantClasses = {
    light: {
      title: "text-slate-900",
      subtitle: "text-blue-700", // USA Air Force Blue
      tagline: "text-slate-600",
      border: "border-white"
    },
    dark: {
      title: "text-white",
      subtitle: "text-blue-300", // Lighter USA Air Force Blue for dark mode
      tagline: "text-white/80",
      border: "border-white/20"
    }
  }

  const sizes = sizeClasses[size]
  const variants = variantClasses[variant]

  const LogoContent = () => (
    <div className={cn(
      "flex items-center group logo-professional", 
      sizes.gap,
      variant === "dark" ? "logo-dark" : "", 
      animated ? "hover:scale-[1.02] transition-all duration-300" : "",
      className
    )}>
      <div className="relative">
        {iconStyle === "modern" ? (
          <ModernLogoIcon size={size} animated={animated} />
        ) : (
          <>
            {/* Ultra-Modern MG Icon with Premium Design */}
            <div className={cn(
              sizes.container,
              "mg-icon bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 rounded-2xl flex items-center justify-center relative overflow-hidden",
              "shadow-lg border border-white/10",
              animated ? "group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" : ""
            )}>
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              {/* MG Text with premium styling */}
              <div className="relative z-10 flex items-center justify-center">
                <span className={cn(
                  sizes.mg,
                  "font-black text-white tracking-tight drop-shadow-2xl relative"
                )}>
                  <span className="relative z-10">MG</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300">MG</span>
                </span>
              </div>
              
              {/* Subtle corner accent */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
            </div>
            
            {/* Premium USA Flag Badge */}
            <div className={cn(
              sizes.badge,
              "usa-flag-badge absolute rounded-full border border-white/80 shadow-lg flex items-center justify-center",
              animated ? "group-hover:rotate-6 group-hover:scale-105 transition-all duration-300" : ""
            )}>
              <Star className={cn(sizes.icon, "text-blue-700 drop-shadow-sm")} />
            </div>
          </>
        )}
      </div>
      
      <div className="flex flex-col">
        {/* Enhanced Typography */}
        <div className="flex items-center gap-1">
          <h1 className={cn(
            sizes.title,
            variants.title,
            "font-bold font-heading leading-tight tracking-tight"
          )}>
            Mindscape
          </h1>
          <span className={cn(
            sizes.title,
            "font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          )}>
            Global
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Building2 className={cn(sizes.icon, variants.subtitle)} />
          <span className={cn(
            sizes.subtitle,
            variants.subtitle,
            "font-bold leading-tight logo-text-secondary tracking-wide"
          )}>
            LLC Formations
          </span>
        </div>
        
        {showTagline && (
          <span className={cn(
            sizes.tagline,
            variants.tagline,
            "font-medium leading-tight logo-tagline mt-1 opacity-80"
          )}>
            Professional Business Services
          </span>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}