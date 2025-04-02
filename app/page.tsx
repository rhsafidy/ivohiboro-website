"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Heart } from "lucide-react"

export default function BaliLandingPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#e8e3d7]">
      {/* Fixed Donation Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-6 py-5 h-auto shadow-lg flex items-center gap-2 group transition-all duration-300 hover:scale-105 border border-[#262b22]/10">
          <Heart className="h-5 w-5 group-hover:text-[#262b22] transition-colors" />
          <span className="text-sm tracking-widest font-light">DONATE</span>
        </Button>
      </div>

      {/* Header */}
      <header className="absolute top-0 z-40 w-full">
        <div className="container flex h-24 items-center justify-between py-4">
          <div className="text-[#e8e3d7] text-xl tracking-widest font-light drop-shadow-md">THE BALI WAY</div>
          <nav className="flex items-center gap-4 md:gap-8">
            <div className="relative" onMouseEnter={() => handleMouseEnter("pricing")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#pricing"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                PRICING
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === "pricing" && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border border-[#262b22]/10">
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Standard Package
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Premium Package
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Custom Tours
                  </Link>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => handleMouseEnter("visit")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#visit"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                VISIT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === "visit" && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border border-[#262b22]/10">
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Popular Destinations
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Hidden Gems
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Seasonal Tours
                  </Link>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#about"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                ABOUT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === "about" && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border border-[#262b22]/10">
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Our Story
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Team
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-[#262b22] hover:text-[#5d6152]">
                    Testimonials
                  </Link>
                </div>
              )}
            </div>
            <Link href="#contact" className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - More Impactful for Wide Screens */}
        <section className="relative w-full min-h-screen">
          {/* Background image that spans full width */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Dry landscape in Bali with traditional elements"
              fill
              priority
              className="object-cover filter brightness-[0.85] contrast-[1.05] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#262b22]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Content Column */}
              <div className="lg:col-span-6 xl:col-span-5 bg-[#e8e3d7]/90 p-8 lg:p-12 backdrop-blur-sm">
                <div className="max-w-2xl">
                  <div className="w-20 h-[2px] bg-[#c4a76c] mb-6"></div>
                  <h2 className="text-sm font-light tracking-widest text-[#5d6152] mb-2">WELCOME TO</h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#262b22] mb-6">
                    Transform Your Journey
                  </h1>
                  <p className="text-lg text-[#262b22]/80 font-light leading-relaxed mb-8">
                    Crave new adventures, mystical experiences and serene landscapes? Bali's dry season offers a unique
                    beauty. We make sure that you'll get an experience you'll never forget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-none bg-[#5d6152] text-[#e8e3d7] hover:bg-[#5a5f4d] px-8 py-3 h-auto text-sm tracking-widest">
                      EXPLORE BALI
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-none border-[#5d6152] text-[#262b22] hover:bg-[#5d6152]/10 px-8 py-3 h-auto text-sm tracking-widest"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Empty space for wide screens */}
              <div className="hidden lg:block lg:col-span-6 xl:col-span-7"></div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
            <div className="w-32 h-32 border border-[#e8e3d7]/30 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-[#e8e3d7]/50 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-extralight text-[#262b22] mb-1">17,508</div>
                <div className="text-sm font-medium text-[#5d6152] mb-3">TRAVELERS</div>
                <p className="text-sm text-[#262b22]/70 leading-relaxed">
                  Happy travelers who have experienced our Bali tours
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-extralight text-[#262b22] mb-1">
                  98<span className="text-3xl">%</span>
                </div>
                <div className="text-sm font-medium text-[#5d6152] mb-3">SATISFACTION</div>
                <p className="text-sm text-[#262b22]/70 leading-relaxed">Satisfaction rate from our customer reviews</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-extralight text-[#262b22] mb-1">1,250</div>
                <div className="text-sm font-medium text-[#5d6152] mb-3">KM²</div>
                <p className="text-sm text-[#262b22]/70 leading-relaxed">Area of Bali we've explored and documented</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-extralight text-[#262b22] mb-1">127</div>
                <div className="text-sm font-medium text-[#5d6152] mb-3">DESTINATIONS</div>
                <p className="text-sm text-[#262b22]/70 leading-relaxed">
                  Unique destinations included in our tour packages
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-extralight text-[#262b22] mb-1">12</div>
                <div className="text-sm font-medium text-[#5d6152] mb-3">YEARS</div>
                <p className="text-sm text-[#262b22]/70 leading-relaxed">
                  Experience creating unforgettable Bali journeys
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* License to Live Section */}
        <section className="w-full py-20 bg-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">START YOUR JOURNEY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8">
                <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">ADVENTURE</h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Discover hidden temples, volcanic landscapes, and ancient rituals in Bali's diverse terrain.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c4a76c] text-[#262b22] hover:bg-[#c4a76c]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto"
                >
                  EXPLORE
                </Button>
              </div>
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8">
                <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">CULTURE</h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Immerse yourself in Balinese traditions, ceremonies, and the spiritual practices of local communities.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c4a76c] text-[#262b22] hover:bg-[#c4a76c]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto"
                >
                  DISCOVER
                </Button>
              </div>
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8">
                <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">RELAXATION</h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Find peace in Bali's serene landscapes, from quiet beaches to meditation retreats in dry season
                  beauty.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c4a76c] text-[#262b22] hover:bg-[#c4a76c]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto"
                >
                  UNWIND
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
                <h2 className="text-3xl font-light tracking-wide text-[#262b22] mb-6">GALLERY</h2>
                <p className="text-[#262b22]/70 mb-8 leading-relaxed">
                  Experience the beauty of Bali's dry landscapes, from golden rice terraces to ancient stone temples.
                  Our gallery captures the essence of this magical island during its most serene season.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#5d6152] text-[#262b22] hover:bg-[#5d6152]/10 px-8 py-2 h-auto text-xs tracking-widest"
                >
                  VIEW ALL
                </Button>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
                      <Image
                        src={`/placeholder.svg?height=800&width=800&text=Bali+${i + 1}`}
                        alt={`Bali scenery ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 filter sepia-[0.2]"
                      />
                      <div className="absolute inset-0 bg-[#262b22]/0 group-hover:bg-[#262b22]/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wider">
                          VIEW
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Place to Be Section */}
        <section className="w-full py-20 bg-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="bg-[#5d6152] p-8 lg:p-12">
                  <h2 className="text-3xl font-light tracking-wide text-[#e8e3d7] mb-8">HELLO, BEAUTIFUL SOUL</h2>
                  <p className="text-[#e8e3d7]/90 mb-6 leading-relaxed">
                    It's no coincidence that Bali is one of the top destinations for spiritual seekers. The island has
                    natural beauty, artisan craftsmanship, exotic temples and friendly locals that make it a place for
                    everyone seeking transformation.
                  </p>
                  <p className="text-[#e8e3d7]/90 mb-8 leading-relaxed">
                    We know that when you're thinking of your journey, choosing whether you want spiritual growth,
                    adventure, relaxation or exploration is hard. That's why we're here: providing your dream experience
                    in Bali's beautiful dry landscapes.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-none border-[#e8e3d7] text-[#e8e3d7] hover:bg-[#e8e3d7]/10 px-6 py-2 h-auto text-xs tracking-widest"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/placeholder.svg?height=1000&width=750"
                    alt="Woman in traditional Balinese setting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">LATEST NEWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col bg-[#e8e3d7] p-6">
                <div className="relative h-[250px] w-full mb-6">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="New beach club opening in Seminyak"
                    fill
                    className="object-cover filter sepia-[0.2]"
                  />
                </div>
                <div className="text-sm text-[#5d6152] mb-2">JUNE 15, 2023</div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  New Beach Club Opens in Seminyak
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Experience the ultimate beachfront luxury at Bali's newest hotspot, featuring infinity pools and
                  sunset views.
                </p>
                <Button variant="link" className="text-[#5d6152] p-0 h-auto text-sm tracking-wider mt-auto">
                  READ MORE
                </Button>
              </div>
              <div className="flex flex-col bg-[#e8e3d7] p-6">
                <div className="relative h-[250px] w-full mb-6">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Traditional Balinese festival"
                    fill
                    className="object-cover filter sepia-[0.2]"
                  />
                </div>
                <div className="text-sm text-[#5d6152] mb-2">MAY 28, 2023</div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  Upcoming Cultural Festivals in Ubud
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Mark your calendars for these authentic Balinese celebrations that showcase the island's rich cultural
                  heritage.
                </p>
                <Button variant="link" className="text-[#5d6152] p-0 h-auto text-sm tracking-wider mt-auto">
                  READ MORE
                </Button>
              </div>
              <div className="flex flex-col bg-[#e8e3d7] p-6">
                <div className="relative h-[250px] w-full mb-6">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="New hiking trail in Bali mountains"
                    fill
                    className="object-cover filter sepia-[0.2]"
                  />
                </div>
                <div className="text-sm text-[#5d6152] mb-2">APRIL 10, 2023</div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  New Hiking Trail Reveals Hidden Waterfall
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Adventure seekers can now explore this newly accessible trail leading to one of Bali's most
                  spectacular waterfalls.
                </p>
                <Button variant="link" className="text-[#5d6152] p-0 h-auto text-sm tracking-wider mt-auto">
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-20 bg-[#5d6152] text-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">HEALING WORDS</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-light italic text-center leading-relaxed mb-8">
                "Working with The Bali Way has been a life-changing experience. The guides embody what true guidance
                should be, balancing respect for my journey and the flow of nature. I've gained a level of confidence
                and self-worth I couldn't have imagined. They have an incredible knack for reading energy and guiding me
                to what I need in the moment. Safe, authentic, and inspiring."
              </p>
              <p className="text-center text-[#e8e3d7]/80">— KARA</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-20 bg-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">CONTACT US</h2>
              <form className="space-y-6 bg-[#d8d4c5] p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-light text-[#262b22]/80 tracking-wide">
                      NAME
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-[#5d6152] focus:border-[#262b22] focus:ring-0 rounded-none h-12 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-light text-[#262b22]/80 tracking-wide">
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="border-[#5d6152] focus:border-[#262b22] focus:ring-0 rounded-none h-12 bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-light text-[#262b22]/80 tracking-wide">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="border-[#5d6152] focus:border-[#262b22] focus:ring-0 rounded-none h-12 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light text-[#262b22]/80 tracking-wide">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="border-[#5d6152] focus:border-[#262b22] focus:ring-0 rounded-none min-h-[150px] bg-transparent"
                  />
                </div>
                <div className="text-center pt-4">
                  <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-light tracking-wide text-[#262b22] mb-8">BECOME A TRAVELER</h2>
            <p className="text-[#262b22]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to experience the magic of Bali's dry season beauty? Contact us today to plan your transformative
              journey.
            </p>
            <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
              PLAN YOUR TRIP
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#5d6152] text-[#e8e3d7]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-light tracking-widest">THE BALI WAY</span>
              <p className="mt-4 text-sm text-[#e8e3d7]/70">
                Your gateway to transformation on the magical island of Bali.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Explore</h3>
              <nav className="flex flex-col space-y-2 text-sm text-[#e8e3d7]/70">
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Adventures
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Culture
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Relaxation
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Cuisine
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm text-[#e8e3d7]/70">
                <Link href="#" className="hover:text-[#e8e3d7]">
                  About Us
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Our Team
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Testimonials
                </Link>
                <Link href="#" className="hover:text-[#e8e3d7]">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Contact</h3>
              <nav className="flex flex-col space-y-2 text-sm text-[#e8e3d7]/70">
                <p>info@thebaliway.com</p>
                <p>+62 123 456 7890</p>
                <p>Jl. Raya Ubud, Bali, Indonesia</p>
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#e8e3d7]/20 text-center text-sm text-[#e8e3d7]/70">
            &copy; {new Date().getFullYear()} The Bali Way. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

