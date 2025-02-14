import { ZodiacSelector } from "@/components/zodiac-selector"
import { Sparkles, Heart, Scale, Zap, Moon } from "lucide-react"

export default function ZodiacCompatibilityPage() {
  return (
    <div className="py-16 space-y-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Zodiac Compatibility</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Discover how well your zodiac sign matches with others. Select your sign and your partner's sign to see your
          compatibility.
        </p>
        <ZodiacSelector />
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Understanding Zodiac Compatibility</h2>
          <p className="text-gray-600">
            Zodiac compatibility is an ancient practice that has fascinated people for centuries. It's based on the
            belief that the position of celestial bodies at the time of our birth can influence our personalities and,
            by extension, our relationships. While it's important to remember that astrology is not a science, many find
            it a fun and insightful tool for understanding themselves and their partners better.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Elements and Compatibility</h3>
            </div>
            <p className="text-gray-600">
              In astrology, the twelve zodiac signs are divided into four elements: Fire, Earth, Air, and Water.
              Generally, signs within the same element are considered compatible, as they share similar traits and
              values. For example, Fire signs (Aries, Leo, Sagittarius) tend to be passionate and energetic, while Earth
              signs (Taurus, Virgo, Capricorn) are often practical and grounded.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Love Languages and Zodiac Signs</h3>
            </div>
            <p className="text-gray-600">
              Each zodiac sign has its own way of expressing and receiving love. Understanding these "love languages"
              can greatly improve your relationship. For instance, Taurus might appreciate physical touch and gifts,
              while Gemini might value quality time and words of affirmation. Knowing your partner's zodiac sign can
              give you insights into how to best show them love and appreciation.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Factors Influencing Zodiac Compatibility</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Scale className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Sun Sign</h3>
              </div>
              <p className="text-gray-600">
                Your sun sign, determined by your birth date, represents your core personality and ego. It's the most
                well-known aspect of your astrological profile and plays a significant role in compatibility.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Moon className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Moon Sign</h3>
              </div>
              <p className="text-gray-600">
                Your moon sign reflects your emotional nature and inner world. Compatible moon signs can lead to deep
                emotional understanding and connection between partners.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Rising Sign</h3>
              </div>
              <p className="text-gray-600">
                Also known as the Ascendant, your rising sign represents how you present yourself to the world. It can
                influence initial attraction and how you interact in relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Beyond the Basics</h2>
          <p className="text-gray-600">
            While sun sign compatibility is a good starting point, true astrological compatibility is much more complex.
            A full birth chart comparison, known as synastry, takes into account the positions of all planets and
            celestial bodies at the time of both individuals' births. This provides a more comprehensive view of how two
            people might interact on various levels - emotionally, intellectually, and sexually.
          </p>
          <p className="text-gray-600">
            It's also important to remember that astrology should be used as a tool for insight and self-reflection, not
            as a definitive guide for your love life. Successful relationships are built on mutual respect,
            communication, and shared values - factors that transcend astrological compatibility.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Using Our Zodiac Compatibility Tool</h2>
          <p className="text-gray-600">
            Our Zodiac Compatibility tool is designed to give you a quick insight into how your sign might interact with
            another. Simply select your sign and your partner's (or potential partner's) sign to see a compatibility
            rating and brief description. Use this as a fun starting point for discussions about your relationship
            dynamics, but remember - the stars may guide us, but we ultimately choose our own paths in love and life.
          </p>
        </section>
      </div>
    </div>
  )
}

