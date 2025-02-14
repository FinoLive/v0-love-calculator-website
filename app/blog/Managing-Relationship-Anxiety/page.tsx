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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd-7mmdr5Eg4gypyD3afyvhPxQ4Lk5p8a.jpeg"
            alt="Illustration of a couple navigating digital communication in their relationship"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Navigating Love in the Digital Age: How to Manage Relationship Anxiety
          </h1>
          <p className="text-xl text-gray-600">A guide to thriving in love while living online</p>
        </div>

        {/* Content */}
        <div className="prose prose-rose max-w-none">
          <p className="lead">
            Let's face it: modern love is complicated. Between endless texting threads, Instagram stalking, and the
            pressure to share your location 24/7, relationships today come with a side of digital stress that our
            grandparents never had to deal with. You're not alone if you've ever felt your stomach drop when your
            partner leaves you on "read" or wondered why their Snapchat location hasn't budged in hours. Welcome to
            relationship anxiety in the digital era—a mix of old-school insecurities and new-age tech triggers.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">
              Relationship Anxiety Digital Management: Understanding the Landscape
            </h2>
            <p>
              Before we dive into solutions, let's unpack why the digital world fuels relationship anxiety. Apps and
              platforms designed to keep us connected often end up doing the opposite. Constant notifications, passive
              scrolling, and the pressure to perform online can leave us feeling disconnected from our partners—and
              ourselves.
            </p>
            <p className="mt-4">
              For instance, a meta-analysis found that excessive digital media use, especially passive consumption
              (think mindless Instagram scrolling), correlates with higher anxiety levels. When we're glued to screens,
              we're more likely to compare our relationships to curated highlight reels or misinterpret a partner's
              delayed text as disinterest.
            </p>
            <p className="mt-4">
              The key is balance. Digital tools aren't inherently bad for relationships—they become problematic when
              they replace genuine connection or amplify insecurities.
            </p>
          </Card>

          <h2>Managing Digital Relationship Stress: The Role of Phubbing</h2>
          <p>
            Ever been mid-conversation with your partner when they suddenly start scrolling TikTok? That's phubbing
            (phone + snubbing), and it's a major source of modern relationship tension. Research shows that 25% of
            married couples and 42% of unmarried couples report feeling neglected due to their partner's phone
            distraction.
          </p>
          <p>
            Phubbing sends a subtle message: "This screen is more important than you." Over time, it erodes emotional
            intimacy and heightens anxiety. The fix? Practice "device-free zones." Try putting phones away during meals,
            dates, or bedtime routines. Small changes can rebuild presence and trust.
          </p>

          <h2>Digital Communication Anxiety Solutions: Active vs. Passive Use</h2>
          <p>
            Not all screen time is created equal. Studies differentiate between active and passive digital
            communication:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Communication Type</TableHead>
                <TableHead>Behaviors</TableHead>
                <TableHead>Impact on Anxiety</TableHead>
                <TableHead>Action Tip</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Messaging, commenting, sharing</TableCell>
                <TableCell>Reduces loneliness</TableCell>
                <TableCell>Initiate heartfelt chats</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive</TableCell>
                <TableCell>Scrolling, lurking, comparing</TableCell>
                <TableCell>Increases self-doubt</TableCell>
                <TableCell>Limit time on feeds</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="mt-4">
            According to NIH research, passive social media use is linked to higher anxiety, while active engagement
            fosters connection. The takeaway? Be intentional. If you're going online, make it meaningful.
          </p>

          <Card className="my-8 p-6 bg-rose-50/50">
            <h2 className="text-2xl font-bold mb-4">Couples Digital Boundaries: Setting Ground Rules for Tech Use</h2>
            <p>
              Healthy relationships thrive on clear expectations—and that includes tech habits. A Wall Street Journal
              survey found that 21% of people view a partner's refusal to share their location as a deal-breaker (rising
              to 30% for Gen Z). But transparency shouldn't mean surveillance. Work with your partner to set boundaries
              that feel fair:
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Tech-free times: Designate hours (e.g., 7–9 PM) for uninterrupted connection.</li>
              <li>Location sharing: Agree on when/why it's needed (e.g., safety vs. constant monitoring).</li>
              <li>Notification rules: Mute non-urgent apps during quality time.</li>
            </ul>
            <p className="mt-4">
              Couples who set these "digital ground rules" report lower anxiety and higher satisfaction.
            </p>
          </Card>

          <h2>Digital Detox for Relationships: Less Screen Time, More Connection</h2>
          <p>
            Sometimes, the best way to reconnect is to unplug. A Journal of Social and Clinical Psychology study found
            that limiting social media to 10 minutes per platform daily reduced loneliness and depression. Try a weekend
            digital detox:
          </p>
          <ul className="list-disc list-inside">
            <li>Turn off non-essential notifications.</li>
            <li>Store phones in another room during dates.</li>
            <li>Replace scrolling with shared activities (cooking, hiking, etc.).</li>
          </ul>
          <p>You'll likely find that less screen time = more space for joy.</p>

          <h2>Reducing Online Relationship Anxiety Through Mindfulness</h2>
          <p>
            Mindfulness isn't just for meditation—it's a game-changer for digital interactions. Emerging research shows
            that mindfulness apps help users regulate emotions, making them less reactive to ambiguous texts or
            jealousy-inducing posts.
          </p>
          <p>
            Next time you feel anxious after a partner's vague tweet, pause. Ask yourself: Am I reacting to facts or
            fears? Breathe, then communicate openly instead of spiraling.
          </p>

          <div className="bg-rose-50 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">Final Thoughts: Rewriting the Digital Love Story</h2>
            <p>
              Technology isn't going anywhere, but we can redefine its role in our relationships. By setting boundaries,
              engaging actively, and prioritizing real-world moments, we can ease anxiety and nurture deeper bonds.
            </p>
            <p className="mt-4">
              Remember, love in the digital age isn't about perfection—it's about presence. Put down the phone, pick up
              the conversation, and watch your connection grow.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Take Action</h3>
            <p>
              Ready to take the next step? Start with one small change this week. Your relationship (and your sanity)
              will thank you. 💙
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

