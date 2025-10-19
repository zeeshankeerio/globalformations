"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProfessionalLogo from "./professional-logo"
import { Palette, Sparkles, Eye } from "lucide-react"

export default function LogoShowcase() {
  const [selectedStyle, setSelectedStyle] = useState<"modern" | "classic">("modern")
  const [selectedVariant, setSelectedVariant] = useState<"light" | "dark">("light")
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg" | "xl">("lg")

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Sparkles className="w-4 h-4 mr-2" />
          Logo Showcase
        </Badge>
        <h2 className="text-3xl font-bold mb-2">Enhanced Mindscape Global Branding</h2>
        <p className="text-slate-600">Modern, professional logo designs with premium styling</p>
      </div>

      {/* Controls */}
      <Card className="card-mg-professional">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Style Selection */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Icon Style
              </h3>
              <div className="space-y-2">
                <Button
                  variant={selectedStyle === "modern" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle("modern")}
                  className="w-full"
                >
                  Modern SVG
                </Button>
                <Button
                  variant={selectedStyle === "classic" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle("classic")}
                  className="w-full"
                >
                  Classic Design
                </Button>
              </div>
            </div>

            {/* Variant Selection */}
            <div>
              <h3 className="font-semibold mb-3">Theme Variant</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedVariant === "light" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedVariant("light")}
                  className="w-full"
                >
                  Light Theme
                </Button>
                <Button
                  variant={selectedVariant === "dark" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedVariant("dark")}
                  className="w-full"
                >
                  Dark Theme
                </Button>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-2 gap-2">
                {(["sm", "md", "lg", "xl"] as const).map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="text-xs"
                  >
                    {size.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logo Display */}
      <Card className={`card-mg-professional ${selectedVariant === "dark" ? "bg-slate-900" : ""}`}>
        <CardContent className="p-12">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <ProfessionalLogo
                size={selectedSize}
                variant={selectedVariant}
                showTagline={true}
                iconStyle={selectedStyle}
                animated={true}
              />
            </div>
            
            <div className="text-sm text-slate-500 space-y-2">
              <p>Style: {selectedStyle} | Variant: {selectedVariant} | Size: {selectedSize}</p>
              <p className="flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Hover to see animations and effects
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card className="card-mg-professional">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-6 text-center">Size Variations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="text-center space-y-2">
                <ProfessionalLogo
                  size={size}
                  variant="light"
                  iconStyle={selectedStyle}
                  animated={true}
                />
                <Badge variant="outline" className="text-xs">
                  {size.toUpperCase()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card className="card-mg-professional">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-6">Usage Examples</h3>
          <div className="space-y-6">
            {/* Header Example */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <ProfessionalLogo size="md" variant="light" iconStyle={selectedStyle} />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Services</Button>
                  <Button size="sm" className="btn-mg-primary">Get Started</Button>
                </div>
              </div>
            </div>

            {/* Footer Example */}
            <div className="p-4 bg-slate-900 rounded-lg">
              <ProfessionalLogo 
                size="lg" 
                variant="dark" 
                showTagline={true} 
                iconStyle={selectedStyle}
              />
            </div>

            {/* Business Card Example */}
            <div className="p-6 bg-white border-2 border-slate-200 rounded-lg max-w-sm">
              <ProfessionalLogo 
                size="sm" 
                variant="light" 
                showTagline={true} 
                iconStyle={selectedStyle}
              />
              <div className="mt-4 text-sm text-slate-600">
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p className="mt-2 text-blue-600">ll.mindscapeanalytics.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}