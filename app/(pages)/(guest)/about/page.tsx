import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Rakoto Andriamaro',
    role: 'Conservation Director',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'With over 15 years of experience in Madagascar conservation, Dr. Andriamaro leads our scientific research and restoration strategies for Ivohiboro.',
  },
  {
    id: 2,
    name: 'Solofo Razafindrakoto',
    role: 'Community Outreach Manager',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Born in the region, Solofo bridges the gap between conservation efforts and local communities, ensuring sustainable development.',
  },
  {
    id: 3,
    name: 'Dr. Emma Johnson',
    role: 'Biodiversity Specialist',
    image: '/placeholder.svg?height=400&width=400',
    bio: "Specializing in endangered species conservation, Emma monitors and documents Ivohiboro's unique wildlife, including the rare Ring-tailed Lemurs.",
  },
  {
    id: 4,
    name: 'Jean-Claude Ratsimbazafy',
    role: 'Restoration Technician',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'An expert in the Foxhole Forest technique, Jean-Claude leads our field teams in implementing restoration activities throughout the region.',
  },
];

const partners = [
  {
    id: 1,
    name: 'MICET',
    logo: '/placeholder.svg?height=120&width=120',
    slug: 'micet',
  },
  {
    id: 2,
    name: 'Centre ValBio',
    logo: '/placeholder.svg?height=120&width=120',
    slug: 'centre-valbio',
  },
  {
    id: 3,
    name: 'Rainforest Trust',
    logo: '/placeholder.svg?height=120&width=120',
    slug: 'rainforest-trust',
  },
  {
    id: 4,
    name: 'Madagascar National Parks',
    logo: '/placeholder.svg?height=120&width=120',
    slug: 'madagascar-national-parks',
  },
  {
    id: 5,
    name: 'The Phoenix Conservancy',
    logo: '/placeholder.svg?height=120&width=120',
    slug: 'phoenix-conservancy',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Crossandra-sp.png"
            alt="Ivohiboro forest landscape"
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
              Our Story
            </h1>
            <p className="text-lg text-[#e8e4d5]/90 font-light leading-relaxed">
              Discover how we're protecting and restoring Madagascar's rare
              Ivohiboro forest and supporting the communities that depend on it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Creative Layout with Images */}
      <section className="w-full py-20 bg-[#e8e4d5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-8">
                OUR MISSION
              </h2>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                Ivohiboro (pronounced eev-wee-bore) is an isolated patch of
                rainforest in southeastern Madagascar. Despite its small size of
                just 4.7 square miles (about a fifth the size of Manhattan
                Island), Ivohiboro is home to numerous endangered species,
                including a rare montane rainforest population of Ring-tailed
                Lemurs.
              </p>
              <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">
                The forest is also the surrounding region's only source of
                drinking water, as the landscape is dominated by arid grassland
                and savannah. Our mission is to protect this vital ecosystem
                while improving the lives of local communities who depend on it.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full flex items-center justify-center mr-6">
                  <div className="w-8 h-8 border border-[#c4a76c] rounded-full"></div>
                </div>
                <p className="text-[#3c4a3a] italic">
                  "Protecting Ivohiboro means protecting both biodiversity and
                  human livelihoods."
                </p>
              </div>
            </div>

            {/* Creative Image Layout */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-12 gap-4 h-[500px]">
                {/* Large main image */}
                <div className="col-span-8 row-span-2 relative">
                  <Image
                    src="/images/Calumma-crypticum.png"
                    alt="Ivohiboro forest landscape"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                {/* Smaller top right image */}
                <div className="col-span-4 relative">
                  <Image
                    src="/images/images-2.png"
                    alt="Ring-tailed Lemur"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                {/* Smaller bottom right image */}
                <div className="col-span-4 relative">
                  <Image
                    src="/images/Hypoxis-angustifolia.png"
                    alt="Foxhole Forest restoration site"
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
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-16">
            OUR VALUES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">
                ECOLOGICAL RESTORATION
              </h3>
              <p className="text-[#3c4a3a]/80">
                We believe in restoring ecosystems to their natural state while
                enhancing their resilience to future threats. Our Foxhole Forest
                technique accelerates natural regeneration processes, allowing
                the forest to expand and thrive.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">
                COMMUNITY EMPOWERMENT
              </h3>
              <p className="text-[#3c4a3a]/80">
                Conservation cannot succeed without addressing human needs. We
                create economic opportunities through employment and social
                enterprise programs, ensuring that protecting Ivohiboro also
                improves local livelihoods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#c4a76c] rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-[#c4a76c] rounded-full"></div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#3c4a3a] mb-4">
                SUSTAINABLE SOLUTIONS
              </h3>
              <p className="text-[#3c4a3a]/80">
                We develop self-sustaining conservation models that continue to
                function long after initial funding ends. Our social enterprise
                initiatives create economic engines that fund ongoing
                restoration and protection efforts.
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
                  src="/images/Ring-tailed-Lemur.png"
                  alt="Firebreak construction at Ivohiboro"
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
              <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-8">
                OUR APPROACH
              </h2>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                Our approach to conservation integrates three essential
                components: protection, restoration, and community development.
                We began in 2019 with emergency construction of firebreaks to
                protect all sides of Ivohiboro from wildfires that threatened
                its existence.
              </p>
              <p className="text-[#3c4a3a]/80 mb-6 leading-relaxed">
                For restoration, we developed the innovative "Foxhole Forest"
                technique, which creates natural nurseries for interior forest
                trees. This accelerates regeneration with native pioneer species
                even in harsh grassland conditions, allowing the forest to
                expand over time.
              </p>
              <p className="text-[#3c4a3a]/80 mb-8 leading-relaxed">
                Recognizing that nearby communities earn an average of just $50
                USD per household per year, we've integrated social enterprise
                programs into our conservation work. Projects like our Sakoa and
                Voatsiperifery Pepper initiatives create economic opportunities
                while incentivizing forest protection and restoration.
              </p>
              {/* <Button className="rounded-none bg-[#3c4a3a] text-white hover:bg-[#2a362a] px-8 py-3 h-auto text-sm tracking-widest">
                EXPLORE OUR PROJECTS
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-[#d8d4c5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-6">
            OUR TEAM
          </h2>
          <p className="text-center text-[#3c4a3a]/80 max-w-3xl mx-auto mb-16">
            Meet the dedicated conservationists and community leaders who make
            our work at Ivohiboro possible. Our diverse team combines scientific
            expertise with local knowledge to protect this unique ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col overflow-hidden rounded-sm bg-[#f5f2e8] shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-[#3c4a3a]">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-[#3c4a3a]/70">
                    {member.role}
                  </p>
                  <p className="flex-1 text-[#3c4a3a]/80 text-sm">
                    {member.bio}
                  </p>
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
          <h2 className="text-3xl font-light tracking-wide text-center text-[#3c4a3a] mb-6">
            OUR PARTNERS
          </h2>
          <p className="text-center text-[#3c4a3a]/80 max-w-3xl mx-auto mb-16">
            Our conservation efforts would not be possible without close
            collaboration with these organizations. Together, we're protecting
            Ivohiboro's biodiversity and supporting local communities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={`/partners/${partner.slug}`}
                className="group"
              >
                <div className="flex flex-col items-center p-6 bg-[#f5f2e8] rounded-sm transition-all duration-300 hover:shadow-md">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-white p-2 mb-4">
                    <Image
                      src={partner.logo || '/placeholder.svg'}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-[#3c4a3a] text-sm font-medium mb-2">
                    {partner.name}
                  </h3>
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

      {/* Success Section */}
      <section className="w-full py-20 bg-[#27694F] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-light tracking-wide text-center mb-12">
            OUR SUCCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-sm text-center">
              <div className="text-5xl font-light text-[#c5ad6a] mb-3">3</div>
              <p className="text-white/90">
                Wildfires near the forest boundary in the last four years,
                compared to dozens annually before our intervention
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-sm text-center">
              <div className="text-5xl font-light text-[#c5ad6a] mb-3">
                7,000+
              </div>
              <p className="text-white/90">
                Employment opportunities created for local communities through
                our conservation initiatives
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-sm text-center">
              <div className="text-5xl font-light text-[#c5ad6a] mb-3">6M</div>
              <p className="text-white/90">
                Tree seeds planted in 874 Foxhole Forests to accelerate natural
                regeneration
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-sm text-center">
              <div className="text-5xl font-light text-[#c5ad6a] mb-3">
                47km
              </div>
              <p className="text-white/90">
                Dual firebreaks constructed to completely surround and protect
                Ivohiboro
              </p>
            </div>
          </div>

          <p className="text-center text-white/80 max-w-3xl mx-auto mb-10">
            We've achieved remarkable success in Ivohiboro. For the first time
            in over a century, wildfires have been effectively controlled. Our
            social enterprise programs have begun generating sustainable
            funding, creating a model for long-term conservation.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-none bg-[#c4a76c] text-[#262b22] hover:bg-[#d3bb8e] px-8 py-3 h-auto text-sm tracking-widest">
              SUPPORT OUR WORK
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-white text-white hover:bg-white/10 px-8 py-3 h-auto text-sm tracking-widest"
            >
              LEARN MORE
            </Button>
          </div> */}
        </div>
      </section>

      {/* Fixed Donate Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href={'/donate'}>
          {' '}
          <Button className="rounded-none bg-[#d99201] text-white hover:bg-[#27694F]/90 px-6 py-5 h-auto shadow-lg flex items-center gap-2 group transition-all duration-500 hover:scale-105 border border-[#c5ad6a]/30  hover:animate-none relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[#27694F] to-[#c5ad6a] opacity-0 group-hover:opacity-80 transition-opacity duration-1000"></span>
            <Heart className="h-5 w-5 group-hover:text-white transition-colors relative z-10" />
            <span className="text-sm tracking-widest font-light relative z-10">
              DONATE
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
