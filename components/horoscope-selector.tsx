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

export function HoroscopeSelector() {
  const [sign, setSign] = useState("")
  const [horoscope, setHoroscope] = useState("")

  const getHoroscope = () => {
    // This is a placeholder. In a real app, you'd fetch this from an API or database.
    setHoroscope(`Today is a great day for love, ${sign}! Open your heart to new possibilities.`)
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <Select onValueChange={setSign}>
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
      <Button onClick={getHoroscope} className="w-full">
        Get Your Love Horoscope
      </Button>
      {horoscope && <div className="mt-4 p-4 bg-rose-100 rounded-lg text-center">{horoscope}</div>}
    </div>
  )
}

