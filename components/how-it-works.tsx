import { Calculator, Heart, Sparkles, Users } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Enter Names",
    description: "Start by entering both your name and your partner's name in the respective fields.",
  },
  {
    icon: Heart,
    title: "Select Gender",
    description: "Choose the gender for both participants to enhance the calculation accuracy.",
  },
  {
    icon: Calculator,
    title: "Calculate",
    description: "Click the calculate button to discover your love compatibility percentage.",
  },
  {
    icon: Sparkles,
    title: "Get Results",
    description: "Receive your detailed compatibility score and relationship insights.",
  },
]

export function HowItWorks() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-rose-600">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our love calculator uses a sophisticated algorithm to analyze name compatibility and provide insights into
          your relationship potential.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-rose-100 rounded-lg transform transition-transform group-hover:scale-105 -z-10" />
            <div className="relative p-6 space-y-4">
              <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center text-white">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

