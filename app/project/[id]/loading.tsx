import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Back Navigation Skeleton */}
      <div className="container mx-auto px-4 py-4">
        <Skeleton className="h-6 w-32" />
      </div>

      {/* Hero Section Skeleton */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image Gallery Skeleton */}
          <div className="lg:col-span-2">
            <Skeleton className="w-full h-96 lg:h-[500px] rounded-2xl" />

            {/* Thumbnail Gallery Skeleton */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[...Array(8)].map((_, index) => (
                <Skeleton key={index} className="w-full h-20 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Skeleton className="w-20 h-15" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>

                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-32 mb-4" />
                <Skeleton className="h-8 w-40 mb-4" />

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index}>
                      <Skeleton className="h-3 w-16 mb-1" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                <Skeleton className="h-6 w-32 bg-white/20" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className="h-10 w-full" />
                  ))}
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-6 gap-2 mb-8 bg-white border-2 border-gray-200 rounded-xl p-1">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-10 rounded-lg" />
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="space-y-8">
          <Card className="border-2 border-white bg-white shadow-lg">
            <CardHeader>
              <Skeleton className="h-8 w-64" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <Skeleton key={index} className="h-16 rounded-xl" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-gradient-to-r from-brand-green to-brand-dark-green py-12">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-96 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-8 bg-white/20" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-64 bg-white/20" />
            <Skeleton className="h-12 w-64 bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
}
