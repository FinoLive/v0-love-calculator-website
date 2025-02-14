import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function RelationshipQuestionsPost() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
              <Image src="/placeholder.svg" alt="Couple talking" fill className="object-cover" />
            </div>
            <h1 className="text-4xl font-bold mb-6">10 Essential Questions to Ask Your Partner</h1>
            <div className="prose prose-rose max-w-none">
              <p className="lead">
                Deep, meaningful conversations are crucial for building strong relationships. Here are ten questions
                that can help you better understand your partner and strengthen your bond.
              </p>
              <h2>1. What are your long-term goals?</h2>
              <p>
                Understanding each other's aspirations helps ensure you're moving in the same direction and can support
                each other's dreams.
              </p>
              <h2>2. How do you express and receive love?</h2>
              <p>
                Different people have different love languages. Knowing how your partner prefers to give and receive
                affection can strengthen your connection.
              </p>
              {/* Add more questions and explanations */}
              <h2>Making These Conversations Count</h2>
              <p>
                Remember to approach these discussions with an open mind and heart. Create a safe space for honest
                communication and be ready to listen without judgment.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}

