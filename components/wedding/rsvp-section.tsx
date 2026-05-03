"use client"

import { useState } from "react"
import { Send, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    attendance: "",
    dietary: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your RSVP has been received. We can&apos;t wait to celebrate with you!
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-secondary hover:bg-secondary/20"
            >
              Submit Another Response
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background ornamental-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">RSVP</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-2xl">💌</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kindly respond by November 30, 2026
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-2xl border border-secondary/30 shadow-xl">
            {/* Decorative corners */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-8 h-8 border-t-2 border-l-2 border-secondary hidden md:block" />
              <div className="absolute -top-10 -right-10 w-8 h-8 border-t-2 border-r-2 border-secondary hidden md:block" />
              <div className="absolute -bottom-10 -left-10 w-8 h-8 border-b-2 border-l-2 border-secondary hidden md:block" />
              <div className="absolute -bottom-10 -right-10 w-8 h-8 border-b-2 border-r-2 border-secondary hidden md:block" />
            </div>

            <FieldGroup className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel>
                    <Label htmlFor="name">Full Name *</Label>
                  </FieldLabel>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="border-secondary/30 focus:border-secondary"
                  />
                </Field>

                <Field>
                  <FieldLabel>
                    <Label htmlFor="phone">Phone Number *</Label>
                  </FieldLabel>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="border-secondary/30 focus:border-secondary"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel>
                  <Label htmlFor="email">Email Address</Label>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="border-secondary/30 focus:border-secondary"
                />
              </Field>

              <div className="grid md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel>
                    <Label htmlFor="guests">Number of Guests *</Label>
                  </FieldLabel>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleChange("guests", value)}
                    required
                  >
                    <SelectTrigger className="border-secondary/30 focus:border-secondary">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5+">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>
                    <Label htmlFor="attendance">Will you attend? *</Label>
                  </FieldLabel>
                  <Select
                    value={formData.attendance}
                    onValueChange={(value) => handleChange("attendance", value)}
                    required
                  >
                    <SelectTrigger className="border-secondary/30 focus:border-secondary">
                      <SelectValue placeholder="Select response" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Joyfully Accept</SelectItem>
                      <SelectItem value="no">Regretfully Decline</SelectItem>
                      <SelectItem value="maybe">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field>
                <FieldLabel>
                  <Label htmlFor="dietary">Dietary Requirements</Label>
                </FieldLabel>
                <Select
                  value={formData.dietary}
                  onValueChange={(value) => handleChange("dietary", value)}
                >
                  <SelectTrigger className="border-secondary/30 focus:border-secondary">
                    <SelectValue placeholder="Select preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Vegetarian</SelectItem>
                    <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                    <SelectItem value="none">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel>
                  <Label htmlFor="message">Message for the Couple</Label>
                </FieldLabel>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Share your wishes or any special message..."
                  rows={4}
                  className="border-secondary/30 focus:border-secondary resize-none"
                />
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send RSVP
                  </>
                )}
              </Button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  )
}
