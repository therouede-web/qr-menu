"use client";
import React from 'react';

export default function Menu() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">
          Lellis Trattoria
        </h1>
        <p className="text-center text-zinc-400 mb-10">
          Cardápio Digital • Alameda Campinas, São Paulo
        </p>

        {/* Entradas */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-orange-400 pb-2">Entradas</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Bruschetta Clássica</h3>
                <span className="text-orange-400">R$ 28</span>
              </div>
              <p className="text-zinc-400 text-sm">Tomate, manjericão, azeite e parmesão</p>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Carpaccio de Filé</h3>
                <span className="text-orange-400">R$ 42</span>
              </div>
              <p className="text-zinc-400 text-sm">Molho mostarda e rúcula</p>
            </div>
          </div>
        </section>

        {/* Massas */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-orange-400 pb-2">Massas</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Spaghetti Carbonara</h3>
                <span className="text-orange-400">R$ 52</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Fettuccine Alfredo</h3>
                <span className="text-orange-400">R$ 48</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Lasagna alla Bolognese</h3>
                <span className="text-orange-400">R$ 55</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pizzas */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-orange-400 pb-2">Pizzas</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Margherita</h3>
                <span className="text-orange-400">R$ 45</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Quatro Queijos</h3>
                <span className="text-orange-400">R$ 52</span>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-zinc-500 mt-12">
          Obrigado por escolher a Lellis Trattoria 🍝
        </div>
      </div>
    </div>
  );
}
