"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  type: "rose" | "marigold"
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 12 + Math.random() * 16,
      rotation: Math.random() * 360,
      type: Math.random() > 0.5 ? "rose" : "marigold",
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute ${petal.id % 2 === 0 ? "animate-float-petal" : "animate-float-petal-reverse"}`}
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          {petal.type === "rose" ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <path
                d="M12 2C12 2 8 6 8 10C8 12 9 14 12 14C15 14 16 12 16 10C16 6 12 2 12 2Z"
                fill="#8B0000"
                opacity="0.8"
              />
              <path
                d="M12 6C12 6 10 8 10 10C10 11 10.5 12 12 12C13.5 12 14 11 14 10C14 8 12 6 12 6Z"
                fill="#A52A2A"
                opacity="0.9"
              />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <ellipse
                cx="12"
                cy="8"
                rx="4"
                ry="6"
                fill="#FFA500"
                opacity="0.85"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                fill="#FFD700"
                opacity="0.9"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
