"use client"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

function FaQsection() {
  return (
    <section id='faq'>
      <div className="bg-[#F8F5F0] h-full flex flex-col justify-center p-8 sm:p-12 md:p-20">
        <div className='flex items-baseline gap-2'>
          <h1 className='text-[#d1b895] font-playfair text-[48px] md:text-[54px] lg:text-[64px] font-bold'>Perguntas</h1> <span className='text-[#4e4231] font-playfair text-[28px] md:text-[34px] lg:text-[44px] font-bold'>Frequentes</span>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className='decoration-accent cursor-pointer'>
              O que é um Cardápio QR e como ele funciona?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Um Cardápio QR permite que os clientes escaneiem um código QR usando a própria câmera do celular e visualizem instantaneamente o menu do seu restaurante online — sem precisar baixar nenhum aplicativo.
              </p>
              <p>
                Uma vez escaneado, o cardápio abre direto no navegador do smartphone, onde o cliente pode navegar pelos produtos, preços, descrições e ver atualizações em tempo real.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className='decoration-accent cursor-pointer'>
              Os clientes precisam instalar algum aplicativo?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Não. Os clientes acessam o cardápio de forma direta e limpa através do navegador móvel, apenas apontando a câmera para o código QR.
              </p>
              <p>
                Isso torna a experiência de atendimento extremamente rápida, simples e acessível para qualquer tipo de smartphone.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className='decoration-accent cursor-pointer'>
              Posso atualizar o meu cardápio quando quiser?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Sim. Você pode alterar produtos, preços, fotos, disponibilidade e categorias a qualquer momento do dia direto pelo seu painel de controle administrativo.
              </p>
              <p>
                Todas as alterações são refletidas de forma instantânea no cardápio que o cliente visualiza, eliminando totalmente a necessidade de reimprimir códigos ou papéis.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className='decoration-accent cursor-pointer'>
              O Cardápio QR é indicado para qual tipo de estabelecimento?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Com certeza. O sistema funciona perfeitamente para restaurantes, cafés, bares, lanchonetes, praças de alimentação, hotéis e dark kitchens (modelos focados apenas em delivery).
              </p>
              <p>
                Ele é o aliado ideal para reduzir custos operacionais com impressões gráficas, otimizar o tempo dos garçons e modernizar o atendimento.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaQsection
