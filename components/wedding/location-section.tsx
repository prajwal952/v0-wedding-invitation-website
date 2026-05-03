"use client"

import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const venues = [
  {
    name: "Haldi & Mehendi",
    venue: "Patil Family Residence",
    address: "123 Shanti Nagar, Bangalore, Karnataka 560001",
    mapUrl: "https://www.google.com/maps?q=12.9716,77.5946",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Wedding Ceremony",
    venue: "Sri Lakshmi Temple",
    address: "Temple Street, Basavanagudi, Bangalore, Karnataka 560004",
    mapUrl: "https://www.google.com/maps?q=12.9400,77.5700",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5700!3d12.9400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzI0LjAiTiA3N8KwMzQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567891",
  },
  {
    name: "Reception",
    venue: "ITC Windsor Manor",
    address: "Windsor Square, Golf Course Road, Bangalore, Karnataka 560052",
    mapUrl: "https://www.google.com/maps?q=12.9600,77.6100",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d77.6100!3d12.9600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwMzYnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567892",
  },
]

export function LocationSection() {
  const getDirections = (mapUrl: string) => {
    window.open(mapUrl, "_blank")
  }

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">Venue Locations</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
            <MapPin className="h-6 w-6 text-secondary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your way to our celebration venues
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-secondary/30 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary"
            >
              <div className="h-48 bg-muted">
                <iframe
                  src={venue.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${venue.name}`}
                />
              </div>
              <div className="p-6">
                <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                  {venue.name}
                </span>
                <h3 className="font-serif text-2xl text-primary mt-2 mb-3">{venue.venue}</h3>
                <p className="text-muted-foreground text-sm mb-4">{venue.address}</p>
                <Button
                  onClick={() => getDirections(venue.mapUrl)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
