"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => {
      console.log("[v0] Audio can play now")
      setIsLoaded(true)
    }

    const handleError = (e: Event) => {
      console.log("[v0] Audio error:", e)
    }

    audio.addEventListener("canplaythrough", handleCanPlay)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay)
      audio.removeEventListener("error", handleError)
    }
  }, [])

  const playAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      audio.volume = 0.5
      await audio.play()
      setIsPlaying(true)
      setShowHint(false)
      console.log("[v0] Audio playing successfully")
    } catch (error) {
      console.log("[v0] Play failed:", error)
    }
  }

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      await playAudio()
    }
  }

  // Play on first user interaction anywhere on page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        playAudio()
      }
    }

    if (showHint) {
      document.addEventListener("click", handleFirstInteraction)
      document.addEventListener("touchstart", handleFirstInteraction)
    }

    return () => {
      document.removeEventListener("click", handleFirstInteraction)
      document.removeEventListener("touchstart", handleFirstInteraction)
    }
  }, [showHint, isPlaying])

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      />
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border-2 border-secondary bg-card/90 backdrop-blur-sm shadow-lg hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 text-primary animate-pulse" />
        ) : (
          <VolumeX className="h-6 w-6 text-muted-foreground" />
        )}
      </Button>
      {showHint && !isPlaying && (
        <div className="fixed bottom-24 right-6 z-50 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-secondary text-sm text-foreground animate-pulse">
          Click anywhere to play music
        </div>
      )}
    </>
  )
}
