import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock3Icon, ArrowLeft, Share2, Facebook, Twitter, Mail, Bookmark } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Sacred water temple in Bali"
            fill
            priority
            className="object-cover filter brightness-[0.85] contrast-[1.05] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#262b22]/90 via-[#262b22]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center space-x-4 text-sm text-[#e8e4d5]/80">
              <div className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock3Icon className="mr-1 h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-[#e8e4d5] mb-6">
              Sacred Water Temples: Bali's Ancient Purification Rituals
            </h1>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-[#f5f2e8]">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Author avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#e8e4d5] font-medium">Maya Dewi</p>
                <p className="text-[#e8e4d5]/70 text-sm">Cultural Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-[#e8e4d5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <Link href="/articles" className="inline-flex items-center text-[#3c4a3a] hover:underline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Articles
                </Link>
              </div>

              <div className="prose prose-lg max-w-none text-[#3c4a3a]">
                <p className="text-xl font-light leading-relaxed">
                  Water is revered as a sacred element in Balinese Hindu culture, representing purification, healing,
                  and spiritual transformation. Throughout the island, ancient water temples (known as "Pura Tirta")
                  serve as sacred sites where locals and spiritual seekers participate in purification rituals that have
                  remained largely unchanged for centuries.
                </p>

                <div className="my-12 relative">
                  <div className="w-20 h-[2px] bg-[#c4a76c] mb-6"></div>
                  <blockquote className="text-2xl font-light italic text-[#3c4a3a] border-none pl-0">
                    "Water is not simply water in Bali—it is the physical manifestation of divine energy, carrying
                    blessings and purification."
                  </blockquote>
                </div>

                <h2>The Significance of Water in Balinese Spirituality</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <p>
                      In Balinese Hinduism, water is believed to be one of the five elements (Panca Maha Bhuta) that
                      make up the universe. Holy water, or "tirta," is used in nearly every Balinese ceremony and
                      ritual. It's considered a divine gift that cleanses both the body and soul, washing away negative
                      energies and inviting prosperity and blessings.
                    </p>

                    <p>
                      The island's elaborate irrigation system, known as "subak," is not merely agricultural but deeply
                      intertwined with temple networks and religious practices. This system, recognized by UNESCO as a
                      Cultural Landscape, demonstrates how Balinese spirituality is inseparable from daily life and
                      environmental stewardship.
                    </p>
                  </div>

                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Balinese water temple"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-sm"
                    />
                    <div className="absolute -bottom-4 -right-4 z-10 hidden md:block">
                      <div className="w-16 h-16 border border-[#c4a76c] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <h2>Experiencing a Water Purification Ritual</h2>

                <p>
                  The most famous water temples include Tirta Empul, Pura Ulun Danu Beratan, and Pura Tirta Sudamala. At
                  these sacred sites, visitors can observe or participate in "melukat," the traditional purification
                  ceremony.
                </p>

                <p>
                  During melukat, participants enter sacred spring-fed pools and move through a series of water spouts,
                  each dedicated to different purposes such as purification from negative thoughts, healing, or
                  blessing. Before entering the water, offerings are made and prayers are recited to show respect to the
                  divine forces present.
                </p>

                <div className="my-12 bg-[#d8d4c5] p-8 rounded-sm">
                  <h3 className="text-xl font-medium text-[#3c4a3a] mb-4">Preparing for a Water Purification Ritual</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#3c4a3a]/80">
                    <li>Wear a sarong and sash (available for rent at most temples)</li>
                    <li>Bring a change of clothes for after the ceremony</li>
                    <li>Remove jewelry and watches before entering the water</li>
                    <li>Approach the ritual with respect and an open heart</li>
                    <li>Follow the guidance of local temple attendants</li>
                  </ul>
                </div>

                <p>
                  Many visitors report profound experiences during these rituals, describing sensations of lightness,
                  clarity, and emotional release. While the experience is deeply personal, the communal aspect of
                  purification creates a shared sense of renewal and connection.
                </p>

                <div className="relative my-12">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Water purification ceremony"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-sm"
                  />
                  <p className="text-sm text-[#3c4a3a]/70 mt-2 italic">
                    Participants in a traditional melukat ceremony at Tirta Empul temple
                  </p>
                </div>

                <h2>Respecting Sacred Spaces</h2>

                <p>
                  When visiting Bali's water temples, it's essential to approach these sacred sites with respect and
                  cultural sensitivity. Proper attire (a sarong and sash, which can usually be rented at the temple),
                  modest behavior, and following local customs are expected of all visitors.
                </p>

                <p>
                  At The Bali Way, we guide our guests through these meaningful experiences with cultural context and
                  spiritual preparation, ensuring that participation in these ancient rituals is both authentic and
                  respectful.
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-8 bg-[#d8d4c5] rounded-sm">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Author avatar"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#3c4a3a] mb-2">Maya Dewi</h3>
                    <p className="text-[#3c4a3a]/80 text-sm mb-4">
                      Maya is a cultural guide and spiritual practitioner born and raised in Ubud. With over 15 years of
                      experience guiding visitors through Bali's sacred sites, she specializes in creating authentic,
                      respectful experiences that honor Balinese traditions.
                    </p>
                    <Link href="#">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white"
                      >
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 border-t border-[#3c4a3a]/20 pt-8">
                <h3 className="mb-4 text-xl font-medium text-[#3c4a3a]">Share this article</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-8">
                {/* Actions */}
                <div className="flex gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white flex items-center gap-2 flex-1"
                  >
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white flex items-center gap-2 flex-1"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>

                {/* Related Articles */}
                <div className="bg-[#f5f2e8] p-6 rounded-sm">
                  <h3 className="text-lg font-medium text-[#3c4a3a] mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="group">
                        <Link href="#" className="flex gap-4">
                          <div className="h-16 w-16 shrink-0 overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=200&width=200&text=Article+${item}`}
                              alt={`Related article ${item}`}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="text-[#3c4a3a] font-medium group-hover:text-[#c4a76c] transition-colors">
                              {item === 1 && "Balinese Temple Etiquette: A Visitor's Guide"}
                              {item === 2 && "The Spiritual Significance of Offerings in Bali"}
                              {item === 3 && "Full Moon Ceremonies: Timing Your Visit"}
                            </h4>
                            <p className="text-xs text-[#3c4a3a]/70 mt-1">
                              {item === 1 && "May 22, 2023"}
                              {item === 2 && "April 15, 2023"}
                              {item === 3 && "March 30, 2023"}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-[#3c4a3a] p-6 rounded-sm text-white">
                  <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Receive updates on Balinese culture, spiritual practices, and travel insights.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full h-10 px-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c4a76c]"
                    />
                    <Button className="w-full rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e]">
                      SUBSCRIBE
                    </Button>
                  </form>
                </div>

                {/* Popular Tags */}
                <div className="bg-[#f5f2e8] p-6 rounded-sm">
                  <h3 className="text-lg font-medium text-[#3c4a3a] mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Water Temples",
                      "Ceremonies",
                      "Spirituality",
                      "Cultural Practices",
                      "Sacred Sites",
                      "Traditions",
                      "Rituals",
                    ].map((tag) => (
                      <Link key={tag} href="#">
                        <span className="inline-block px-3 py-1 bg-[#d8d4c5] text-[#3c4a3a] text-xs hover:bg-[#c4a76c]/20 transition-colors">
                          {tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-16 bg-[#d8d4c5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-12">MORE ARTICLES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Link key={item} href="#" className="group">
                <div className="bg-[#f5f2e8] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=600&width=800&text=Article+${item}`}
                      alt={`Article ${item}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#3c4a3a]/70 mb-2">
                      <CalendarIcon className="h-3 w-3" />
                      <span>
                        {item === 1 && "May 22, 2023"}
                        {item === 2 && "April 15, 2023"}
                        {item === 3 && "March 30, 2023"}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-[#3c4a3a] mb-3 group-hover:text-[#c4a76c] transition-colors">
                      {item === 1 && "Balinese Temple Etiquette: A Visitor's Guide"}
                      {item === 2 && "The Spiritual Significance of Offerings in Bali"}
                      {item === 3 && "Full Moon Ceremonies: Timing Your Visit"}
                    </h3>

                    <p className="text-[#3c4a3a]/80 text-sm mb-4 line-clamp-3">
                      {item === 1 &&
                        "Learn the essential customs and practices for respectfully visiting Bali's sacred temples. From proper attire to behavioral expectations, this guide ensures your temple visits honor local traditions."}
                      {item === 2 &&
                        "Discover the meaning behind the beautiful offerings (canang sari) you'll see throughout Bali. These daily rituals are a fundamental expression of Balinese spirituality and connection to the divine."}
                      {item === 3 &&
                        "Full moon and new moon ceremonies are among Bali's most significant spiritual events. Learn how to experience these powerful ceremonies and what they represent in Balinese Hinduism."}
                    </p>

                    <div className="flex items-center text-[#c4a76c] text-sm group-hover:underline">
                      <span>Read More</span>
                      <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/articles">
              <Button
                variant="outline"
                className="rounded-none border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white px-8 py-3 h-auto text-sm tracking-widest"
              >
                VIEW ALL ARTICLES
              </Button>
            </Link>
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

