import { Navigation } from "@/components/wedding/navigation"
import { FloatingPetals } from "@/components/wedding/floating-petals"
import { MusicPlayer } from "@/components/wedding/music-player"
import { HeroSection } from "@/components/wedding/hero-section"
import { CountdownTimer } from "@/components/wedding/countdown-timer"
import { OurStory } from "@/components/wedding/our-story"
import { EventsSection } from "@/components/wedding/events-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { LocationSection } from "@/components/wedding/location-section"
import { RSVPSection } from "@/components/wedding/rsvp-section"
import { Footer } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Floating rose petals animation */}
      <FloatingPetals />
      
      {/* Background music player */}
      <MusicPlayer />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Landing with names */}
      <HeroSection />
      
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Our Story Section */}
      <OurStory />
      
      {/* Events Section */}
      <EventsSection />
      
      {/* Photo Gallery */}
      <GallerySection />
      
      {/* Location/Map Section */}
      <LocationSection />
      
      {/* RSVP Form */}
      <RSVPSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
