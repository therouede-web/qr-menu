export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
          Cardápio Online <span className="text-orange-500">Inovador</span><br />
          para o seu Restaurante
        </h1>

        <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12">
          Crie e personalize cardápios digitais. Gere seu QR Code e ofereça aos clientes 
          uma experiência rápida e moderna de pedidos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/auth/register" 
            className="bg-orange-600 hover:bg-orange-700 px-10 py-4 rounded-xl text-lg font-semibold transition"
          >
            Começar Agora
          </a>
          
          <a 
            href="/menu/demo" 
            className="border border-white/50 hover:bg-white/10 px-10 py-4 rounded-xl text-lg font-semibold transition"
          >
            Ver Demonstração
          </a>
        </div>
      </div>
    </div>
  );
}
