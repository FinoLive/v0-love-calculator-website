import { LoveTestQuiz } from "@/components/love-test-quiz"
import { Heart, Sparkles, MessageCircle, Zap, Compass, Scale } from "lucide-react"

export default function LoveTestPage() {
  return (
    <div className="py-16 space-y-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Love Compatibility Test</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Take our in-depth love compatibility test to gain insights into your relationship dynamics and potential areas
          for growth.
        </p>
        <LoveTestQuiz />
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Understanding Love Compatibility</h2>
          <p className="text-gray-600">
            Love compatibility is a complex interplay of various factors, including personality traits, communication
            styles, values, and life goals. While no test can definitively predict the success of a relationship, our
            Love Compatibility Test is designed to help you explore different aspects of your connection and identify
            areas of strength and potential growth.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Emotional Connection</h3>
            </div>
            <p className="text-gray-600">
              A strong emotional bond is the foundation of any lasting relationship. Our test explores how well you and
              your partner understand and support each other's emotional needs, helping you identify areas where you can
              deepen your connection.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8 text-rose-500" />
              <h3 className="text-xl font-semibold">Communication Styles</h3>
            </div>
            <p className="text-gray-600">
              Effective communication is crucial for resolving conflicts and building intimacy. Our test assesses how
              well you and your partner express yourselves and listen to each other, offering insights on how to improve
              your communication.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Key Aspects of Compatibility</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Sparkles className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Shared Values</h3>
              </div>
              <p className="text-gray-600">
                Couples with aligned core values often find it easier to navigate life's challenges together. Our test
                helps you identify areas of alignment and potential differences in your fundamental beliefs and
                priorities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Intimacy and Attraction</h3>
              </div>
              <p className="text-gray-600">
                Physical and emotional intimacy play a vital role in romantic relationships. Our test explores your
                compatibility in terms of affection, romance, and sexual connection.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Compass className="w-8 h-8 text-rose-500" />
                <h3 className="text-xl font-semibold">Life Goals</h3>
              </div>
              <p className="text-gray-600">
                Shared aspirations can strengthen a couple's bond. Our test helps you assess how well your long-term
                goals and dreams align with your partner's, and how you can support each other's personal growth.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Interpreting Your Results</h2>
          <p className="text-gray-600">
            After completing the Love Compatibility Test, you'll receive a detailed analysis of your relationship
            dynamics. Here's how to make the most of your results:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Focus on trends rather than specific scores. Look for patterns in your responses.</li>
            <li>Use the results as a starting point for open, honest conversations with your partner.</li>
            <li>Celebrate your areas of strength and compatibility.</li>
            <li>
              View areas of lower compatibility as opportunities for growth and understanding, not as insurmountable
              obstacles.
            </li>
            <li>Remember that compatibility can be developed and improved over time with effort and commitment.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Beyond the Test</h2>
          <p className="text-gray-600">
            While our Love Compatibility Test can provide valuable insights, it's important to remember that successful
            relationships require ongoing effort, communication, and mutual respect. Here are some additional steps you
            can take to strengthen your relationship:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Practice active listening and empathy in your daily interactions.</li>
            <li>Regularly check in with each other about your feelings, needs, and goals.</li>
            <li>Seek professional counseling or relationship coaching if you're facing persistent challenges.</li>
            <li>
              Continuously work on your personal growth, as individual development can positively impact your
              relationship.
            </li>
            <li>Make time for shared experiences and create new memories together.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">The Journey of Love</h2>
          <p className="text-gray-600">
            Love is a beautiful and complex journey, unique to each couple. Our Love Compatibility Test is designed to
            be a helpful tool on this journey, offering insights and prompting meaningful discussions. Remember, true
            compatibility is something you build together over time, through shared experiences, mutual understanding,
            and a commitment to growth.
          </p>
          <div className="flex justify-center">
            <Scale className="w-12 h-12 text-rose-500" />
          </div>
          <p className="text-center text-gray-600">
            Embrace the journey of love, with all its joys and challenges, and let our test be a guide to help you and
            your partner create a stronger, more fulfilling relationship.
          </p>
        </section>
      </div>
    </div>
  )
}

