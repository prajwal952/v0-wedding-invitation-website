"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2026-12-15T10:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-4xl md:text-5xl text-primary mb-4">
          Counting Down to Forever
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="relative group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-card rounded-lg border-2 border-secondary/50 shadow-lg flex flex-col items-center justify-center transition-all duration-300 group-hover:border-secondary group-hover:shadow-xl group-hover:scale-105">
                <span className="text-3xl md:text-5xl font-bold text-primary">
                  {unit.value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-1">
                  {unit.label}
                </span>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-secondary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-secondary" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-secondary" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-secondary" />
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground text-lg">
          Until we say <span className="font-serif text-2xl text-primary">{'"I Do"'}</span>
        </p>
      </div>
    </section>
  )
}
