import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Cardápio Online <span className="text-orange-500">Inovador</span><br />
          para o seu Restaurante
        </h1>

        <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
          Crie e personalize cardápios digitais. Gere seu próprio QR Code e ofereça 
          aos clientes uma experiência de pedido rápida e conveniente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-10 py-7">
            <Link href="/auth/register">
              Começar Agora
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="text-lg px-10 py-7">
            <Link href="/menu/demo">
              Ver Demonstração
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
