import { HoroscopeSelector } from "@/components/horoscope-selector"
import { Star, Sun, Moon, Compass, Heart, Sparkles } from "lucide-react"

export default function LoveHoroscopePage() {
  return (
    <div className="py-16 space-y-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Daily Love Horoscope</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Get your daily love horoscope and relationship insights. Select your zodiac sign to see what the stars have in
          store for your love life today.
        </p>
        <HoroscopeSelector />
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">The Power of Daily Love Horoscopes</h2>
          <p className="text-gray-600">
            Daily love horoscopes offer a unique perspective on your romantic life, providing insights and guidance
            based on the positions of celestial bodies. While not scientifically proven, many find them to be a source
            of inspiration, reflection, and sometimes, a bit of fun. They can offer a fresh viewpoint on your
            relationships and encourage you to consider aspects of your love life you might otherwise overlook.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Astrological Influences</h3>
            </div>
            <p className="text-gray-600">
              Your daily love horoscope takes into account the current positions of planets and how they interact with
              your natal chart. These cosmic energies are believed to influence different aspects of your life,
              including your relationships, emotions, and romantic encounters.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Relationship Insights</h3>
            </div>
            <p className="text-gray-600">
              Whether you're single, in a new relationship, or have been with your partner for years, love horoscopes
              can offer insights into the dynamics of your romantic life. They might highlight potential challenges,
              suggest opportunities for growth, or simply remind you to appreciate the love in your life.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Key Elements of Your Love Horoscope</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Sun className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Sun Sign</h3>
              </div>
              <p className="text-gray-600">
                Your sun sign, determined by your birth date, is the foundation of your love horoscope. It represents
                your core personality and how you express yourself in relationships.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Moon className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Moon Sign</h3>
              </div>
              <p className="text-gray-600">
                The moon sign reflects your emotional nature. In love horoscopes, it can provide insights into your
                feelings, needs, and how you nurture your relationships.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Compass className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Venus Sign</h3>
              </div>
              <p className="text-gray-600">
                Venus, the planet of love and beauty, plays a crucial role in love horoscopes. Its position can indicate
                what you value in relationships and how you express affection.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Making the Most of Your Daily Love Horoscope</h2>
          <p className="text-gray-600">
            While love horoscopes can be insightful, it's important to approach them with a balanced perspective. Here
            are some tips for making the most of your daily love horoscope:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Use it as a tool for reflection, not as a strict guide for your actions.</li>
            <li>Look for patterns over time rather than focusing too much on a single day's horoscope.</li>
            <li>Consider how the advice might apply to your specific situation.</li>
            <li>Use the horoscope as a conversation starter with your partner about your relationship.</li>
            <li>Remember that you have the power to shape your own destiny in love and life.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">The Magic of Love and Astrology</h2>
          <p className="text-gray-600">
            Astrology has been intertwined with love and relationships for thousands of years. From ancient
            civilizations to modern times, people have looked to the stars for guidance in matters of the heart. While
            the scientific community doesn't support astrological predictions, many find value in the symbolism and
            archetypes associated with celestial bodies.
          </p>
          <p className="text-gray-600">
            Your daily love horoscope is a modern continuation of this age-old tradition. It combines ancient wisdom
            with contemporary understanding of relationships and psychology. Whether you're a firm believer or a curious
            skeptic, love horoscopes can provide a moment of reflection about your romantic life and potentially offer
            new perspectives on your relationships.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Using Our Love Horoscope Tool</h2>
          <p className="text-gray-600">
            Our Daily Love Horoscope tool is designed to provide you with personalized insights based on your zodiac
            sign. Simply select your sign to receive your daily love forecast. Remember, these horoscopes are meant to
            be a fun and thought-provoking addition to your day, not a substitute for open communication and mutual
            understanding in your relationships.
          </p>
          <div className="flex justify-center">
            <Sparkles className="w-12 h-12 text-rose-500" />
          </div>
          <p className="text-center text-gray-600">
            Let the stars inspire you, but always trust your heart and mind when it comes to matters of love.
          </p>
        </section>
      </div>
    </div>
  )
}

