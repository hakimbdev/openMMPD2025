import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { SpotlightCard } from "@/components/spotlight/spotlight-card"
import { TokenList } from "@/components/tokens/token-list"
import { BuyToken } from "@/components/token/buy-token"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <div className="py-4">
          <div className="text-sm text-gray-400">
            <span className="text-purple-400">UQDY</span> bought 0.01TON of <span className="text-purple-600">TST</span>{" "}
            ~47s ago
          </div>
        </div>

        <section className="py-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🔥 Spotlight</h2>
            <BuyToken />
          </div>
          <SpotlightCard name="BWS" imageUrl="/placeholder.svg" value={217000} holders={879} transactions={10} />
        </section>

        <section className="py-6">
          <TokenList />
        </section>
      </main>

      <Navigation />
    </div>
  )
}

