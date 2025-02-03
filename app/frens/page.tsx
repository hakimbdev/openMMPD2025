import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"

export default function Frens() {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold mt-8 mb-6">Frens</h1>
        <p className="text-lg">Connect with other meme token enthusiasts and traders.</p>
        {/* Add more content specific to the Frens page, like a list of users or communities */}
      </main>

      <Navigation />
    </div>
  )
}

