"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface LaunchOptionsProps {
  onSelect: (option: "with-fee" | "without-fee") => void
}

export function LaunchOptions({ onSelect }: LaunchOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<"with-fee" | "without-fee" | null>(null)

  const handleSelect = () => {
    if (selectedOption) {
      onSelect(selectedOption)
    }
  }

  return (
    <div className="space-y-6">
      <RadioGroup
        value={selectedOption || ""}
        onValueChange={(value) => setSelectedOption(value as "with-fee" | "without-fee")}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="with-fee" id="with-fee" />
          <Label htmlFor="with-fee">Launch with transaction fee (0.1 TON or Telegram Stars)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="without-fee" id="without-fee" />
          <Label htmlFor="without-fee">Launch without transaction fees</Label>
        </div>
      </RadioGroup>
      <Button onClick={handleSelect} disabled={!selectedOption}>
        Continue
      </Button>
    </div>
  )
}

