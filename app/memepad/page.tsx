import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { TokenList } from "@/components/tokens/token-list"

export default function Memepad() {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold mt-8 mb-6">Memepad</h1>
        <p className="text-lg mb-6">Explore and trade the latest meme tokens on TON blockchain.</p>
        <TokenList />
      </main>

      <Navigation />
    </div>
  )
}

