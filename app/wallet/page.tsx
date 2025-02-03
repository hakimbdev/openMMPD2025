import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { TonConnect } from "@/components/wallet/ton-connect"

export default function Wallet() {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold mt-8 mb-6">Wallet</h1>
        <p className="text-lg mb-6">Manage your TON wallet and token holdings.</p>
        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-2xl font-bold">1,234.56 TON</p>
        </div>
        <TonConnect />
      </main>

      <Navigation />
    </div>
  )
}

