"use client"

import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      "You're invited to Sachin & Sowmya's Wedding! 💍✨\n\n📅 December 15, 2026\n\nView the invitation: " +
        (typeof window !== "undefined" ? window.location.href : "")
    )
    window.open(`https://wa.me/?text=${message}`, "_blank")
  }

  return (
    <footer className="py-16 bg-gradient-to-b from-primary/5 to-primary/10 border-t border-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Decorative element */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-4xl">🪔</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-secondary" />
          </div>

          {/* Names */}
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Sachin & Sowmya
          </h2>
          <p className="text-lg text-muted-foreground mb-8">December 15, 2026</p>

          {/* Share button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={shareOnWhatsApp}
              className="bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Share2 className="h-5 w-5" />
              Share on WhatsApp
            </Button>
          </div>

          {/* Sanskrit blessing */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-secondary text-xl md:text-2xl mb-2 font-medium">
              ॐ शुभं करोति कल्याणम्
            </p>
            <p className="text-muted-foreground italic">
              May this union bring auspiciousness and well-being
            </p>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-card/50 p-6 rounded-lg border border-secondary/20">
              <h3 className="font-serif text-xl text-primary mb-2">{"Groom's Family"}</h3>
              <p className="text-foreground font-medium">Mr. & Mrs. Patil</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="bg-card/50 p-6 rounded-lg border border-secondary/20">
              <h3 className="font-serif text-xl text-primary mb-2">{"Bride's Family"}</h3>
              <p className="text-foreground font-medium">Mr. & Mrs. Rao</p>
              <p className="text-muted-foreground">+91 98765 43211</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>for Sachin & Sowmya</span>
          </div>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
