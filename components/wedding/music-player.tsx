"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Attempt autoplay on mount
  useEffect(() => {
    if (!hasAutoPlayed && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        setHasAutoPlayed(true)
      }).catch(() => {
        // Autoplay was prevented by browser, wait for user interaction
        setIsPlaying(false)
        const handleFirstInteraction = () => {
          if (audioRef.current) {
            audioRef.current.play().then(() => {
              setIsPlaying(true)
              setHasAutoPlayed(true)
            }).catch(() => {})
          }
        }
        document.addEventListener("click", handleFirstInteraction, { once: true })
        document.addEventListener("touchstart", handleFirstInteraction, { once: true })
      })
    }
  }, [hasAutoPlayed])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        src="https://cdn.pixabay.com/audio/2022/10/18/audio_a12c91f622.mp3"
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
      {!hasAutoPlayed && !isPlaying && (
        <div className="fixed bottom-24 right-6 z-50 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-secondary text-sm text-foreground animate-pulse">
          Click anywhere to play music
        </div>
      )}
    </>
  )
}
