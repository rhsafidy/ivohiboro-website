'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, Heart } from 'lucide-react';

// Add this tailwind animation utility
const shimmerAnimation = {
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' },
  },
  '@keyframes gentle-float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-5px)' },
  },
  '@keyframes soft-glow': {
    '0%, 100%': { boxShadow: '0 0 5px rgba(197, 173, 106, 0.3)' },
    '50%': { boxShadow: '0 0 15px rgba(197, 173, 106, 0.5)' },
  },
  '.animate-shimmer': {
    animation: 'shimmer 3s infinite linear',
    backgroundSize: '200% 100%',
  },
  '.animate-gentle-float': {
    animation: 'gentle-float 6s ease-in-out infinite',
  },
  '.animate-soft-glow': {
    animation: 'soft-glow 4s ease-in-out infinite',
  },
  '.bg-size-200': {
    backgroundSize: '200% 100%',
  },
};

export default function BaliLandingPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const HeroSlideshow = () => {
    const slides = [
      '/images/Ring-tailed-Lemur.png',
      '/images/images-2.png',
      '/images/Local.People.6.png',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
      const slideInterval = setInterval(goToNextSlide, 6000);
      return () => clearInterval(slideInterval);
    }, [goToNextSlide]);

    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src || '/placeholder.svg'}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-cover filter brightness-[0.85] contrast-[1.05] saturate-[1.05]"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#262b22]/70 to-transparent z-10"></div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentSlide === index ? 'bg-[#c5ad6a] w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#e8e3d7]">
      {/* Fixed Donation Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="rounded-none bg-[#27694F] text-white hover:bg-[#27694F]/90 px-6 py-5 h-auto shadow-lg flex items-center gap-2 group transition-all duration-500 hover:scale-105 border border-[#c5ad6a]/30 animate-[pulse_6s_ease-in-out_infinite] hover:animate-none relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-[#27694F] to-[#c5ad6a] opacity-0 group-hover:opacity-80 transition-opacity duration-1000"></span>
          <Heart className="h-5 w-5 group-hover:text-white transition-colors relative z-10" />
          <span className="text-sm tracking-widest font-light relative z-10">
            DONATE
          </span>
        </Button>
      </div>

      {/* Header */}
      <header className="absolute top-0 z-40 w-full">
        <div className="container flex h-24 items-center justify-between py-4">
          <div className="text-[#e8e3d7] text-xl tracking-widest font-light drop-shadow-md">
            IVOHIBORO
          </div>
          <nav className="flex items-center gap-4 md:gap-8">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('pricing')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="#pricing"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                PRICING
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === 'pricing' && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border-l-2 border-[#c5ad6a]">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Standard Package
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Premium Package
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Custom Tours
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('visit')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="#visit"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                VISIT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === 'visit' && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border-l-2 border-[#c5ad6a]">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Popular Destinations
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Hidden Gems
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Seasonal Tours
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="#about"
                className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80 flex items-center"
              >
                ABOUT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === 'about' && (
                <div className="absolute right-0 md:left-0 mt-2 w-48 bg-[#e8e3d7] shadow-lg py-2 px-3 border-l-2 border-[#c5ad6a]">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-[#262b22] hover:text-[#27694F]"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="#contact"
              className="text-sm font-light tracking-wider text-[#e8e3d7] hover:opacity-80"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Auto Slideshow */}
        <section className="relative w-full min-h-screen">
          {/* Background slideshow that spans full width */}
          <HeroSlideshow />

          <div className="relative z-10 container mx-auto px-4 md:px-6 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Content Column */}
              <div className="lg:col-span-6 xl:col-span-5 bg-[#e8e3d7]/60 p-8 lg:p-12 backdrop-blur-sm border-l-2 border-[#c5ad6a]/50">
                <div className="max-w-2xl">
                  <div className="w-20 h-[4px] bg-[#c5ad6a] mb-3"></div>
                  <h2 className="text-sm font-light tracking-widest text-[#5d6152] mb-5">
                    WELCOME TO
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-[500] font-nauryz tracking-wide text-[#262b22] mb-6">
                    Ivohiboro lost forest
                  </h1>
                  <p className="text-sm text-[#262b22]/100 leading-relaxed mb-8 font-[400]">
                    Crave new adventures, mystical experiences and serene
                    landscapes? Bali's dry season offers a unique beauty. We
                    make sure that you'll get an experience you'll never forget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-none bg-[#27694F] text-[#e8e3d7] hover:bg-[#27694F]/90 px-8 py-3 h-auto text-xs tracking-widest relative overflow-hidden group">
                      <span className="relative z-10">EXPLORE BALI</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-none border-[#c5ad6a] text-[#262b22] bg-[#ffffff]/80 hover:bg-[#ffffff]/60 px-8 py-3 h-auto text-xs tracking-widest"
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
          {/* <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
            <div className="w-32 h-32 border border-[#c5ad6a]/30 rounded-full flex items-center justify-center animate-gentle-float">
              <div className="w-24 h-24 border border-[#c5ad6a]/50 rounded-full"></div>
            </div>
          </div> */}
        </section>

        {/* Metrics Section */}
        <section className="w-full py-20 bg-[#d8d4c5] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border border-[#c5ad6a]/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 border border-[#c5ad6a]/20 rounded-full translate-x-1/4 translate-y-1/4"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="w-16 h-[2px] bg-[#c5ad6a] mx-auto mb-6"></div>
              <h2 className="text-3xl font-light tracking-wide text-[#27694F] mb-4">
                OUR JOURNEY IN NUMBERS
              </h2>
              <p className="text-[#3c4a3a]/80">
                For over a decade, we've been creating transformative
                experiences across Bali's sacred landscapes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Travelers */}
              <div className="group bg-[#e8e4d5]/50 p-6 rounded-sm transition-all duration-500 hover:bg-[#e8e4d5] hover:shadow-md hover:-translate-y-1 hover:border-t-2 hover:border-[#c5ad6a]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#27694F]/10 flex items-center justify-center mb-4 group-hover:bg-[#27694F]/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27694F]/0 via-[#c5ad6a]/30 to-[#27694F]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_8s_linear_infinite]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#27694F] relative z-10"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-extralight text-[#262b22] mb-1 group-hover:text-[#27694F] transition-colors duration-500">
                    <span className="inline-block" data-count="17508">
                      17,508
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#5d6152] mb-3 tracking-wider">
                    TRAVELERS
                  </div>
                  <p className="text-sm text-[#262b22]/70 leading-relaxed">
                    Happy travelers who have experienced our Bali tours
                  </p>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="group bg-[#e8e4d5]/50 p-6 rounded-sm transition-all duration-500 hover:bg-[#e8e4d5] hover:shadow-md hover:-translate-y-1 hover:border-t-2 hover:border-[#c5ad6a]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#27694F]/10 flex items-center justify-center mb-4 group-hover:bg-[#27694F]/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27694F]/0 via-[#c5ad6a]/30 to-[#27694F]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_8s_linear_infinite]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#27694F] relative z-10"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-extralight text-[#262b22] mb-1 group-hover:text-[#27694F] transition-colors duration-500">
                    <span className="inline-block" data-count="98">
                      98
                    </span>
                    <span className="text-3xl">%</span>
                  </div>
                  <div className="text-sm font-medium text-[#5d6152] mb-3 tracking-wider">
                    SATISFACTION
                  </div>
                  <p className="text-sm text-[#262b22]/70 leading-relaxed">
                    Satisfaction rate from our customer reviews
                  </p>
                </div>
              </div>

              {/* Area */}
              <div className="group bg-[#e8e4d5]/50 p-6 rounded-sm transition-all duration-500 hover:bg-[#e8e4d5] hover:shadow-md hover:-translate-y-1 hover:border-t-2 hover:border-[#c5ad6a]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#27694F]/10 flex items-center justify-center mb-4 group-hover:bg-[#27694F]/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27694F]/0 via-[#c5ad6a]/30 to-[#27694F]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_8s_linear_infinite]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#27694F] relative z-10"
                    >
                      <path d="M15 21v-4a2 2 0 0 1 2-2h4"></path>
                      <path d="M7 4v2a3 3 0 0 0 3 3h0a2 2 0 0 1 2 2v0"></path>
                      <path d="M3 11v2a3 3 0 0 0 3 3h0"></path>
                      <path d="M21 3a9 9 0 0 0-9 9"></path>
                      <path d="M3 21a9 9 0 0 1 9-9"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-extralight text-[#262b22] mb-1 group-hover:text-[#27694F] transition-colors duration-500">
                    <span className="inline-block" data-count="1250">
                      1,250
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#5d6152] mb-3 tracking-wider">
                    KM²
                  </div>
                  <p className="text-sm text-[#262b22]/70 leading-relaxed">
                    Area of Bali we've explored and documented
                  </p>
                </div>
              </div>

              {/* Destinations */}
              <div className="group bg-[#e8e4d5]/50 p-6 rounded-sm transition-all duration-500 hover:bg-[#e8e4d5] hover:shadow-md hover:-translate-y-1 hover:border-t-2 hover:border-[#c5ad6a]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#27694F]/10 flex items-center justify-center mb-4 group-hover:bg-[#27694F]/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27694F]/0 via-[#c5ad6a]/30 to-[#27694F]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_8s_linear_infinite]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#27694F] relative z-10"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="text-5xl font-extralight text-[#262b22] mb-1 group-hover:text-[#27694F] transition-colors duration-500">
                    <span className="inline-block" data-count="127">
                      127
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#5d6152] mb-3 tracking-wider">
                    DESTINATIONS
                  </div>
                  <p className="text-sm text-[#262b22]/70 leading-relaxed">
                    Unique destinations included in our tour packages
                  </p>
                </div>
              </div>

              {/* Years */}
              <div className="group bg-[#e8e4d5]/50 p-6 rounded-sm transition-all duration-500 hover:bg-[#e8e4d5] hover:shadow-md hover:-translate-y-1 hover:border-t-2 hover:border-[#c5ad6a]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#27694F]/10 flex items-center justify-center mb-4 group-hover:bg-[#27694F]/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27694F]/0 via-[#c5ad6a]/30 to-[#27694F]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_8s_linear_infinite]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#27694F] relative z-10"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                      <path d="m9 16 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="text-5xl font-extralight text-[#262b22] mb-1 group-hover:text-[#27694F] transition-colors duration-500">
                    <span className="inline-block" data-count="12">
                      12
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#5d6152] mb-3 tracking-wider">
                    YEARS
                  </div>
                  <p className="text-sm text-[#262b22]/70 leading-relaxed">
                    Experience creating unforgettable Bali journeys
                  </p>
                </div>
              </div>
            </div>

            {/* Optional: Add a subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 pointer-events-none"></div>
          </div>
        </section>

        {/* License to Live Section */}
        <section className="w-full py-20 bg-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">
              START YOUR JOURNEY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8 hover:shadow-md transition-all duration-500 group">
                <div className="w-16 h-16 border border-[#c5ad6a] rounded-full flex items-center justify-center mb-6 group-hover:animate-gentle-float">
                  <div className="w-12 h-12 border border-[#c5ad6a] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">
                  ADVENTURE
                </h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Discover hidden temples, volcanic landscapes, and ancient
                  rituals in Bali's diverse terrain.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c5ad6a] text-[#262b22] hover:bg-[#c5ad6a]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto group-hover:border-[#27694F] transition-colors duration-500"
                >
                  EXPLORE
                </Button>
              </div>
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8 hover:shadow-md transition-all duration-500 group">
                <div className="w-16 h-16 border border-[#c5ad6a] rounded-full flex items-center justify-center mb-6 group-hover:animate-gentle-float">
                  <div className="w-12 h-12 border border-[#c5ad6a] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">
                  CULTURE
                </h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Immerse yourself in Balinese traditions, ceremonies, and the
                  spiritual practices of local communities.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c5ad6a] text-[#262b22] hover:bg-[#c5ad6a]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto group-hover:border-[#27694F] transition-colors duration-500"
                >
                  DISCOVER
                </Button>
              </div>
              <div className="flex flex-col items-center bg-[#d8d4c5] p-8 hover:shadow-md transition-all duration-500 group">
                <div className="w-16 h-16 border border-[#c5ad6a] rounded-full flex items-center justify-center mb-6 group-hover:animate-gentle-float">
                  <div className="w-12 h-12 border border-[#c5ad6a] rounded-full"></div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-4">
                  RELAXATION
                </h3>
                <p className="text-center text-[#262b22]/70 mb-6">
                  Find peace in Bali's serene landscapes, from quiet beaches to
                  meditation retreats in dry season beauty.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#c5ad6a] text-[#262b22] hover:bg-[#c5ad6a]/10 px-6 py-2 h-auto text-xs tracking-widest mt-auto group-hover:border-[#27694F] transition-colors duration-500"
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
                <h2 className="text-3xl font-light tracking-wide text-[#262b22] mb-6">
                  GALLERY
                </h2>
                <p className="text-[#262b22]/70 mb-8 leading-relaxed">
                  Experience the beauty of Bali's dry landscapes, from golden
                  rice terraces to ancient stone temples. Our gallery captures
                  the essence of this magical island during its most serene
                  season.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-[#27694F] text-[#262b22] hover:bg-[#27694F]/10 px-8 py-2 h-auto text-xs tracking-widest"
                >
                  VIEW ALL
                </Button>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={`/images/Crossandra-sp.png`}
                        alt={`Bali scenery ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]"
                      />
                      <div className="absolute inset-0 bg-[#262b22]/0 group-hover:bg-gradient-to-t from-[#27694F]/40 to-transparent transition-all duration-500 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-wider">
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
                <div className="bg-[#27694F] p-8 lg:p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#27694F] via-[#c5ad6a]/20 to-[#27694F] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <h2 className="text-3xl font-light tracking-wide text-[#e8e3d7] mb-8 relative z-10">
                    HELLO, BEAUTIFUL SOUL
                  </h2>
                  <p className="text-[#e8e3d7]/90 mb-6 leading-relaxed relative z-10">
                    It's no coincidence that Bali is one of the top destinations
                    for spiritual seekers. The island has natural beauty,
                    artisan craftsmanship, exotic temples and friendly locals
                    that make it a place for everyone seeking transformation.
                  </p>
                  <p className="text-[#e8e3d7]/90 mb-8 leading-relaxed relative z-10">
                    We know that when you're thinking of your journey, choosing
                    whether you want spiritual growth, adventure, relaxation or
                    exploration is hard. That's why we're here: providing your
                    dream experience in Bali's beautiful dry landscapes.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-none border-[#e8e3d7] text-[#e8e3d7] hover:bg-[#e8e3d7]/10 px-6 py-2 h-auto text-xs tracking-widest relative z-10"
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
                  <div className="absolute inset-0 border-l-2 border-t-2 border-[#c5ad6a]/30 -translate-x-4 -translate-y-4 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">
              LATEST NEWS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col bg-[#e8e3d7] p-6 hover:shadow-md transition-all duration-500 group">
                <div className="relative h-[250px] w-full mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="New beach club opening in Seminyak"
                    fill
                    className="object-cover filter sepia-[0.2] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm text-[#c5ad6a] mb-2">JUNE 15, 2023</div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  New Beach Club Opens in Seminyak
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Experience the ultimate beachfront luxury at Bali's newest
                  hotspot, featuring infinity pools and sunset views.
                </p>
                <Button
                  variant="link"
                  className="text-[#27694F] p-0 h-auto text-sm tracking-wider mt-auto group-hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  READ MORE
                </Button>
              </div>
              <div className="flex flex-col bg-[#e8e3d7] p-6 hover:shadow-md transition-all duration-500 group">
                <div className="relative h-[250px] w-full mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Traditional Balinese festival"
                    fill
                    className="object-cover filter sepia-[0.2] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm text-[#c5ad6a] mb-2">MAY 28, 2023</div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  Upcoming Cultural Festivals in Ubud
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Mark your calendars for these authentic Balinese celebrations
                  that showcase the island's rich cultural heritage.
                </p>
                <Button
                  variant="link"
                  className="text-[#27694F] p-0 h-auto text-sm tracking-wider mt-auto group-hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  READ MORE
                </Button>
              </div>
              <div className="flex flex-col bg-[#e8e3d7] p-6 hover:shadow-md transition-all duration-500 group">
                <div className="relative h-[250px] w-full mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="New hiking trail in Bali mountains"
                    fill
                    className="object-cover filter sepia-[0.2] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm text-[#c5ad6a] mb-2">
                  APRIL 10, 2023
                </div>
                <h3 className="text-xl font-light tracking-wide text-[#262b22] mb-3">
                  New Hiking Trail Reveals Hidden Waterfall
                </h3>
                <p className="text-[#262b22]/70 mb-4 leading-relaxed">
                  Adventure seekers can now explore this newly accessible trail
                  leading to one of Bali's most spectacular waterfalls.
                </p>
                <Button
                  variant="link"
                  className="text-[#27694F] p-0 h-auto text-sm tracking-wider mt-auto group-hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-20 bg-[#27694F] text-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">
              HEALING WORDS
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute -top-8 left-0 text-[#c5ad6a] text-6xl opacity-30">
                  "
                </div>
                <p className="text-xl font-light italic text-center leading-relaxed mb-8 relative z-10">
                  Working with The Bali Way has been a life-changing experience.
                  The guides embody what true guidance should be, balancing
                  respect for my journey and the flow of nature. I've gained a
                  level of confidence and self-worth I couldn't have imagined.
                  They have an incredible knack for reading energy and guiding
                  me to what I need in the moment. Safe, authentic, and
                  inspiring.
                </p>
                <div className="absolute -bottom-8 right-0 text-[#c5ad6a] text-6xl opacity-30">
                  "
                </div>
              </div>
              <div className="text-center">
                <span className="inline-block h-[1px] w-8 bg-[#c5ad6a] mb-4"></span>
                <p className="text-center text-[#e8e3d7]/80">— KARA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-20 bg-[#e8e3d7]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light tracking-wide text-center text-[#262b22] mb-16">
                CONTACT US
              </h2>
              <form className="space-y-6 bg-[#d8d4c5] p-8 lg:p-12 border-l-2 border-[#c5ad6a]/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-light text-[#262b22]/80 tracking-wide"
                    >
                      NAME
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-[#27694F] focus:border-[#c5ad6a] focus:ring-0 rounded-none h-12 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-light text-[#262b22]/80 tracking-wide"
                    >
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="border-[#27694F] focus:border-[#c5ad6a] focus:ring-0 rounded-none h-12 bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-light text-[#262b22]/80 tracking-wide"
                  >
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="border-[#27694F] focus:border-[#c5ad6a] focus:ring-0 rounded-none h-12 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-light text-[#262b22]/80 tracking-wide"
                  >
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="border-[#27694F] focus:border-[#c5ad6a] focus:ring-0 rounded-none min-h-[150px] bg-transparent"
                  />
                </div>
                <div className="text-center pt-4">
                  <Button className="rounded-none bg-[#27694F] text-white hover:bg-[#27694F]/90 px-8 py-3 h-auto text-sm tracking-widest relative overflow-hidden group">
                    <span className="absolute -inset-x-1 -bottom-1 h-1 bg-[#c5ad6a] opacity-50 group-hover:animate-[pulse_4s_ease-in-out_infinite]"></span>
                    <span className="relative z-10">SEND MESSAGE</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="w-full py-20 bg-[#d8d4c5]">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-light tracking-wide text-[#262b22] mb-8">
              BECOME A TRAVELER
            </h2>
            <p className="text-[#262b22]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to experience the magic of Bali's dry season beauty? Contact
              us today to plan your transformative journey.
            </p>
            <Button className="rounded-none bg-[#27694F] text-white hover:bg-[#27694F]/90 px-8 py-3 h-auto text-sm tracking-widest relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-soft-glow">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#27694F] to-[#c5ad6a] transition-all duration-1000 group-hover:w-full"></span>
              <span className="relative z-10">PLAN YOUR TRIP</span>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#27694F] text-[#e8e3d7]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-light tracking-widest">
                THE BALI WAY
              </span>
              <p className="mt-4 text-sm text-[#e8e3d7]/70">
                Your gateway to transformation on the magical island of Bali.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Explore</h3>
              <nav className="flex flex-col space-y-2 text-sm text-[#e8e3d7]/70">
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Adventures
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Culture
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Relaxation
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Cuisine
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm text-[#e8e3d7]/70">
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Our Team
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
                  Testimonials
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c5ad6a] transition-colors duration-300"
                >
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
  );
}
