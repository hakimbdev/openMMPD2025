import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"

export default function Earn() {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold mt-8 mb-6">Earn</h1>
        <p className="text-lg">Discover ways to earn rewards on the Open Memepad platform.</p>
        {/* Add more content specific to the Earn page */}
      </main>

      <Navigation />
    </div>
  )
}

