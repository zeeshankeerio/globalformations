import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ContactButton from "@/components/contact-button"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import { 
  Search, 
  HelpCircle, 
  DollarSign, 
  Shield,
  Building,
  CreditCard,
  Phone,
  ArrowRight,
  Rocket
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Frequently Asked Questions - LLC Formation FAQ | Mindscape Global Formations",
  description: "Get answers to common questions about LLC formation, business setup, banking, and our services. Expert guidance for your business formation journey.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      name: "General LLC Formation",
      icon: Building,
      questions: [
        {
          question: "What is an LLC and why should I form one?",
          answer: "A Limited Liability Company (LLC) is a business structure that provides personal liability protection while offering tax flexibility. It separates your personal assets from your business assets, protecting you from business debts and lawsuits. LLCs are popular because they're easier to set up than corporations and offer more flexibility than sole proprietorships."
        },
        {
          question: "How long does LLC formation take?",
          answer: "Our standard processing time is 1-2 business days for most states. Some states offer expedited processing for same-day formation. We'll provide you with an exact timeline based on your chosen state and processing options."
        },
        {
          question: "Which state should I choose for my LLC?",
          answer: "The best state depends on your specific needs. Wyoming is popular for its business-friendly laws and low fees. Delaware is known for corporate law expertise. Nevada offers privacy protection. We'll help you choose based on your business goals, tax situation, and operational needs."
        },
        {
          question: "What documents do I need to provide?",
          answer: "You'll need to provide basic information like your business name, business address, member information, and business purpose. We handle all the paperwork and filing. No complex documents or legal knowledge required on your part."
        }
      ]
    },
    {
      name: "Pricing & Fees",
      icon: DollarSign,
      questions: [
        {
          question: "What's included in your $180 starting price?",
          answer: "Our $180 starter package includes LLC formation, operating agreement, free consultation, and email support. State fees are separate and vary by state (typically $50-$500). We keep our service fee separate from state fees for complete transparency."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees, ever. The price you see is exactly what you pay, plus the required state fee. We believe in complete transparency and will never surprise you with additional charges."
        },
        {
          question: "Can I upgrade my package later?",
          answer: "Yes! You can upgrade to a higher package at any time. We'll credit your original payment and you'll only pay the difference. This gives you flexibility to start with what you need and add services as your business grows."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 100% money-back guarantee if we cannot successfully form your LLC. State fees are non-refundable as they're paid directly to the government. We're confident in our service and stand behind our work."
        }
      ]
    },
    {
      name: "Banking & Payments",
      icon: CreditCard,
      questions: [
        {
          question: "How do I get a U.S. bank account for my LLC?",
          answer: "We help you set up a business bank account with major U.S. banks. This includes preparing required documentation, scheduling appointments, and guiding you through the account opening process. Most accounts can be opened within 3-5 business days."
        },
        {
          question: "Can I use PayPal and Stripe with my LLC?",
          answer: "Yes! We help you set up PayPal Business and Stripe merchant accounts. Your LLC provides the business structure needed for these payment processors. We'll guide you through the application process and help optimize your account settings."
        },
        {
          question: "What's an EIN and why do I need it?",
          answer: "An EIN (Employer Identification Number) is your business's federal tax ID. It's required for opening business bank accounts, hiring employees, and filing business taxes. We handle the EIN application process for you, typically receiving it the same day."
        },
        {
          question: "Can I accept international payments?",
          answer: "Yes! With your U.S. LLC and business bank account, you can accept payments from customers worldwide. PayPal and Stripe both support international transactions, making it easy to serve global customers."
        }
      ]
    },
    {
      name: "Support & Service",
      icon: Phone,
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including free consultations, email support, WhatsApp support, and phone support. Our team of business formation experts is available to answer questions and guide you through every step of the process."
        },
        {
          question: "How quickly do you respond to inquiries?",
          answer: "We typically respond to emails within 2 hours during business hours. WhatsApp and phone support are available for immediate assistance. Our goal is to provide fast, helpful responses to all your questions."
        },
        {
          question: "Do you provide ongoing support after formation?",
          answer: "Yes! We provide ongoing support even after your LLC is formed. This includes compliance reminders, business guidance, and assistance with additional services as your business grows. We're your long-term business partner."
        },
        {
          question: "Can I speak with a real person?",
          answer: "Absolutely! We believe in personal service. You can speak with our team via phone, WhatsApp, or video call. We're not just a website - we're real people who care about your success."
        }
      ]
    },
    {
      name: "Legal & Compliance",
      icon: Shield,
      questions: [
        {
          question: "Is your service legally compliant?",
          answer: "Yes, we're a licensed business formation service provider. Our team includes licensed attorneys and business formation experts who ensure all filings meet legal requirements. We stay up-to-date with changing regulations."
        },
        {
          question: "What happens if there's an error in my filing?",
          answer: "We have a 100% accuracy guarantee. If there's an error in our filing, we'll correct it at no additional cost. Our experienced team reviews all documents before submission to ensure accuracy."
        },
        {
          question: "Do I need a registered agent?",
          answer: "Yes, all LLCs are required to have a registered agent in their state of formation. We provide registered agent service for the first year free with all packages. This service ensures you receive important legal documents."
        },
        {
          question: "What are my ongoing compliance requirements?",
          answer: "Ongoing requirements vary by state but typically include annual reports, tax filings, and maintaining good standing. We provide compliance reminders and can help with ongoing filings as part of our support services."
        }
      ]
    },
    {
      name: "Business Growth",
      icon: Rocket,
      questions: [
        {
          question: "Do you provide business training and guidance?",
          answer: "Yes! Our Premium package includes comprehensive business training covering Amazon FBA, eBay selling, freelancing, and e-commerce. We also provide weekly live training sessions and ongoing business guidance."
        },
        {
          question: "Can you help me scale my business?",
          answer: "Absolutely! We provide ongoing support for business growth including guidance on hiring employees, expanding to new markets, and optimizing your business structure. We're your long-term business partner."
        },
        {
          question: "What business models work best with LLCs?",
          answer: "LLCs work well for most business models including e-commerce, freelancing, consulting, real estate, and service businesses. We provide specific guidance for your industry and business model."
        },
        {
          question: "Do you help with tax planning?",
          answer: "While we don't provide tax advice, we can connect you with qualified tax professionals and provide general guidance on LLC tax benefits and requirements. We focus on business formation and structure."
        }
      ]
    }
  ]

  const popularQuestions = [
    {
      question: "How much does it cost to form an LLC?",
      answer: "Our service starts at $180 plus state fees (typically $50-$500). State fees vary by state and are mandatory government charges. We keep our service fee separate for complete transparency."
    },
    {
      question: "How long does the entire process take?",
      answer: "LLC formation typically takes 1-2 business days. Bank account setup takes 3-5 business days. Payment processor setup takes 1-2 business days. Most clients have everything set up within a week."
    },
    {
      question: "Can I form an LLC if I'm not a U.S. citizen?",
      answer: "Yes! Non-U.S. citizens can form LLCs in the United States. You'll need an ITIN (Individual Taxpayer Identification Number) for tax purposes, which we can help you obtain."
    },
    {
      question: "What's the difference between your packages?",
      answer: "Starter ($180): Basic LLC formation. Standard ($320): Includes EIN and priority support. Premium ($530): Includes banking, payment processing, and business training. All packages include free consultation."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>
      
      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/faq" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white">Frequently Asked Questions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Get Answers to Your Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Find answers to common questions about LLC formation, business setup, and our services. Can't find what you're looking for? Contact us for personalized assistance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for answers..."
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Most Popular Questions
            </h2>
            <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Quick answers to the questions we hear most often
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {popularQuestions.map((faq, index) => (
              <Card key={index} className="trust-shadow border-0">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-[family-name:var(--font-dm-sans)] text-base">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Find detailed answers organized by topic
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    {category.name}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="trust-shadow border-0">
                      <CardHeader>
                        <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-lg">
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed">
                          {faq.answer}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-12 border border-accent/10">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-[family-name:var(--font-dm-sans)]">
              Our expert team is here to help. Get personalized answers to your specific questions with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="faq-cta"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Get Free Consultation
              </ContactButton>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-[family-name:var(--font-dm-sans)]">
              Response within 2 hours • No obligation • Expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <StandardFooter />
    </div>
  )
}
