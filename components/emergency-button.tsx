"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, MessageCircle, AlertTriangle, X } from "lucide-react"

export function EmergencyButton() {
  const [showEmergency, setShowEmergency] = useState(false)

  return (
    <>
      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowEmergency(true)}
          className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transition-all duration-200 p-0"
          title="Ajuda de Emergência"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Emergency Modal */}
      <Dialog open={showEmergency} onOpenChange={setShowEmergency}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <DialogTitle className="text-red-800">Ajuda de Emergência</DialogTitle>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowEmergency(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription>Se você está em perigo imediato, escolha uma das opções abaixo:</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Emergency Services */}
            <div className="space-y-3">
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white h-12"
                onClick={() => window.open("tel:190", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Polícia Militar - 190
              </Button>

              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white h-12"
                onClick={() => window.open("tel:180", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Central de Atendimento à Mulher - 180
              </Button>
            </div>

            {/* Platform Emergency Contacts */}
            <div className="border-t pt-4 space-y-3">
              <p className="text-sm font-medium text-gray-700">Contatos da Plataforma:</p>

              <Button
                variant="outline"
                className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 h-12 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat de Emergência 24h
              </Button>

              <Button
                variant="outline"
                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 h-12 bg-transparent"
                onClick={() => window.open("tel:+5511999999999", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Linha Direta - (11) 99999-9999
              </Button>
            </div>

            {/* Safety Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-800">
                <strong>Dica de Segurança:</strong> Se não for seguro falar, use o chat ou envie uma mensagem. Mantenha
                este site aberto em uma aba discreta.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
