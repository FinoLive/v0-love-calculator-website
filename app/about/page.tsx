import { Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16 space-y-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-rose-600" />
          </div>
          <h1 className="text-4xl font-bold">About Loving True</h1>
          <p className="text-gray-600 text-lg">Helping people find and nurture meaningful relationships since 2024</p>
        </div>
        <div className="prose prose-rose max-w-none">
          <p>
            At Loving True, we believe that understanding compatibility is the foundation of lasting relationships. Our
            platform combines ancient wisdom with modern technology to provide insights into romantic connections.
          </p>
          <h2>Our Mission</h2>
          <p>
            We're dedicated to helping individuals navigate the complex world of relationships by providing tools and
            insights that promote understanding, communication, and connection.
          </p>
          <h2>Our Approach</h2>
          <p>
            Our love calculator and compatibility tools are designed with care, incorporating various factors to provide
            meaningful insights into relationships. While our tools are fun to use, we encourage users to view them as
            conversation starters and supplements to real-world connection.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Authenticity in relationships</li>
            <li>Respect for all individuals</li>
            <li>Privacy and security</li>
            <li>Continuous improvement and innovation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

