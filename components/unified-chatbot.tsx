"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Mail, 
  Bot,
  ChevronDown,
  ChevronUp
} from "lucide-react"

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick_reply' | 'offer'
}

interface ChatOption {
  id: string
  label: string
  icon: React.ComponentType<any>
  action: 'whatsapp' | 'email' | 'phone' | 'chat'
  message?: string
  context?: string
}

export default function UnifiedChatbot() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatStatus, setChatStatus] = useState<'online' | 'away' | 'offline'>('online')
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const quickReplies = [
    "How much does LLC formation cost?",
    "Which state should I choose?",
    "How long does it take?",
    "What documents do I need?",
    "Can you help with EIN?",
    "Do you offer refunds?"
  ]

  const chatOptions: ChatOption[] = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      icon: MessageCircle,
      action: 'whatsapp',
      message: 'general',
      context: 'unified-chatbot'
    },
    {
      id: 'email',
      label: 'Email Support',
      icon: Mail,
      action: 'email',
      message: 'email-support',
      context: 'unified-chatbot'
    },
    {
      id: 'phone',
      label: 'Phone Call',
      icon: Phone,
      action: 'phone',
      message: 'phone-consultation',
      context: 'unified-chatbot'
    }
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const now = new Date()
    const userMessage: ChatMessage = {
      id: `user_${now.getTime()}_${Math.random().toString(36).substr(2, 4)}`,
      text: inputValue,
      sender: 'user',
      timestamp: now
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Focus back on input
    setTimeout(() => inputRef.current?.focus(), 100)

    // Simulate bot response with realistic delay
    setTimeout(() => {
      setIsTyping(false)
      const botNow = new Date()
      const botResponse: ChatMessage = {
        id: `bot_${botNow.getTime()}_${Math.random().toString(36).substr(2, 4)}`,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: botNow
      }
      setMessages(prev => [...prev, botResponse])
    }, 1200)
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee')) {
      return "Our LLC formation packages start at just $50 + state fees! 🎯\n\n📦 Starter ($50): Basic filing\n📦 Standard ($199): Filing + EIN + Banking Resolution\n📦 Premium ($399): Everything + Operating Agreement + Compliance Kit\n\nState fees vary by location ($50-$500). Which package interests you?"
    }
    
    if (lowerMessage.includes('state') || lowerMessage.includes('which state') || lowerMessage.includes('wyoming') || lowerMessage.includes('delaware')) {
      return "Great question! Popular states for LLC formation:\n\n🏔️ Wyoming: No state tax, low fees ($100), strong privacy\n🏛️ Delaware: Business-friendly laws, fast processing\n🎰 Nevada: No corporate/personal income tax, privacy protection\n🏠 Your Home State: Often best if you'll operate there\n\nNeed help choosing? Tell me about your business!"
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('fast') || lowerMessage.includes('quick')) {
      return "⚡ Speed matters to us!\n\n✅ Most LLCs: 24-48 hours\n✅ Same-day processing: Available for urgent cases\n✅ EIN (Tax ID): Same day with Standard/Premium packages\n\nReady to get started today?"
    }
    
    if (lowerMessage.includes('documents') || lowerMessage.includes('paperwork') || lowerMessage.includes('need')) {
      return "We make it super simple! All you need:\n\n✅ Your desired business name\n✅ Business address (can use our registered agent)\n✅ Member/owner information\n✅ Registered agent details (we provide this!)\n\nThat's it! We handle all the complex paperwork and filing. 📄"
    }
    
    if (lowerMessage.includes('ein') || lowerMessage.includes('tax id') || lowerMessage.includes('federal')) {
      return "Yes! EIN (Federal Tax ID) is included in our Standard and Premium packages! 🎉\n\nWhy you need it:\n✅ Open business bank accounts\n✅ Hire employees\n✅ File business taxes\n✅ Build business credit\n\nWe handle the IRS paperwork and get your EIN the same day!"
    }
    
    if (lowerMessage.includes('refund') || lowerMessage.includes('money back') || lowerMessage.includes('guarantee')) {
      return "100% money-back guarantee! 💯\n\nIf we can't successfully form your LLC, you get a full refund of our service fees. State filing fees are non-refundable as they go directly to the government.\n\nYour satisfaction and success are our top priorities!"
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Welcome to Mindscape Analytics! I'm here to help you start your LLC quickly and affordably.\n\nWhat would you like to know about forming your LLC?"
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! 😊 I'm here to help anytime.\n\nWant to get started with your LLC formation? Click the WhatsApp or Email button above to speak with our team!"
    }
    
    return "That's a great question! 💡\n\nI'd love to connect you with one of our LLC formation specialists who can give you detailed, personalized answers.\n\nWould you like to:\n📱 Chat via WhatsApp\n📧 Email us\n📞 Schedule a free call\n\nJust click the ☰ menu above!"
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleOptionSelect = (option: ChatOption) => {
    if (option.action === 'whatsapp') {
      // Handle WhatsApp redirect with correct phone number
      const phoneNumber = '13072106155' // +1-307-210-6155
      const message = encodeURIComponent('Hello, I need help with LLC formation')
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    } else if (option.action === 'email') {
      // Handle email
      window.location.href = 'mailto:info@mindscapeanalytics.com?subject=LLC Formation Support'
    } else if (option.action === 'phone') {
      // Handle phone with correct number
      window.location.href = 'tel:+13072106155'
    }
    setShowOptions(false)
  }

  useEffect(() => {
    setIsMounted(true)
    
    // Show floating button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Initialize chat with welcome message
    if (!isInitialized && isOpen) {
      const initTime = new Date()
      setMessages([{
        id: 'welcome',
        text: "Hi! I'm here to help you with your LLC formation. What would you like to know?",
        sender: 'bot',
        timestamp: initTime
      }])
      setIsInitialized(true)
    }

    // Update chat status based on time
    const now = new Date()
    const hour = now.getHours()
    if (hour >= 9 && hour <= 17) {
      setChatStatus('online')
    } else if (hour >= 18 && hour <= 21) {
      setChatStatus('away')
    } else {
      setChatStatus('offline')
    }
  }, [isInitialized, isOpen])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <Card className="w-96 max-w-[calc(100vw-3rem)] h-[500px] flex flex-col shadow-2xl border-2 border-slate-200 bg-white rounded-2xl overflow-hidden">
          {/* Chat Header */}
          <CardHeader className="pb-3 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] text-white rounded-t-xl border-b border-blue-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-sm">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-red-500 via-white to-blue-600 rounded-full border border-white shadow-sm"></div>
                </div>
                <div>
                  <CardTitle className="text-white text-lg font-heading font-bold">Mindscape Assistant</CardTitle>
                  <p className="text-white/90 text-xs font-medium">LLC Formation Expert</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className={`w-2 h-2 rounded-full ${
                      chatStatus === 'online' ? 'bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.8)]' : 
                      chatStatus === 'away' ? 'bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]' : 'bg-slate-400'
                    }`}></div>
                    <span className="text-white/90 text-xs font-medium">
                      {chatStatus === 'online' ? 'Online now' : 
                       chatStatus === 'away' ? 'Away' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOptions(!showOptions)}
                  className="text-white hover:bg-white/20 rounded-lg transition-all"
                  aria-label={showOptions ? 'Hide contact options' : 'Show contact options'}
                >
                  {showOptions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setIsOpen(false); setIsMinimized(true); }}
                  className="text-white hover:bg-white/20 rounded-lg transition-all"
                  aria-label="Minimize chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Contact Options Dropdown */}
          {showOptions && (
            <div className="p-3 bg-gradient-to-br from-blue-50 to-slate-50 border-b border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-2">Contact Options:</p>
              <div className="space-y-2">
                {chatOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleOptionSelect(option)}
                    className="w-full justify-start gap-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all"
                  >
                    <option.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">{option.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white rounded-br-md'
                      : 'bg-white border border-slate-200 text-slate-900 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1.5 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-slate-700 p-3 rounded-2xl border border-slate-200 shadow-sm rounded-bl-md">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible scroll anchor */}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 bg-white border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-600 mb-2 mt-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickReplies.slice(0, 4).map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs h-7 px-3 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-xl">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400 bg-white"
                autoFocus
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="sm"
                className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:opacity-90 text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse flex items-center justify-center shadow-lg z-10">
            1
          </div>
          
          {/* Main Chat Button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:opacity-90 text-white rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-300 flex items-center justify-center group-hover:scale-110"
          >
            <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
              Need help? Chat with us!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
        </div>
      )}

      {/* Minimized State - Single Button Only */}
      {isMinimized && (
        <Button
          onClick={() => { setIsOpen(true); setIsMinimized(false); }}
          className="w-16 h-16 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:opacity-90 text-white rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-300 flex items-center justify-center group hover:scale-110 border-2 border-white/20 animate-in zoom-in duration-500"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
        </Button>
      )}
    </div>
  )
}
