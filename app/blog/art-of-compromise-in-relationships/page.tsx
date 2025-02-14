import Image from "next/image"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HealthyBoundariesPost() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-sy0l6h0rdAuCMKuX7hyfjldBiy34cL.jpeg"
            alt="Illustration of a couple setting healthy boundaries in their relationship"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Set Healthy Boundaries in a New Relationship for Long-Term Success
          </h1>
          <p className="text-xl text-gray-600">Creating mutual respect and clarity for a stronger connection</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            We've all been there: that giddy, butterflies-in-your-stomach phase of a new relationship where everything
            feels exciting and possible. But amid the late-night texts and weekend adventures, there's something crucial
            many of us overlook—setting healthy boundaries. Think of boundaries as the invisible guardrails that keep
            your relationship (and your sanity) on track. They're not about building walls; they're about creating
            mutual respect, clarity, and space for both partners to thrive.
          </p>

          <p>
            Let's dive into why boundaries matter, how to set them without killing the vibe, and why they're your secret
            weapon for long-term success.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Why Healthy Boundaries in a New Relationship Are Non-Negotiable</h2>
            <p>
              Boundaries get a bad rap for sounding rigid or unromantic, but research shows they're anything but.
              According to a YouGov survey, 57% of U.S. adults believe setting personal boundaries in romantic
              relationships is "very important." Why? Because boundaries lay the groundwork for mutual respect and
              prevent resentment from festering.
            </p>
            <p className="mt-4">
              Imagine this: You're a people-pleaser who says "yes" to every date night, even when you're exhausted. Your
              partner, meanwhile, assumes you're always up for spontaneous plans. Without boundaries, you'll eventually
              hit a wall of burnout, and they'll feel blindsided by your frustration. Setting limits early helps align
              expectations and fosters trust.
            </p>
          </Card>

          <h2>Setting Boundaries Dating: Where to Start?</h2>
          <p>
            Boundaries aren't one-size-fits-all. They can cover emotional needs, personal time, physical touch, or even
            digital habits (looking at you, 2 a.m. Instagram DMs). A Marriage.com article highlights 17 practical
            strategies, like scheduling alone time and discussing intimacy preferences.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Common Boundaries and Their Benefits</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Boundary Type</TableHead>
                  <TableHead>What It Looks Like</TableHead>
                  <TableHead>Why It Matters</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Emotional</TableCell>
                  <TableCell>"I need space to process my feelings before we talk."</TableCell>
                  <TableCell>Prevents overwhelm and promotes self-awareness.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Time/Personal Space</TableCell>
                  <TableCell>"I reserve Sundays for family and self-care."</TableCell>
                  <TableCell>Maintains individuality and reduces burnout.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Physical/Digital</TableCell>
                  <TableCell>"Let's keep phones away during meals."</TableCell>
                  <TableCell>Encourages presence and deeper connection.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <p>
            Start small. For example, say, "I love spending time with you, but I need one night a week to recharge
            alone." This frames the boundary as a positive choice, not a rejection.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">The Role of Assertive Communication in Dating</h2>
            <p>
              Assertiveness isn't about being harsh—it's about clarity and respect. A Verywell Mind study found that
              people who practice saying "no" to non-essential requests feel more empowered and less stressed. In
              relationships, this translates to phrases like:
            </p>
            <ul className="mt-4">
              <li>"I'm not comfortable with that. Here's why…"</li>
              <li>"I'd prefer we split the bill tonight."</li>
            </ul>
            <p className="mt-4">
              Avoid passive-aggressive hints ("I guess I'll just cancel my plans… again") or aggressive demands ("You
              never listen!"). Instead, use "I" statements: "I feel overwhelmed when plans change last minute. Can we
              stick to a schedule?"
            </p>
          </Card>

          <h2>Personal Autonomy in Dating: Keeping Your Identity Intact</h2>
          <p>
            Losing yourself in a new relationship is easier than you think. The Healthy Boundaries Relationship Model
            explains that boundaries rooted in your values protect your well-being and the relationship. For example:
          </p>
          <ul>
            <li>Keep up with hobbies or friendships outside the relationship.</li>
            <li>Maintain your personal goals and career aspirations.</li>
            <li>Honor your need for alone time and self-reflection.</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">Setting Digital Boundaries</h2>
            <p>In today's connected world, digital boundaries are essential:</p>
            <ul>
              <li>Discuss expectations around social media sharing</li>
              <li>Set guidelines for response times to messages</li>
              <li>Agree on privacy settings and photo sharing</li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">Key Takeaways for Healthy Boundaries</h2>
            <ul>
              <li>Start early: Set precedents in the honeymoon phase</li>
              <li>Be clear: Express needs without apologizing</li>
              <li>Stay flexible: Boundaries can evolve as your relationship grows</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <p>
              What boundaries have helped strengthen your relationships? Share your insights in the comments below! 💕
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

