import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link";

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <Card className="container bg-[#141414] border border-transparent w-full">
      <CardContent className="p-4 sm:p-6 space-y-1">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm sm:text-sm text-zinc-400">{description}</p>
        <div className="mt-4 sm:mt-6 relative w-full aspect-[16/9] sm:aspect-[3/2] rounded-lg overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button 
            className="bg-[#212121] text-white text-xs sm:text-sm font-medium py-2 rounded-xl w-full"
          >
            View more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
