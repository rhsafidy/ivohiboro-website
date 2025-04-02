import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Filter, Search } from "lucide-react"

// Gallery image data with categories
const galleryImages = [
  {
    id: 1,
    title: "Sacred Water Temple",
    description: "Ancient temple nestled in the mountains of Bali",
    category: "temples",
    featured: true,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 2,
    title: "Golden Hour Rice Terraces",
    description: "Serene rice terraces during golden hour",
    category: "nature",
    featured: false,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 3,
    title: "Traditional Ceremony",
    description: "Traditional Balinese ceremony in progress",
    category: "culture",
    featured: true,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 4,
    title: "Besakih Temple",
    description: "The Mother Temple of Bali",
    category: "temples",
    featured: false,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 5,
    title: "Meditation Space",
    description: "Tranquil space for spiritual practice",
    category: "spiritual",
    featured: true,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 6,
    title: "Balinese Dancer",
    description: "Traditional dancer in ceremonial attire",
    category: "culture",
    featured: false,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 7,
    title: "Volcanic Landscape",
    description: "Dramatic view of Mount Batur",
    category: "nature",
    featured: false,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 8,
    title: "Healing Ritual",
    description: "Traditional purification ceremony",
    category: "spiritual",
    featured: false,
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    id: 9,
    title: "Hidden Waterfall",
    description: "Secret waterfall in the jungle",
    category: "nature",
    featured: true,
    src: "/placeholder.svg?height=800&width=800",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Gallery of Balinese imagery"
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
              Visual Journey
            </h1>
            <p className="text-lg text-[#e8e4d5]/90 font-light leading-relaxed">
              Experience the beauty of Bali's dry landscapes, from golden rice terraces to ancient stone temples.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
          <div className="w-32 h-32 border border-[#e8e3d7]/30 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 border border-[#e8e3d7]/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Gallery Filter Section */}
      <section className="py-12 bg-[#d8d4c5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gallery..."
                  className="w-full md:w-80 h-12 pl-12 pr-4 rounded-none border-[#3c4a3a]/30 bg-[#f5f2e8] focus:border-[#3c4a3a] focus:ring-0"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3c4a3a]/50 h-5 w-5" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-end">
              <Button variant="outline" className="border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white">
                All
              </Button>
              <Button variant="ghost" className="text-[#3c4a3a]/70 hover:text-[#3c4a3a] hover:bg-[#3c4a3a]/10">
                Temples
              </Button>
              <Button variant="ghost" className="text-[#3c4a3a]/70 hover:text-[#3c4a3a] hover:bg-[#3c4a3a]/10">
                Nature
              </Button>
              <Button variant="ghost" className="text-[#3c4a3a]/70 hover:text-[#3c4a3a] hover:bg-[#3c4a3a]/10">
                Culture
              </Button>
              <Button variant="ghost" className="text-[#3c4a3a]/70 hover:text-[#3c4a3a] hover:bg-[#3c4a3a]/10">
                Spiritual
              </Button>
              <Button variant="outline" size="icon" className="border-[#3c4a3a] text-[#3c4a3a]">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Item */}
      <section className="py-12 bg-[#e8e4d5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={galleryImages[0].src || "/placeholder.svg"}
                  alt={galleryImages[0].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-10 hidden md:block">
                <div className="w-24 h-24 border border-[#c4a76c] rounded-full"></div>
              </div>
            </div>

            <div className="p-6 md:p-0">
              <span className="text-sm text-[#c4a76c] uppercase tracking-wider">Featured</span>
              <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mt-2 mb-4">{galleryImages[0].title}</h2>
              <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">
                Water is revered as a sacred element in Balinese Hindu culture, representing purification, healing, and
                spiritual transformation. Throughout the island, ancient water temples (known as "Pura Tirta") serve as
                sacred sites where locals and spiritual seekers participate in purification rituals that have remained
                largely unchanged for centuries.
              </p>
              <Button className="rounded-none bg-[#3c4a3a] text-white hover:bg-[#2a362a] px-8 py-3 h-auto text-sm tracking-widest">
                VIEW DETAILS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Gallery Grid */}
      <section className="py-12 bg-[#e8e4d5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">
            {/* First row - 2 images */}
            <div className="relative group overflow-hidden">
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[1].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[1].description}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden md:col-span-2">
              <Image
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].title}
                width={1200}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[2].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[2].description}</p>
              </div>
            </div>

            {/* Second row - 3 images */}
            <div className="relative group overflow-hidden md:col-span-2">
              <Image
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].title}
                width={1200}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[3].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[3].description}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[4].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[4].description}</p>
              </div>
            </div>

            {/* Third row - 3 images */}
            <div className="relative group overflow-hidden">
              <Image
                src={galleryImages[5].src || "/placeholder.svg"}
                alt={galleryImages[5].title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[5].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[5].description}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src={galleryImages[6].src || "/placeholder.svg"}
                alt={galleryImages[6].title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[6].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[6].description}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src={galleryImages[7].src || "/placeholder.svg"}
                alt={galleryImages[7].title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{galleryImages[7].title}</h3>
                <p className="text-white/80 text-sm">{galleryImages[7].description}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white px-8 py-3 h-auto text-sm tracking-widest"
            >
              LOAD MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Collections */}
      <section className="py-16 bg-[#d8d4c5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-12">COLLECTIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=900&width=600"
                  alt="Sacred Temples Collection"
                  width={600}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#262b22]/80 via-[#262b22]/30 to-transparent">
                <h3 className="text-2xl font-light text-white mb-2">Sacred Temples</h3>
                <p className="text-white/80 mb-6">Explore Bali's ancient spiritual centers</p>
                <Link href="#" className="inline-flex items-center text-[#c4a76c] group-hover:underline">
                  <span>View Collection</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=900&width=600"
                  alt="Natural Landscapes Collection"
                  width={600}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#262b22]/80 via-[#262b22]/30 to-transparent">
                <h3 className="text-2xl font-light text-white mb-2">Natural Landscapes</h3>
                <p className="text-white/80 mb-6">Discover Bali's breathtaking scenery</p>
                <Link href="#" className="inline-flex items-center text-[#c4a76c] group-hover:underline">
                  <span>View Collection</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=900&width=600"
                  alt="Cultural Ceremonies Collection"
                  width={600}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#262b22]/80 via-[#262b22]/30 to-transparent">
                <h3 className="text-2xl font-light text-white mb-2">Cultural Ceremonies</h3>
                <p className="text-white/80 mb-6">Witness Bali's living traditions</p>
                <Link href="#" className="inline-flex items-center text-[#c4a76c] group-hover:underline">
                  <span>View Collection</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3c4a3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-6">EXPERIENCE BALI</h2>
          <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-white/80">
            Ready to see these breathtaking sights in person? Let us guide you through Bali's most sacred and beautiful
            locations.
          </p>
          <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
            PLAN YOUR JOURNEY
          </Button>
        </div>
      </section>

      {/* Fixed Donate Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-[#c5ad6a] text-white hover:bg-[#b39c59]">DONATE</Button>
      </div>
    </div>
  )
}

