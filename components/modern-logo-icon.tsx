"use client"

import { cn } from "@/lib/utils"

interface ModernLogoIconProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
}

export default function ModernLogoIcon({ 
  size = "md", 
  className,
  animated = true 
}: ModernLogoIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  }

  return (
    <div className={cn(
      sizeClasses[size],
      "relative group",
      className
    )}>
      {/* Modern SVG Logo */}
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full h-full drop-shadow-2xl",
          animated ? "group-hover:scale-105 transition-transform duration-300" : ""
        )}
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#bgGradient)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          filter="url(#glow)"
        />
        
        {/* Inner Accent Ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1"
          className={animated ? "animate-pulse" : ""}
        />
        
        {/* MG Text */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="28"
          fontWeight="900"
          fill="url(#textGradient)"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-1px"
        >
          MG
        </text>
        
        {/* Decorative Elements */}
        <circle cx="25" cy="25" r="2" fill="rgba(59,130,246,0.6)" className={animated ? "animate-pulse" : ""} />
        <circle cx="75" cy="75" r="1.5" fill="rgba(255,255,255,0.4)" className={animated ? "animate-pulse delay-500" : ""} />
        <circle cx="75" cy="25" r="1" fill="rgba(34,197,94,0.6)" className={animated ? "animate-pulse delay-1000" : ""} />
        
        {/* USA Flag Corner Badge */}
        <g transform="translate(70, 15)">
          <circle r="8" fill="#ffffff" stroke="rgba(30,58,138,0.3)" strokeWidth="1" />
          <rect x="-6" y="-3" width="12" height="2" fill="#dc2626" />
          <rect x="-6" y="-1" width="12" height="2" fill="#ffffff" />
          <rect x="-6" y="1" width="12" height="2" fill="#2563eb" />
          <circle cx="0" cy="0" r="1" fill="#1d4ed8" />
        </g>
      </svg>
      
      {/* Hover Glow Effect */}
      {animated && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
      )}
    </div>
  )
}