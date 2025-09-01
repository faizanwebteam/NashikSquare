"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Search,
  Grid,
  List,
  SlidersHorizontal,
  Building2,
  Users,
  Calendar,
  Star,
  Home,
  TreePine,
  Car,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment in Nashik Road",
    type: "Flat",
    location: "Nashik Road, Nashik",
    price: "₹65,00,000",
    area: "1200 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=3BHK+Apartment",
    features: ["3 BHK", "2 Bathrooms", "Parking", "Lift", "Gym"],
    purpose: "Buy",
    posted: "2 days ago",
    isVerified: true,
  },
  {
    id: 2,
    title: "Corner Plot with Clear Title in Trimbak",
    type: "Plot",
    location: "Trimbak, Nashik",
    price: "₹18,00,000",
    area: "1800 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=Corner+Plot+Trimbak",
    features: ["Corner Plot", "Clear Title", "Road Facing", "Residential Zone"],
    purpose: "Buy",
    posted: "1 week ago",
    isVerified: true,
  },
  {
    id: 3,
    title: "Spacious Bungalow with Garden",
    type: "Bungalow",
    location: "Gangapur Road, Nashik",
    price: "₹95,00,000",
    area: "2800 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=Bungalow+Garden",
    features: ["4 BHK", "Garden", "Car Parking", "Independent", "Terrace"],
    purpose: "Buy",
    posted: "3 days ago",
    isVerified: true,
  },
  {
    id: 4,
    title: "Industrial Shed in MIDC Sinnar",
    type: "Commercial",
    location: "MIDC Sinnar, Nashik",
    price: "₹2,50,00,000",
    area: "8000 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Shed+MIDC",
    features: [
      "Industrial Zone",
      "Power Connection",
      "Wide Road",
      "Loading Area",
    ],
    purpose: "Buy",
    posted: "5 days ago",
    isVerified: true,
  },
  {
    id: 5,
    title: "2BHK Flat for Rent in City Center",
    type: "Flat",
    location: "City Center, Nashik",
    price: "₹15,000/month",
    area: "900 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=2BHK+Rent+City",
    features: ["2 BHK", "Furnished", "Parking", "Security"],
    purpose: "Rent",
    posted: "1 day ago",
    isVerified: true,
  },
  {
    id: 6,
    title: "Commercial Office Space",
    type: "Commercial",
    location: "College Road, Nashik",
    price: "₹25,000/month",
    area: "1500 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=Office+Space+College",
    features: ["Office Space", "AC", "Parking", "Lift"],
    purpose: "Rent",
    posted: "4 days ago",
    isVerified: true,
  },
];

const projects = [
  {
    id: 1,
    name: "Pride World City",
    developer: "Pride Group",
    location: "Loni Kalbhor, Nashik",
    priceRange: "₹45L - ₹1.2Cr",
    image: "/placeholder.svg?height=400&width=600&text=Pride+World+City",
    logo: "/placeholder.svg?height=80&width=120&text=Pride+Logo",
    totalUnits: 850,
    possession: "Dec 2025",
    rating: 4.5,
    propertyTypes: [
      "2 BHK Apartments",
      "3 BHK Apartments",
      "4 BHK Villas",
      "Plots",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Club House",
      "Garden",
      "Security",
      "Parking",
    ],
    description:
      "A premium integrated township with world-class amenities and modern infrastructure.",
    highlights: [
      "RERA Approved",
      "80% Open Space",
      "24/7 Security",
      "School & Hospital",
    ],
    status: "Under Construction",
    completionPercentage: 65,
  },
  {
    id: 2,
    name: "Godrej Eternia",
    developer: "Godrej Properties",
    location: "Nashik Road, Nashik",
    priceRange: "₹55L - ₹95L",
    image: "/placeholder.svg?height=400&width=600&text=Godrej+Eternia",
    logo: "/placeholder.svg?height=80&width=120&text=Godrej+Logo",
    totalUnits: 420,
    possession: "Mar 2026",
    rating: 4.7,
    propertyTypes: ["2 BHK Apartments", "3 BHK Apartments", "Penthouses"],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Yoga Deck",
      "Kids Play Area",
      "Jogging Track",
    ],
    description:
      "Luxury apartments with premium finishes and modern amenities in prime location.",
    highlights: [
      "Premium Location",
      "Branded Fittings",
      "Vastu Compliant",
      "Green Building",
    ],
    status: "New Launch",
    completionPercentage: 25,
  },
  {
    id: 3,
    name: "Kalpataru Riverside",
    developer: "Kalpataru Group",
    location: "Gangapur Road, Nashik",
    priceRange: "₹75L - ₹1.8Cr",
    image: "/placeholder.svg?height=400&width=600&text=Kalpataru+Riverside",
    logo: "/placeholder.svg?height=80&width=120&text=Kalpataru+Logo",
    totalUnits: 320,
    possession: "Jun 2024",
    rating: 4.3,
    propertyTypes: ["3 BHK Apartments", "4 BHK Apartments", "Duplex Villas"],
    amenities: [
      "River View",
      "Boat Club",
      "Spa",
      "Tennis Court",
      "Amphitheater",
    ],
    description:
      "Riverside luxury living with panoramic views and exclusive amenities.",
    highlights: [
      "River Facing",
      "Luxury Finishes",
      "Exclusive Club",
      "Landscaped Gardens",
    ],
    status: "Ready to Move",
    completionPercentage: 100,
  },
  {
    id: 4,
    name: "Mahindra Lifespaces Eden",
    developer: "Mahindra Lifespaces",
    location: "Trimbak Road, Nashik",
    priceRange: "₹35L - ₹85L",
    image: "/placeholder.svg?height=400&width=600&text=Mahindra+Eden",
    logo: "/placeholder.svg?height=80&width=120&text=Mahindra+Logo",
    totalUnits: 650,
    possession: "Sep 2025",
    rating: 4.4,
    propertyTypes: ["1 BHK Apartments", "2 BHK Apartments", "3 BHK Apartments"],
    amenities: [
      "Central Park",
      "Community Hall",
      "Gym",
      "Swimming Pool",
      "Kids Area",
    ],
    description:
      "Affordable luxury homes with sustainable design and modern amenities.",
    highlights: [
      "Eco-Friendly",
      "Affordable Luxury",
      "Good Connectivity",
      "Investment Potential",
    ],
    status: "Under Construction",
    completionPercentage: 45,
  },
];

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState("properties");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPurpose, setSelectedPurpose] = useState("all");

  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [property, setProperty] = useState<any | null>(null);

  const propertyTypes = ["Flat", "Plot", "Bungalow", "Commercial"];
  

  // Fetch properties from API

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://nashiksq.wtdemo.in/api/all-properties"
        );
        const data = await res.json();

        setProperties(Array.isArray(data.data) ? data.data : []);

        if (id) {
          const found = data.data.find((p: any) => p.id === Number(id));
          setProperty(found || null);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!properties || properties.length === 0) return <p>No properties found</p>;

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    }
  };

  const filteredProperties = properties.filter((property) => {
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(property.type);
    const purposeMatch =
      selectedPurpose === "all" ||
      property.purpose.toLowerCase() === selectedPurpose;
    return typeMatch && purposeMatch;
  });

  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-28 shadow-lg border-2 border-white bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <SlidersHorizontal className="w-6 h-6 text-brand-green" />
                  <h2 className="text-xl font-bold text-brand-dark-gray">
                    Filters
                  </h2>
                </div>

                {property && (
                  <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">
                      {property.title}
                    </h1>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-lg font-semibold">{property.price}</p>

                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Features:</h2>
                      <ul className="list-disc list-inside">
                        {property.features?.map((f: string, i: number) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    {property.amenities && (
                      <div className="mt-4">
                        <h2 className="text-xl font-semibold">Amenities:</h2>
                        <ul className="list-disc list-inside">
                          {property.amenities.map((a: any, i: number) => (
                            <li key={i}>
                              <img
                                src={a.icon}
                                alt={a.name}
                                className="inline w-5 h-5 mr-2"
                              />
                              {a.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mt-6">{property.description}</p>
                  </div>
                )}

                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block text-brand-dark-gray">
                    Search Location
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-brand-green" />
                    <Input
                      placeholder="Enter location..."
                      className="pl-11 border-2 border-gray-200 focus:border-brand-green rounded-xl"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-4 block text-brand-dark-gray">
                    Property Type
                  </label>
                  <div className="space-y-3">
                    {propertyTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-3">
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={(checked) =>
                            handleTypeChange(type, checked as boolean)
                          }
                          className="border-2 border-brand-green data-[state=checked]:bg-brand-green"
                        />
                        <label
                          htmlFor={type}
                          className="text-sm font-medium text-brand-dark-gray cursor-pointer"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block text-brand-dark-gray">
                    Purpose
                  </label>
                  <Select
                    value={selectedPurpose}
                    onValueChange={setSelectedPurpose}
                  >
                    <SelectTrigger className="border-2 border-gray-200 focus:border-brand-green rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <label className="text-sm font-semibold mb-4 block text-brand-dark-gray">
                    Price Range (₹{priceRange[0]} - ₹{priceRange[1]} Lakh)
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>

                <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white mb-3 rounded-xl">
                  Apply Filters
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-xl bg-transparent"
                >
                  Clear All
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Tabs for Properties and Projects */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border-2 border-gray-200 rounded-xl p-1">
                <TabsTrigger
                  value="properties"
                  className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-semibold"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Individual Properties
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-semibold"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Projects
                </TabsTrigger>
              </TabsList>

              {/* Properties Tab Content */}
              <TabsContent value="properties">
                {/* Enhanced Header Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-brand-dark-gray">
                      Properties in Nasik
                    </h1>
                    <p className="text-brand-brown text-lg">
                      {filteredProperties.length} verified properties found
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48 border-2 border-gray-200 focus:border-brand-green rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="area">Area</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                        className={
                          viewMode === "grid"
                            ? "bg-brand-green text-white"
                            : "text-brand-dark-gray"
                        }
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                        className={
                          viewMode === "list"
                            ? "bg-brand-green text-white"
                            : "text-brand-dark-gray"
                        }
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Properties Grid/List */}
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                      : "space-y-6"
                  }
                >
                  {filteredProperties.map((property) => (
                    <Link key={property.id} href={`/property/${property.id}`}>
                      <Card
                        className={`hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-brand-green/30 bg-white ${
                          viewMode === "list" ? "flex flex-row" : ""
                        }`}
                      >
                        <div
                          className={viewMode === "list" ? "w-1/3" : "relative"}
                        >
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={property.title}
                            width={400}
                            height={300}
                            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                              viewMode === "list"
                                ? "w-full h-full rounded-l-lg"
                                : "w-full h-56 rounded-t-lg"
                            }`}
                          />
                          <Badge className="absolute top-3 left-3 bg-brand-green text-white shadow-lg">
                            {property.type}
                          </Badge>
                          {property.isVerified && (
                            <Badge className="absolute top-3 right-3 bg-blue-600 text-white shadow-lg">
                              Verified
                            </Badge>
                          )}
                          {property.purpose === "Rent" && (
                            <Badge className="absolute bottom-3 left-3 bg-yellow-500 text-white shadow-lg">
                              For Rent
                            </Badge>
                          )}
                        </div>
                        <CardContent
                          className={`p-6 ${
                            viewMode === "list" ? "w-2/3" : ""
                          }`}
                        >
                          <h3 className="font-bold mb-3 line-clamp-2 text-brand-dark-gray group-hover:text-brand-green transition-colors text-lg">
                            {property.title}
                          </h3>
                          <div className="flex items-center text-brand-brown mb-3">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{property.location}</span>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold text-brand-green">
                              {property.price}
                            </span>
                            <span className="text-brand-brown font-medium">
                              {property.area}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {property.features ??
                              []
                                .slice(0, 3)
                                .map((feature: any, index: number) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs bg-brand-cream text-brand-brown"
                                  >
                                    {feature}
                                  </Badge>
                                ))}
                          </div>
                          <div className="text-xs text-brand-brown/70">
                            Posted {property.posted}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              {/* Projects Tab Content */}
              <TabsContent value="projects">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2 text-brand-dark-gray">
                    Premium Projects in Nasik
                  </h1>
                  <p className="text-brand-brown text-lg">
                    {projects.length} verified projects by top developers
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`}>
                      <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-brand-green/30 bg-white overflow-hidden">
                        {/* Project Image */}
                        <div className="relative h-64">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              className={`${
                                project.status === "Ready to Move"
                                  ? "bg-green-600"
                                  : project.status === "Under Construction"
                                  ? "bg-yellow-600"
                                  : "bg-blue-600"
                              } text-white shadow-lg`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-semibold">
                                {project.rating}
                              </span>
                            </div>
                          </div>
                          {project.status === "Under Construction" && (
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium text-brand-dark-gray">
                                    Construction Progress
                                  </span>
                                  <span className="text-sm font-bold text-brand-green">
                                    {project.completionPercentage}%
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-brand-green h-2 rounded-full transition-all duration-300"
                                    style={{
                                      width: `${project.completionPercentage}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <CardContent className="p-6">
                          {/* Developer Logo and Name */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Image
                                src={project.logo || "/placeholder.svg"}
                                alt={project.developer}
                                width={60}
                                height={40}
                                className="object-contain"
                              />
                              <div>
                                <h3 className="font-bold text-xl text-brand-dark-gray group-hover:text-brand-green transition-colors">
                                  {project.name}
                                </h3>
                                <p className="text-sm text-brand-brown">
                                  by {project.developer}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Location and Price */}
                          <div className="flex items-center text-brand-brown mb-3">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{project.location}</span>
                          </div>

                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold text-brand-green">
                              {project.priceRange}
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-brand-brown">
                              <div className="flex items-center space-x-1">
                                <Building2 className="w-4 h-4" />
                                <span>{project.totalUnits} units</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{project.possession}</span>
                              </div>
                            </div>
                          </div>

                          {/* Property Types */}
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-brand-dark-gray mb-2">
                              Property Types:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.propertyTypes.map((type, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs bg-brand-cream text-brand-brown"
                                >
                                  {type}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.highlights
                                .slice(0, 4)
                                .map((highlight, index) => (
                                  <Badge
                                    key={index}
                                    className="text-xs bg-brand-green/10 text-brand-green border border-brand-green/20"
                                  >
                                    {highlight}
                                  </Badge>
                                ))}
                            </div>
                          </div>

                          {/* Key Amenities */}
                          <div className="mb-4">
                            <div className="flex items-center space-x-4 text-sm text-brand-brown">
                              {project.amenities
                                .slice(0, 3)
                                .map((amenity, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center space-x-1"
                                  >
                                    {amenity === "Swimming Pool" && (
                                      <TreePine className="w-4 h-4" />
                                    )}
                                    {amenity === "Gym" && (
                                      <Users className="w-4 h-4" />
                                    )}
                                    {amenity === "Parking" && (
                                      <Car className="w-4 h-4" />
                                    )}
                                    {![
                                      "Swimming Pool",
                                      "Gym",
                                      "Parking",
                                    ].includes(amenity) && (
                                      <Building2 className="w-4 h-4" />
                                    )}
                                    <span>{amenity}</span>
                                  </div>
                                ))}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-brand-brown/80 mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <Button className="flex-1 bg-brand-green hover:bg-brand-dark-green text-white rounded-xl">
                              View Details
                            </Button>
                            <Button
                              variant="outline"
                              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-xl bg-transparent"
                            >
                              Brochure
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Enhanced Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  disabled
                  className="border-2 border-gray-200 text-gray-400 bg-transparent"
                >
                  Previous
                </Button>
                <Button className="bg-brand-green text-white">1</Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 text-brand-dark-gray hover:bg-brand-green hover:text-white bg-transparent"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 text-brand-dark-gray hover:bg-brand-green hover:text-white bg-transparent"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 text-brand-dark-gray hover:bg-brand-green hover:text-white bg-transparent"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
