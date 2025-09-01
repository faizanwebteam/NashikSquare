import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function BungalowDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery Skeleton */}
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <Skeleton className="w-full h-96" />
              <div className="p-4 bg-white/80 backdrop-blur-sm">
                <div className="flex gap-2">
                  {[...Array(6)].map((_, index) => (
                    <Skeleton key={index} className="w-20 h-16 rounded" />
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Header Skeleton */}
            <Card className="mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-24" />
                </div>

                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-5 w-1/2 mb-4" />
                <Skeleton className="h-6 w-1/3 mb-6" />
                <Skeleton className="h-10 w-1/2 mb-6" />

                {/* Quick Stats Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="p-3 bg-brand-cream/30 rounded-lg">
                      <Skeleton className="h-5 w-5 mb-2" />
                      <Skeleton className="h-5 w-16 mb-1" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>

                {/* Action Buttons Skeleton */}
                <div className="flex flex-wrap gap-3">
                  {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} className="h-10 w-32" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs Skeleton */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className="h-10 w-24" />
                  ))}
                </div>

                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-6 w-1/3" />
                  <div className="grid grid-cols-2 gap-3">
                    {[...Array(6)].map((_, index) => (
                      <Skeleton key={index} className="h-8 w-full" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Contact Form Skeleton */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                <Skeleton className="h-6 w-48 mx-auto bg-white/20" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} className="h-10 w-full" />
                  ))}
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Skeleton */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} className="h-10 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Property Summary Skeleton */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-brand-cream/30 rounded">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Similar Properties Skeleton */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-brand-cream/20 rounded-lg">
                    <Skeleton className="w-16 h-16 rounded" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-3/4" />
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
