"use client"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CheckCircle, ChevronRight, Leaf, Users, Shield, Microscope, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

// Define the activities
const activities = [
  {
    id: "research",
    title: "Research",
    icon: Microscope,
    description:
      "Participate in scientific research to understand and document the unique biodiversity of Ivohiboro Lost Forest.",
    tasks: [
      "Flora and fauna inventory",
      "Habitat monitoring",
      "Data collection and analysis",
      "Species identification",
      "Research assistance for ongoing studies",
    ],
  },
  {
    id: "restoration",
    title: "Restoration",
    icon: Leaf,
    description: "Help restore degraded areas of the forest through reforestation and habitat rehabilitation efforts.",
    tasks: [
      "Native tree planting",
      "Seed collection and nursery work",
      "Invasive species removal",
      "Soil conservation techniques",
      "Monitoring restoration progress",
    ],
  },
  {
    id: "protection",
    title: "Protection",
    icon: Shield,
    description: "Join efforts to protect the forest from threats such as illegal logging, poaching, and encroachment.",
    tasks: [
      "Forest patrols with rangers",
      "Boundary maintenance",
      "Fire prevention activities",
      "Wildlife monitoring",
      "Conservation awareness campaigns",
    ],
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    description: "Work with local communities to promote sustainable practices and environmental education.",
    tasks: [
      "Educational workshops for local schools",
      "Sustainable livelihood training",
      "Community outreach programs",
      "Cultural exchange activities",
      "Ecotourism development support",
    ],
  },
]

// Define the form schemas
const personalInfoSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  dateOfBirth: z.date({ required_error: "Please select your date of birth." }),
  nationality: z.string().min(2, { message: "Please enter your nationality." }),
  address: z.string().min(5, { message: "Please enter your address." }),
  emergencyContact: z.string().min(10, { message: "Please provide an emergency contact." }),
})

const expertiseSchema = z.object({
  occupation: z.string().min(2, { message: "Please enter your occupation." }),
  educationLevel: z.string().min(1, { message: "Please select your education level." }),
  fieldOfStudy: z.string().optional(),
  university: z.string().optional(),
  skills: z.string().min(10, { message: "Please describe your relevant skills." }),
  languages: z.string().min(2, { message: "Please list languages you speak." }),
  previousExperience: z.string().optional(),
})

const motivationSchema = z.object({
  preferredActivity: z.string().min(1, { message: "Please select a preferred activity." }),
  availabilityStart: z.date({ required_error: "Please select a start date." }),
  availabilityEnd: z.date({ required_error: "Please select an end date." }),
  stayDuration: z.string().min(1, { message: "Please select your intended duration." }),
  motivation: z.string().min(50, { message: "Please describe your motivation (minimum 50 characters)." }),
  expectations: z.string().min(50, { message: "Please describe your expectations (minimum 50 characters)." }),
  healthConsiderations: z.string().optional(),
  dietaryRequirements: z.string().optional(),
  additionalInfo: z.string().optional(),
})

// Combine all schemas
const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...expertiseSchema.shape,
  ...motivationSchema.shape,
})

export default function BecomeVolunteerPage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      nationality: "",
      emergencyContact: "",
      occupation: "",
      educationLevel: "",
      fieldOfStudy: "",
      university: "",
      skills: "",
      languages: "",
      previousExperience: "",
      preferredActivity: "",
      stayDuration: "",
      motivation: "",
      expectations: "",
      healthConsiderations: "",
      dietaryRequirements: "",
      additionalInfo: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
  }

  // Navigate between form steps
  const nextStep = async () => {
    let isValid = false

    if (step === 1) {
      isValid = await form.trigger(
        ["firstName", "lastName", "email", "phone", "dateOfBirth", "nationality", "address", "emergencyContact"],
        { shouldFocus: true },
      )
    } else if (step === 2) {
      isValid = await form.trigger(["occupation", "educationLevel", "skills", "languages"], { shouldFocus: true })
    }

    if (isValid) setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Ivohiboro Lost Forest"
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
              Become a Volunteer
            </h1>
            <p className="text-lg text-[#e8e4d5]/90 font-light leading-relaxed">
              Join our mission to protect and restore the unique biodiversity of Ivohiboro Lost Forest through hands-on
              conservation work and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-[#e8e4d5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-6">Make a Difference in Ivohiboro</h2>
            <p className="text-[#3c4a3a]/80 leading-relaxed mb-8">
              Ivohiboro Lost Forest is a biodiversity hotspot facing numerous threats from deforestation, climate
              change, and habitat fragmentation. Our volunteer program offers a unique opportunity to contribute
              directly to conservation efforts while experiencing the extraordinary beauty and diversity of this unique
              ecosystem.
            </p>
            <p className="text-[#3c4a3a]/80 leading-relaxed">
              Whether you're a student, professional, retiree, or simply passionate about conservation, we welcome
              volunteers from all backgrounds who share our commitment to protecting this irreplaceable natural
              treasure.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className="bg-[#f5f2e8] border-none shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3c4a3a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#3c4a3a]/20 transition-colors duration-300">
                      <activity.icon className="h-6 w-6 text-[#3c4a3a]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#3c4a3a] mb-2">{activity.title}</h3>
                      <p className="text-[#3c4a3a]/80 mb-4">{activity.description}</p>
                      <ul className="space-y-1">
                        {activity.tasks.map((task, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-[#3c4a3a]/80">
                            <span className="text-[#c4a76c] mt-1">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Requirements Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-light tracking-wide text-[#3c4a3a] mb-6 text-center">
              Volunteer Requirements
            </h2>
            <div className="bg-[#f5f2e8] p-8 rounded-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#c4a76c] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#3c4a3a]">Age Requirement:</span>
                    <span className="text-[#3c4a3a]/80"> 18 years or older (16-17 with parental consent)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#c4a76c] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#3c4a3a]">Time Commitment:</span>
                    <span className="text-[#3c4a3a]/80"> Minimum 2 weeks, preferred 1 month or longer</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#c4a76c] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#3c4a3a]">Physical Fitness:</span>
                    <span className="text-[#3c4a3a]/80">
                      {" "}
                      Good general health and ability to walk on uneven terrain
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#c4a76c] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#3c4a3a]">Language:</span>
                    <span className="text-[#3c4a3a]/80"> Basic English proficiency (French or Malagasy is a plus)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#c4a76c] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#3c4a3a]">Attitude:</span>
                    <span className="text-[#3c4a3a]/80">
                      {" "}
                      Positive mindset, flexibility, cultural sensitivity, and teamwork
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-[#d8d4c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-[#3c4a3a] mb-8 text-center">Apply to Volunteer</h2>

            {isSubmitted ? (
              <div className="bg-[#f5f2e8] p-8 rounded-sm text-center">
                <div className="mb-6 h-20 w-20 rounded-full bg-[#3c4a3a]/10 flex items-center justify-center mx-auto">
                  <Heart className="h-10 w-10 text-[#c4a76c]" />
                </div>
                <h3 className="text-2xl font-light text-[#3c4a3a] mb-4">Thank You!</h3>
                <p className="text-[#3c4a3a]/80 mb-6">
                  Your volunteer application has been submitted successfully. Our team will review your information and
                  contact you within 5-7 business days to discuss the next steps.
                </p>
                <p className="text-[#3c4a3a]/80">
                  If you have any questions in the meantime, please contact us at{" "}
                  <span className="text-[#3c4a3a] font-medium">volunteer@ivohiboro.org</span>
                </p>
              </div>
            ) : (
              <div className="bg-[#f5f2e8] p-8 rounded-sm">
                {/* Form Steps Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`flex flex-col items-center ${step >= 1 ? "text-[#3c4a3a]" : "text-[#3c4a3a]/40"}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-[#c4a76c] text-white" : "bg-[#3c4a3a]/20 text-[#3c4a3a]/40"}`}
                    >
                      1
                    </div>
                    <span className="text-xs">Personal Info</span>
                  </div>
                  <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? "bg-[#c4a76c]" : "bg-[#3c4a3a]/20"}`}></div>
                  <div className={`flex flex-col items-center ${step >= 2 ? "text-[#3c4a3a]" : "text-[#3c4a3a]/40"}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-[#c4a76c] text-white" : "bg-[#3c4a3a]/20 text-[#3c4a3a]/40"}`}
                    >
                      2
                    </div>
                    <span className="text-xs">Expertise</span>
                  </div>
                  <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? "bg-[#c4a76c]" : "bg-[#3c4a3a]/20"}`}></div>
                  <div className={`flex flex-col items-center ${step >= 3 ? "text-[#3c4a3a]" : "text-[#3c4a3a]/40"}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-[#c4a76c] text-white" : "bg-[#3c4a3a]/20 text-[#3c4a3a]/40"}`}
                    >
                      3
                    </div>
                    <span className="text-xs">Motivation</span>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-[#3c4a3a]">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your first name" {...field} className="bg-white" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your last name" {...field} className="bg-white" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your email" {...field} type="email" className="bg-white" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your phone number" {...field} className="bg-white" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-[#3c4a3a]">Date of Birth</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal bg-white",
                                        !field.value && "text-muted-foreground",
                                      )}
                                    >
                                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Nationality</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your nationality" {...field} className="bg-white" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Address</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter your full address"
                                  {...field}
                                  className="bg-white resize-none"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="emergencyContact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Emergency Contact</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Name and phone number of emergency contact"
                                  {...field}
                                  className="bg-white"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Please provide the name and phone number of someone we can contact in case of emergency.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Step 2: Expertise */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-[#3c4a3a]">Expertise & Background</h3>

                        <FormField
                          control={form.control}
                          name="occupation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Current Occupation</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your current occupation" {...field} className="bg-white" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="educationLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Education Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select your highest education level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="high_school">High School</SelectItem>
                                  <SelectItem value="associates">Associate's Degree</SelectItem>
                                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                                  <SelectItem value="masters">Master's Degree</SelectItem>
                                  <SelectItem value="doctorate">Doctorate</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fieldOfStudy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">Field of Study</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="E.g., Biology, Environmental Science"
                                    {...field}
                                    className="bg-white"
                                  />
                                </FormControl>
                                <FormDescription className="text-[#3c4a3a]/60">If applicable</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="university"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#3c4a3a]">University/Institution</FormLabel>
                                <FormControl>
                                  <Input placeholder="Name of your institution" {...field} className="bg-white" />
                                </FormControl>
                                <FormDescription className="text-[#3c4a3a]/60">If applicable</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Relevant Skills</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe your skills relevant to conservation work"
                                  {...field}
                                  className="bg-white resize-none"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Include both technical and soft skills that would be valuable for conservation work.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="languages"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Languages Spoken</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="List languages and proficiency level"
                                  {...field}
                                  className="bg-white"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                E.g., English (fluent), French (intermediate), Malagasy (basic)
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="previousExperience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Previous Volunteer Experience</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe any previous volunteer or conservation experience"
                                  {...field}
                                  className="bg-white resize-none"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Optional - Include organizations, roles, and duration
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Step 3: Motivation */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-[#3c4a3a]">Motivation & Availability</h3>

                        <FormField
                          control={form.control}
                          name="preferredActivity"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[#3c4a3a]">Preferred Activity Area</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="research" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Research</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="restoration" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Restoration</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="protection" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Protection</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="community" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Community</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="availabilityStart"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="text-[#3c4a3a]">Available From</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal bg-white",
                                          !field.value && "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date < new Date()}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="availabilityEnd"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="text-[#3c4a3a]">Available Until</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal bg-white",
                                          !field.value && "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date < (form.getValues().availabilityStart || new Date())}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="stayDuration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Intended Duration</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select your intended stay duration" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="2_weeks">2 weeks</SelectItem>
                                  <SelectItem value="1_month">1 month</SelectItem>
                                  <SelectItem value="2_3_months">2-3 months</SelectItem>
                                  <SelectItem value="3_6_months">3-6 months</SelectItem>
                                  <SelectItem value="6_plus_months">6+ months</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="motivation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Motivation</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Why do you want to volunteer at Ivohiboro Lost Forest?"
                                  {...field}
                                  className="bg-white resize-none min-h-[120px]"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Please share your personal motivation and what you hope to contribute.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="expectations"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Expectations</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="What do you hope to learn or achieve during your volunteer experience?"
                                  {...field}
                                  className="bg-white resize-none min-h-[120px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="healthConsiderations"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Health Considerations</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any health conditions or limitations we should be aware of?"
                                  {...field}
                                  className="bg-white resize-none"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Optional - This helps us ensure your safety and comfort during your stay.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dietaryRequirements"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Dietary Requirements</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Any dietary restrictions or preferences?"
                                  {...field}
                                  className="bg-white"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Optional - E.g., vegetarian, vegan, allergies
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#3c4a3a]">Additional Information</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Anything else you'd like to share with us?"
                                  {...field}
                                  className="bg-white resize-none"
                                />
                              </FormControl>
                              <FormDescription className="text-[#3c4a3a]/60">
                                Optional - Any other information you think might be relevant
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="border-[#3c4a3a] text-[#3c4a3a] hover:bg-[#3c4a3a] hover:text-white"
                        >
                          Previous
                        </Button>
                      )}

                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="ml-auto bg-[#3c4a3a] text-white hover:bg-[#2a362a]"
                        >
                          Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="ml-auto bg-[#c4a76c] text-[#262b22] hover:bg-[#b39c59]">
                          Submit Application
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            )}
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

