import Image from "next/image"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Maya Dewi",
    role: "Founder & Lead Guide",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Born and raised in Ubud, Maya combines her deep knowledge of Balinese spiritual traditions with over 15 years of experience guiding transformational journeys. Her passion for sharing authentic Balinese culture has made her a beloved figure among spiritual seekers worldwide.",
  },
  {
    id: 2,
    name: "Wayan Sukadana",
    role: "Spiritual Guide & Healer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "A sixth-generation Balinese healer (Balian), Wayan practices traditional healing methods passed down through his family. His gentle approach and profound wisdom create safe spaces for deep personal transformation and healing.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Yoga & Meditation Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With certifications in multiple yoga traditions and over a decade of teaching experience, Sarah guides our guests through mindful movement and meditation practices that complement Balinese spiritual traditions.",
  },
  {
    id: 4,
    name: "Ketut Arta",
    role: "Cultural Ambassador",
    image: "/placeholder.svg?height=400&width=400",
    bio: "An expert in Balinese arts, ceremonies, and traditions, Ketut helps bridge cultural understanding for our guests. His extensive knowledge of temple etiquette and local customs ensures authentic and respectful experiences.",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Adventure Guide",
    image: "/placeholder.svg?height=400&width=400",
    bio: "A certified wilderness first responder with intimate knowledge of Bali's hidden trails, waterfalls, and volcanic landscapes, David leads our more adventurous excursions with safety and environmental consciousness.",
  },
  {
    id: 6,
    name: "Ni Made Suartini",
    role: "Retreat Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Made ensures that every aspect of our retreats runs smoothly, from accommodation arrangements to dietary requirements. Her attention to detail and warm hospitality create a seamless experience for all our guests.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="mb-8 text-center text-4xl font-medium tracking-wide text-[#3c4a3a]">OUR TEAM</h1>

        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-center text-[#3c4a3a]">
            Meet the passionate individuals who make The Bali Way experience so special. Our diverse team combines local
            wisdom with international expertise to create transformative journeys that honor Bali's rich spiritual
            heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="text-xl font-medium text-[#3c4a3a]">{member.name}</h2>
                <p className="mb-4 text-sm font-medium text-[#3c4a3a]/70">{member.role}</p>
                <p className="flex-1 text-[#3c4a3a]/80">{member.bio}</p>

                <div className="mt-6 flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-sm bg-[#3c4a3a] p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-medium">Join Our Team</h2>
          <p className="mb-6 mx-auto max-w-2xl">
            Are you passionate about Balinese culture, spirituality, and creating transformative experiences? We're
            always looking for exceptional individuals to join our community of guides and healers.
          </p>
          <Button className="bg-white text-[#3c4a3a] hover:bg-[#f5f2e8]">VIEW OPPORTUNITIES</Button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <Button className="bg-[#c5ad6a] text-white hover:bg-[#b39c59]">DONATE</Button>
      </div>
    </div>
  )
}

