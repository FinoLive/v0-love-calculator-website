import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RebuildingTrustPost() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/an-illustration-of-a-couple-sitting-on-a_izEDvNOdQTKfBtonjWAM5g_1VW1z8qjRuSfEMQa02Gphw-m5cz7wlMA11T9edD3oUPzYqLRDrO4J.jpeg"
            alt="Illustration of a couple sitting on a bench with a heart puzzle above them"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rebuilding Trust: A Step-by-Step Guide to Overcoming Trust Issues in Your Relationship
          </h1>
          <p className="text-xl text-gray-600">A comprehensive guide to healing and strengthening your bond</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            Trust is like a vase—once broken, it can feel impossible to piece back together. But here's the good news:
            it's not. Whether you're recovering from infidelity, dishonesty, or repeated letdowns, trust can be rebuilt
            with patience, effort, and the right strategies. In this guide, we'll walk through actionable steps backed
            by research to help you heal your relationship and create a stronger foundation.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Trust Repair: Why Your Relationship History Matters</h2>
            <p>
              You might assume that newer relationships recover faster from trust breaches, but research flips this idea
              on its head. Studies using trust-honor games found that couples with a longer history of positive
              interactions before a breach had a 79% success rate in rebuilding trust, compared to just 63% for
              early-stage relationships (PMC).
            </p>
            <p className="mt-4">
              Neuroimaging data adds another layer: later trust breaches activate automatic social cognition—think of it
              as your brain's autopilot relying on past positive patterns. Early breaches, though, require more
              deliberate effort to repair.
            </p>
          </Card>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Quick Comparison: Early vs. Established Relationships</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>Early-Stage Relationships</TableHead>
                  <TableHead>Established Relationships</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Trust Repair Success Rate</TableCell>
                  <TableCell>63%</TableCell>
                  <TableCell>79%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brain Response</TableCell>
                  <TableCell>Controlled, effortful processing</TableCell>
                  <TableCell>Automatic, habitual processing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Key Strategy</TableCell>
                  <TableCell>Build new positive memories</TableCell>
                  <TableCell>Leverage existing emotional bonds</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Rebuilding Trust Guide: Start with Open Communication</h2>
            <p>
              Let's get real: how you talk about trust issues matters more than what you say. Blame, accusations, or
              "you always…" statements shut down dialogue. Instead, relationship experts recommend starting with
              curiosity:
            </p>
            <ul className="mt-4">
              <li>"I feel uneasy about ___, and I'd like to understand your perspective."</li>
              <li>"Can we talk about what happened without judgment?"</li>
            </ul>
          </Card>

          <h2>Overcome Trust Issues by Being Consistent</h2>
          <p>
            Words are meaningless without action. If you promise to be home by 7 PM, do it. If you commit to
            transparency with your phone, follow through. Consistency rebuilds trust because it replaces doubt with
            predictability.
          </p>
          <p>
            A study highlighted by The Sun found that partners who demonstrated reliable behavior over 3-6 months
            reported a 45% drop in suspicion. Small, repeated actions—like texting when you'll be late—signal
            accountability.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Relationship Trust Recovery Requires Apology and Reflection</h2>
            <p>"I'm sorry" isn't enough. A meaningful apology includes:</p>
            <ul className="mt-4">
              <li>
                <strong>Acknowledgment:</strong> "I hurt you, and I take responsibility."
              </li>
              <li>
                <strong>Remorse:</strong> "I feel terrible about how this affected you."
              </li>
              <li>
                <strong>Change:</strong> "Here's what I'm doing to ensure it doesn't happen again."
              </li>
            </ul>
          </Card>

          <h2>Healing Relationship Trust Through Shared Experiences</h2>
          <p>Positive new memories dilute the pain of past breaches. Try:</p>
          <ul>
            <li>Cooking a meal together</li>
            <li>Taking a weekend hike</li>
            <li>Reviving a hobby you both love</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">Trust Rebuilding Steps: Take It Slow</h2>
            <p>
              Rushing the process backfires. Trust grows in layers, like a tree adding rings. A longitudinal study found
              that couples who allowed 6-12 months for recovery had more durable trust than those who "forced"
              resolution in weeks.
            </p>
            <div className="mt-4">
              <strong>Tips for pacing:</strong>
              <ul>
                <li>Celebrate small wins (e.g., "Thank you for being honest about that call.")</li>
                <li>Avoid interrogations; ask instead, "Are you comfortable sharing…?"</li>
              </ul>
            </div>
          </div>

          <h2>Repairing Broken Trust with Professional Support</h2>
          <p>Sometimes, DIY isn't enough. Therapists provide tools to:</p>
          <ul>
            <li>Identify root causes (e.g., past trauma, communication gaps)</li>
            <li>Navigate triggers without escalation</li>
          </ul>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Relationship Trust Issues: When to Seek Help</h2>
            <p>Consider therapy if:</p>
            <ul className="mt-4">
              <li>The issue involves addiction or abuse</li>
              <li>Resentment persists after 6+ months of effort</li>
              <li>You're stuck in a cycle of blame/withdrawal</li>
            </ul>
          </Card>

          <h2>Step-by-Step Trust Rebuilding: Putting It All Together</h2>
          <ol>
            <li>Communicate openly (no blame, lots of listening).</li>
            <li>Act consistently to rebuild predictability.</li>
            <li>Apologize meaningfully and show change.</li>
            <li>Create joy through shared activities.</li>
            <li>Be patient—trust takes time.</li>
          </ol>

          <div className="bg-rose-50 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">Rebuilding Trust Research: Key Takeaways</h2>
            <ul>
              <li>History helps: Lean on past positives.</li>
              <li>Actions &gt; words: Consistency is king.</li>
              <li>Slow and steady wins: Rushing stalls progress.</li>
            </ul>
            <p className="mt-4">
              Trust isn't rebuilt in a day, but with intention, it's absolutely possible. Remember: the vase, once
              repaired, often becomes more beautiful for its cracks.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Join the Conversation</h3>
            <p>Got questions or need personalized advice? Drop a comment below—we're here to help! 🌱</p>
          </div>
        </div>
      </article>
    </div>
  )
}

