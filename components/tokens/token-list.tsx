"use client"

import { useState } from "react"
import Image from "next/image"
import { formatDistance } from "date-fns"

interface Token {
  id: string
  name: string
  imageUrl: string
  holders: number
  transactions: number
  marketCap: number
  launchTime: Date
}

export function TokenList() {
  const [activeTab, setActiveTab] = useState("new")

  const tabs = [
    { id: "new", label: "New" },
    { id: "live", label: "Live" },
    { id: "hot", label: "Hot" },
    { id: "pumps", label: "Recent Pumps" },
  ]

  const tokens: Token[] = [
    {
      id: "1",
      name: "MIRATON",
      imageUrl: "/placeholder.svg",
      holders: 0,
      transactions: 2,
      marketCap: 2000,
      launchTime: new Date(),
    },
    // Add more tokens here
  ]

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 p-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab.id ? "bg-purple-600 text-white" : "text-purple-400 hover:text-purple-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {tokens.map((token) => (
          <div key={token.id} className="flex items-center justify-between p-4 hover:bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Image
                src={token.imageUrl || "/placeholder.svg"}
                alt={token.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium text-purple-600">{token.name}</h3>
                <div className="flex space-x-2 text-sm text-purple-400">
                  <span>👥 {token.holders}</span>
                  <span>🔄 {token.transactions}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-purple-600">MC ${token.marketCap}</div>
              <div className="text-sm text-purple-400">
                {formatDistance(token.launchTime, new Date(), { addSuffix: true })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

