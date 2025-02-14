"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
]

export function ZodiacSelector() {
  const [sign1, setSign1] = useState("")
  const [sign2, setSign2] = useState("")
  const [result, setResult] = useState("")

  const calculateCompatibility = () => {
    // This is a placeholder. In a real app, you'd have more complex logic or API calls.
    const compatibility = Math.floor(Math.random() * 100)
    setResult(`The compatibility between ${sign1} and ${sign2} is ${compatibility}%`)
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <Select onValueChange={setSign1}>
          <SelectTrigger>
            <SelectValue placeholder="Select your zodiac sign" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSign2}>
          <SelectTrigger>
            <SelectValue placeholder="Select partner's zodiac sign" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={calculateCompatibility} className="w-full">
        Calculate Compatibility
      </Button>
      {result && <div className="mt-4 p-4 bg-rose-100 rounded-lg text-center">{result}</div>}
    </div>
  )
}

