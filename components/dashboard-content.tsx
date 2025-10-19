"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Plus, CreditCard, FileText, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { signOut } from "@/lib/actions"
import Link from "next/link"

interface DashboardContentProps {
  user: any
  profile: any
  orders: any[]
  packages: any[]
}

export default function DashboardContent({ user, profile, orders, packages }: DashboardContentProps) {

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-blue-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
      case "processing":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "pending":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-300">Welcome back, {profile?.full_name || user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300">
                ← Back to Home
              </Link>
              <form action={signOut}>
                <Button
                  type="submit"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger value="orders" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
              My Orders
            </TabsTrigger>
            <TabsTrigger value="packages" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
              Order New Package
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Your Orders</h2>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                {orders.length} Total Orders
              </Badge>
            </div>

            {orders.length === 0 ? (
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Orders Yet</h3>
                  <p className="text-gray-300 mb-4">Start your LLC formation journey today!</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Order Your First Package
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {orders.map((order) => (
                  <Card key={order.id} className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white">{order.packages?.name}</CardTitle>
                          <CardDescription className="text-gray-300">
                            Order #{order.id.slice(0, 8)} • {new Date(order.created_at).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(order.status)}
                          <Badge className={getStatusColor(order.status)}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Business Name</p>
                          <p className="text-white">{order.business_name || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">State</p>
                          <p className="text-white">{order.state || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Total Amount</p>
                          <p className="text-white font-semibold">${order.total_amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Payment Status</p>
                          <Badge
                            className={
                              order.payment_status === "paid"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }
                          >
                            {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="packages" className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Available Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-emerald-500/30 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-300">{pkg.description}</CardDescription>
                    <div className="text-2xl font-bold text-emerald-400">${pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features?.map((feature: string, index: number) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription className="text-gray-300">Manage your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Full Name</p>
                    <p className="text-white">{profile?.full_name || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white">{profile?.phone || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Member Since</p>
                    <p className="text-white">{new Date(user.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
