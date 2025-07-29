"use client"

import { useState } from "react"
import { NotificationService } from "@/lib/notification-service"
import type { SafeAccessModalProps } from "@/types/safe-access-modal-props"
import { generateCode } from "@/lib/code-generator"

export function SafeAccessModalReal({ open, onOpenChange, onAccessGranted }: SafeAccessModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [contactMethod, setContactMethod] = useState("email")
  const [code, setCode] = useState("")
  const [step, setStep] = useState(1)

  const handleRequestCode = async () => {
    if (!contactInfo) {
      setError("Por favor, preencha seu " + (contactMethod === "email" ? "email" : "telefone"))
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Gera código único
      const newCode = generateCode()

      // Salva no banco de dados com expiração
      await fetch("/api/save-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: contactInfo,
          code: newCode,
          method: contactMethod,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutos
        }),
      })

      // Envia o código
      let success = false
      if (contactMethod === "email") {
        success = await NotificationService.sendEmailCode(contactInfo, newCode)
      } else {
        success = await NotificationService.sendSMSCode(contactInfo, newCode)
      }

      if (success) {
        setStep(2)
      } else {
        setError("Erro ao enviar código. Tente novamente.")
      }
    } catch (error) {
      setError("Erro interno. Tente novamente mais tarde.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCodeSubmit = async () => {
    try {
      // Verifica código no backend
      const response = await fetch("/api/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: contactInfo,
          code: code,
        }),
      })

      const result = await response.json()

      if (result.valid) {
        setStep(3)
      } else {
        setError("Código inválido ou expirado.")
      }
    } catch (error) {
      setError("Erro ao verificar código.")
    }
  }

}
