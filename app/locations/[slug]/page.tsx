import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  TrendingUp,
  Home,
  Building2,
  Car,
  Train,
  Plane,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Trees,
  Wifi,
  Zap,
  Droplets,
  Shield,
  Star,
  Heart,
  Share2,
  Phone,
  Eye,
  Users,
  IndianRupee,
  CheckCircle,
  ArrowRight,
  Navigation,
} from "lucide-react"

// This would typically come from your API/database
async function getLocationData(slug: string) {
  // Mock data - replace with actual API call
  return {
    name: "Nashik Road",
    slug: "nashik-road",
    description:
      "Nashik Road is one of the most sought-after residential areas in Nashik, known for its excellent connectivity, modern infrastructure, and peaceful environment.",
    heroImage: "/placeholder.svg?height=400&width=800",
    stats: {
      avgPrice: "₹4,500",
      priceGrowth: 12.5,
      totalProperties: 450,
      totalProjects: 25,
      population: "2.5 Lakh",
      pincode: "422101",
    },
    marketTrends: {
      residential: { current: 4500, growth: 12.5 },
      commercial: { current: 8500, growth: 8.2 },
      rental: { current: 15000, growth: 15.3 },
    },
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = await getLocationData(params.slug)

  return {
    title: `${location.name} Properties for Sale & Rent | NasikSquare.com`,
    description: `Find best properties in ${location.name}, Nashik. Explore flats, apartments, villas & plots for sale and rent. Get latest price trends, amenities & connectivity details.`,
    keywords: `${location.name} properties, ${location.name} real estate, flats in ${location.name}, apartments ${location.name}, ${location.name} property prices`,
    openGraph: {
      title: `${location.name} Properties - Buy, Sell & Rent | NasikSquare`,
      description: location.description,
      images: [location.heroImage],
    },
  }
}

export default async function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = await getLocationData(params.slug)

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      price: "₹85 Lakh",
      area: "1,250 sq ft",
      type: "Apartment",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      featured: true,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      rating: 4.5,
      views: 245,
    },
    {
      id: 2,
      title: "Modern 2BHK Flat",
      price: "₹65 Lakh",
      area: "950 sq ft",
      type: "Apartment",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      rating: 4.3,
      views: 189,
    },
    {
      id: 3,
      title: "Spacious 4BHK Villa",
      price: "₹1.2 Cr",
      area: "2,100 sq ft",
      type: "Villa",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      featured: true,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      rating: 4.7,
      views: 312,
    },
  ]

  const projects = [
    {
      id: 1,
      name: "Pride World City",
      developer: "Pride Group",
      logo: "/placeholder.svg?height=40&width=120",
      image: "/placeholder.svg?height=200&width=300",
      priceRange: "₹45L - ₹1.2Cr",
      propertyTypes: ["2BHK", "3BHK", "4BHK", "Villas"],
      totalUnits: 850,
      possession: "Dec 2025",
      status: "Under Construction",
      progress: 65,
      rating: 4.6,
      reviews: 124,
      highlights: ["Clubhouse", "Swimming Pool", "Gym", "Kids Play Area"],
    },
    {
      id: 2,
      name: "Godrej Eternia",
      developer: "Godrej Properties",
      logo: "/placeholder.svg?height=40&width=120",
      image: "/placeholder.svg?height=200&width=300",
      priceRange: "₹55L - ₹95L",
      propertyTypes: ["2BHK", "3BHK"],
      totalUnits: 420,
      possession: "Ready to Move",
      status: "Ready to Move",
      progress: 100,
      rating: 4.4,
      reviews: 89,
      highlights: ["RERA Approved", "Vastu Compliant", "Premium Amenities"],
    },
  ]

  const amenities = [
    { name: "Schools", icon: GraduationCap, count: 15, description: "Top-rated schools within 2km" },
    { name: "Hospitals", icon: Hospital, count: 8, description: "Multi-specialty hospitals nearby" },
    { name: "Shopping", icon: ShoppingCart, count: 12, description: "Malls and shopping centers" },
    { name: "Parks", icon: Trees, count: 6, description: "Green spaces and parks" },
    { name: "Banks", icon: Building2, count: 20, description: "Banks and ATMs" },
    { name: "Restaurants", icon: Users, count: 35, description: "Dining and food options" },
  ]

  const connectivity = [
    { mode: "Railway", icon: Train, distance: "2.5 km", description: "Nashik Road Railway Station" },
    { mode: "Airport", icon: Plane, distance: "8 km", description: "Ozar Airport" },
    { mode: "Highway", icon: Car, distance: "1 km", description: "Mumbai-Nashik Highway" },
    { mode: "Bus Stand", icon: Car, distance: "3 km", description: "Central Bus Stand" },
  ]

  const infrastructure = [
    { name: "Water Supply", icon: Droplets, status: "24/7", quality: "Excellent" },
    { name: "Electricity", icon: Zap, status: "Reliable", quality: "Good" },
    { name: "Internet", icon: Wifi, status: "High Speed", quality: "Excellent" },
    { name: "Security", icon: Shield, status: "Gated", quality: "Good" },
  ]

  const nearbyLocations = [
    { name: "Nashik City", distance: "12 km", travelTime: "25 min" },
    { name: "Deolali", distance: "8 km", travelTime: "18 min" },
    { name: "Satpur", distance: "15 km", travelTime: "30 min" },
    { name: "Panchavati", distance: "18 km", travelTime: "35 min" },
  ]

  const investmentHighlights = [
    { title: "Price Appreciation", value: "12.5%", description: "Annual growth in last 3 years" },
    { title: "Rental Yield", value: "4.2%", description: "Average rental returns" },
    { title: "Capital Growth", value: "₹500/sq ft", description: "Increase in last year" },
    { title: "Demand Index", value: "High", description: "Strong buyer interest" },
  ]

  const faqs = [
    {
      question: "What is the average property price in Nashik Road?",
      answer:
        "The average property price in Nashik Road ranges from ₹4,000 to ₹5,500 per sq ft, depending on the specific location and amenities.",
    },
    {
      question: "How is the connectivity from Nashik Road?",
      answer:
        "Nashik Road offers excellent connectivity with the railway station just 2.5 km away, Mumbai-Nashik Highway at 1 km, and Ozar Airport at 8 km distance.",
    },
    {
      question: "What are the best projects in Nashik Road?",
      answer:
        "Some of the top projects include Pride World City, Godrej Eternia, and Kalpataru Riverside, offering modern amenities and good connectivity.",
    },
    {
      question: "Is Nashik Road good for investment?",
      answer:
        "Yes, Nashik Road shows strong investment potential with 12.5% annual price appreciation and good rental yields of around 4.2%.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream/20 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-dark-green to-brand-green text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-brand-cream">Nashik, Maharashtra</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">{location.name}</h1>
            <p className="text-xl mb-8 text-brand-cream/90 leading-relaxed">{location.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cream">{location.stats.avgPrice}</div>
                <div className="text-sm opacity-90">Avg Price/sq ft</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cream flex items-center justify-center gap-1">
                  <TrendingUp className="h-6 w-6" />
                  {location.stats.priceGrowth}%
                </div>
                <div className="text-sm opacity-90">Price Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cream">{location.stats.totalProperties}</div>
                <div className="text-sm opacity-90">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cream">{location.stats.totalProjects}</div>
                <div className="text-sm opacity-90">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Market Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Market Trends & Analysis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-brand-dark-green flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Residential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-brand-green mb-2">
                  ₹{location.marketTrends.residential.current}/sq ft
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">+{location.marketTrends.residential.growth}%</span>
                  <span className="text-gray-600">YoY Growth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-brand-dark-green flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Commercial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-brand-green mb-2">
                  ₹{location.marketTrends.commercial.current}/sq ft
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">+{location.marketTrends.commercial.growth}%</span>
                  <span className="text-gray-600">YoY Growth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-brand-dark-green flex items-center gap-2">
                  <IndianRupee className="h-5 w-5" />
                  Rental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-brand-green mb-2">
                  ₹{location.marketTrends.rental.current}/month
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">+{location.marketTrends.rental.growth}%</span>
                  <span className="text-gray-600">YoY Growth</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Properties & Projects Tabs */}
        <section className="mb-16">
          <Tabs defaultValue="properties" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="properties"
                className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
              >
                Featured Properties
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
              >
                Top Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="properties">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="group hover:shadow-xl transition-all duration-300 border-brand-green/20"
                  >
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {property.verified && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {property.featured && (
                          <Badge className="bg-brand-brown hover:bg-brand-brown/90">Featured</Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {property.views}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-brand-dark-green">{property.title}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{property.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl font-bold text-brand-green">{property.price}</div>
                        <Badge variant="outline" className="border-brand-green text-brand-green">
                          {property.type}
                        </Badge>
                      </div>

                      <div className="text-gray-600 mb-4">{property.area}</div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Home className="h-4 w-4" />
                          {property.bedrooms} Bed
                        </span>
                        <span className="flex items-center gap-1">
                          <Droplets className="h-4 w-4" />
                          {property.bathrooms} Bath
                        </span>
                        <span className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          {property.parking} Parking
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-brand-green hover:bg-brand-dark-green">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-xl transition-all duration-300 border-brand-green/20"
                  >
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`${
                            project.status === "Ready to Move"
                              ? "bg-green-500"
                              : project.status === "Under Construction"
                                ? "bg-blue-500"
                                : "bg-orange-500"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <img src={project.logo || "/placeholder.svg"} alt={project.developer} className="h-6" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-brand-dark-green mb-1">{project.name}</h3>
                          <p className="text-gray-600">by {project.developer}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{project.rating}</span>
                          <span className="text-gray-500 text-sm">({project.reviews})</span>
                        </div>
                      </div>

                      <div className="text-2xl font-bold text-brand-green mb-3">{project.priceRange}</div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.propertyTypes.map((type) => (
                          <Badge key={type} variant="outline" className="border-brand-green text-brand-green">
                            {type}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Total Units:</span>
                          <span className="font-semibold ml-2">{project.totalUnits}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Possession:</span>
                          <span className="font-semibold ml-2">{project.possession}</span>
                        </div>
                      </div>

                      {project.status === "Under Construction" && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Construction Progress</span>
                            <span className="font-semibold">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="font-semibold text-brand-dark-green mb-2">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-brand-green hover:bg-brand-dark-green">
                          <Phone className="h-4 w-4 mr-2" />
                          Enquire Now
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                        >
                          View Project
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Amenities & Infrastructure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Amenities & Infrastructure</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nearby Amenities */}
            <Card className="border-brand-green/20">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Nearby Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-4 p-3 rounded-lg bg-brand-cream/20 hover:bg-brand-cream/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-brand-green/10">
                        <amenity.icon className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-brand-dark-green">{amenity.name}</div>
                        <div className="text-sm text-gray-600">{amenity.description}</div>
                      </div>
                      <Badge variant="outline" className="border-brand-green text-brand-green">
                        {amenity.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card className="border-brand-green/20">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {infrastructure.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 p-3 rounded-lg bg-brand-cream/20 hover:bg-brand-cream/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-brand-green/10">
                        <item.icon className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-brand-dark-green">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.status}</div>
                      </div>
                      <Badge
                        variant={item.quality === "Excellent" ? "default" : "secondary"}
                        className={item.quality === "Excellent" ? "bg-brand-green" : ""}
                      >
                        {item.quality}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Connectivity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Connectivity & Transportation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectivity.map((item) => (
              <Card key={item.mode} className="text-center border-brand-green/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-brand-green/10 w-fit mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="font-semibold text-brand-dark-green mb-2">{item.mode}</h3>
                  <div className="text-2xl font-bold text-brand-green mb-1">{item.distance}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Investment Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((item) => (
              <Card key={item.title} className="text-center border-brand-green/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brand-green mb-2">{item.value}</div>
                  <h3 className="font-semibold text-brand-dark-green mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Nearby Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nearbyLocations.map((location) => (
              <Card
                key={location.name}
                className="border-brand-green/20 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-brand-dark-green">{location.name}</h3>
                      <p className="text-sm text-gray-600">{location.distance}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-brand-green">{location.travelTime}</div>
                      <Navigation className="h-4 w-4 text-gray-400 ml-auto mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-brand-green/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark-green mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-green to-brand-dark-green rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in {location.name}?</h2>
          <p className="text-xl mb-8 text-brand-cream/90">Get expert guidance and find your perfect property today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-green hover:bg-brand-cream">
              <Phone className="h-5 w-5 mr-2" />
              Call Expert
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
            >
              Schedule Site Visit
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
