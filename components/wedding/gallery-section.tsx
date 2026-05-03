"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Pre-wedding photoshoot",
    caption: "Our engagement day",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    alt: "Traditional ceremony",
    caption: "Engagement ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Couple portrait",
    caption: "Together forever",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Wedding preparations",
    caption: "Wedding preparations",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Beautiful venue",
    caption: "Our dream venue",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Traditional attire",
    caption: "Traditional elegance",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">Our Gallery</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-2xl">📸</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cherished moments from our journey together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg border-2 border-secondary/30 hover:border-secondary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-lg">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
          <Button
            onClick={closeLightbox}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            onClick={prevImage}
            variant="ghost"
            size="icon"
            className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="font-serif text-2xl text-primary-foreground">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>

          <Button
            onClick={nextImage}
            variant="ghost"
            size="icon"
            className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage ? "bg-secondary w-6" : "bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
