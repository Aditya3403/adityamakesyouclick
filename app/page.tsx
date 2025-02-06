"use client";

import { ProfileHeader } from "@/components/profile-header"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const testimonials = [
  {
    id: 1,
    feedback: "My thumbnail editor, Aditya, consistently delivers high-quality, visually engaging work for our YouTube channel and Instagram page. His creativity, attention to detail, and ability to meet deadlines have significantly enhanced our brand's aesthetic appeal. Highly recommended!",
    client: "Avinash Kumar",
    role: "2M+ Subscribers on YouTube",
    avatar: "https://res.cloudinary.com/memoriesshare/image/upload/v1738304046/channels4_profile_3_nsxtqd.jpg"
  },
  {
    id: 2,
    feedback: "Aditya is a super professional & creative designer. He has created thumbnails for my YouTube channel @himsingh and delivers exceptional work. He treats his work very seriously and even go extra mile to ask and do changes as per needed. He always asks and make sure he delivers what you need and ready to make changes to suit your needs. I highly recommend working with Aditya for creativity, work ethic and exceptional service.",
    client: "Him Singh",
    role: "50K+ Subscribers on YouTube",
    avatar: "https://res.cloudinary.com/memoriesshare/image/upload/v1738592063/channels4_profile_4_qvrqym.jpg"
  },
  {
    id: 3,
    feedback: "Great thumbnail designer. If you're looking for a thumbnail designer who combines creativity with a strong work ethic, Aditya is the perfect choice. I highly recommend working with him!",
    client: "Sahil Bavdane",
    role: "40K+ Followers on IG",
    avatar: "https://res.cloudinary.com/memoriesshare/image/upload/v1738736165/channels4_profile_5_jl3cxm.jpg"
  }
]

export default function Portfolio() {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-7">
        {/* Top Section - More Responsive Grid */}
        <div className="flex-wrap grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-4 items-start">
          {/* Profile Header and Stats - Full Width on Small Screens */}
          <div className="lg:col-span-2 space-y-4 md:space-y-7">
            <ProfileHeader
              name="I&apos;m Aditya,"
              title="A Freelance Thumbnail Designer"
              description="I specialize in crafting visually captivating thumbnails that drive engagement!"
              avatarUrl="https://res.cloudinary.com/memoriesshare/image/upload/v1737641935/DP_yl2z6b.png"
            />

          <div className="flex-wrap grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-4 md:gap-4 group">
            <div className="bg-[#141414] rounded-xl p-3 sm:p-4 md:p-6 text-center border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white-600">2M+</h3>
              <p className="text-zinc-400 mt-1 sm:mt-2 text-base sm:text-lg lg:text-xl">Views Generated</p>
            </div>
            <div className="bg-[#141414] rounded-xl p-3 sm:p-4 md:p-6 text-center border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white-600">1000+</h3>
              <p className="text-zinc-400 mt-1 sm:mt-2 text-base sm:text-lg lg:text-xl">Designs Created</p>
            </div>
            <div className="bg-[#141414] rounded-xl p-3 sm:p-4 md:p-6 text-center border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white-600">10+</h3>
              <p className="text-zinc-400 mt-1 sm:mt-2 text-base sm:text-lg lg:text-xl">Satisfied Clients</p>
            </div>
          </div>

          </div>

          {/* About Section - Full Width on Small Screens */}
          <div className="flex flex-wrap bg-[#141414] rounded-xl p-4 md:p-4 space-y-2 border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300 h-full">
            <h5 className="text-lg md:text-lg font-semibold">I&apos;m a CS Engineer with a Passion for Designing YouTube & Instagram Thumbnails</h5>
            <p className="text-zinc-400 text-sm lg:text-sm md:text-sm sm:text-sm">
              I help businesses and content creators adapt to the evolving landscape of AI-driven content strategies. With a deep passion for visual storytelling and a proven track record of delivering high-performing designs, I empower brands to thrive in the digital space.
            </p>
          </div>
        </div>

        {/* Projects and Testimonials - More Responsive */}
        <div className="grid flex-wrap grid-cols-1 lg:grid-cols-3 gap-4 md:gap-4 items-start">
          {/* Project Cards - Full Width on Small Screens */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-4">
            <ProjectCard
              title="YouTube Thumbnails"
              description="Unlock the power of scroll-stopping YouTube thumbnails that increase views and engagement."
              imageUrl="https://res.cloudinary.com/memoriesshare/image/upload/v1737618823/Thumbnail_Banner_kml1is.png"
              link="/youtube-thumbnails"
            />
            <ProjectCard
              title="Instagram Thumbnails"
              description="Create a strong visual presence with eye-catching Instagram thumbnails tailored to your audience."
              imageUrl="https://res.cloudinary.com/memoriesshare/image/upload/v1737619074/Thumbnail_Banner_2_jujxg8.png"
              link="/instagram-thumbnails"
            />
          </div>

          {/* Testimonials Section */}
          <div className="bg-[#141414] rounded-xl border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300 h-full">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>

        {/* Why Work With Me Section - Responsive */}
        <div className="border-[#424242] border-2 border-dashed px-4 md:px-8 py-6 md:py-8 rounded-xl space-y-3 hover:border-white hover:border-opacity-40 transition-all duration-300 w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Work With Me</h2>
          <div className="container grid flex-wrap xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 md:gap-4 text-center">
            <Card className="bg-[#141414]">
              <CardContent className="md:p-6">
                <h3 className="text-lg xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-zinc-400 text-sm xl:text-lg lg:text-sm md:text-lg sm:text-sm">With over 2M views generated, my designs are strategically crafted to resonate with audiences and drive measurable engagement.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141414]">
              <CardContent className="md:p-6">
                <h3 className="text-lg xl:text-xl md:text-xl sm:text-lg font-semibold mb-2">Creative Excellence</h3>
                <p className="text-zinc-400 text-sm xl:text-lg lg:text-sm md:text-lg sm:text-sm">Having designed 1000+ thumbnails, I bring a wealth of creative experience, ensuring each project stands out and aligns with your brand&apos;s vision.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141414]">
              <CardContent className="md:p-6">
                <h3 className="text-lg xl:text-xl md:text-xl sm:text-lg font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-zinc-400 text-sm xl:text-lg lg:text-sm md:text-lg sm:text-sm">With 10+ satisfied clients, I prioritize your goals and deliver visually compelling content that exceeds expectations.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section - Responsive Flex and Grid */}
       <div className="container flex flex-wrap flex-col lg:flex-row items-start bg-[#141414] p-4 md:p-5 rounded-xl hover:border-white border border-transparent hover:border-opacity-40 transition-all duration-300 w-full gap-4 md:gap-4">
          {/* Left Section */}
          <div className="flex-1 space-y-2 w-full">
            <div className="flex flex-wrap items-center justify-start gap-2">
              <h2 className="text-xl md:text-2xl font-bold">Let&apos;s work together</h2>
              <Button
                onClick={() => setShowCalendly(true)}
                variant="tertiary" 
                className="text-black bg-white text-sm md:text-sm sm:text-sm font-semibold xl:py-2 xl:px-4 lg:py-2 lg:px-4 md:py-2 md:px-4 sm:py-2 sm:px-4"
              >
                Book a Call
              </Button>
            </div>
            <p className="text-zinc-400 text-sm md:text-xl py-2">
              Ready to create engaging content for your brand?
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="container flex flex-wrap gap-2 justify-center lg:grid lg:grid-cols-2 lg:w-auto">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adityamakesyouclick@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:h-16 md:w-16 lg:w-17 lg:h-17 xl:w-18 xl:h-18 sm:w-full aspect-square p-1 rounded-xl border-transparent bg-[#212121] text-white text-xs font-medium">
                <IoIosMail className="h-5 w-5 xl:h-8 xl:w-8 lg:w-8 lg:h-8 md:h-7 md:w-7 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/financefreakaditya/" target="_blank" rel="noopener noreferrer">
              <Button className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:h-16 md:w-16 lg:w-17 lg:h-17 xl:w-18 xl:h-18 sm:w-full aspect-square p-1 rounded-xl border-transparent bg-[#212121] text-white text-xs font-medium">
                <FaLinkedin className="h-5 w-5 xl:h-8 xl:w-8 lg:w-8 lg:h-8 md:h-7 md:w-7 sm:h-6 sm:w-6" />
              </Button>
            </a>
            <a href="https://x.com/financefreakadi" target="_blank" rel="noopener noreferrer">
              <Button className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:h-16 md:w-16 lg:w-17 lg:h-17 xl:w-18 xl:h-18 sm:w-full aspect-square p-1 rounded-xl border-transparent bg-[#212121] text-white text-xs font-medium">
                <FaXTwitter className="h-5 w-5 xl:h-8 xl:w-8 lg:w-8 lg:h-8 md:h-7 md:w-7 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/financefreakaditya/" target="_blank" rel="noopener noreferrer">
              <Button className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:h-16 md:w-16 lg:w-17 lg:h-17 xl:w-18 xl:h-18 sm:w-full aspect-square p-1 rounded-xl border-transparent bg-[#212121] text-white text-xs font-medium">
                <FaInstagram className="h-5 w-5 xl:h-8 xl:w-8 lg:w-8 lg:h-8 md:h-7 md:w-7 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-full w-[90%] md:w-[600px]">
              <button 
                onClick={() => setShowCalendly(false)} 
                className="float-right text-black px-3 py-1 hover:bg-gray-100 rounded"
              >
                Close
              </button>
              <div className="clear-both mt-8">
                <InlineWidget url="https://calendly.com/adityamakesyouclick/30min" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}