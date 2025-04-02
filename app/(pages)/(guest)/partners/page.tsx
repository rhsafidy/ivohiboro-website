import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin } from "lucide-react"

const partners = [
  {
    id: 1,
    name: "Ubud Healing Center",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "ubud-healing-center",
    summary:
      "A holistic wellness center offering traditional Balinese healing practices, yoga, and meditation retreats in the heart of Ubud.",
    location: "Ubud",
    featured: true,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Bali Eco Stays",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "bali-eco-stays",
    summary:
      "Sustainable accommodation options throughout Bali, focusing on minimal environmental impact while providing authentic cultural experiences.",
    location: "Multiple Locations",
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Sacred Temples Foundation",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "sacred-temples-foundation",
    summary:
      "Dedicated to preserving and restoring Bali's ancient temples while educating visitors about their spiritual and cultural significance.",
    location: "Tabanan",
    featured: true,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    name: "Balinese Arts Collective",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "balinese-arts-collective",
    summary:
      "Supporting local artisans and traditional craftspeople through sustainable commerce and cultural education programs.",
    location: "Ubud",
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    name: "Ocean Conservation Bali",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "ocean-conservation-bali",
    summary:
      "Working to protect Bali's marine ecosystems through beach cleanups, coral restoration projects, and sustainable tourism practices.",
    location: "Sanur",
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    name: "Bali Spiritual Retreats",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "bali-spiritual-retreats",
    summary:
      "Offering guided meditation, yoga, and spiritual development programs in serene locations across the island.",
    location: "Amed",
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    name: "Traditional Farming Cooperative",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "traditional-farming-cooperative",
    summary: "Preserving ancient Balinese agricultural practices through community-supported farming initiatives.",
    location: "Sidemen",
    featured: false,
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function PartnersPage() {
  // Get featured partners
  const featuredPartners = partners.filter((partner) => partner.featured)
  // Get non-featured partners
  const regularPartners = partners.filter((partner) => !partner.featured)

  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Bali partnership network"
            fill
            priority
            className="object-cover filter brightness-[0.85] contrast-[1.05] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262b22]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="w-20 h-[2px] bg-[#c4a76c] mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#e8e4d5] mb-6">
              Our Partners
            </h1>
            <p className="text-lg text-[#e8e4d5]/90 font-light leading-relaxed">
              We collaborate with these exceptional organizations to create authentic, transformative experiences while
              supporting local communities and preserving Bali's natural and cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-20 bg-[#e8e4d5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-4">FEATURED PARTNERS</h2>
          <p className="text-center text-[#3c4a3a]/80 max-w-3xl mx-auto mb-16">
            These organizations exemplify our shared values of authenticity, sustainability, and transformation.
          </p>

          <div className="space-y-24">
            {featuredPartners.map((partner, index) => (
              <div
                key={partner.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Logo overlay */}
                  <div className="absolute -bottom-8 left-8 z-10 bg-white p-4 shadow-md">
                    <div className="h-16 w-16 relative">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div
                    className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} z-10 hidden md:block`}
                  >
                    <div className="w-24 h-24 border border-[#c4a76c] rounded-full"></div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#c4a76c]" />
                    <span className="text-sm text-[#3c4a3a]/70">{partner.location}</span>
                  </div>
                  <h3 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-4">{partner.name}</h3>
                  <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">{partner.summary}</p>
                  <Link href={`/partners/${partner.slug}`}>
                    <Button className="rounded-none bg-[#3c4a3a] text-white hover:bg-[#2a362a] px-8 py-3 h-auto text-sm tracking-widest">
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners Grid */}
      <section className="py-20 bg-[#d8d4c5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-16">ALL PARTNERS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPartners.map((partner) => (
              <Link
                key={partner.id}
                href={`/partners/${partner.slug}`}
                className="group bg-[#f5f2e8] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 relative shrink-0">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-[#3c4a3a]">{partner.name}</h3>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-[#c4a76c]" />
                    <span className="text-sm text-[#3c4a3a]/70">{partner.location}</span>
                  </div>

                  <p className="text-[#3c4a3a]/80 text-sm mb-4 line-clamp-3">{partner.summary}</p>

                  <div className="flex items-center text-[#c4a76c] text-sm group-hover:underline mt-auto">
                    <span>View Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 bg-[#3c4a3a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6">BECOME A PARTNER</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Are you an organization that shares our values of authenticity, sustainability, and transformation?
                We're always looking to expand our network of partners who are committed to preserving Bali's cultural
                heritage and natural environment.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                By partnering with The Bali Way, you'll gain access to conscious travelers seeking authentic experiences
                while contributing to our mission of sustainable tourism that benefits local communities.
              </p>
              <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
                CONTACT US
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Partnership handshake"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 z-10 hidden lg:block">
                <div className="w-24 h-24 border border-[#c4a76c] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Donate Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-[#c5ad6a] text-white hover:bg-[#b39c59]">DONATE</Button>
      </div>
    </div>
  )
}

