import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

interface SpotlightCardProps {
  name: string
  imageUrl: string
  value: number
  holders: number
  transactions: number
}

export function SpotlightCard({ name, imageUrl, value, holders, transactions }: SpotlightCardProps) {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-b from-purple-100 to-white backdrop-blur shadow-lg">
      <div className="absolute inset-0 bg-grid-purple/5 [mask-image:linear-gradient(0deg,white,transparent)] -z-10" />

      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} width={96} height={96} className="rounded-full" />
        </div>

        <h2 className="text-2xl font-bold text-purple-600">{name}</h2>

        <div className="flex items-center space-x-4 text-sm text-purple-400">
          <div className="flex items-center">
            <span>👥 {holders}</span>
          </div>
          <div className="flex items-center">
            <span>🔄 {transactions}K</span>
          </div>
        </div>

        <div className="text-3xl font-bold text-purple-600">{formatCurrency(value)}</div>
      </div>
    </div>
  )
}

