import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function LoveStarsPost() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
              <Image src="/placeholder.svg" alt="Starry night sky" fill className="object-cover" />
            </div>
            <h1 className="text-4xl font-bold mb-6">What the Stars Say About Your Love Life</h1>
            <div className="prose prose-rose max-w-none">
              <p className="lead">
                The position of celestial bodies at the time of your birth can offer fascinating insights into your
                romantic tendencies and relationship patterns.
              </p>
              <h2>Understanding Your Love Stars</h2>
              <p>
                Your birth chart contains three key elements that influence your love life: your Sun sign (core
                personality), Moon sign (emotional nature), and Venus sign (love style).
              </p>
              <h2>The Role of Venus</h2>
              <p>
                Venus, the planet of love and beauty, plays a crucial role in determining how you approach relationships
                and what you find attractive in a partner.
              </p>
              <h2>Making the Most of Your Stars</h2>
              <p>
                While astrology can provide insights, remember that you have the power to shape your own destiny. Use
                these celestial insights as guidance rather than absolute truth.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}

