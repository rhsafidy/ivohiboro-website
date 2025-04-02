import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Maya Dewi",
    role: "Founder & Lead Guide",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Born and raised in Ubud, Maya combines her deep knowledge of Balinese spiritual traditions with over 15 years of experience guiding transformational journeys.",
  },
  {
    id: 2,
    name: "Wayan Sukadana",
    role: "Spiritual Guide & Healer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "A sixth-generation Balinese healer (Balian), Wayan practices traditional healing methods passed down through his family.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Yoga & Meditation Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With certifications in multiple yoga traditions and over a decade of teaching experience, Sarah guides our guests through mindful movement and meditation practices.",
  },
  {
    id: 4,
    name: "Ketut Arta",
    role: "Cultural Ambassador",
    image: "/placeholder.svg?height=400&width=400",
    bio: "An expert in Balinese arts, ceremonies, and traditions, Ketut helps bridge cultural understanding for our guests.",
  },
]

const partners = [
  {
    id: 1,
    name: "Ubud Healing Center",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "ubud-healing-center",
  },
  {
    id: 2,
    name: "Bali Eco Stays",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "bali-eco-stays",
  },
  {
    id: 3,
    name: "Sacred Temples Foundation",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "sacred-temples-foundation",
  },
  {
    id: 4,
    name: "Balinese Arts Collective",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "balinese-arts-collective",
  },
  {
    id: 5,
    name: "Ocean Conservation Bali",
    logo: "/placeholder.svg?height=120&width=120",
    slug: "ocean-conservation-bali",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Balinese temple at sunset"
            fill
            priority
            className="object-cover filter brightness-[0.85] contrast-[1.05] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262b22]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="w-20 h-[2px] bg-[#c4a76c] mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#e8e4d5] mb-6">Our Story</h1>
            <p className="text-lg text-[#e8e4d5]/90 font-light leading-relaxed">
              Discover the journey that led us to create transformative experiences in Bali's sacred landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Creative Layout with Images */}
      <section className="w-full py-20 bg-[#e8e4d5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-8">OUR MISSION</h2>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                The Bali Way was born from a deep love for Bali's spiritual traditions and natural beauty. Our founder,
                Maya Dewi, grew up immersed in Balinese culture and witnessed how transformative these experiences could
                be for visitors seeking meaning and connection.
              </p>
              <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">
                What began as informal guidance for friends has evolved into a holistic approach to experiencing Bali's
                sacred places, rituals, and healing traditions. We believe in sustainable tourism that honors local
                communities while providing authentic experiences for spiritual seekers.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full flex items-center justify-center mr-6">
                  <div className="w-8 h-8 border border-[#c4a76c] rounded-full"></div>
                </div>
                <p className="text-[#3c4a3a] italic">"We don't just show you Bali; we help you experience its soul."</p>
              </div>
            </div>

            {/* Creative Image Layout */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-12 gap-4 h-[500px]">
                {/* Large main image */}
                <div className="col-span-8 row-span-2 relative">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Balinese ceremony"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                {/* Smaller top right image */}
                <div className="col-span-4 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Rice terraces in Bali"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                {/* Smaller bottom right image */}
                <div className="col-span-4 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Traditional Balinese offering"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 z-10">
                  <div className="w-24 h-24 border border-[#c4a76c] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 bg-[#d8d4c5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-16">OUR VALUES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">AUTHENTICITY</h3>
              <p className="text-[#3c4a3a]/80">
                We honor Balinese traditions by presenting them in their true form, without commercialization or
                cultural appropriation. Every experience we offer is rooted in genuine spiritual practices and local
                wisdom.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">SUSTAINABILITY</h3>
              <p className="text-[#3c4a3a]/80">
                We are committed to environmental stewardship and supporting local communities. Our practices minimize
                ecological impact while ensuring that tourism benefits Balinese people directly.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">TRANSFORMATION</h3>
              <p className="text-[#3c4a3a]/80">
                We believe in the power of Bali to catalyze personal growth. Our experiences are designed to facilitate
                meaningful change, whether through spiritual practice, cultural immersion, or connection with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - With Side Image */}
      <section className="w-full py-20 bg-[#e8e4d5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image on left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Meditation in Bali temple"
                  fill
                  className="object-cover rounded-sm"
                />

                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 z-10">
                  <div className="w-24 h-24 border border-[#c4a76c] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Text on right */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-8">OUR APPROACH</h2>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                The Bali Way offers more than typical tourist experiences. We create journeys that engage all the senses
                and connect you with the island's spiritual essence. Each itinerary is thoughtfully crafted to balance
                cultural immersion, personal growth, and respectful exploration.
              </p>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                Our guides are not just knowledgeable about Balinese culture—they embody it. Many are practitioners of
                traditional healing arts, meditation, or dance, bringing depth and authenticity to your experience. We
                keep our groups small to ensure personal attention and minimize our impact on sacred sites.
              </p>
              <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">
                Whether you're participating in a water purification ritual, learning traditional offerings, or
                meditating in an ancient temple, we provide the cultural context and spiritual preparation to make these
                experiences meaningful and transformative.
              </p>
              <Button className="rounded-none bg-[#3c4a3a] text-white hover:bg-[#2a362a] px-8 py-3 h-auto text-sm tracking-widest">
                EXPLORE OUR JOURNEYS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-[#d8d4c5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-6">OUR TEAM</h2>
          <p className="text-center text-[#3c4a3a]/80 max-w-3xl mx-auto mb-16">
            Meet the passionate individuals who make The Bali Way experience so special. Our diverse team combines local
            wisdom with international expertise to create transformative journeys that honor Bali's rich spiritual
            heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col overflow-hidden rounded-sm bg-[#f5f2e8] shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-[#3c4a3a]">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-[#3c4a3a]/70">{member.role}</p>
                  <p className="flex-1 text-[#3c4a3a]/80 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/team">
              <Button
                variant="outline"
                className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white px-8 py-3 h-auto text-sm tracking-widest"
              >
                VIEW FULL TEAM
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-20 bg-[#e8e4d5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-6">OUR PARTNERS</h2>
          <p className="text-center text-[#3c4a3a]/80 max-w-3xl mx-auto mb-16">
            We collaborate with these exceptional organizations to create authentic, transformative experiences while
            supporting local communities and preserving Bali's natural and cultural heritage.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <Link key={partner.id} href={`/partners/${partner.slug}`} className="group">
                <div className="flex flex-col items-center p-6 bg-[#f5f2e8] rounded-sm transition-all duration-300 hover:shadow-md">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-white p-2 mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-[#3c4a3a] text-sm font-medium mb-2">{partner.name}</h3>
                  <div className="flex items-center text-[#c4a76c] text-xs group-hover:underline">
                    <span>View Details</span>
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/partners">
              <Button
                variant="outline"
                className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white px-8 py-3 h-auto text-sm tracking-widest"
              >
                VIEW ALL PARTNERS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#3c4a3a] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-6">JOIN OUR JOURNEY</h2>
          <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-white/80">
            Experience the transformative power of Bali's spiritual traditions and natural beauty. Let us guide you on a
            journey of discovery, healing, and connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
              PLAN YOUR JOURNEY
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-white text-white hover:bg-white/10 px-8 py-3 h-auto text-sm tracking-widest"
            >
              CONTACT US
            </Button>
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

