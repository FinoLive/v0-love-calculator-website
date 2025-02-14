import { Calculator } from "@/components/calculator"
import { HowItWorks } from "@/components/how-it-works"
import { QuoteOfDay } from "@/components/quote-of-day"
import { RelatedArticles } from "@/components/related-articles"

export default function HomePage() {
  return (
    <div className="py-16 space-y-16">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 text-transparent bg-clip-text">
          Calculate Your Love Compatibility
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the potential of your relationship with our advanced love calculator
        </p>
      </div>
      <Calculator />
      <QuoteOfDay />
      <HowItWorks />
      <RelatedArticles />
    </div>
  )
}

