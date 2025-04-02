import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const partnersData = {
  "ubud-healing-center": {
    name: "Ubud Healing Center",
    logo: "/placeholder.svg?height=200&width=200",
    heroImage: "/placeholder.svg?height=800&width=1600",
    summary:
      "A holistic wellness center offering traditional Balinese healing practices, yoga, and meditation retreats in the heart of Ubud.",
    description:
      "Founded in 2008, the Ubud Healing Center has become a sanctuary for those seeking physical, emotional, and spiritual wellness through traditional Balinese healing arts. Our center combines ancient wisdom with modern understanding to create transformative experiences for visitors from around the world.",
    mission:
      "To preserve and share authentic Balinese healing traditions while providing a nurturing space for personal transformation and wellness.",
    offerings: [
      "Traditional Balinese healing sessions with local practitioners",
      "Daily yoga and meditation classes in open-air pavilions",
      "Customized wellness retreats combining healing, movement, and nutrition",
      "Workshops on Balinese spiritual practices and herbal medicine",
      "Community outreach programs supporting local healers and their families",
    ],
    location: "Jl. Raya Pengosekan, Ubud, Bali, Indonesia",
    website: "www.ubudhealingcenter.com",
    contact: "info@ubudhealingcenter.com",
  },
  "bali-eco-stays": {
    name: "Bali Eco Stays",
    logo: "/placeholder.svg?height=200&width=200",
    heroImage: "/placeholder.svg?height=800&width=1600",
    summary:
      "Sustainable accommodation options throughout Bali, focusing on minimal environmental impact while providing authentic cultural experiences.",
    description:
      "Bali Eco Stays is a network of environmentally conscious accommodations across the island, from bamboo treehouses to traditional Balinese compounds. Each property is designed with sustainability at its core, using local materials, renewable energy, and water conservation systems.",
    mission:
      "To demonstrate that luxury and comfort can coexist with environmental responsibility, while supporting local communities and preserving Bali's natural beauty.",
    offerings: [
      "Eco-friendly accommodations in diverse locations across Bali",
      "Farm-to-table dining featuring organic produce from on-site gardens",
      "Cultural immersion activities led by local community members",
      "Sustainable tourism workshops and educational programs",
      "Conservation initiatives protecting Bali's ecosystems",
    ],
    location: "Multiple locations across Bali, Indonesia",
    website: "www.baliecostays.com",
    contact: "stay@baliecostays.com",
  },
  "sacred-temples-foundation": {
    name: "Sacred Temples Foundation",
    logo: "/placeholder.svg?height=200&width=200",
    heroImage: "/placeholder.svg?height=800&width=1600",
    summary:
      "Dedicated to preserving and restoring Bali's ancient temples while educating visitors about their spiritual and cultural significance.",
    description:
      "The Sacred Temples Foundation works tirelessly to protect Bali's temple heritage through restoration projects, documentation of ceremonies, and educational programs. Our team of conservationists, religious scholars, and local temple guardians collaborate to ensure these sacred spaces remain vibrant centers of Balinese spiritual life.",
    mission:
      "To safeguard Bali's temple heritage for future generations while fostering deeper understanding and respect among visitors.",
    offerings: [
      "Temple restoration and preservation projects across Bali",
      "Educational tours highlighting the spiritual significance of temple architecture",
      "Documentation and archiving of temple ceremonies and oral traditions",
      "Training programs for young Balinese in traditional temple arts and maintenance",
      "Responsible tourism guidelines for temple visits",
    ],
    location: "Jl. Raya Batukaru, Tabanan, Bali, Indonesia",
    website: "www.sacredtemplesbali.org",
    contact: "preserve@sacredtemplesbali.org",
  },
  "balinese-arts-collective": {
    name: "Balinese Arts Collective",
    logo: "/placeholder.svg?height=200&width=200",
    heroImage: "/placeholder.svg?height=800&width=1600",
    summary:
      "Supporting local artisans and traditional craftspeople through sustainable commerce and cultural education programs.",
    description:
      "The Balinese Arts Collective brings together master craftspeople from across the island to preserve traditional art forms while creating sustainable livelihoods. From wood carving to textile design, our collective ensures these ancient practices continue to thrive in the modern world.",
    mission:
      "To preserve Bali's artistic heritage by supporting artisans and creating ethical markets for traditional crafts.",
    offerings: [
      "Artisan workshops where visitors can learn traditional crafts",
      "Ethical marketplace featuring authenticated handmade products",
      "Apprenticeship programs pairing young Balinese with master craftspeople",
      "Documentation of endangered craft techniques and designs",
      "Community art spaces in villages throughout Bali",
    ],
    location: "Jl. Raya Mas, Ubud, Bali, Indonesia",
    website: "www.balineseartscollective.org",
    contact: "create@balineseartscollective.org",
  },
  "ocean-conservation-bali": {
    name: "Ocean Conservation Bali",
    logo: "/placeholder.svg?height=200&width=200",
    heroImage: "/placeholder.svg?height=800&width=1600",
    summary:
      "Working to protect Bali's marine ecosystems through beach cleanups, coral restoration projects, and sustainable tourism practices.",
    description:
      "Ocean Conservation Bali is dedicated to preserving the island's precious marine environments through direct action, education, and policy advocacy. Our team of marine biologists, local fishermen, and passionate volunteers work together to address the challenges facing Bali's coral reefs and coastal ecosystems.",
    mission:
      "To ensure the health and resilience of Bali's marine ecosystems for future generations through conservation, education, and sustainable practices.",
    offerings: [
      "Weekly beach cleanup initiatives open to visitors and locals",
      "Coral reef restoration projects with hands-on volunteer opportunities",
      "Marine education programs for local schools and communities",
      "Sustainable fishing workshops with traditional fishing villages",
      "Eco-tourism guidelines and certification for marine tour operators",
    ],
    location: "Jl. Pantai Padang Galak, Sanur, Bali, Indonesia",
    website: "www.oceanconservationbali.org",
    contact: "protect@oceanconservationbali.org",
  },
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = partnersData[params.slug as keyof typeof partnersData]

  if (!partner) {
    return (
      <div className="min-h-screen bg-[#e8e4d5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-[#3c4a3a] mb-4">Partner not found</h1>
          <Link href="/partners">
            <Button
              variant="outline"
              className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white"
            >
              Return to Partners
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={partner.heroImage || "/placeholder.svg"}
            alt={`${partner.name} hero image`}
            fill
            priority
            className="object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262b22]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Link href="/partners" className="inline-flex items-center text-[#e8e4d5] hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Partners
            </Link>
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-white p-2">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="text-4xl font-light tracking-wide text-[#e8e4d5]">{partner.name}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Details */}
      <section className="w-full py-20 bg-[#e8e4d5]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-light tracking-wide text-[#3c4a3a] mb-4">About</h2>
              <p className="text-[#3c4a3a]/80 leading-relaxed mb-6 text-lg">{partner.summary}</p>
              <p className="text-[#3c4a3a]/80 leading-relaxed">{partner.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-light tracking-wide text-[#3c4a3a] mb-4">Our Mission</h2>
              <p className="text-[#3c4a3a]/80 leading-relaxed italic">"{partner.mission}"</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-light tracking-wide text-[#3c4a3a] mb-4">What We Offer</h2>
              <ul className="space-y-2">
                {partner.offerings.map((offering, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#c4a76c] mr-2">•</span>
                    <span className="text-[#3c4a3a]/80">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12 p-8 bg-[#f5f2e8] rounded-sm">
              <h2 className="text-2xl font-light tracking-wide text-[#3c4a3a] mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-[#3c4a3a]/70 mb-1">Location</p>
                  <p className="text-[#3c4a3a]">{partner.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3c4a3a]/70 mb-1">Website</p>
                  <p className="text-[#3c4a3a]">{partner.website}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3c4a3a]/70 mb-1">Email</p>
                  <p className="text-[#3c4a3a]">{partner.contact}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="rounded-none bg-[#3c4a3a] text-white hover:bg-[#2a362a] px-8 py-3 h-auto text-sm tracking-widest">
                CONTACT PARTNER
              </Button>
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

