"use client"

import { Home, Gift, Rocket, Users, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const links = [
  
    { name: "Earn", href: "/earn", icon: Gift },
    { name: "Memepad", href: "/memepad", icon: Rocket },
    { name: "Frens", href: "/frens", icon: Users },
    { name: "Wallet", href: "/wallet", icon: Wallet },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-purple-200">
      <div className="flex justify-around items-center p-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center p-2 rounded-lg ${
                isActive ? "text-purple-600" : "text-purple-400 hover:text-purple-500"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

