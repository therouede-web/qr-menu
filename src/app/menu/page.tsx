"use client";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      <div className="max-w-2xl mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">Cardápio Digital</h1>
        <p className="text-center text-orange-400 mb-10">Restaurante • Macastre / Valencia</p>

        {/* Entradas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-orange-500 pb-2">Entradas</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Bruschetta Clássica</h3>
                <p className="text-zinc-400 text-sm">Tomate fresco, manjericão e azeite</p>
              </div>
              <span className="text-orange-400 font-semibold">R$ 28</span>
            </div>
          </div>
        </section>

        {/* Pratos Principais */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-orange-500 pb-2">Pratos Principais</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Espaguete à Carbonara</h3>
                <p className="text-zinc-400 text-sm">Molho cremoso, bacon e queijo</p>
              </div>
              <span className="text-orange-400 font-semibold">R$ 52</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Lasanha à Bolonhesa</h3>
                <p className="text-zinc-400 text-sm">Carne moída, molho e queijos</p>
              </div>
              <span className="text-orange-400 font-semibold">R$ 55</span>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-zinc-500 mt-16">
          Escaneie • Peça • Aproveite
        </div>
      </div>
    </div>
  );
}
