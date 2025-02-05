import { ProfileHeader } from "@/components/profile-header"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    feedback: "The YouTube thumbnails created by this talented designer have significantly boosted our channel's click-through rate. Their understanding of visual storytelling is unparalleled.",
    client: "Emma Rodriguez",
    role: "Content Creator, TechTalk",
    avatar: "/placeholder.svg?height=50&width=50"
  },
  {
    id: 2,
    feedback: "Our Instagram engagement skyrocketed thanks to the brilliant content strategy. The designer's ability to capture our brand's essence in every post is truly remarkable.",
    client: "Alex Chen",
    role: "Marketing Director, FashionForward",
    avatar: "/placeholder.svg?height=50&width=50"
  },
  {
    id: 3,
    feedback: "Working with this designer has been a game-changer for our online presence. Their creativity and attention to detail have helped us stand out in a crowded digital landscape.",
    client: "Sarah Thompson",
    role: "CEO, StartUp Innovations",
    avatar: "/placeholder.svg?height=50&width=50"
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <ProfileHeader
          name="Aditya Bansal"
          title="Content Creator & Social Media Strategist"
          description="I create engaging thumbnails and content strategies for YouTube and Instagram"
          avatarUrl="/placeholder.svg?height=100&width=100"
        />

        <div className="grid md:grid-cols-3 gap-6 group">
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10">
            <h3 className="text-4xl font-bold text-blue-600">250M+</h3>
            <p className="text-zinc-400 mt-2">views generated</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10">
            <h3 className="text-4xl font-bold text-blue-600">1500+</h3>
            <p className="text-zinc-400 mt-2">designs created</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10">
            <h3 className="text-4xl font-bold text-blue-600">25+</h3>
            <p className="text-zinc-400 mt-2">satisfied clients</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="YouTube Portfolio"
            description="Check out some of my best thumbnail designs"
            imageUrl="/placeholder.svg?height=300&width=400"
            link="#youtube-portfolio"
          />
          <ProjectCard
            title="Instagram Work"
            description="Social media strategy and content creation"
            imageUrl="/placeholder.svg?height=300&width=400"
            link="#instagram-portfolio"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Work With Me</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-zinc-400">With over 250M views generated, I have a track record of creating content that resonates with audiences and drives engagement.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                <p className="text-zinc-400">Having created 1500+ designs, I bring a wealth of creative experience to every project, ensuring your content stands out.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-zinc-400">With 25+ satisfied clients, I prioritize your vision and goals, delivering results that exceed expectations.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Client Feedback</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="space-y-4 bg-zinc-950 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Let's work together</h2>
          <p className="text-zinc-400">Ready to create engaging content for your brand?</p>
          <div className="flex gap-4">
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </Button>
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
