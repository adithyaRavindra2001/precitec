import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function ContactPage() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("success")
        ;(event.target as HTMLFormElement).reset()
        setTimeout(() => setResult(""), 5000)
      } else {
        setResult("error")
      }
    } catch (error) {
      setResult("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels. Our team is here to help you.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <div className="space-y-1 text-sm">
                        <a
                          href="tel:+917022024562"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 70220 24562
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:info@precitec.co.in"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        info@precitec.co.in
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        A-353, B, 8th Main Road, 2nd Stage,<br />
                        Peenya Industrial Estate,<br />
                        Bengaluru, Karnataka 560058
                      </p>
                      <a
                        href="https://maps.app.goo.gl/cLRrivXiF44qdhbi9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="+91 12345 67890"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Success/Error Messages */}
                  <AnimatePresence>
                    {result === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 rounded-lg bg-green-50 border-2 border-green-200 p-4"
                      >
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <p className="text-green-800 font-medium">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </motion.div>
                    )}

                    {result === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 rounded-lg bg-red-50 border-2 border-red-200 p-4"
                      >
                        <div className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                          !
                        </div>
                        <p className="text-red-800 font-medium">
                          Oops! Something went wrong. Please try again or contact us directly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
