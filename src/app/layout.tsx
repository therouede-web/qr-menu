// src/components/Footer.tsx - Versão traduzida para Restaurante Italiano

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white font-semibold mb-4">PRODUTO</h3>
          <ul className="space-y-2 text-sm">
            <li>Funcionalidades</li>
            <li>Preços</li>
            <li>Início</li>
            <li>Atualizações</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">EMPRESA</h3>
          <ul className="space-y-2 text-sm">
            <li>Sobre Nós</li>
            <li>Carreiras</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">SUPORTE</h3>
          <ul className="space-y-2 text-sm">
            <li>Perguntas Frequentes</li>
            <li>Política de Privacidade</li>
            <li>Termos de Serviço</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">RESTAURANTE ITALIANO</h3>
          <p className="text-sm">Cardápio digital completo com QR Code.<br />Massas, pizzas, risotos e vinhos.</p>
        </div>
      </div>

      <div className="text-center text-xs text-zinc-500 mt-12">
        © 2026 QR Menu - Todos os direitos reservados
      </div>
    </footer>
  )
}
