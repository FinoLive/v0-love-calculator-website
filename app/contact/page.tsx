import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-16 space-y-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions about our love calculator or other services? We're here to help!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-rose-600 mt-1" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-gray-600">123 Love Street, Romance City, RC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-rose-600 mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-rose-600 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contact@lovingtrue.com</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
            </div>
            <Button className="w-full bg-rose-600 hover:bg-rose-700">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

