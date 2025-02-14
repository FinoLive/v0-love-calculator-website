import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ManagingRelationshipAnxietyPost() {
  return (
    <div className="py-16">
      <article className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-rose-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4th-CdSc0xi3dW0jPvuH8UUqVknqU0gxMe.jpeg"
            alt="Illustration of a couple on couch with digital message bubbles floating above"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Managing Relationship Anxiety: Strategies for a Calmer, More Confident Love
          </h1>
          <p className="text-xl text-gray-600">Transform worry into wellness in your romantic life</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            Butterflies in your stomach when you think about your partner can be exhilarating, but what happens when
            those flutters turn into knots of worry? Relationship anxiety—that persistent unease about your romantic
            connection—is more common than you might think. Whether it's fear of abandonment, trust issues, or constant
            what-ifs, anxiety can cast a shadow over even the healthiest partnerships. But here's the good news: with
            understanding and the right tools, you can manage these feelings and cultivate a more secure, joyful
            relationship.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Understanding Relationship Anxiety: You're Not Alone</h2>
            <p>
              First, let's normalize your experience. A study in the Journal of Sex & Marital Therapy found that up to 1
              in 5 people in relationships experience significant anxiety about their partnerships. Common triggers
              include:
            </p>
            <ul className="mt-4">
              <li>Fear of abandonment or rejection</li>
              <li>Insecurity about your own worth in the relationship</li>
              <li>Trust issues from past experiences</li>
              <li>Difficulty with uncertainty or lack of control</li>
              <li>Perfectionism or unrealistic expectations</li>
            </ul>
            <p className="mt-4">
              Recognizing these patterns is the first step toward managing them. Remember, having anxiety doesn't mean
              your relationship is doomed—it's an opportunity for growth and deeper connection.
            </p>
          </Card>

          <h2>The Science of Soothing: How to Calm Your Anxious Mind</h2>
          <p>
            When anxiety strikes, your body's stress response kicks in. The good news? You can hack this system to bring
            yourself back to baseline. Try these research-backed techniques:
          </p>
          <ul>
            <li>
              <strong>Deep Breathing:</strong> The 4-7-8 technique (inhale for 4 counts, hold for 7, exhale for 8)
              activates your parasympathetic nervous system, lowering heart rate and blood pressure.
            </li>
            <li>
              <strong>Progressive Muscle Relaxation:</strong> Tense and release muscle groups from toes to head,
              reducing physical tension that accompanies anxiety.
            </li>
            <li>
              <strong>Mindfulness Meditation:</strong> Even 5 minutes of focused attention on the present moment can
              reduce anxiety symptoms, according to a study in the Journal of Clinical Psychology.
            </li>
          </ul>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Anxiety-Busting Communication Strategies</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Anxious Thought</TableHead>
                  <TableHead>Reframe</TableHead>
                  <TableHead>Communication Strategy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>"They're going to leave me."</TableCell>
                  <TableCell>"We're both committed to this relationship."</TableCell>
                  <TableCell>"I'm feeling insecure. Can we talk about our future?"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>"I'm not good enough for them."</TableCell>
                  <TableCell>"I bring unique value to this partnership."</TableCell>
                  <TableCell>"Sometimes I doubt myself. What do you appreciate about me?"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>"They're hiding something from me."</TableCell>
                  <TableCell>"Open communication builds trust."</TableCell>
                  <TableCell>
                    "I'd like to understand more about [situation]. Can you share your perspective?"
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Building a Secure Attachment: The Power of Consistency</h2>
            <p>
              Attachment theory suggests that early life experiences shape our relationship patterns. The good news? You
              can cultivate a more secure attachment style through consistent, loving behaviors:
            </p>
            <ul className="mt-4">
              <li>Establish regular check-ins to discuss feelings and needs</li>
              <li>Follow through on commitments to build trust</li>
              <li>Offer physical affection (if comfortable) to boost oxytocin, the "bonding hormone"</li>
              <li>Practice active listening without judgment</li>
              <li>Express gratitude and appreciation regularly</li>
            </ul>
            <p className="mt-4">
              Remember, building secure attachment is a process. Be patient with yourself and your partner as you
              cultivate these habits.
            </p>
          </Card>

          <h2>Embracing Uncertainty: The Art of Letting Go</h2>
          <p>
            Relationship anxiety often stems from a desire for certainty in an inherently uncertain world. Learning to
            embrace uncertainty can be liberating:
          </p>
          <ul>
            <li>Practice mindfulness to stay present rather than worrying about the future</li>
            <li>Challenge "fortune-telling" thoughts with evidence-based thinking</li>
            <li>Focus on what you can control (your actions, responses) rather than what you can't</li>
            <li>Cultivate a growth mindset that sees challenges as opportunities for learning</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">When to Seek Professional Help</h2>
            <p>
              While some anxiety is normal, persistent distress may warrant professional support. Consider therapy if:
            </p>
            <ul>
              <li>Anxiety significantly impacts your daily life or relationship satisfaction</li>
              <li>You find yourself constantly seeking reassurance</li>
              <li>Past traumas are affecting your current relationship</li>
              <li>You're struggling with compulsive behaviors (e.g., constant checking)</li>
            </ul>
            <p className="mt-4">
              Cognitive-behavioral therapy (CBT) and acceptance and commitment therapy (ACT) have shown particular
              promise in treating relationship anxiety.
            </p>
          </div>

          <h2>Self-Care: Your Secret Weapon Against Anxiety</h2>
          <p>Remember, managing relationship anxiety starts with taking care of yourself. Prioritize:</p>
          <ul>
            <li>Regular exercise to boost mood and reduce stress</li>
            <li>Adequate sleep (7-9 hours) to regulate emotions</li>
            <li>A balanced diet rich in omega-3s, which have been linked to lower anxiety levels</li>
            <li>Hobbies and interests outside the relationship</li>
            <li>Social connections with friends and family</li>
          </ul>

          <div className="bg-rose-50 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">The Silver Lining of Relationship Anxiety</h2>
            <p>
              While challenging, relationship anxiety can also be an opportunity for profound personal growth and deeper
              intimacy. By facing your fears and working through them, you can:
            </p>
            <ul>
              <li>Develop greater self-awareness and emotional intelligence</li>
              <li>Improve communication skills that benefit all areas of life</li>
              <li>Build a more authentic, vulnerable connection with your partner</li>
              <li>Increase your capacity for empathy and compassion</li>
            </ul>
            <p className="mt-4">
              Remember, a little anxiety is a sign that you care deeply. It's not about eliminating anxiety completely,
              but learning to manage it in healthy ways that allow your relationship to thrive.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Share Your Journey</h3>
            <p>
              Have you overcome relationship anxiety? What strategies worked best for you? Share your experiences in the
              comments below—your insights could be the lifeline someone else needs. Together, we can create a community
              of support and understanding. 💖
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

