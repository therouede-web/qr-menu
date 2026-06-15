"use client"

import { useAppDispatch, useAppSelector } from "@/hook/redux"
import { CheckOutItems, syncCartToCheckOut } from "@/store/reducer/checkout"
import React from "react"
import CheckOutItem from "./CheckOutItem"
import { GET_PAYMENT_ORDER, POST_PAYMENT_VERIFY } from "@/utils/APIConstant"
import { ApiResponse } from "@/utils/api"
import { Orders } from "razorpay/dist/types/orders"
import { getApi, postApi } from "@/utils/common"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import autoTable from "jspdf-autotable"
import jsPDF from "jspdf"

export type RazorpayOrder = {
  id: string
  amount: number
  currency: string
}

function CheckoutPage({ merchantId }: { merchantId: string }) {
  const checkout: CheckOutItems[] = useAppSelector(state => state.checkOut)
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlePay = async () => {
    const res = await getApi<ApiResponse<RazorpayOrder>>({
      url: GET_PAYMENT_ORDER + `?mid=${merchantId}`,
    })

    if (!res?.success || !res.data) return

    if (!(window as any).Razorpay) {
      toast.error("O sistema de pagamento não foi carregado")
      return
    }

    const order = res.data

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: "BRL",
      name: "App Midas",
      image: "https://res.cloudinary.com/dcyn3ewpv/image/upload/v1769262410/e9eec5ed9a883498f7c5ba1ed3c27fdc_idvihd.jpg",
      description: "Seu pedido está sendo processado",
      order_id: order.id,
      handler: async function (response: any) {

        await handleLogPayment(response)

        generateReceiptPDF({
          ...response,
          amount: order.amount,
          order
        })
      },
      theme: {
        color: "#16a34a",
      },
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()

  }

  const generateReceiptPDF = (payment: any) => {

    const doc = new jsPDF()

    const pageWidth = doc.internal.pageSize.width

    // Header
    doc.setFont("times", "bold")
    doc.setFontSize(22)
    doc.text("Comprovante de Pedido - App Midas", pageWidth / 2, 20, { align: "center" })

    doc.setFontSize(12)
    doc.text(`Data: ${new Date().toLocaleString('pt-BR')}`, 14, 35)

    autoTable(doc, {
      startY: 45,
      head: [["Campo", "Detalhes"]],
      body: [
        ["ID do Pagamento", payment.razorpay_payment_id],
        ["ID do Pedido", payment.razorpay_order_id],
        ["Estabelecimento", payment.order?.notes?.merchant || "App Midas"],
        ["E-mail", payment.order?.notes?.email || "Não informado"],
        ["Valor Total", `R$ ${(payment.amount / 100 || "—")}`],
        ["Status", "SUCESSO / CONCLUÍDO"],
      ],
      theme: "grid"
    })

    doc.save(`comprovante-${payment.razorpay_payment_id}.pdf`)
  }

  const handleLogPayment = async (req: any) => {
    const result = await postApi<ApiResponse<void>>({
      url: POST_PAYMENT_VERIFY,
      values: req
    })

    if (result?.success) {
      router.back();
    }
  }


  React.useEffect(() => {
    dispatch(syncCartToCheckOut({ dispatch: dispatch }));
  }, [])

  if (checkout.length === 0) {
    return (
      <div className="px-6 pt-20 text-center text-gray-500">
        Seu carrinho está vazio
      </div>
    )
  }

  const originalTotal = checkout.reduce(
    (sum, item) =>
      sum +
      (item.originalPrice ?? item.price) * item.itemCount,
    0
  )

  const discountedTotal = checkout.reduce(
    (sum, item) => sum + item.price * item.itemCount,
    0
  )

  const savings = originalTotal - discountedTotal

  return (
    <div className="relative min-h-screen bg-gray-50 px-6 pt-20">

      <h1 className="mb-4 font-mono text-2xl text-zinc-950">
        Finalizar Pedido
      </h1>

      {/* Items */}
      <div className="mb-32 flex flex-col gap-3">
        {checkout.map((item) => (
          <CheckOutItem key={String(item._id)} item={item} />
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white px-6 py-4 shadow-lg">

        <div className="mb-3 space-y-1 text-sm">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal dos itens</span>
            <span className="line-through">R$ {originalTotal}</span>
          </div>

          <div className="flex justify-between font-medium text-green-600">
            <span>Desconto exclusivo</span>
            <span>R$ {discountedTotal}</span>
          </div>

          {savings > 0 && (
            <div className="flex justify-between text-xs text-green-600">
              <span>Você economizou</span>
              <span>R$ {savings}</span>
            </div>
          )}
        </div>

        <button onClick={handlePay} className="w-full cursor-pointer rounded-xl bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-700 transition">
          Confirmar Pedido • R$ {discountedTotal}
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
