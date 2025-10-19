import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Building,
  DollarSign,
  Shield,
  FileText
} from "lucide-react"

export const metadata = {
  title: "LLC Formation Blog & Resources - Mindscape Global Formations",
  description: "Expert insights, guides, and resources for LLC formation, business setup, and entrepreneurship."
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to LLC Formation in 2025",
      excerpt: "Everything you need to know about forming an LLC, from choosing your state to getting your first customer.",
      author: "Sarah Johnson",
      date: "2025-10-01",
      readTime: "8 min read",
      category: "LLC Formation",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      featured: true,
      link: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
      tags: ["LLC", "Formation", "Guide", "2025"]
    },
    {
      id: 2,
      title: "Wyoming vs Delaware vs Nevada: Which State is Best for Your LLC?",
      excerpt: "A detailed comparison of the most popular states for LLC formation, including tax implications and business benefits.",
      author: "Michael Chen",
      date: "2025-09-20",
      readTime: "6 min read",
      category: "State Selection",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nolo.com/legal-encyclopedia/llc-formation-which-state.html",
      tags: ["Wyoming", "Delaware", "Nevada", "Comparison"]
    },
    {
      id: 3,
      title: "How to Get Your EIN (Federal Tax ID) in 2025",
      excerpt: "Step-by-step guide to obtaining your Employer Identification Number and what you need it for.",
      author: "Emily Rodriguez",
      date: "2025-09-10",
      readTime: "5 min read",
      category: "Tax & Legal",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
      tags: ["EIN", "Tax ID", "IRS", "Business"]
    },
    {
      id: 4,
      title: "LLC vs Corporation: Which Business Structure is Right for You?",
      excerpt: "Compare LLCs and Corporations to make the best decision for your business structure and goals.",
      author: "David Kim",
      date: "2025-08-28",
      readTime: "7 min read",
      category: "Business Structure",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.legalzoom.com/articles/llc-vs-corporation-which-is-right-for-your-business",
      tags: ["LLC", "Corporation", "Business Structure"]
    },
    {
      id: 5,
      title: "How to Open a Business Bank Account for Your LLC",
      excerpt: "Complete guide to opening business bank accounts, including requirements and best practices.",
      author: "Lisa Thompson",
      date: "2025-08-15",
      readTime: "4 min read",
      category: "Banking",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nerdwallet.com/article/small-business/how-to-open-business-bank-account",
      tags: ["Banking", "Business Account", "LLC"]
    },
    {
      id: 6,
      title: "LLC Tax Benefits and Deductions You Need to Know",
      excerpt: "Maximize your LLC tax benefits with these essential deductions and tax planning strategies.",
      author: "Robert Martinez",
      date: "2025-08-01",
      readTime: "6 min read",
      category: "Tax & Legal",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nerdwallet.com/article/small-business/llc-tax-benefits",
      tags: ["Tax", "Deductions", "LLC", "Benefits"]
    },
    {
      id: 7,
      title: "How to Maintain Your LLC: Annual Reports, Compliance & More",
      excerpt: "Learn the ongoing requirements for keeping your LLC in good standing, including annual reports, registered agent, and compliance tips.",
      author: "Priya Patel",
      date: "2025-07-20",
      readTime: "7 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nolo.com/legal-encyclopedia/llc-annual-report.html",
      tags: ["LLC", "Compliance", "Annual Report"]
    },
    {
      id: 8,
      title: "Single-Member vs Multi-Member LLCs: Pros, Cons & Taxation",
      excerpt: "Understand the differences between single-member and multi-member LLCs, including management, liability, and tax treatment.",
      author: "James Lee",
      date: "2025-07-10",
      readTime: "6 min read",
      category: "LLC Formation",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.legalzoom.com/articles/single-member-llc-vs-multi-member-llc",
      tags: ["LLC", "Single-Member", "Multi-Member", "Tax"]
    },
    {
      id: 9,
      title: "Common Mistakes When Forming an LLC (and How to Avoid Them)",
      excerpt: "Avoid these frequent pitfalls when starting your LLC, from paperwork errors to missing deadlines.",
      author: "Ava Williams",
      date: "2025-06-30",
      readTime: "5 min read",
      category: "LLC Formation",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nerdwallet.com/article/small-business/common-llc-mistakes",
      tags: ["LLC", "Mistakes", "Formation"]
    },
    {
      id: 10,
      title: "How to Change Your LLC’s Name or Address",
      excerpt: "A step-by-step guide to amending your LLC’s articles, updating your business name, or changing your registered office.",
      author: "Sophia Brown",
      date: "2025-06-15",
      readTime: "4 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      featured: false,
      link: "https://www.nolo.com/legal-encyclopedia/changing-llc-name-address.html",
      tags: ["LLC", "Amendment", "Name Change"]
    }
  ]

  const categories = [
    { name: "All", count: blogPosts.length, icon: BookOpen },
    { name: "LLC Formation", count: blogPosts.filter(p => p.category === "LLC Formation").length, icon: Building },
    { name: "State Selection", count: blogPosts.filter(p => p.category === "State Selection").length, icon: TrendingUp },
    { name: "Tax & Legal", count: blogPosts.filter(p => p.category === "Tax & Legal").length, icon: Shield },
    { name: "Business Structure", count: blogPosts.filter(p => p.category === "Business Structure").length, icon: FileText },
    { name: "Banking", count: blogPosts.filter(p => p.category === "Banking").length, icon: DollarSign },
    { name: "Compliance", count: blogPosts.filter(p => p.category === "Compliance").length, icon: Shield }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <StandardNavigation currentPage="Blog" />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Blog CTA removed - Contact CTA not needed at top of blog page */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-white">Blog & Resources</Badge>
            <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Expert Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
              Stay informed with our latest guides, insights, and resources for LLC formation and business success.
            </p>
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-blue-800">
                Featured Article
              </h2>
              <Card className="trust-shadow border-0 overflow-hidden bg-white">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover rounded-l-xl"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-blue-600 text-blue-700">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-blue-700">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-4 font-[family-name:var(--font-space-grotesk)] text-blue-900">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6 font-[family-name:var(--font-dm-sans)] text-slate-700">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-blue-700">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="trust-shadow border-0 hover:shadow-lg transition-all duration-300 group bg-white">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-blue-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)] group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-[family-name:var(--font-dm-sans)] text-slate-700">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 border-blue-600 text-blue-700">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="trust-shadow border-0 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 font-[family-name:var(--font-dm-sans)]">
                  Get the latest LLC formation tips, business insights, and exclusive resources delivered to your inbox.
                </p>
                      <section className="mt-20 mb-12">
        <div className="max-w-5xl mx-auto rounded-2xl bg-white/70 p-10 md:p-16 shadow-sm border border-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-[family-name:var(--font-space-grotesk)] text-blue-900">
            Stay Updated
          </h2>
          <p className="text-center text-lg mb-8 font-[family-name:var(--font-dm-sans)] text-slate-700">
            Get the latest LLC formation tips, business insights, and exclusive resources delivered to your inbox.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-96 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white text-slate-900 placeholder:text-slate-400"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
              disabled
            >
              Subscribe
            </button>
          </form>
          <p className="text-center text-xs mt-4 text-slate-500">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  <StandardFooter />
  {/* Popup Contact Form will be rendered inside ClientOnly BlogContactCTA */}
    </>
  )
}
