"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface LaunchTokenProps {
  launchOption: "with-fee" | "without-fee"
}

export function LaunchToken({ launchOption }: LaunchTokenProps) {
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [totalSupply, setTotalSupply] = useState("")
  const [feeOption, setFeeOption] = useState<"ton" | "stars" | null>(null)

  const handleLaunch = async (e: React.FormEvent) => {
    e.preventDefault()
    // This is a placeholder for the actual token launch logic
    console.log("Launching token:", { tokenName, tokenSymbol, totalSupply, launchOption, feeOption })
    // Implement the actual token launch logic here
  }

  return (
    <form onSubmit={handleLaunch} className="space-y-4">
      <div>
        <Label htmlFor="tokenName">Token Name</Label>
        <Input id="tokenName" value={tokenName} onChange={(e) => setTokenName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="tokenSymbol">Token Symbol</Label>
        <Input id="tokenSymbol" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="totalSupply">Total Supply</Label>
        <Input
          id="totalSupply"
          type="number"
          value={totalSupply}
          onChange={(e) => setTotalSupply(e.target.value)}
          required
        />
      </div>
      {launchOption === "with-fee" && (
        <div>
          <Label>Fee Payment Option</Label>
          <RadioGroup value={feeOption || ""} onValueChange={(value) => setFeeOption(value as "ton" | "stars")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ton" id="ton" />
              <Label htmlFor="ton">0.1 TON</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="stars" id="stars" />
              <Label htmlFor="stars">Telegram Stars</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      <Button type="submit">Launch Token</Button>
    </form>
  )
}

