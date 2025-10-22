import { Loader2, Rocket } from "lucide-react"

interface LoadingProps {
  text?: string
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
}

export default function Loading({ 
  text = "Loading...", 
  size = "md", 
  fullScreen = false 
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  if (fullScreen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
            <Rocket className="w-7 h-7 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold">Mindscape Global Formations</h2>
        </div>
        <Loader2 className={`${sizeClasses[size]} animate-spin text-white/80`} />
        <p className="mt-4 text-white/80 text-sm">{text}</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
    </div>
  )
}
