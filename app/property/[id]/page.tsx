"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Share2,
  Heart,
  Camera,
  Car,
  Zap,
  Droplets,
  Wifi,
  Shield,
  TreePine,
  Eye,
  Calendar,
  Star,
  CheckCircle,
  ArrowLeft,
  Download,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Define a type for the amenity object
interface Amenity {
  name: string
  // Add other properties if they exist, e.g., 'icon': string
}

const amenityIcons = {
  Car: Car,
  Zap: Zap,
  Droplets: Droplets,
  Wifi: Wifi,
  Shield: Shield,
  TreePine: TreePine,
}

export default function PropertyPage() {
  const params = useParams()
  const id = params?.id as string

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://nashiksq.wtdemo.in/api/property/${id}`)
        if (!res.ok) throw new Error(`Failed to fetch property with ID ${id}`)

        const data = await res.json()
        setProperty(data.data)
      } catch (error) {
        console.error("Error fetching property:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchData()
  }, [id])

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  if (!property)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No property found</p>
      </div>
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream/30 via-white to-brand-green/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/properties"
            className="inline-flex items-center text-brand-green hover:text-brand-dark-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </div>

        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-brand-green transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/properties" className="hover:text-brand-green transition-colors">
            Properties
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand-dark-green font-medium">{property.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {property.isVerified && (
                      <Badge className="bg-brand-green/10 text-brand-green border-brand-green/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {property.isFeatured && (
                      <Badge className="bg-gradient-to-r from-brand-brown to-brand-dark-green text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline" className="border-brand-green/30 text-brand-dark-green">
                      {property.type}
                    </Badge>
                  </div>

                  <h1 className="text-3xl font-bold text-brand-dark-green mb-3">{property.title}</h1>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-5 h-5 mr-2 text-brand-green" />
                    <span className="text-lg">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{property.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Posted {property.posted}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>
                        {property.rating} ({property.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Property ID:{" "}
                    <span className="font-mono text-brand-dark-green">{property.propertyCode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-green/30 hover:bg-brand-green/5 bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-green/30 hover:bg-brand-green/5 bg-transparent"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-green/30 hover:bg-brand-green/5 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Brochure
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-brand-green/5 to-brand-cream/30 rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-brand-dark-green">{property.price}</span>
                  <div className="text-gray-600">
                    <div className="text-sm">Price per sq ft</div>
                    <div className="font-semibold">₹5,417</div>
                  </div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl font-bold text-brand-green">{property.area}</div>
                  <div className="text-sm text-gray-600">Built-up Area</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              {property.images && property.images.length > 0 && (
                <>
                  <div className="relative mb-6">
                    <Image
                      src={property.images[currentImageIndex]}
                      alt={`Property image ${currentImageIndex + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        className="bg-white/90 backdrop-blur-sm text-brand-dark-green hover:bg-white"
                        size="sm"
                        onClick={() => setShowAllImages(true)}
                      >
                        <Camera className="w-4 h-4 mr-1" />
                        View All ({property.images.length})
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {property.images.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-3">
                    {property.images.slice(0, 6).map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative overflow-hidden rounded-lg transition-all ${
                          currentImageIndex === index
                            ? "ring-2 ring-brand-green shadow-lg"
                            : "hover:ring-1 hover:ring-brand-green/50"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={100}
                          height={80}
                          className="w-full h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              <h2 className="text-2xl font-bold text-brand-dark-green mb-6">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features &&
                  property.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-brand-green/5 rounded-lg border border-brand-green/10"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                      <span className="font-medium text-brand-dark-green">{feature}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              <h2 className="text-2xl font-bold text-brand-dark-green mb-6">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              <h2 className="text-2xl font-bold text-brand-dark-green mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.specifications &&
                  Object.entries(property.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-brand-cream/20 to-brand-green/5 rounded-lg"
                    >
                      <span className="font-semibold text-brand-dark-green">{key}</span>
                      <span className="text-gray-700 font-medium">{value as any}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-green/10">
              <h2 className="text-2xl font-bold text-brand-dark-green mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities &&
                  property.amenities.map((amenity: Amenity, index: number) => {
                    const IconComponent = amenityIcons[amenity.name as keyof typeof amenityIcons]
                    return (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-br from-brand-green/5 to-brand-cream/20 rounded-lg border border-brand-green/10 hover:shadow-md transition-shadow"
                      >
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-brand-green mr-3" />
                        )}
                        <span className="font-medium text-brand-dark-green">{amenity.name}</span>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-brand-green/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Interested in this property?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="border-brand-green/30 focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        className="border-brand-green/30 focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="border-brand-green/30 focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="I am interested in this property. Please contact me with more details."
                        rows={4}
                        className="border-brand-green/30 focus:border-brand-green"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green">
                      Send Inquiry
                    </Button>
                  </form>
                  <Separator className="my-6" />
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Or call us directly</p>
                    <div className="flex items-center justify-center space-x-2 text-brand-green">
                      <Phone className="w-5 h-5" />
                      <span className="font-bold text-lg">+91 98765 43210</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-3 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-green/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-brand-cream/50 to-brand-green/10">
                  <CardTitle className="text-brand-dark-green">Property Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center p-3 bg-brand-green/5 rounded-lg">
                    <span className="text-gray-700">Property Type</span>
                    <span className="font-bold text-brand-dark-green">{property.type}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brand-green/5 rounded-lg">
                    <span className="text-gray-700">Area</span>
                    <span className="font-bold text-brand-dark-green">{property.area}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-green/10 to-brand-cream/20 rounded-lg">
                    <span className="text-gray-700">Price</span>
                    <span className="font-bold text-brand-green text-lg">{property.price}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brand-green/5 rounded-lg">
                    <span className="text-gray-700">Location</span>
                    <span className="font-bold text-brand-dark-green">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brand-green/5 rounded-lg">
                    <span className="text-gray-700">Property ID</span>
                    <span className="font-mono font-bold text-brand-dark-green">
                      {property.propertyCode}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-green/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-brand-cream/50 to-brand-green/10">
                  <CardTitle className="text-brand-dark-green">Similar Properties</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <Link key={item} href={`/property/${item + 1}`} className="block">
                        <div className="flex space-x-3 hover:bg-brand-green/5 p-3 rounded-lg transition-colors border border-transparent hover:border-brand-green/20">
                          <Image
                            src={`/placeholder.svg?height=60&width=80&text=Property+${item}`}
                            alt={`Similar property ${item}`}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-brand-dark-green text-sm line-clamp-2 mb-1">
                              {item === 1
                                ? "2BHK Flat in Nashik Road"
                                : item === 2
                                ? "Plot in Trimbak Area"
                                : "Bungalow in Gangapur Road"}
                            </h4>
                            <p className="text-brand-green font-bold">
                              {item === 1 ? "₹45,00,000" : item === 2 ? "₹18,00,000" : "₹95,00,000"}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item === 1 ? "900 sq ft" : item === 2 ? "1500 sq ft" : "2500 sq ft"}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}