"use client";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">
          Cardápio Digital
        </h1>
        
        <p className="text-center text-zinc-400 mb-12">
          Escaneie • Peça • Aproveite
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-orange-500 pb-2">Entradas</h2>
            <p className="text-orange-400">Em breve...</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-orange-500 pb-2">Pratos Principais</h2>
            <p className="text-orange-400">Em breve...</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-orange-500 pb-2">Bebidas</h2>
            <p className="text-orange-400">Em breve...</p>
          </div>
        </div>

        <div className="text-center mt-20 text-zinc-500">
          Restaurante em Macastre<br />
          Cardápio Digital via QR Code
        </div>
      </div>
    </div>
  );
}
