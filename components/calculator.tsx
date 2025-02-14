"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart } from "lucide-react"

export function Calculator() {
  const [result, setResult] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    yourName: "",
    yourGender: "male",
    partnerName: "",
    partnerGender: "female",
  })

  const calculateLove = () => {
    // Simple algorithm: sum of ASCII values modulo 100
    const sum = [...formData.yourName, ...formData.partnerName].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100
    setResult(sum)
  }

  return (
    <div className="rounded-lg border p-6 space-y-6 bg-white shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-rose-600">Love Calculator</h2>
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="yourName">Your Name</Label>
            <Input
              id="yourName"
              placeholder="Enter Your Name"
              value={formData.yourName}
              onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
            />
          </div>
          <RadioGroup
            value={formData.yourGender}
            onValueChange={(value) => setFormData({ ...formData, yourGender: value })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="yourGenderMale" />
              <Label htmlFor="yourGenderMale">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="yourGenderFemale" />
              <Label htmlFor="yourGenderFemale">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center justify-center">
          <Heart className="h-12 w-12 text-rose-500" />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="partnerName">Partner's Name</Label>
            <Input
              id="partnerName"
              placeholder="Enter Partner's Name"
              value={formData.partnerName}
              onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
            />
          </div>
          <RadioGroup
            value={formData.partnerGender}
            onValueChange={(value) => setFormData({ ...formData, partnerGender: value })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="partnerGenderMale" />
              <Label htmlFor="partnerGenderMale">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="partnerGenderFemale" />
              <Label htmlFor="partnerGenderFemale">Female</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      {result !== null && (
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-rose-600">{result}%</div>
          <p className="text-gray-600">Love Compatibility Score</p>
        </div>
      )}
      <div className="flex justify-center">
        <Button onClick={calculateLove} className="bg-rose-600 hover:bg-rose-700">
          Calculate Love
        </Button>
      </div>
    </div>
  )
}

