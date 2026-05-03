"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    name: "Haldi",
    date: "December 13, 2026",
    time: "10:00 AM",
    venue: "Patil Family Residence",
    address: "123 Shanti Nagar, Bangalore",
    description: "Traditional turmeric ceremony to bless the couple",
    color: "from-yellow-500/20 to-amber-500/20",
    icon: "🪷",
  },
  {
    name: "Mehendi",
    date: "December 13, 2026",
    time: "4:00 PM",
    venue: "Royal Gardens",
    address: "456 Palace Road, Bangalore",
    description: "Beautiful henna ceremony with music and festivities",
    color: "from-green-600/20 to-emerald-500/20",
    icon: "🌿",
  },
  {
    name: "Sangeet",
    date: "December 14, 2026",
    time: "7:00 PM",
    venue: "Grand Ballroom, Taj Hotel",
    address: "M.G. Road, Bangalore",
    description: "An evening of music, dance, and celebration",
    color: "from-pink-500/20 to-rose-500/20",
    icon: "🎵",
  },
  {
    name: "Wedding",
    date: "December 15, 2026",
    time: "10:00 AM",
    venue: "Sri Lakshmi Temple",
    address: "Temple Street, Bangalore",
    description: "The sacred wedding ceremony",
    color: "from-primary/20 to-red-600/20",
    icon: "💍",
  },
  {
    name: "Reception",
    date: "December 15, 2026",
    time: "7:00 PM",
    venue: "ITC Windsor Manor",
    address: "Windsor Square, Bangalore",
    description: "Grand celebration dinner with family and friends",
    color: "from-secondary/30 to-amber-400/20",
    icon: "🎊",
  },
]

export function EventsSection() {
  const addToCalendar = (event: (typeof events)[0]) => {
    const startDate = new Date(`${event.date} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000) // 3 hours later
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Sachin & Sowmya's ${event.name}`
    )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${endDate
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(
      event.venue + ", " + event.address
    )}`
    
    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background ornamental-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">Wedding Events</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-2xl">🪔</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for these joyous celebrations as we begin our journey together
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${event.color} backdrop-blur-sm rounded-xl border border-secondary/30 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-secondary`}
            >
              {/* Decorative corner */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-secondary/50 group-hover:border-secondary transition-colors" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-secondary/50 group-hover:border-secondary transition-colors" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/50 group-hover:border-secondary transition-colors" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/50 group-hover:border-secondary transition-colors" />

              <div className="text-center mb-4">
                <span className="text-5xl">{event.icon}</span>
              </div>

              <h3 className="font-serif text-3xl text-primary text-center mb-4">{event.name}</h3>

              <p className="text-center text-foreground/80 mb-6 text-sm">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Calendar className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground/80">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.venue}</p>
                    <p className="text-sm text-muted-foreground">{event.address}</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => addToCalendar(event)}
                variant="outline"
                className="w-full mt-6 border-secondary/50 hover:border-secondary hover:bg-secondary/20 transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Add to Calendar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
