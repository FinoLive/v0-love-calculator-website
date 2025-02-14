import Image from "next/image"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HealingHeartsPost() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-LFARJMJdQtNBN7axQhDbmhtTOL7bQx.jpeg"
            alt="Illustration of hands holding a broken heart with healing light"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healing Hearts: Self-Care Tips to Help You Recover and Grow After a Breakup
          </h1>
          <p className="text-xl text-gray-600">A science-backed guide to healing and personal growth</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            Breakups are more than just emotional rollercoasters—they can feel like a physical wound. Your chest
            tightens, sleep evades you, and even your favorite foods lose their flavor. But here's the thing: while
            heartbreak is universal, how you navigate it can transform pain into growth. Let's explore science-backed
            strategies to heal, rebuild, and emerge stronger.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Why Breakups Hurt So Much (It's Science!)</h2>
            <p>
              Before diving into solutions, let's normalize the ache. Breakups activate the same brain regions linked to
              physical pain, like the anterior cingulate cortex (Verywell Mind). This explains why "heartache" isn't
              just metaphorical—it can cause fatigue, appetite changes, and even weakened immunity.
            </p>
            <p className="mt-4">
              Psychologically, the loss often triggers a grief-like response, blending sadness, anger, and identity
              confusion (ScienceDaily). Understanding this helps you treat yourself with kindness. You're not
              "overreacting"—your brain and body are processing a seismic shift.
            </p>
          </Card>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Adaptive vs. Maladaptive Coping Strategies</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Adaptive Strategies</TableHead>
                  <TableHead>Maladaptive Strategies</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Acceptance of the breakup</TableCell>
                  <TableCell>Self-punishment or denial</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Seeking social support</TableCell>
                  <TableCell>Isolating yourself</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mindfulness practices</TableCell>
                  <TableCell>Overanalyzing past interactions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Journaling emotions</TableCell>
                  <TableCell>Substance abuse</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2>Self Care After Breakup: Start With the Basics</h2>
          <ul>
            <li>
              <strong>Sleep Like It's Your Job:</strong> Breakups disrupt sleep cycles, but poor rest heightens
              emotional volatility. Prioritize a bedtime routine—think warm tea, no screens, and calming playlists.
            </li>
            <li>
              <strong>Move Your Body:</strong> Exercise releases endorphins, counteracting stress hormones. Even a
              10-minute walk helps.
            </li>
            <li>
              <strong>Nourish Yourself:</strong> Loss often kills appetite, but steady blood sugar stabilizes mood. Opt
              for easy, nutrient-rich snacks like nuts or smoothies.
            </li>
          </ul>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Post-Breakup Growth: How Pain Fuels Reinvention</h2>
            <p>According to the CHIME framework, recovery hinges on:</p>
            <ul className="mt-4">
              <li>Connectedness (leaning on friends)</li>
              <li>Hope (believing in future joy)</li>
              <li>Identity (redefining who you are)</li>
              <li>Meaning (finding lessons in the loss)</li>
              <li>Empowerment (taking actionable steps)</li>
            </ul>
          </Card>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">Mindfulness for Heartbreak: Rewire Your Brain</h2>
            <p>
              Try this: Sit quietly, focus on your breath, and label thoughts as they arise ("remembering,"
              "regretting," "planning"). This creates mental space to choose how you respond.
            </p>
          </div>

          <h2>Your Healing Action Plan</h2>
          <ol>
            <li>Create a "No Contact" Rule: Blocking your ex speeds up detachment.</li>
            <li>Design a Self-Care Menu: List 5–I understand. I'll continue the text stream from the cut-off point, maintaining coherence and consistency with the previous content. Here's the continuation:

speeds up detachment.</li>
            <li>Design a Self-Care Menu: List 5–10 activities that soothe you.</li>
            <li>Set Micro-Goals: "Today, I'll cook one meal" or "I'll text one friend."</li>
            <li>Practice self-compassion through daily affirmations.</li>
            <li>Engage in creative expression to process emotions.</li>
          </ol>

          <div className="bg-rose-50 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">The Light Ahead</h2>
            <p>
              Heartbreak isn't a detour; it's part of the journey. As you practice these strategies, you'll notice
              shifts: fewer tearful mornings, more moments of clarity. You'll start trusting your strength.
            </p>
            <p className="mt-4">
              Remember, healing isn't about erasing the past. It's about building a future where you're whole, with or
              without a partner.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Share Your Journey</h3>
            <p>Which healing tip resonates most with you? Share in the comments below—we're all in this together. 💛</p>
          </div>
        </div>
      </article>
    </div>
  )
}

