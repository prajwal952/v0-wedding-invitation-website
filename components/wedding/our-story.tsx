"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Star, Coffee, Ring } from "lucide-react"

const storyMilestones = [
  {
    icon: Coffee,
    year: "2020",
    title: "First Meeting",
    description:
      "Our paths crossed at a mutual friend's gathering. What started as a casual conversation over chai turned into hours of talking and laughing together.",
  },
  {
    icon: Heart,
    year: "2021",
    title: "First Date",
    description:
      "A sunset dinner at a rooftop restaurant overlooking the city. We knew that evening that something special was beginning between us.",
  },
  {
    icon: Star,
    year: "2023",
    title: "Meeting the Families",
    description:
      "Both families met and bonded over shared values, traditions, and lots of delicious food. It was a beautiful blend of two wonderful families.",
  },
  {
    icon: Ring,
    year: "2025",
    title: "The Proposal",
    description:
      "Under a starlit sky, surrounded by flowers and candles, Sachin asked the most important question. And the answer was a joyful 'Yes!'",
  },
]

export function OurStory() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="our-story" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">Our Story</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A beautiful journey of love, laughter, and countless memories that brought us here today
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary hidden md:block" />

          {storyMilestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card p-6 md:p-8 rounded-lg border border-secondary/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-secondary font-semibold text-lg">{milestone.year}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>

              {/* Center icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-card border-4 border-secondary rounded-full flex items-center justify-center shadow-lg">
                  <milestone.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
