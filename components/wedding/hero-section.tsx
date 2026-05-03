"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToStory = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with mandala pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/10" />
      <div className="absolute inset-0 mandala-pattern" />
      
      {/* Ornamental corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary opacity-60">
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="currentColor" />
          <path d="M0,0 Q40,0 40,40 Q0,40 0,0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,0 Q30,0 30,30 Q0,30 0,0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary opacity-60">
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="currentColor" />
          <path d="M0,0 Q40,0 40,40 Q0,40 0,0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary opacity-60">
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary opacity-60">
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Decorative Om symbol */}
        <div className="mb-6 flex justify-center">
          <div className="text-4xl md:text-5xl text-secondary animate-glow-pulse">॥ श्री ॥</div>
        </div>

        {/* Main title */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary mb-4 tracking-wide">
          Sachin
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <span className="text-4xl md:text-5xl text-primary">❤</span>
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary mb-8 tracking-wide">
          Sowmya
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          Together with their families, invite you to celebrate their wedding
        </p>
        
        {/* Wedding date teaser */}
        <div className="mt-8 mb-12">
          <p className="text-secondary text-xl md:text-2xl font-medium tracking-widest uppercase">
            December 15, 2026
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
          >
            RSVP Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-foreground hover:bg-secondary/20 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Events
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to our story"
      >
        <span className="text-sm uppercase tracking-widest">Our Story</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
