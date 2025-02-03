"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LaunchToken } from "@/components/token/launch-token"
import { LaunchOptions } from "@/components/token/launch-options"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [launchOption, setLaunchOption] = useState<"with-fee" | "without-fee" | null>(null)

  const handleOptionSelect = (option: "with-fee" | "without-fee") => {
    setLaunchOption(option)
  }

  const resetLaunchProcess = () => {
    setLaunchOption(null)
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white/90 backdrop-blur border-b border-purple-200">
      <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
        Open Memepad
      </Link>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open)
          if (!open) resetLaunchProcess()
        }}
      >
        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">Launch token</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Launch Your Token</DialogTitle>
            <DialogDescription>
              {launchOption === null
                ? "Choose how you'd like to launch your token."
                : "Fill in the details below to launch your new token on the TON blockchain."}
            </DialogDescription>
          </DialogHeader>
          {launchOption === null ? (
            <LaunchOptions onSelect={handleOptionSelect} />
          ) : (
            <LaunchToken launchOption={launchOption} />
          )}
        </DialogContent>
      </Dialog>
    </header>
  )
}

