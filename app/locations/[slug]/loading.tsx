import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LocationDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream/20 to-white">
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-r from-brand-dark-green to-brand-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Skeleton className="h-6 w-48 mb-4 bg-white/20" />
            <Skeleton className="h-12 w-96 mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full max-w-2xl mb-8 bg-white/20" />

            {/* Quick Stats Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-20 mx-auto mb-2 bg-white/20" />
                  <Skeleton className="h-4 w-16 mx-auto bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Market Trends Skeleton */}
        <section className="mb-16">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="border-brand-green/20">
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-40 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Properties Grid Skeleton */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="border-brand-green/20">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-8 w-24 mb-3" />
                  <Skeleton className="h-4 w-20 mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}