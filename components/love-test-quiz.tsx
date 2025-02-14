"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questions = [
  {
    question: "How often do you and your partner communicate?",
    options: ["Daily", "A few times a week", "Once a week", "Less than once a week"],
  },
  {
    question: "How do you handle disagreements?",
    options: [
      "We discuss calmly",
      "We argue but resolve quickly",
      "We avoid confrontation",
      "We have difficulty resolving conflicts",
    ],
  },
  {
    question: "How aligned are your future goals?",
    options: ["Completely aligned", "Mostly aligned", "Somewhat aligned", "Not aligned at all"],
  },
]

export function LoveTestQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState("")

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const score = newAnswers.reduce((acc, curr) => acc + curr.length, 0)
      setResult(`Based on your answers, your relationship compatibility score is ${score}%`)
    }
  }

  if (result) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Your Result</h2>
        <p>{result}</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
      <RadioGroup onValueChange={handleAnswer}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

