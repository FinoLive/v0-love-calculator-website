import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CommunicationBlogPost() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-vibrant-digital-illustration-of-a-happ_RH3IpG-ZQle3XS7fLsVDyA_rqFt53-VRZG1whPt-uE7sg-NLqlj4dNESfsAjm0LCuUU1lfwQpS0x.jpeg"
            alt="A couple reading together and smiling"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">5 Ways to Improve Communication in Your Relationship</h1>
          <p className="text-xl text-gray-600">And Why They're Backed by Science</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            Let's face it: even the strongest relationships hit rough patches. But here's the secret—most conflicts
            aren't about love fading. They're about communication breaking down. Research shows that 65% of divorcees
            cite communication problems as a primary reason for splitting, and even happy couples struggle with
            misunderstandings. The good news? Small, intentional shifts in how you talk and listen can transform your
            connection.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">
              1. How to Actively Listen to Improve Communication in Your Relationship
            </h2>
            <p>
              Active listening isn't just "hearing" your partner—it's about fully engaging with their words, tone, and
              body language. According to the Gottman Institute, couples who practice active listening report 40% fewer
              recurring conflicts. Here's how to do it:
            </p>
            <ul>
              <li>Focus entirely: Put your phone down, make eye contact, and avoid multitasking.</li>
              <li>
                Reflect and clarify: Paraphrase what they say ("It sounds like you're feeling overwhelmed at work").
              </li>
              <li>Validate their emotions: Say, "That makes sense" instead of jumping to solutions.</li>
            </ul>
            <p className="mt-4">
              Studies from the University of California reveal that validation reduces defensiveness, making partners 3x
              more likely to resolve disagreements calmly.
            </p>
          </Card>

          <h2>2. Effective Nonviolent Communication Techniques for Couples</h2>
          <p>
            Ever heard of nonviolent communication (NVC)? Developed by psychologist Marshall Rosenberg, NVC focuses on
            expressing needs without blame. Here's how it works in practice:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reactive Response</TableHead>
                <TableHead>NVC Response</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>"You never help with chores!"</TableCell>
                <TableCell>"I feel stressed when the dishes pile up. Could we split them tonight?"</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p>Key steps:</p>
          <ul>
            <li>Observe without judging ("I noticed we haven't talked much this week").</li>
            <li>Name your feelings ("I'm feeling disconnected").</li>
            <li>State a clear request ("Could we schedule a date night?").</li>
          </ul>

          <p>A Utah State University study found that couples using NVC saw a 30% drop in arguments after 6 weeks.</p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">
              3. Step-by-Step Guide to Enhancing Communication in Long-Term Relationships
            </h2>
            <p>Long-term relationships thrive on rituals, not grand gestures. Try this weekly check-in routine:</p>
            <ul>
              <li>Pick a consistent time: Sunday evenings, post-dinner.</li>
              <li>Use a rating system: Ask, "On a scale of 1–10, how connected do you feel this week?"</li>
              <li>Celebrate wins: "I loved how you supported me during my presentation!"</li>
              <li>Problem-solve one issue: "Let's brainstorm how to handle visits from your parents."</li>
            </ul>
            <p className="mt-4">
              Research from the National Marriage Project shows that couples who check in weekly are 22% more likely to
              stay together long-term.
            </p>
          </Card>

          <h2>4. Tips for Overcoming Communication Barriers in Marriage</h2>
          <p>
            Common barriers like defensiveness, stonewalling, or criticism often stem from unmet needs. Try these fixes:
          </p>
          <ul>
            <li>
              Metacommunication: Talk about how you argue. Say, "When we interrupt each other, I shut down. Can we take
              turns speaking?"
            </li>
            <li>Clarify intent: Ask, "Are you venting, or do you want advice?" (A game-changer from USU Extension).</li>
            <li>
              Pause and breathe: A 10-second pause lowers cortisol (stress hormone) levels by 15%, per Harvard Health.
            </li>
          </ul>

          <h2>5. Practical Ways to Boost Emotional Intimacy Through Relationship Communication</h2>
          <p>Emotional intimacy grows when you connect on a deeper "why." Ask:</p>
          <ul>
            <li>"What first made you fall in love with me?"</li>
            <li>"What's one dream we haven't tackled yet?"</li>
          </ul>
          <p>
            According to relationship expert Gary Chapman, revisiting your shared purpose helps reframe conflicts as
            teamwork opportunities.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Quick Comparison: Communication Strategies at a Glance</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Strategy</TableHead>
                  <TableHead>Key Action</TableHead>
                  <TableHead>Outcome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Active Listening</TableCell>
                  <TableCell>Paraphrase & validate</TableCell>
                  <TableCell>Builds trust</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nonviolent Communication</TableCell>
                  <TableCell>Use "I feel" statements</TableCell>
                  <TableCell>Reduces blame</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weekly Check-ins</TableCell>
                  <TableCell>Rate & discuss</TableCell>
                  <TableCell>Prevents resentment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Metacommunication</TableCell>
                  <TableCell>Analyze your patterns</TableCell>
                  <TableCell>Identifies triggers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shared "Why" Conversations</TableCell>
                  <TableCell>Revisit core values</TableCell>
                  <TableCell>Strengthens commitment</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2>Final Thoughts</h2>
          <p>
            Improving communication isn't about perfection—it's about progress. Start with one strategy (maybe active
            listening or weekly check-ins), and notice how small changes ripple into bigger shifts. Remember, even the
            happiest couples argue; what matters is how you repair and reconnect.
          </p>
          <p>
            For more insights, explore resources like the Gottman Institute's blog or Nonviolent Communication guides.
            Your relationship is worth the effort. 💛
          </p>

          <div className="mt-8 p-6 bg-rose-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Join the Conversation</h3>
            <p>What's one communication habit you'll try this week? Share in the comments!</p>
          </div>
        </div>
      </article>
    </div>
  )
}

